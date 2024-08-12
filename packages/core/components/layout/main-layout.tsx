import React from 'react';
import { Header } from './header';
import { SiteContextModel } from '../../common';
type LayoutProps = {
  siteContext: SiteContextModel;
} & React.PropsWithChildren<{}>;

export const MainLayout = async ({ children }: LayoutProps) => { 
    return (
      <div className='h-full flex flex-col'>
        <Header />
      <main className='flex-auto flex-shrink-0 bg-background'>{children}</main>
      </div>
    )
     
  }