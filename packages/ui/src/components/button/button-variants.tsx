import { cva } from 'class-variance-authority';
import { colorVariants } from '../../lib';

const baseClasses =
  'z-0 inline-flex items-center justify-center box-border appearance-none outline-none select-none whitespace-nowrap min-w-max font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed';

export const buttonVariants = cva(baseClasses, {
  variants: {
    variant: {
      solid: '',
      bordered: 'border-medium bg-transparent',
      light: 'bg-transparent',
      ghost: 'border-medium bg-transparent',
      link: 'bg-transparent underline underline-offset-2 hover:decoration-2',
    },
    size: {
      xs: 'px-2 min-w-[1.5rem] h-6 text-xs gap-2 [&>svg]:size-3.5',
      sm: 'px-3 min-w-[2rem] h-8 text-sm gap-2 [&>svg]:size-4',
      md: 'px-4 min-w-[2.5rem] h-10 text-md gap-2 [&>svg]:size-5',
      lg: 'px-6 min-w-[3rem] h-12 text-xl gap-3 [&>svg]:size-6',
      xl: 'px-8 min-w-[3rem] h-14 text-xl gap-4 [&>svg]:size-6',
    },
    color: {
      primary: '',
      secondary: '',
      neutral: '',
      info: '',
      success: '',
      warning: '',
      danger: '',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    isDisabled: {
      true: 'opacity-50 transform-none active:transform-none transition-none cursor-not-allowed',
    },
    isIconOnly: {
      true: 'px-0 gap-0',
    },
    disableAnimation: {
      true: 'transition-none',
      false:
        'active:scale-[0.97] transition duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none',
    },
  },
  defaultVariants: {
    size: 'md',
    radius: 'md',
    variant: 'solid',
    color: 'primary',
    isDisabled: false,
    isIconOnly: false,
    disableAnimation: false,
  },
  compoundVariants: [
    // solid / color
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
      color: 'info',
      class: [colorVariants.solid.info, colorVariants.solidHover.info],
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
    // bordered / color
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
      color: 'info',
      class: [colorVariants.bordered.info, colorVariants.borderedHover.info],
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
    // light / color
    {
      variant: 'light',
      color: 'primary',
      class: [colorVariants.light.primary, colorVariants.lightHover.primary],
    },
    {
      variant: 'light',
      color: 'secondary',
      class: [colorVariants.light.secondary, colorVariants.lightHover.secondary],
    },
    {
      variant: 'light',
      color: 'neutral',
      class: [colorVariants.light.neutral, colorVariants.lightHover.neutral],
    },
    {
      variant: 'light',
      color: 'info',
      class: [colorVariants.light.info, colorVariants.lightHover.info],
    },
    {
      variant: 'light',
      color: 'success',
      class: [colorVariants.light.success, colorVariants.lightHover.success],
    },
    {
      variant: 'light',
      color: 'warning',
      class: [colorVariants.light.warning, colorVariants.lightHover.warning],
    },
    {
      variant: 'light',
      color: 'danger',
      class: [colorVariants.light.danger, colorVariants.lightHover.danger],
    },
    // ghost / color
    {
      variant: 'ghost',
      color: 'primary',
      class: [colorVariants.ghost.primary, colorVariants.ghostHover.primary],
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: [colorVariants.ghost.secondary, colorVariants.ghostHover.secondary],
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: [colorVariants.ghost.neutral, colorVariants.ghostHover.neutral],
    },
    {
      variant: 'ghost',
      color: 'info',
      class: [colorVariants.ghost.info, colorVariants.ghostHover.info],
    },
    {
      variant: 'ghost',
      color: 'success',
      class: [colorVariants.ghost.success, colorVariants.ghostHover.success],
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: [colorVariants.ghost.warning, colorVariants.ghostHover.warning],
    },
    {
      variant: 'ghost',
      color: 'danger',
      class: [colorVariants.ghost.danger, colorVariants.ghostHover.danger],
    },
    // link / color
    {
      variant: 'link',
      color: 'primary',
      class: [colorVariants.link.primary, colorVariants.linkHover.primary],
    },
    {
      variant: 'link',
      color: 'secondary',
      class: [colorVariants.link.secondary, colorVariants.linkHover.secondary],
    },
    {
      variant: 'link',
      color: 'neutral',
      class: [colorVariants.link.neutral, colorVariants.linkHover.neutral],
    },
    {
      variant: 'link',
      color: 'info',
      class: [colorVariants.link.info, colorVariants.linkHover.info],
    },
    {
      variant: 'link',
      color: 'success',
      class: [colorVariants.link.success, colorVariants.linkHover.success],
    },
    {
      variant: 'link',
      color: 'warning',
      class: [colorVariants.link.warning, colorVariants.linkHover.warning],
    },
    {
      variant: 'link',
      color: 'danger',
      class: [colorVariants.link.danger, colorVariants.linkHover.danger],
    },
  ],
});
