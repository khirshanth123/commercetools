import { FC, HTMLAttributes } from 'react';
import { cn } from '../../lib';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Skeleton is a placeholder to show a loading state and the expected shape of a component.
 */
const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => (
  <div
    className={cn(
      'animate-pulse rounded-md bg-gradient-to-r from-neutral-100 to-neutral-50',
      className,
    )}
    {...props}
  />
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };
