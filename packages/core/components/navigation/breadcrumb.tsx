import React from 'react';
import { BreadcrumbItem } from '../../common';
import { GenericLink } from '../shared/generic-link';
import { cn } from '@repo/ui';
import { ChevronLeftIcon, ChevronRightIcon } from '@repo/icons';
// import { getTranslations } from 'next-intl/server';

export interface BreadcrumbsProps {
    showHome?: boolean;
    breadcrumbs?: BreadcrumbItem[];
  }
  


  export const Breadcrumb = async ({ showHome = true, breadcrumbs }: BreadcrumbsProps) => { 
    const lastBreadcrumbIndex = breadcrumbs?.length - 1;
    // const t = await getTranslations('common');
    return (
        <ol
          className='flex pt-6 pb-8 font-bold lg:pt-12 lg:font-normal lg:[&>li:last-child>.label]:font-bold'
          aria-label='Breadcrumbs'
          role='navigation'
        >
            {showHome && (
        <li className={cn('font-bold lg:font-normal lg:block', { hidden: breadcrumbs.length > 1 })}>
          <BreadcrumbLink label={('home')} link='/' />
        </li>
      )}
      {breadcrumbs?.map(({ label, link }, index) => (
        <li
          key={index}
          className={cn('lg:flex items-center gap-1.5 pl-1', {
            hidden: index !== lastBreadcrumbIndex - 1,
          })}
        >
          <ChevronRightIcon className='hidden lg:block fill-neutral-600' />
          {index < lastBreadcrumbIndex && link ? (
            <BreadcrumbLink label={label} link={link} />
          ) : (
            <span className='label'>{label}</span>
          )}
        </li>
      ))}
      </ol>
    )

  }

  const BreadcrumbLink = ({ label, link }: BreadcrumbItem) => {
    return (
      <GenericLink href={link} className='flex items-center gap-1'>
        <ChevronLeftIcon className='block lg:hidden' />
        {label}
      </GenericLink>
    );
  };