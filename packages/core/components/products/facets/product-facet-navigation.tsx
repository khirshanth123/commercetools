import React from 'react';
import { cn } from '@repo/ui';
import { Facets } from './facets';
import { ActiveFacets } from './active-facets';




export interface ProductFacetNavigationProps extends React.HTMLProps<HTMLDivElement> {
  facets?: Facet[];
  activeFacetBreadcrumbs?: [];
}

interface Facet {
  id: string;
  name: string;
  children?: Facet[];
}


export const ProductFacetNavigation = ({
  className,
  facets,
  activeFacetBreadcrumbs,
}: ProductFacetNavigationProps) => {
  return (
    <>
      <div className={cn('flex flex-col [&_.facet-wrapper:not(:last-child)]:border-b', className)}>
        {activeFacetBreadcrumbs.length > 0 && (
          <ActiveFacets facetBreadcrumbs={activeFacetBreadcrumbs} />
        )}
        <Facets facets={facets} />
      </div>
    </>
  );
};