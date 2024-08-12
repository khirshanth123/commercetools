'use client';

import { Toaster as Sonner } from 'sonner';

export type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ position = 'top-right', ...props }: ToasterProps) => {
  return (
    <Sonner
      className='toaster group'
      style={{ '--offset': '1.2rem' } as Record<string, string>}
      closeButton
      position={position}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          error:
            '[&_svg]:fill-danger [&_:not([data-rich-colors=true])_[data-title]]:text-danger-900',
          success: '[&_svg]:fill-success [&_[data-content]_[data-title]]:text-success-900',
          warning: '[&_svg]:fill-warning [&_[data-content]_[data-title]]:text-warning-900',
          info: '[&_svg]:fill-info [&_[data-content]_[data-title]]:text-info-900',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
