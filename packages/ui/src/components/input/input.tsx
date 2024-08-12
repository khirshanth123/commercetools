'use client';

import React, { ReactNode, useEffect } from 'react';
import { CloseIcon, VisibilityIcon, VisibilityOffFilledIcon } from '@repo/icons';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib';
import { Button } from '../button';
import { Label } from '../label';

const inputVariants = cva('flex flex-col gap-2 w-full', {
  variants: {
    isDisabled: {
      true: 'opacity-50 pointer-events-none',
    },
    validationState: {
      valid: '',
      invalid: '[&>*]:text-danger-700',
    },
  },
});

const inputWrapperVariants = cva(
  'inputWrapperVariants group bg-white inline-flex items-center w-full gap-1.5 px-3 transition duration-300 has-[input:focus]:caret-primary',
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
        flat: 'bg-neutral-50 hover:bg-neutral-100 has-[input:focus]:bg-neutral-100',
        bordered: 'has-[input:focus]:ring-focus has-[input:focus]:ring-2 ring-1 ring-input',
      },
      size: {
        sm: 'h-8 [&_input]:text-sm [&_svg]:size-5',
        md: 'h-10 [&_input]:text-md [&_svg]:size-6',
        lg: 'h-12 [&_input]:text-lg [&_svg]:size-7',
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

const innerInputVariants = cva(
  'w-full outline-none text-neutral-500 placeholder-neutral-300 disabled:bg-white',
  {
    variants: {
      variant: {
        flat: 'bg-neutral-50 text-foreground group-hover:bg-neutral-100 duration-300 group-has-[input:focus]:bg-neutral-100 group-has-[input:focus]:placeholder-neutral-400 group-hover:placeholder-neutral-400',
        bordered: 'text-neutral-500 placeholder-neutral-300 disabled:bg-white',
      },
    },
  },
);

type inputSize = 'sm' | 'md' | 'lg';

type buttonSize = 'xs' | 'sm' | 'md';

const inputSizeToButtonSizeMap: Record<inputSize, buttonSize> = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputWrapperVariants> {
  /**
   * Associated label for the input.
   */
  label?: string | ReactNode;
  /**
   * The input start content.
   */
  startContent?: ReactNode;
  /**
   * The input end content.
   */
  endContent?: ReactNode;
  /**
   * Input description message.
   * */
  description?: ReactNode;
  /**
   * Input error message.
   * */
  errorMessage?: ReactNode;
  /**
   * Whether the input is required.
   * */
  isRequired?: boolean;
  /**
   * Whether the input is disabled.
   * */
  isDisabled?: boolean;
  /**
   * Whether the input is clearable.
   * */
  isClearable?: boolean;
  /**
   * On clear function
   */
  onClear?: () => void;
  /**
   * Whether to show a toggle for password visibility.
   */
  showVisibilityToggle?: boolean;
  /**
   * Present an alternative input style
   */
  rounded?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      startContent,
      endContent,
      description,
      errorMessage,
      isRequired,
      isDisabled,
      isClearable,
      radius,
      variant,
      onClear,
      size,
      showVisibilityToggle,
      validationState,
      value,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = React.useState(value || '');
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (props.onChange) {
        props.onChange(e);
      }
    };

    const clearButton = (
      <Button
        type='button'
        isIconOnly
        role='button'
        tabIndex={0}
        onClick={() => {
          setInputValue('');
          onClear?.();
        }}
        color='neutral'
        variant='light'
        radius='full'
        aria-label='Clear Input'
        size={(size && inputSizeToButtonSizeMap[size]) || 'sm'}
        className={cn(inputValue ? '' : 'hidden')}
      >
        <CloseIcon className='text-default' />
      </Button>
    );

    const visibilityToggle = (
      <Button
        type='button'
        isIconOnly
        color='neutral'
        variant='light'
        radius='full'
        size='sm'
        aria-label='Toggle Visibility'
        onClick={toggleVisibility}
      >
        {isVisible ? (
          <VisibilityIcon />
        ) : (
          <VisibilityOffFilledIcon className='pointer-events-none' />
        )}
      </Button>
    );

    useEffect(() => {
      setInputValue(value as string);
    }, [value]);

    return (
      <div
        className={cn(inputVariants({ isDisabled, validationState }), className)}
        onClick={props.onClick}
      >
        {label && (
          <Label htmlFor={props.id} required={isRequired}>
            {label}
          </Label>
        )}
        <div className={cn(inputWrapperVariants({ size, validationState, radius, variant }))}>
          {!!startContent && startContent}
          <input
            {...props}
            required={isRequired}
            disabled={isDisabled}
            size={undefined}
            ref={ref}
            value={inputValue}
            onChange={handleInputChange}
            className={cn(innerInputVariants({ variant }))}
            type={showVisibilityToggle ? (isVisible ? 'text' : 'password') : props.type}
          />
          {!!endContent && !isClearable && endContent}
          {!!isClearable && clearButton}
          {!!showVisibilityToggle && visibilityToggle}
        </div>
        {errorMessage && <span className='text-sm'>{errorMessage}</span>}
        {description && !errorMessage && (
          <span className='text-sm text-neutral-500'>{description}</span>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
