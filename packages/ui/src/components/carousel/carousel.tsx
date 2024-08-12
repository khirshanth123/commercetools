'use client';

import React, { useEffect, useId, useImperativeHandle, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@repo/icons';
import { cva } from 'class-variance-authority';
import { register } from 'swiper/element/bundle';
import { cn } from '../../lib';
import { Button } from '../button';
import {
  CarouselNavPosition,
  CarouselProps,
  CarouselRef,
  CarouselSlideProps,
  NavigationProps,
} from './types';

// Register Swiper web components
register();

const carouselWrapperVariants = cva('relative cursor-move', {
  variants: {
    headline: { true: '', false: '' },
    navPosition: {
      [CarouselNavPosition.TOP_LEFT]: '',
      [CarouselNavPosition.TOP_RIGHT]: '',
      [CarouselNavPosition.MIDDLE]:
        'static [&_.carousel-container]:relative [&_.carousel-container]:px-10 xl:[&_.carousel-container]:px-12',
      [CarouselNavPosition.BOTTOM_LEFT]: 'pb-8 md:pb-16',
      [CarouselNavPosition.BOTTOM_RIGHT]: 'pb-8 md:pb-16',
    },
  },
  compoundVariants: [
    {
      headline: false,
      navPosition: [CarouselNavPosition.TOP_LEFT, CarouselNavPosition.TOP_RIGHT],
      className: 'pt-8 md:pt-16',
    },
    {
      headline: true,
      navPosition: [CarouselNavPosition.TOP_LEFT],
      className: '[&_.headline]:pl-20',
    },
    {
      headline: true,
      navPosition: [CarouselNavPosition.TOP_RIGHT],
      className: '[&_.headline]:pr-20',
    },
  ],
});

const navigationVariants = cva(
  'absolute space-x-4 z-10 [&>button:disabled]:opacity-30 [&>button:disabled]:cursor-not-allowed [&_svg]:h-4 [&_svg]:w-4 md:[&_svg]:w-6 md:[&_svg]:h-6',
  {
    variants: {
      navPosition: {
        [CarouselNavPosition.TOP_LEFT]: 'top-0 left-0 mr-auto',
        [CarouselNavPosition.TOP_RIGHT]: 'top-0 right-0 ml-auto',
        [CarouselNavPosition.MIDDLE]:
          'top-0 left-0 h-full w-full flex justify-between items-center ',
        [CarouselNavPosition.BOTTOM_LEFT]: 'bottom-0 left-0',
        [CarouselNavPosition.BOTTOM_RIGHT]: 'bottom-0 right-0',
      },
    },
  },
);

export const Carousel = React.forwardRef<CarouselRef | undefined, CarouselProps>((props, ref) => {
  const {
    id,
    className,
    children,
    headline,
    pagination,
    paginationClassName,
    navigation,
    navPosition = CarouselNavPosition.TOP_RIGHT,
    navButtonProps,
    ...restProps
  } = props;
  const carouselRef = useRef<CarouselRef>(null);
  const instanceId = useId().replace(/:/g, '');
  const nextButtonId = `nextButton${instanceId}`;
  const prevButtonId = `prevButton${instanceId}`;
  const paginationId = `pagination${instanceId}`;

  useImperativeHandle(ref, () => carouselRef?.current ?? undefined, [carouselRef]);

  useEffect(() => {
    const carouselContainer = carouselRef?.current;

    if (carouselContainer && !carouselContainer.initialized) {
      const carouselParams = {
        a11y: { enabled: true },
        ...(navigation && {
          navigation: {
            nextEl: `#${nextButtonId}`,
            prevEl: `#${prevButtonId}`,
          },
        }),
        ...(pagination && {
          pagination: {
            ...(typeof pagination === 'object' ? pagination : {}),
            el: `#${paginationId}`,
          },
        }),
        ...restProps,
      };

      Object.assign(carouselContainer, carouselParams);
      carouselContainer.initialize();
    }
  }, [navigation, pagination, nextButtonId, prevButtonId, paginationId, restProps]);

  return (
    <section
      className={cn(
        'carousel-wrapper',
        carouselWrapperVariants(navigation ? { navPosition, headline: !!headline } : {}),
        className,
      )}
      aria-labelledby={`headline${instanceId}`}
      aria-roledescription='Carousel'
    >
      {headline && (
        <h2 className='headline font-bold pb-6 lg:pb-8' id={`headline${instanceId}`}>
          {headline}
        </h2>
      )}
      <div className='carousel-container [&_swiper-container]:z-10'>
        {navigation && (
          <CarouselNavigation
            navPosition={navPosition}
            buttonProps={navButtonProps}
            prevButtonId={prevButtonId}
            nextButtonId={nextButtonId}
          />
        )}
        <swiper-container
          ref={carouselRef}
          id={id}
          init={false}
          role='group'
          aria-label='Carousel slides'
        >
          {children}
        </swiper-container>
        {pagination && (
          <div
            id={paginationId}
            className={cn(
              'flex gap-6 justify-center items-center py-4 [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet:not(.swiper-pagination-bullet-active)]:bg-neutral-300 [&>.swiper-pagination-bullet-active]:bg-secondary',
              paginationClassName,
            )}
          ></div>
        )}
      </div>
    </section>
  );
});
Carousel.displayName = 'Carousel';

const CarouselNavigation = ({
  navPosition,
  prevButtonId,
  nextButtonId,
  buttonProps,
}: NavigationProps) => {
  return (
    <div
      className={cn('navigation-container', navigationVariants({ navPosition }))}
      role='group'
      aria-label='Carousel controls'
    >
      <Button
        type='button'
        id={prevButtonId}
        size='sm'
        variant='light'
        color='neutral'
        radius='full'
        title='Previous slide'
        isIconOnly
        {...buttonProps}
        className={cn('navigation-button', buttonProps?.className)}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        type='button'
        id={nextButtonId}
        size='sm'
        variant='light'
        color='neutral'
        radius='full'
        title='Next slide'
        isIconOnly
        {...buttonProps}
        className={cn('navigation-button', buttonProps?.className)}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
CarouselNavigation.displayName = 'CarouselNavigation';

export const CarouselSlide = ({ className, children, ...restProps }: CarouselSlideProps) => {
  return (
    <swiper-slide class={className} {...restProps}>
      {children}
    </swiper-slide>
  );
};
CarouselSlide.displayName = 'CarouselSlide';
