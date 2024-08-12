'use client';

import { useContext } from 'react';
import { SiteContext } from '../providers';

export const useSiteContext = () => {
  const { siteContext, setSiteContext } = useContext(SiteContext);

  if (!siteContext) {
    throw new Error('useSiteContext hook must be used within a SiteContextProvider');
  }

  return { siteContext, setSiteContext };
};
