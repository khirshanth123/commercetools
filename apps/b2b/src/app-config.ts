import {
    AppConfig,
    BASE_SITE_CONTEXT_ID,
    CURRENCY_CONTEXT_ID,
    LANGUAGE_CONTEXT_ID,
  } from '@repo/core';


export const appConfig: AppConfig = {
    siteContextConfig: {
      baseSite: ['perficientpowertools'],
      language: ['en', 'es'],
      currency: ['USD'],
      urlParameters: [BASE_SITE_CONTEXT_ID, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID],
    },
  };