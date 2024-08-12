'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@repo/ui';
import { useSiteContext } from '../../client';
import { urlIncludeContextParams } from '../../common';
export interface GenericLinkProps extends Omit<LinkProps, 'href'> {
  external?: boolean;
  preserveSearchParams?: boolean;
  children: any;
  href: string;
  className: string;
}

export const GenericLink: React.FC<GenericLinkProps> = ({
  preserveSearchParams = false,
  children,
  className,
  external,
  href,
  ...rest
}) => {
  const { siteContext } = useSiteContext();
  const [urlWithContext, setUrlWithContext] = useState<string>(href);
  const searchParams = useSearchParams();
  const urlEncodingParameters = siteContext.config?.urlParameters;

  // This hook is necessary to avoid pre-rendering issues with browser location API
  useEffect(() => {
    if (external) return;

    const search =
      preserveSearchParams && searchParams?.size > 0 ? `?${searchParams.toString()}` : '';
    const url = new URL(href + search, location?.origin);
    const contextUrl = urlIncludeContextParams({ url, siteContext, urlEncodingParameters });
    setUrlWithContext(contextUrl.toString());
  }, [href, searchParams, siteContext, urlEncodingParameters, external, preserveSearchParams]);

  return (
    <Link href={urlWithContext} className={cn('hover:underline outline-ring', className)} {...rest}>
      {children}
    </Link>
  );
};
