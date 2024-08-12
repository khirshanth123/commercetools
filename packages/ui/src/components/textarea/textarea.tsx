import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib';

export const textAreaVariants = cva(
  'px-3 py-2 text-sm text-neutral-500 outline-none text-neutral-500 placeholder-neutral-300 disabled:bg-white',
  {
    variants: {
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      variant: {
        flat: 'bg-neutral-50 hover:bg-neutral-100 focus:bg-neutral-100',
        bordered:
          'border-input has-[input:focus]:ring-focus has-[input:focus]:ring-2 ring-1 ring-input ',
      },
      size: {
        sm: 'h-20 text-sm',
        md: 'h-32 text-md',
        lg: 'h-40 text-lg',
      },
      validationState: {
        valid: '',
        invalid: 'ring-danger-700 has-[input:focus]:ring-danger-700',
      },
    },
    defaultVariants: {
      size: 'md',
      radius: 'md',
      variant: 'bordered',
    },
  },
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, radius, variant, size, validationState, ...props }, ref) => {
    return (
      <textarea
        className={cn(textAreaVariants({ radius, variant, size, validationState }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
