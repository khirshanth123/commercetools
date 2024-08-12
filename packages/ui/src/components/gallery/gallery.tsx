'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import type { Swiper } from 'swiper/types';
import { Carousel, CarouselNavPosition, CarouselSlide } from '../carousel';
import { GallerySkeleton } from './gallery-skeleton';
import type { GalleryProps } from './types';

const SLIDES_PER_VIEW = 8;

export const Gallery = ({ images, thumbnails }: GalleryProps) => {
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [thumbsCarouselInstance, setThumbsCarouselInstance] = useState<Swiper | null>(null);
  const imageGalleryRef = useRef<HTMLDivElement>(null);
  const thumbnailsWrapperRef = useRef<HTMLDivElement>(null);
  const thumbsId = 'galleryThumbnails' + useId().replace(/:/g, '');

  const thumbsCarouselEvents = {
    afterInit: setThumbsCarouselInstance,
    setTranslate: ({ isBeginning, isEnd }: Swiper) => {
      setIsBeginning(isBeginning);
      setIsEnd(isEnd);
    },
  };

  useEffect(() => {
    const imageGallery = imageGalleryRef.current;
    const thumbnailsWrapper = thumbnailsWrapperRef.current;

    if (!thumbsCarouselInstance || !imageGallery || !thumbnailsWrapper) return;

    const galleryImageResizeObserver = new ResizeObserver(([entry]) => {
      const galleryContentHeight = entry.contentRect.height;
      thumbnailsWrapper.style.setProperty('--thumbnails-height', `${galleryContentHeight}px`);
      thumbsCarouselInstance.params.spaceBetween =
        (galleryContentHeight - thumbnailsWrapper.clientWidth * SLIDES_PER_VIEW) /
        (SLIDES_PER_VIEW - 1);
      thumbsCarouselInstance.update();
    });

    galleryImageResizeObserver.observe(imageGallery);

    return () => {
      galleryImageResizeObserver.disconnect();
    };
  }, [thumbsCarouselInstance]);

  return (
    <>
      {!thumbsCarouselInstance && <GallerySkeleton />}

      <div className='lg:grid lg:grid-cols-8 lg:gap-6'>
        {thumbsCarouselInstance && images.length && (
          <div
            ref={imageGalleryRef}
            className='aspect-square [&_.carousel-wrapper]:w-full [&_.carousel-wrapper]:p-0 [&_.navigation-container]:bottom-4 [&_.navigation-container]:right-8 [&_.navigation-container]:space-x-3 [&_.navigation-container]:hidden [&_.navigation-button]:bg-background [&_.navigation-button]:size-12 [&_.navigation-button:hover]:ring-1 [&_.navigation-button:hover]:ring-neutral-800 [&_.navigation-button]:shadow lg:[&_.navigation-container]:block lg:col-span-7 lg:col-start-2 lg:row-start-1'
          >
            <Carousel
              loop
              navigation
              pagination={images.length > 1}
              navPosition={CarouselNavPosition.BOTTOM_RIGHT}
              slidesPerView={1}
              className='self-center w-full'
              paginationClassName='gap-2 bg-neutral-50 py-8 [&_.swiper-pagination-bullet:not(.swiper-pagination-bullet-active)]:size-1.5 [&_.swiper-pagination-bullet-active]:bg-black [&_.swiper-pagination-bullet-active]:size-2.5 lg:hidden'
              thumbs={{ swiper: `#${thumbsId}` }}
            >
              {images.map((image, index) => (
                <CarouselSlide key={index}>
                  <figure className='block relative w-full aspect-square image-overlay'>
                    <Image
                      fill
                      className='object-contain object-center'
                      alt={image.altText || 'Gallery image'}
                      src={image.url}
                    />
                  </figure>
                </CarouselSlide>
              ))}
            </Carousel>
          </div>
        )}
        <div
          ref={thumbnailsWrapperRef}
          className={
            'h-[--thumbnails-height] hidden relative lg:block col-span-1 col-start-1 row-start-1 max-h-full'
          }
        >
          <Carousel
            freeMode
            id={thumbsId}
            on={thumbsCarouselEvents}
            spaceBetween={8}
            slidesPerView='auto'
            mousewheel={{ forceToAxis: true }}
            direction='vertical'
            className='h-full [&_.carousel-container]:h-full [&_swiper-container]:h-full [&_.carousel-wrapper]:h-full [&_.swiper-slide-thumb-active]:border-black'
          >
            {thumbsCarouselInstance &&
              thumbnails.map((image, index) => (
                <CarouselSlide
                  key={index}
                  className='w-full h-auto aspect-square cursor-pointer rounded-sm border-2 border-transparent'
                >
                  <div className='box-content rounded-sm'>
                    <figure className='block relative w-full aspect-square image-overlay before:hover:opacity-30'>
                      <Image
                        fill
                        className='object-contain position-center'
                        src={image.url}
                        alt={image.altText || 'Thumbnail image'}
                      />
                    </figure>
                  </div>
                </CarouselSlide>
              ))}
          </Carousel>
          {!isBeginning && (
            <div className='absolute inset-x-0 z-10 top-0 h-6 bg-gradient-to-b from-white to-transparent rounded-sm pointer-events-none' />
          )}
          {!isEnd && (
            <div className='absolute inset-x-0 z-10 bottom-0 h-6 bg-gradient-to-t from-white to-transparent rounded-sm pointer-events-none' />
          )}
        </div>
      </div>
    </>
  );
};
