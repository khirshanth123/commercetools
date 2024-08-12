import { ReactNode } from 'react';
// Type definitions

export type LinkTarget = '_blank' | '_parent' | '_self' | '_top';

export type SizeVariant = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface TypeReviewSummaryCard {
  reviews: [];
  footerText?: string;
  buttonText?: string;
  buttonIcon?: ReactNode;
  numberOfReviews?: number;
  textQtyReviews?: string;
  className?: string;
  noReviewsText?: string;
  progressColor?: 'primary' | 'secondary' | 'neutral';
  buttonClassName?: string;
  bordered?: boolean;
  gap?: SizeVariant;
  padding?: SizeVariant;
  radius?: SizeVariant;
  shadow?: SizeVariant;
  summaryStarsLabel?: string;
  summaryStarLabel?: string;
}

export interface TypeReviewCommentCardFields {
  author?: string;
  date?: string;
  title: string;
  rating: number;
  description: string;
  bordered?: boolean;
  padding?: SizeVariant;
  radius?: SizeVariant;
  shadow?: SizeVariant;
  gap?: SizeVariant;
  readMoreText: string;
  readLessText: string;
}