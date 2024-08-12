import { cookies } from 'next/headers';
import {
    BASE_SITE_CONTEXT_ID,
    SITE_CONTEXT_CONFIG_COOKIE_KEY,
    SITE_CONTEXT_COOKIE_KEY,
    SiteContextConfig,
    SiteContextModel,
    getAppConfig
  } from '../../common';



export const getServerSiteContext = async (): Promise<SiteContextModel> => {
    const siteContextValueString = cookies().get(SITE_CONTEXT_COOKIE_KEY)?.value;
    const siteContextConfigString = cookies().get(SITE_CONTEXT_CONFIG_COOKIE_KEY)?.value;
  
    if (!siteContextValueString || !siteContextConfigString)
      throw new Error('Error getting context. Cannot read context from cookies!');
  
    const siteContextValue = JSON.parse(siteContextValueString);
    const siteContextConfig = JSON.parse(siteContextConfigString);
  
    return { ...siteContextValue, config: siteContextConfig };
  };

  export const getSiteContextConfig = async (currentUrl: string): Promise<SiteContextConfig> => {
    const { siteContextConfig } = await getAppConfig();
    if (siteContextConfig?.baseSite) return siteContextConfig;
  
    // const resolvedConfig = await resolveConfig(currentUrl);
    return { ...siteContextConfig };
  };
  
  export const getSiteContextFromConfig = (
    siteContextConfig: SiteContextConfig,
  ): SiteContextModel => {
    if (!siteContextConfig) return;
  
    return {
      baseSite: siteContextConfig.baseSite[0],
      language: siteContextConfig.language[0],
      currency: siteContextConfig.currency[0],
    };
  };