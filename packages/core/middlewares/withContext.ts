import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server';
import { SiteContextConfig, SiteContextModel, SITE_CONTEXT_CONFIG_COOKIE_KEY, SITE_CONTEXT_COOKIE_KEY } from '../common';
import { getSiteContextConfig, getSiteContextFromConfig } from '../server';
import { urlIncludeContextParams ,urlExtractContextParams } from '../common'

const REDIRECTED_COOKIE_KEY = 'next-redirected';
const handleRedirectedCookie = (): NextResponse => {
    const response = NextResponse.next();
    response.cookies.delete(REDIRECTED_COOKIE_KEY);
    return response;
  };
  const resolveSiteContextConfig = async (request: NextRequest) => {
    const contextConfigFromCookie = request.cookies.get(SITE_CONTEXT_CONFIG_COOKIE_KEY)?.value;
    return contextConfigFromCookie
      ? JSON.parse(contextConfigFromCookie)
      : await getSiteContextConfig(request.url);
  };
  const resolveSiteContext = (
    request: NextRequest,
    siteContextConfig: SiteContextConfig,
    siteContextFromUrl: SiteContextModel,
  ) => {
    const defaultSiteContext = getSiteContextFromConfig(siteContextConfig);
    const siteContextCookieValue = request.cookies.get(SITE_CONTEXT_COOKIE_KEY)?.value;
    const siteContextFromCookie = siteContextCookieValue ? JSON.parse(siteContextCookieValue) : {};
  
    return {
      ...defaultSiteContext,
      ...siteContextFromCookie,
      ...siteContextFromUrl,
    };
  };
  const responseWithRedirect = (finalUrl: URL) => {
    const response = NextResponse.redirect(finalUrl);
    response.cookies.set(REDIRECTED_COOKIE_KEY, 'true');
    return response;
  };
  const responseWithModifiedRequest = (
    request: NextRequest,
    siteContextConfig: SiteContextConfig,
    siteContext: SiteContextModel,
  ) => {
    request.cookies.set(SITE_CONTEXT_CONFIG_COOKIE_KEY, JSON.stringify(siteContextConfig));
    request.cookies.set(SITE_CONTEXT_COOKIE_KEY, JSON.stringify(siteContext));
    return NextResponse.next({ request });
  };
  const resolveResponse = (
    finalUrl: URL,
    request: NextRequest,
    siteContextConfig: SiteContextConfig,
    siteContext: SiteContextModel,
  ): NextResponse => {
    const response =
      finalUrl.toString() === request.url
        ? responseWithModifiedRequest(request, siteContextConfig, siteContext)
        : responseWithRedirect(finalUrl);
  
    setResponseCookies(request, response, siteContextConfig, siteContext);
    return response;
  };
  const setResponseCookies = (
    request: NextRequest,
    response: NextResponse,
    siteContextConfig: SiteContextConfig,
    siteContext: SiteContextModel,
  ) => {
    const hasSiteContextConfigCookie = request.cookies.has(SITE_CONTEXT_CONFIG_COOKIE_KEY);
    if (!hasSiteContextConfigCookie) {
      const oneDay = 24 * 60 * 60;
      response.cookies.set({
        name: SITE_CONTEXT_CONFIG_COOKIE_KEY,
        value: JSON.stringify(siteContextConfig),
        maxAge: oneDay,
        httpOnly: true,
      });
    }
  
    response.cookies.set({
      name: SITE_CONTEXT_COOKIE_KEY,
      value: JSON.stringify(siteContext),
      httpOnly: true,
    });
  };
export const withContext: any = (middleware: NextMiddleware) => {
    return async (request: NextRequest, event: NextFetchEvent) => {
      await middleware(request, event);
  
      if (request.cookies.has(REDIRECTED_COOKIE_KEY)) return handleRedirectedCookie();
  
      const siteContextConfig = await resolveSiteContextConfig(request);
      const { url, siteContextParams } = urlExtractContextParams(request.nextUrl, siteContextConfig);
      const siteContext = resolveSiteContext(request, siteContextConfig, siteContextParams);
      const urlWithContext = urlIncludeContextParams({
        url,
        siteContext,
        siteContextParams,
        urlEncodingParameters: siteContextConfig.urlParameters,
      });
  
      return resolveResponse(urlWithContext, request, siteContextConfig, siteContext);
    };
  };