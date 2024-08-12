import * as React from 'react';
import { ReactNode } from 'react';
import { CancelFilledIcon } from '@repo/icons';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib';
import { chipVariants } from './chip-variants';

const closeButtonStyles =
  'z-10 appearance-none outline-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 select-none transition-opacity opacity-80 hover:opacity-100 cursor-pointer active:opacity-disabled tap-highlight-transparent rounded-full';

type OmittedHTMLProps = 'size' | 'color';

export interface ChipProps
  extends Omit<React.HTMLProps<HTMLSpanElement>, OmittedHTMLProps>,
    VariantProps<typeof chipVariants> {
  startContent?: ReactNode;
  endContent?: ReactNode;
  onClose?: () => void;
}

function Chip({
  children,
  onClose,
  className,
  variant,
  color = 'primary',
  size,
  isOneChar = typeof children === 'string' && children?.length === 1,
  isCloseable = !!onClose,
  isDisabled,
  startContent,
  endContent,
  ...props
}: ChipProps) {
  const endContentElement =
    (!!onClose && (
      <button
        className={closeButtonStyles}
        onClick={onClose}
        role='button'
        tabIndex={0}
        aria-label='close'
      >
        {endContent || <CancelFilledIcon />}
      </button>
    )) ||
    endContent;

  return (
    <span
      color={color || undefined}
      className={cn(
        chipVariants({
          className,
          variant,
          color,
          size,
          isOneChar,
          isCloseable,
          isDisabled,
        }),
        className,
      )}
      {...props}
    >
      {startContent}
      <div>{children}</div>
      {endContentElement}
    </span>
  );
}

export { Chip, chipVariants };
