import React from 'react';
import { ChevronRightIcon } from '@repo/icons';
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from '@repo/ui';
import { FacetValues } from './facet-values';

interface CollapsibleTriggerButtonProps {
  label: string;
}

const CollapsibleTriggerButton = ({ label }: CollapsibleTriggerButtonProps) => {
  return (
    <CollapsibleTrigger asChild>
      <Button
        className='w-full justify-between transition-all [&[data-state=open]>svg]:rotate-90 hover:bg-transparent my-2'
        isIconOnly
        variant='light'
        color='neutral'
        size='sm'
      >
        <span className='text-base font-bold'>{label}</span>
        <ChevronRightIcon className='fill-neutral' />
      </Button>
    </CollapsibleTrigger>
  );
};

interface FacetValue {
  id: string;
  name: string;
  children?: FacetValue[];
  multiSelect?: boolean;
}

interface Props extends React.HTMLProps<HTMLDivElement> {
  facets: FacetValue[];
}

const mapToPlainFacetValues = (facetValues: any[]): any[] =>
  facetValues.map(({ id, name, children = [] , key }) => {
    // Check if there are no more children, indicating the last level
    const isLastLevel =  children && children.length === 0;
    return {
      id,
      name,
      multiSelect: isLastLevel,
      children: children ? mapToPlainFacetValues(children) : [],
      code :key
    };
  });

export const Facets = ({ facets }: Props) => {
  return (
    facets.map((facet, index) => {
      const facetValues = mapToPlainFacetValues(facet.children || []);
      return (
        facet?.children?.length > 0 && (
          <Collapsible
            key={`facet_${index}`}
            defaultOpen={true}
            className='facet-wrapper transition-all py-3'
          >
            <CollapsibleTriggerButton label={facet.name} />
            <CollapsibleContent className='flex flex-col items-start gap-3 data-[state=open]:pb-3'>
              <FacetValues
                facetIndex={index}
                facetValues={facetValues}
                showMoreLabel='showMore'
                showLessLabel='showLess'
              />
            </CollapsibleContent>
          </Collapsible>
        )
      );
    })
  );
};
