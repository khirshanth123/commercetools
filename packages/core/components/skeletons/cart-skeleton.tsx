import React from 'react';
import { Skeleton } from '@repo/ui';

export const CartSkeleton = () => {
  return (
    <div className='lg:grid lg:grid-cols-[3fr,1.5fr] lg:gap-12 xl:grid-cols-[3fr,1.2fr] 2xl:gap-16'>
      <div className='flex flex-col mb-8 w-full'>
        <div className='flex justify-between items-end mb-2'>
          <div className='flex gap-2 items-end'>
            <Skeleton className='w-28 h-9' />
            <Skeleton className='w-20 h-5 mt-1' />
          </div>
          <Skeleton className='w-20 h-5' />
        </div>
        <Skeleton className='w-28 h-5' />
        <div className='mt-4 sm:mt-6'>
          <div className='hidden mb-2 h-5 sm:grid sm:grid-cols-[4fr_1fr_1.5fr] sm:gap-x-4'>
            <Skeleton className='w-20' />
            <Skeleton className='w-12 justify-self-center' />
            <Skeleton className='w-16 justify-self-end sm:pr-4' />
          </div>
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} className='p-4 mb-4 h-36 sm:h-24' />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <Skeleton className='h-72 w-full lg:self-start' />
        <Skeleton className='hidden w-full h-14 lg:block' />
      </div>
      <div className='bg-background sticky bottom-0 z-10 py-6 shadow-[0_-5px_15px_-15px_rgba(0,0,0,0.5)] lg:hidden'>
        <Skeleton className='w-full h-14' />
      </div>
    </div>
  );
};
