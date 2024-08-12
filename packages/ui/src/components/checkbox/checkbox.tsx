'use client';

import * as React from 'react';
import { ReactNode } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@repo/icons';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib';

const checkboxVariants = cva(
  'flex items-center justify-center rounded border border-input data-[state=checked]:border-none peer shrink-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        sm: 'w-4 h-4 [&>span]:w-4 [&>span]:h-4 [&_svg]:w-4 [&_svg]:h-4',
        md: 'w-5 h-5 [&>span]:w-5 [&>span]:h-5 [&_svg]:w-5 [&_svg]:h-5',
        lg: 'w-6 h-6 [&>span]:w-6 [&>span]:h-6 [&_svg]:w-6 [&_svg]:h-6',
      },
      color: {
        primary:
          'data-[state=checked]:bg-primary hover:border-primary [&_svg]:fill-primary-foreground',
        neutral:
          'data-[state=checked]:bg-neutral hover:border-neutral [&_svg]:fill-neutral-foreground',
        success:
          'data-[state=checked]:bg-success hover:border-success [&_svg]:fill-success-foreground',
        warning:
          'data-[state=checked]:bg-warning hover:border-warning [&_svg]:fill-warning-foreground',
        danger: 'data-[state=checked]:bg-danger hover:border-danger [&_svg]:fill-danger-foreground',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  },
);

/**
 * A control that allows the user to toggle between checked and not checked.
 */

// Omit 'color' from the ComponentPropsWithoutRef type, then extend CheckboxProps
type OmittedProps = Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'color'>;

export interface CheckboxProps extends OmittedProps, VariantProps<typeof checkboxVariants> {
  icon?: ReactNode;
  isReadOnly?: boolean;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, size, color, icon = <CheckIcon />, isReadOnly = false, ...props }, ref) => {
    return (
      <CheckboxPrimitive.Root
        color={undefined}
        ref={ref}
        aria-label='checkbox'
        className={cn(
          checkboxVariants({ size, color }),
          className,
          isReadOnly ? 'cursor-not-allowed' : '',
          props.disabled ? 'opacity-50' : '',
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center')}>
          {icon}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
