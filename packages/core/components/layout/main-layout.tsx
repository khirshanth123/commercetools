import React from 'react';
import { SiteContextModel } from '../../common';

type LayoutProps = {
    siteContext: SiteContextModel;
  } & React.PropsWithChildren<{}>;

export const MainLayout = async ({ children }: LayoutProps) => { 
  return (
    <div className='h-full flex flex-col'>
    <main className='flex-auto flex-shrink-0 bg-background'>{children}</main>
    </div>
  )
   
}