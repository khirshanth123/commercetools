'use client';

import React, { Dispatch, SetStateAction, createContext, useState } from 'react';
import { SiteContextModel } from '../../common';

export interface SiteContextValue {
  siteContext?: SiteContextModel;
  setSiteContext?: Dispatch<SetStateAction<SiteContextModel>>;
}

export const SiteContext = createContext<SiteContextValue>({});

export const SiteContextProvider = ({
  children,
  siteContext: currentSiteContext,
}: {
  children: React.ReactNode;
  siteContext: SiteContextModel;
}): React.ReactNode => {
  const [siteContext, setSiteContext] = useState<SiteContextModel>(currentSiteContext);

  return (
    <SiteContext.Provider value={{ siteContext, setSiteContext }}>{children}</SiteContext.Provider>
  );
};
