'use client';

import React, { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { Button, ItemCounter, ItemCounterProps, buttonVariants, cn } from '@repo/ui';
import { VariantProps } from 'class-variance-authority';
type AddToCartStates = 'default' | 'added' | 'loading' | 'error' | 'outOfStock';
export const AddToCart = ({
  className,
  product,
  counterSize,
  size,
  max,
  isDisabled = false,
  variant,
  color

}) => {
  const [buttonState, setButtonState] = useState<AddToCartStates>(
    1 <= 0 ? 'outOfStock' : 'default',
  );
  const itemCounterProps = {
    max,
    counterSize
  };
  return (
    <form className={cn('flex flex-wrap gap-4', className)}>
      <ItemCounter {...itemCounterProps} />
      <SubmitButton
        variant={buttonState === 'outOfStock' ? 'bordered' : variant}
        color={buttonState === 'outOfStock' ? 'neutral' : color}
        disabled={isDisabled}
        size={size}
        state={buttonState}
      />
    </form>
  )
}

type SubmitButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    variant: string;
    color: string;
    disabled: boolean;
    size: string;
    state: AddToCartStates;
  };

const SubmitButton = ({
  variant,
  color,
  disabled: addToCartDisabled,
  size,
  state,
}: SubmitButtonProps) => {
  return (
    <Button
      type='submit'
      className='grow shrink-0 p-1'
      variant={variant}
      color={color}
      size={size}
    >
      Add to cart
    </Button>
  );
}
