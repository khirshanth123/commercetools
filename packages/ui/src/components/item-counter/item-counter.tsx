'use client';

import React, { SyntheticEvent, useState } from 'react';
import { AddIcon, RemoveIcon } from '@repo/icons';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib';
import { Button, buttonVariants } from '../button';

const itemCounterVariants = cva('flex justify-between w-fit', {
  variants: {
    variant: {
      flat: 'gap-1 border rounded-md bg-white',
      rounded: 'gap-2',
    },
  },
});

const counterInputVariants = cva(
  'w-8 text-center tracking-wider font-medium bg-transparent transition duration-300 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 appearance:none [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-outer-spin-button]:hidden [&::-webkit-outer-spin-button]:m-0',
  {
    variants: {
      readonly: {
        true: 'pointer-events-none',
      },
      size: {
        xs: '',
        sm: '',
        md: 'w-10 p-1',
        lg: 'w-14 p-3 rounded-lg',
        xl: 'w-16 p-4 rounded-lg',
      },
    },
    defaultVariants: {
      readonly: false,
    },
  },
);

const counterButtonVariants = cva('p-0 min-h-full', {
  variants: {
    variant: {
      flat: '',
      rounded: 'rounded-full',
    },
    type: { increment: '', decrement: '' },
  },
  compoundVariants: [
    {
      variant: 'flat',
      type: 'decrement',
      className: 'rounded-l-md',
    },
    {
      variant: 'flat',
      type: 'increment',
      className: 'rounded-r-md',
    },
  ],
});

export type ItemCounterProps = {
  className?: string;
  readonly?: boolean;
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  variant?: 'flat' | 'rounded';
  onChange?: (value: number) => void;
} & Pick<VariantProps<typeof buttonVariants>, 'size' | 'color'>;

export const ItemCounter = React.forwardRef<HTMLInputElement, ItemCounterProps>((props, ref) => {
  const {
    className,
    readonly,
    color,
    initialValue,
    max,
    min = 1,
    step = 1,
    variant = 'flat',
    size = 'sm',
    onChange,
  } = props;
  const [counter, setCounter] = useState(initialValue || min);
  const [isEmitted, setIsEmitted] = useState(true);
  const isFlat = variant === 'flat';

  const decrement = () => {
    if (min && counter === min) return;
    const newValue = min && counter - step <= min ? min : counter - step;
    setCounter(newValue);
    emitValueChange(newValue);
  };

  const increment = () => {
    if (max && counter === max) return;
    const newValue = max && counter + step >= max ? max : counter + step;
    setCounter(newValue);
    emitValueChange(newValue);
  };

  const setValue = ({ currentTarget }: SyntheticEvent<HTMLInputElement>) => {
    const inputValue = +currentTarget?.value;
    const newValue = min && inputValue < min ? min : max && inputValue > max ? max : inputValue;
    setCounter(newValue);
    onChange && setIsEmitted(false);
  };

  const handleBlur = () => {
    if (onChange && !isEmitted) {
      emitValueChange(counter);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onChange && !isEmitted) {
      emitValueChange(counter);
    }
  };

  const emitValueChange = (value: number) => {
    onChange?.(value);
    setIsEmitted(true);
  };

  const select = ({ currentTarget }: SyntheticEvent<HTMLInputElement>) => {
    currentTarget?.select();
  };

  return (
    <div className={cn(itemCounterVariants({ variant }), className)}>
      <Button
        type='button'
        name='decrement'
        className={cn(counterButtonVariants({ variant, type: 'decrement' }))}
        variant={isFlat ? 'light' : 'solid'}
        isIconOnly={!isFlat}
        size={size}
        color={color}
        isDisabled={readonly || counter === min}
        onClick={decrement}
        data-testid='decrement-button'
      >
        <RemoveIcon />
      </Button>
      <input
        type='number'
        inputMode='numeric'
        name='quantity'
        className={cn(`rounded-${size}`, counterInputVariants({ readonly, size }))}
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={counter}
        readOnly={readonly}
        tabIndex={readonly ? -1 : 0}
        onFocus={readonly ? undefined : select}
        onChange={setValue}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        data-testid='quantity-input'
      />
      <Button
        type='button'
        name='increment'
        className={cn(counterButtonVariants({ variant, type: 'increment' }))}
        variant={isFlat ? 'light' : 'solid'}
        isIconOnly={!isFlat}
        size={size}
        color={color}
        isDisabled={readonly || counter === max}
        onClick={increment}
        data-testid='increment-button'
      >
        <AddIcon />
      </Button>
    </div>
  );
});
ItemCounter.displayName = 'ItemCounter';
