import { SiteContextConfig, SiteContextModel } from '../models';

/**
 * Prepends the current values of the site context parameters to the given URL.
 */
export const urlIncludeContextParams = ({
  url,
  siteContext,
  siteContextParams = {},
  urlEncodingParameters = [],
}: {
  url: URL;
  siteContext: SiteContextModel;
  siteContextParams?: SiteContextModel;
  urlEncodingParameters?: string[];
}): URL => {
  const contextUrlSegments = urlEncodingParameters
    .map((param) => siteContextParams[param] ?? siteContext[param])
    .join('/');

  return new URL(contextUrlSegments + url.pathname + url.search, url.origin);
};

/**
 * Recognizes the site context parameters encoded in the prefix segments of the given URL.
 *
 * It returns the recognized site context params as well as the
 * URL shortened by the recognized params.
 */
export const urlExtractContextParams = (
  url: URL,
  siteContextConfig: SiteContextConfig,
): {
  url: URL;
  siteContextParams: SiteContextModel;
} => {
  const segments = (url.pathname?.split('/') ?? []).filter((segment) => !!segment);
  const urlEncodingParameters: string[] = siteContextConfig?.urlParameters || [];
  const siteContextParams: SiteContextModel = {};
  let paramId = 0;
  let segmentId = 0;

  while (paramId < urlEncodingParameters.length && segmentId < segments.length) {
    const paramName = urlEncodingParameters[paramId];
    const paramValues = (siteContextConfig && siteContextConfig[paramName]) || [];

    if (paramValues.includes(segments[segmentId])) {
      siteContextParams[paramName] = segments[segmentId];
      segmentId++;
    }
    paramId++;
  }

  const urlWithoutContext = new URL(segments.slice(segmentId).join('/') + url.search, url.origin);
  return { url: urlWithoutContext, siteContextParams };
};
