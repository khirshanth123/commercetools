'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  label: string;
}

export const ClearAllFacets = ({ label }: Props) => {
  const pathName = usePathname();
  return (
    <Link href={pathName} className='text-sm px-2 border-b border-neutral-800 cursor-pointer'>
      {label}
    </Link>
  );
};
