'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button, Checkbox, Label } from '@repo/ui';

interface FacetValue {
  id: string;
  name: string;
  selected?: boolean;
  count?: number;
  children?: FacetValue[];
  multiSelect?: boolean;
  code?: string;
}

interface Props {
  facetValues: FacetValue[];
  facetIndex: number;
  showMoreLabel?: string;
  showLessLabel?: string;
}

const FACET_DISPLAY_THRESHOLD = 5;

export const FacetValues = ({
  facetIndex,
  facetValues,
  showMoreLabel = 'Show More',
  showLessLabel = 'Show Less',
}: Props) => {
  const [showMoreQuantity, setShowMoreQuantity] = useState(FACET_DISPLAY_THRESHOLD);

  const toggle = () => {
    setShowMoreQuantity((prevValue) =>
      prevValue === FACET_DISPLAY_THRESHOLD ? facetValues.length : FACET_DISPLAY_THRESHOLD,
    );
  };

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const updateQueryParams = (query: string, code: string) => {

    const currentParams = new URLSearchParams(searchParams);
    const currentQuery = currentParams.getAll(code);
    if (currentQuery.includes(query)) {
      currentParams.delete(code);
      currentQuery.filter(q => q !== query).forEach(q => currentParams.append(code, q));
    } else {
      currentParams.append(code, query);
    }

    router.push(`${pathName}?${currentParams.toString()}`);
  };
  const renderFacetValues = (values: FacetValue[], parentIndex: number | string) => {
    return values.slice(0, showMoreQuantity).map(({ name, id: query, selected, count, children, multiSelect: childMultiSelect, code }, index) => {
      const label = count !== undefined ? `${name} (${count})` : name;
      const key = `facet-value_${parentIndex}-${index}`;

      return (
        <div key={key} className="facet-value mb-2">
          <div
            key={`facet-value_${facetIndex}-${index}`}
            onClick={() => updateQueryParams(query, code)}
            className='w-full hover:underline outline-ring hover:cursor-pointer'
          >
            {label}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      {renderFacetValues(facetValues, facetIndex)}
      {facetValues.length > FACET_DISPLAY_THRESHOLD && (
        <Button className='font-bold p-0' variant='link' color='neutral' size='sm' onClick={toggle}>
          {showMoreQuantity === FACET_DISPLAY_THRESHOLD ? showMoreLabel : showLessLabel}
        </Button>
      )}
    </>
  );
};
