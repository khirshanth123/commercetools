import React from 'react';
import { Skeleton } from '../skeleton';

export const GallerySkeleton = () => {
  return (
    <div className='lg:grid lg:grid-cols-8 lg:gap-6 overflow-hidden'>
      <div className='hidden lg:col-span-1 lg:grid lg:auto-rows-auto gap-2'>
        {[...Array(8)].map((_, index) => (
          <Skeleton key={index} className='w-full' />
        ))}
      </div>
      <Skeleton className='lg:col-span-7 lg:col-start-2 lg:row-start-1 aspect-square' />
    </div>
  );
};
