import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {

  
  return {
    messages: (await import(`@repo/core/common/i18n/messages/${locale}.json`)).default,
  };
});
