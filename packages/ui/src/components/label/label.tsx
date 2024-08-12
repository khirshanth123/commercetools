'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib';

const labelVariants = cva(
  'text-base text-neutral-950 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
);

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  required?: boolean;
}

/**
 * Renders an accessible label associated with controls.
 *
 * @param {string} className - additional classes to add
 * @param {React.ReactNode} children - the content to display inside the label
 * @param {boolean} required - whether the associated field is required
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & LabelProps
>(({ className, children, required, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props}>
    {children} {required && <span className='text-danger-700'>*</span>}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
