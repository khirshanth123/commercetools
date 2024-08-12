import React from 'react';
import { ActiveFacet } from './active-facet';
import { ClearAllFacets } from './clear-all-facets';

interface Props extends React.HTMLProps<HTMLDivElement> {
  facetBreadcrumbs?: [];
}

export const ActiveFacets = async ({ facetBreadcrumbs }: Props) => {
  return (
    <div className='border-b py-5'>
      <div className='flex justify-between mb-4'>
        <span className='font-bold lg:hidden'>Applied Filters</span>
        <span className='hidden font-bold lg:block'>Filters</span>
        <ClearAllFacets label={'Clear All'} />
      </div>
      <div className='flex gap-2 flex-wrap'>
        {facetBreadcrumbs.map(({ name, id, key }, index) => (
          <ActiveFacet
            key={`active-facet_${index}`}
            label={name}
            query={id}
            category={key}
          />
        ))}
      </div>
    </div>
  );
}