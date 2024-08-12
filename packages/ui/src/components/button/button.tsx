import { ButtonHTMLAttributes, MouseEventHandler, ReactNode, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps } from 'class-variance-authority';
import { ReactRef, cn, conditionalDataAttribute } from '../../lib';
import { buttonVariants } from './button-variants';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  ref?: ReactRef<HTMLButtonElement>;
  startContent?: ReactNode;
  endContent?: ReactNode;
  spinner?: ReactNode;
  spinnerPlacement?: 'start' | 'end';
  isLoading?: boolean;
  isDisabled?: boolean;
  children?: ReactNode;
  asChild?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const defaultSpinner = (
  <svg
    className='animate-spin text-current'
    fill='none'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
    <path
      className='opacity-75'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      fill='currentColor'
    />
  </svg>
);
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      isLoading,
      spinnerPlacement = 'start',
      spinner = defaultSpinner,
      color,
      children,
      startContent,
      endContent,
      isDisabled,
      isIconOnly,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const commonProps = {
      color: color || undefined,
      className: cn(buttonVariants({ color, isIconOnly, isDisabled, ...props }), className),
      ref,
      ...(isDisabled ? { 'data-disabled': conditionalDataAttribute(isDisabled) } : {}),
      ...(isDisabled ? { disabled: true } : {}),
      ...(isLoading ? { 'data-loading': conditionalDataAttribute(isLoading) } : {}),
      ...(isIconOnly ? { 'aria-label': 'icon' } : {}),
      ...props,
    };

    if (asChild) {
      return <Comp {...commonProps}>{children}</Comp>;
    }

    return (
      <Comp {...commonProps}>
        {startContent}
        {isLoading && spinnerPlacement === 'start' && spinner}
        {children}
        {isLoading && spinnerPlacement === 'end' && spinner}
        {endContent}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
