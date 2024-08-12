import React from 'react';
import { Skeleton, cn } from '@repo/ui';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const ProductCardSkeleton = ({ className, ...rest }: Props) => {
  return (
    <Skeleton className={cn('h-[350px] sm:h-[450px] 2xl:h-[510px] w-full', className)} {...rest} />
  );
};
