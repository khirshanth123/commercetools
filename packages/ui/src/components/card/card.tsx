import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib';

const cardVariants = cva('', {
  variants: {
    bordered: {
      true: 'border',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      xxl: 'rounded-2xl',
    },
    shadow: {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      xxl: 'shadow-2xl',
    },
    padding: {
      none: '',
      sm: '[&_.card-header]:p-4 [&_.card-header]:pb-0 [&_.card-content]:px-4 [&_.card-footer]:p-4 [&_.card-footer]:pt-0',
      md: '[&_.card-header]:p-6 [&_.card-header]:pb-0 [&_.card-content]:px-6 [&_.card-footer]:p-6 [&_.card-footer]:pt-0',
      lg: '[&_.card-header]:p-8 [&_.card-header]:pb-0 [&_.card-content]:px-8 [&_.card-footer]:p-8 [&_.card-footer]:pt-0',
      xl: '[&_.card-header]:p-12 [&_.card-header]:pb-0 [&_.card-content]:px-12 [&_.card-footer]:p-12 [&_.card-footer]:pt-0',
      xxl: '[&_.card-header]:p-16 [&_.card-header]:pb-0 [&_.card-content]:px-16 [&_.card-footer]:p-16 [&_.card-footer]:pt-0',
    },
    gap: {
      none: '',
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12',
      xxl: 'gap-16',
    },
  },
  defaultVariants: {
    radius: 'md',
    bordered: true,
    shadow: 'sm',
    padding: 'md',
    gap: 'md',
  },
});

export type CardVariantProps = VariantProps<typeof cardVariants>;

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardVariantProps
>(({ radius, bordered, shadow, padding, gap, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'bg-card text-card-foreground relative overflow-hidden flex flex-col',
      cardVariants({ radius, bordered, shadow, padding, gap }),
      className,
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('card-header flex flex-col gap-y-1.5', className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn('card-title font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('card-description text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'card-label absolute top-0 right-0 bg-neutral-200 px-3 py-1.5 rounded-bl-md text-xs tracking-wide',
        className,
      )}
      {...props}
    />
  ),
);
CardLabel.displayName = 'CardLabel';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('card-content flex-1', className)} {...props} />
  ),
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('card-footer flex items-center', className)} {...props} />
  ),
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardLabel, CardContent };
