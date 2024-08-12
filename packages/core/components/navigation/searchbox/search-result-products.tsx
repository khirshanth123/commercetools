import React from 'react';
import { SheetClose, Skeleton, cn } from '@repo/ui';
import { GenericLink, ProductCard } from '../../shared';

export type SearchResultProductsProps = {
  products: any[];
  productSearch: string;
  isLoadingProducts: boolean;
  onClick: () => void;
};

export const SearchResultProducts = ({
  products,
  productSearch,
  isLoadingProducts,
  onClick,
}: SearchResultProductsProps) => {
 

  return (
    <div className='flex w-full flex-col mt-8 md:mt-0'>
      <h5>Products</h5>
      <div className='mt-4 grid w-full gap-4 lg:grid-cols-4 xl:grid-cols-5'>
        {isLoadingProducts ? (
          <SearchProductsSkeleton />
        ) : (
          products?.map((product, index) => (
            <ProductCard
              key={`searchbox-product-${index}`}
              onClick={onClick}
              product={product}
              className={`${index >= 4 && 'lg:hidden xl:flex'}`}
              isBasic
            />
          ))
        )}
      </div>
      {(isLoadingProducts || products.length >= 5) && (
        <div className='mx-auto mt-4'>
          {isLoadingProducts ? (
            <Skeleton className='h-5 mt-1 w-[80px]' />
          ) : (
            <SheetClose className='static'>
              <GenericLink
                href={`/search/${productSearch}`}
                className='text-md opacity-75 underline hover:opacity-100'
              >
              Show More
              </GenericLink>
            </SheetClose>
          )}
        </div>
      )}
    </div>
  );
};

export const SearchProductsSkeleton = () =>
  [...Array(5)].map((_, index) => (
    <div
      key={`product-loading-card-${index}`}
      className={cn(
        'flex gap-x-4 gap-2 h-[64px] lg:flex-col lg:size-full',
        index >= 4 && 'lg:hidden xl:flex',
      )}
    >
      <Skeleton className='size-[64px] lg:aspect-square lg:size-full' />
      <div className='flex flex-1 flex-col justify-center lg:mt-1.5 lg:pb-1'>
        <Skeleton className='mb-0.5 h-[18px] w-full lg:mb-[6px]' />
        <Skeleton className='h-[18px] w-1/3' />
      </div>
    </div>
  ));
