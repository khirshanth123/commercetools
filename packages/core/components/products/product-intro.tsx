import React from 'react';
import { cn } from '@repo/ui';
import { Rating } from '@repo/ui/src/components/rating';

export interface ProductIntroProps {
  product: Object;
  className?: string;
  reviews: any
}

export const ProductIntro = async ({ product, className, reviews }: ProductIntroProps) => {
  const { masterData: { current } }: any = product;
  const price = current?.masterVariant?.prices?.[0]?.value
  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review?.rating, 0) / reviews?.length || 0;
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <p className='text-xs font-semibold text-neutral-400 lg:text-sm'>SKU{current.masterVariant.sku}</p>
      <h1 className='text-3xl lg:text-4xl font-bold'>{current.name}</h1>
      <div className='flex gap-4 items-center py-2'>
        <div className='flex items-center gap-2'>
          <Rating readonly initialValue={averageRating} />
          <span className='text-neutral-600'>{averageRating}</span>
        </div>
        <span className='text-sm font-bold uppercase underline lg:text-base'>
          Reviews {reviews?.length}
        </span>
      </div>
      <div className='flex items-center gap-2 mt-2'>
        <h3 className='font-bold text-xl lg:text-2xl'>{price?.centAmount}</h3>
        <span className='text-xs font-semibold text-neutral-400 lg:text-sm'>
          {price?.currencyCode}
        </span>
      </div>
    </div>
  );
}