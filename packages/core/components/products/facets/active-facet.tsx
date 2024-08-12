'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Chip } from '@repo/ui';


interface Props extends React.HTMLProps<HTMLDivElement> {
  label: string;
  query: string;
  category: string;
}

export const ActiveFacet = ({ label, query, category }: Props) => {
  const pathName = usePathname();
  const router = useRouter();
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
  return (
    <div onClick={() => updateQueryParams(query, category)}>
      <Chip color='neutral' variant='bordered' onClose={() => { }}>
        {label}
      </Chip>
    </div>
  );
};
