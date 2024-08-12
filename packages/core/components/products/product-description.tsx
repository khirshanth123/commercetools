import React from 'react';
import { cn } from '@repo/ui';



export interface ProductDescriptionProps {
  className?: string;
  description?: string;
}

export const ProductDescription = async ({ className, description }: ProductDescriptionProps) => {
  const formattedDescription = description.replace(/\n/g, '<br />');
  return (
    <div className={cn('', className)}>
      <h2 className='mb-8 font-bold lg:text-xl lg:mb-4'>Description</h2>
      <div dangerouslySetInnerHTML={{ __html: formattedDescription }} />
    </div>
  );
};