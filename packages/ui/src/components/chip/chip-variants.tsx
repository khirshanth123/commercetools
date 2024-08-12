import { cva } from 'class-variance-authority';
import { colorVariants } from '../../lib';

export const chipVariants = cva(
  'relative inline-flex items-center justify-between box-border rounded-full',
  {
    variants: {
      variant: {
        solid: '',
        bordered: 'border-medium bg-transparent',
      },
      color: {
        primary: '',
        secondary: '',
        neutral: '',
        success: '',
        warning: '',
        danger: '',
      },
      size: {
        sm: 'px-2 h-6 text-xs [&_svg]:w-3 [&_svg]:h-3 [&>button]:text-xs [&>div]:px-1',
        md: 'px-2 h-7 text-sm [&_svg]:w-4 [&_svg]:h-4 [&>button]:text-sm [&>div]:px-1',
        lg: 'px-3 h-8 text-base [&_svg]:w-6 [&_svg]:h-6 [&>button]:text-base [&>div]:px-2',
      },
      isOneChar: {
        true: {},
        false: 'max-w-fit',
      },
      isCloseable: {
        true: {},
        false: {},
      },
      isDisabled: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
      isOneChar: false,
      isDisabled: false,
      isCloseable: false,
    },
    compoundVariants: [
      // isOneChar / size
      {
        isOneChar: true,
        size: 'sm',
        class: 'w-6 h-6',
      },
      {
        isOneChar: true,
        size: 'md',
        class: 'w-7 h-7',
      },
      {
        isOneChar: true,
        size: 'lg',
        class: 'w-8 h-8',
      },
      // isOneChar / isCloseable
      {
        isOneChar: true,
        isCloseable: false,
        class: 'px-0 justify-center',
      },
      {
        isOneChar: true,
        isCloseable: true,
        class: 'w-auto',
      },

      // solid
      {
        variant: 'solid',
        color: 'primary',
        class: [colorVariants.solid.primary, colorVariants.solidHover.primary],
      },
      {
        variant: 'solid',
        color: 'primary',
        class: [colorVariants.solid.primary, colorVariants.solidHover.primary],
      },
      {
        variant: 'solid',
        color: 'secondary',
        class: [colorVariants.solid.secondary, colorVariants.solidHover.secondary],
      },
      {
        variant: 'solid',
        color: 'neutral',
        class: [colorVariants.solid.neutral, colorVariants.solidHover.neutral],
      },
      {
        variant: 'solid',
        color: 'success',
        class: [colorVariants.solid.success, colorVariants.solidHover.success],
      },
      {
        variant: 'solid',
        color: 'warning',
        class: [colorVariants.solid.warning, colorVariants.solidHover.warning],
      },
      {
        variant: 'solid',
        color: 'danger',
        class: [colorVariants.solid.danger, colorVariants.solidHover.danger],
      },

      // bordered
      {
        variant: 'bordered',
        color: 'primary',
        class: [colorVariants.bordered.primary, colorVariants.borderedHover.primary],
      },
      {
        variant: 'bordered',
        color: 'secondary',
        class: [colorVariants.bordered.secondary, colorVariants.borderedHover.secondary],
      },
      {
        variant: 'bordered',
        color: 'neutral',
        class: [colorVariants.bordered.neutral, colorVariants.borderedHover.neutral],
      },
      {
        variant: 'bordered',
        color: 'success',
        class: [colorVariants.bordered.success, colorVariants.borderedHover.success],
      },
      {
        variant: 'bordered',
        color: 'warning',
        class: [colorVariants.bordered.warning, colorVariants.borderedHover.warning],
      },
      {
        variant: 'bordered',
        color: 'danger',
        class: [colorVariants.bordered.danger, colorVariants.borderedHover.danger],
      },
    ],
  },
);
