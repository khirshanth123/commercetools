import {
    BASE_SITE_CONTEXT_ID,
    CURRENCY_CONTEXT_ID,
    LANGUAGE_CONTEXT_ID,
} from "@commercetools-next/core"



export const appConfig = {
    siteContextConfig: {
      baseSite: ['perficientpowertools'],
      language: ['en', 'es'],
      currency: ['USD'],
      urlParameters: [BASE_SITE_CONTEXT_ID, LANGUAGE_CONTEXT_ID, CURRENCY_CONTEXT_ID],
    },
  };
  