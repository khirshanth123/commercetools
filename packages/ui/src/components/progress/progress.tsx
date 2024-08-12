'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib';

const progressValueVariants = cva('', {
  variants: {
    color: {
      neutral: 'text-neutral-900',
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

const progressVariants = cva('h-full w-full flex-1 transition-all rounded-full', {
  variants: {
    isIndeterminate: {
      true: 'rounded-full origin-left-center transition-none animate-indeterminate-progress',
      false: '',
    },
    color: {
      neutral: 'bg-neutral-400',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
    },
    size: {
      xs: 'h-1',
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
});
type ProgressVariantProps = VariantProps<typeof progressVariants>;

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  minValue?: number;
  label?: string;
  isIndeterminate?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

/**
 * Progress component displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps & ProgressVariantProps
>(
  (
    {
      className,
      value,
      minValue = 0,
      max = 100,
      color = 'primary',
      label,
      getValueLabel,
      size = 'md',
      isIndeterminate,
      ...props
    },
    ref,
  ) => (
    <div className={cn('flex flex-col py-7 px-10 gap-2', className)}>
      {label && (
        <div className={'flex justify-between'}>
          <p className={'font-semibold text-neutral-500'}>{label}</p>
          <p className={cn(progressValueVariants({ color }))}>
            {getValueLabel ? getValueLabel(value || 0, max) : `${value}%`}
          </p>
        </div>
      )}
      <ProgressPrimitive.Root
        ref={ref}
        className='relative w-full overflow-hidden rounded-full bg-neutral-50'
        {...props}
        value={value}
        aria-valuemin={minValue}
        aria-valuemax={max}
        aria-label='progress'
      >
        <ProgressPrimitive.Indicator
          className={cn(progressVariants({ color, size, isIndeterminate }))}
          style={{
            transform: !isIndeterminate
              ? `translateX(-${100 - (((value || 0) - minValue) / (max - minValue)) * 100}%)`
              : undefined,
          }}
        />
      </ProgressPrimitive.Root>
    </div>
  ),
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
