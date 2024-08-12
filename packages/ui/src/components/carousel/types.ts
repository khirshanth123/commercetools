import React from 'react';
import type { SwiperContainer } from 'swiper/element';
import type { SwiperProps, SwiperSlideProps } from 'swiper/react';
import type { CSSSelector, Swiper, ThumbsOptions } from 'swiper/types';
import { ButtonProps } from '../button';

type SwiperContainerType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement> & SwiperProps,
  HTMLElement
>;

type SwiperSlideType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
  HTMLElement
> & {
  class?: string;
};

type ThumbsOptionsType = Omit<ThumbsOptions, 'swiper'> & { swiper: Swiper | CSSSelector | null };

export enum CarouselNavPosition {
  TOP_LEFT = 'topLeft',
  TOP_RIGHT = 'topRight',
  BOTTOM_LEFT = 'bottomLeft',
  BOTTOM_RIGHT = 'bottomRight',
  MIDDLE = 'middle',
}

export type CarouselRef = SwiperContainer & { initialized?: boolean };

export interface NavigationProps {
  navPosition: CarouselNavPosition;
  buttonProps?: ButtonProps;
  prevButtonId: string;
  nextButtonId: string;
}

export interface CarouselProps extends Omit<SwiperContainerType, 'thumbs'> {
  headline?: React.ReactNode;
  navigation?: boolean;
  navPosition?: CarouselNavPosition;
  navButtonProps?: ButtonProps;
  thumbs?: ThumbsOptionsType;
  paginationClassName?: string;
}

export interface CarouselSlideProps extends Omit<SwiperSlideType, 'class'> {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': SwiperContainerType;
      'swiper-slide': SwiperSlideType;
    }
  }
}
