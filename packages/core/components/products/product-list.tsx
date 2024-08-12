'use client';

import React, { useEffect } from 'react';
import { ProductCard } from '../shared/product-card';
import { ProductCardSkeleton } from '../skeletons';
import useSWRInfinite from 'swr/infinite';
import { fetchProducts } from '../../actions';
import { Button } from '@repo/ui';

const LoadingProducts = () => {
  return [...Array(3)].map((_, index) => (
    <ProductCardSkeleton key={`product-loading-card-${index}`} />
  ));
};

const fetcher = async ({ query, sortCode, currentPage, attributes }) => {
  console.log('b');

  if (currentPage === 1) return [];
  return (await fetchProducts({
    locale: "en-US",
    sortCode,
    offset: currentPage,
    categoryIds: query,
    query: '',
    limit: 10,
    searchText: '',
    attributeQuery: attributes
  }));
};

export interface ProductListProps {
  initialProducts: any;
  query: string[];
  sortCode: string;
  totalResults: number;
  attributes: string[];
}

export const ProductList = ({
  initialProducts,
  query,
  sortCode,
  totalResults,
  attributes
}: ProductListProps) => {
  const { data, size, setSize, isValidating }: any = useSWRInfinite(
    (pageIndex) => ({
      query,
      sortCode,
      currentPage: pageIndex + 1,
      attributes
    }),
    fetcher,
    {
      initialSize: 1,
      revalidateFirstPage: false,
    }
  );
  // Flatten the data to get the full list of products
  const newproducts = size > 1 && data[size - 1] && data ? data.flatMap(page => page?.data?.productProjectionSearch?.results) : [];

  const products = newproducts.length ? initialProducts?.results.concat(newproducts).filter(Boolean) : initialProducts?.results;
  const isLoadingMore = size > 1 && isValidating;

  const showMore = () => {
    setSize((prevSize) => prevSize + 1);
  };

  useEffect(() => {
    setSize(1);
  }, [setSize, initialProducts, query, sortCode]);

  return (
    <>
      <div className='grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 lg:gap-x-6 lg:gap-y-8'>
        {products?.map((product: any, index: number) => (
          <ProductCard
            key={index}
            product={product}
            quickAddEnabled
            highlightEnabled
            variantsEnabled
          />
        ))}
        {isLoadingMore && <LoadingProducts />}
      </div>
      <div className='grid items-center justify-center p-4 mt-20 md:grid-cols-3'>
        {!isLoadingMore && products.length < totalResults && (
          <Button
            onClick={showMore}
            color='neutral'
            variant='bordered'
            size='lg'
            className='w-full md:col-start-2'
          >
            Show More
          </Button>
        )}
      </div>
    </>
  )
};
