import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib';

const containerVariants = cva('mx-auto', {
  variants: {
    gutters: {
      false: '',
      true: 'px-6 lg:px-8',
    },
    maxWidth: {
      false: '',
      true: 'max-w-screen-2xl',
    },
    defaultVariants: {
      gutters: 'true',
      maxWidth: 'true',
    },
  },
});

type ContainerProps = VariantProps<typeof containerVariants> & React.HTMLAttributes<HTMLDivElement>;

const Container = ({
  children,
  className,
  gutters = true,
  maxWidth = true,
  ...props
}: ContainerProps) => {
  return (
    <section className={cn(containerVariants({ gutters, maxWidth }), className)} {...props}>
      {children}
    </section>
  );
};

Container.displayName = 'Container';

export { Container };
