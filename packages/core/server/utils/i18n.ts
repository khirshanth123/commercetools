import { unstable_setRequestLocale } from 'next-intl/server';
import { getServerSiteContext } from '../site-context';

export const setRequestLocale = async (locale?: string) => {
  const resolvedLocale = locale ?? (await getServerSiteContext()).language;
  unstable_setRequestLocale(resolvedLocale);
};
