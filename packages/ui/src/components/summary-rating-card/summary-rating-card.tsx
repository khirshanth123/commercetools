'use client';

import { StarFilledIcon } from '@repo/icons';
import { EditIcon } from '@repo/icons';
import type { TypeReviewSummaryCard } from '../../../../core';
import { cn } from '../../lib';
import { Button } from '../button';
import { Card, CardContent, CardFooter, CardHeader } from '../card';
import { Progress } from '../progress';

export type SummaryRatingCardProps = TypeReviewSummaryCard & {
  handleButtonClick?: () => void;
  maxRating?: number;
};

const SummaryRatingFooter = ({
  footerText,
  buttonText,
  buttonClassName,
  buttonIcon,
  handleButtonClick,
}: Partial<SummaryRatingCardProps>) => {
  return (
    <CardFooter>
      <div className='flex w-full flex-col gap-4'>
        {buttonText && (
          <Button
            color='neutral'
            onClick={handleButtonClick}
            radius='full'
            size='md'
            spinnerPlacement='start'
            startContent={buttonIcon ? buttonIcon : <EditIcon />}
            variant='bordered'
            className={cn('border-2', buttonClassName)}
          >
            {buttonText}
          </Button>
        )}
        {footerText && <p className='px-2 text-sm text-neutral-500'>{footerText}</p>}
      </div>
    </CardFooter>
  );
};

export const SummaryRatingCard = ({
  reviews,
  footerText,
  buttonText,
  textQtyReviews,
  gap = 'sm',
  padding,
  radius = 'xl',
  shadow,
  bordered,
  className,
  progressColor = 'secondary',
  buttonClassName,
  buttonIcon,
  noReviewsText = 'No reviews yet',
  numberOfReviews = 0,
  summaryStarsLabel,
  summaryStarLabel,
  maxRating = 5,
  handleButtonClick,
}: SummaryRatingCardProps) => {


  // Calculate average rating
  const averageRating = reviews.reduce((acc, review: any) => acc + review.rating, 0) / numberOfReviews || 0;

  // Calculate rating percentage distribution
  const ratingCount = Array(5).fill(0);
  reviews.forEach((review: any) => {
    ratingCount[review.rating - 1]++;
  });
  const ratingPercentage = ratingCount.map((count, index) => ({
    star: index + 1,
    percentage: (count / numberOfReviews) * 100
  }));

  return (
    <Card
      radius={radius}
      bordered={bordered}
      shadow={shadow}
      gap={gap}
      padding={padding}
      className={className}
    >
      {numberOfReviews > 0 ? (
        <>
          {averageRating > 0 && (
            <CardHeader className='items-center gap-2 flex-row'>
              <StarFilledIcon className={`inline-block fill-secondary`} width={24} height={24} />
              <span className='text-large font-semibold'>{averageRating.toFixed(1)}</span>
              <span className='text-neutral-500'>• ({numberOfReviews} reviews)</span>
            </CardHeader>
          )}
          <CardContent className='mb-2 flex flex-col gap-2'>
            {ratingPercentage.map((review, index) => (
              review.percentage > 0 && (
                <div key={index} className='flex flex-col gap-2 w-full'>
                  <div className='flex justify-between'>
                    <span className='text-sm'>
                      {review.star === 1
                        ? `${review.star} Star`
                        : `${review.star} Stars`}
                    </span>
                    <span>{review.percentage.toFixed(1)}%</span>
                  </div>
                  <Progress
                    color={progressColor}
                    value={review.percentage}
                    className='p-0 [&>div]:bg-neutral-100'
                  />
                </div>
              )
            ))}
          </CardContent>
          <SummaryRatingFooter
            footerText={footerText}
            buttonText={buttonText}
            buttonClassName={buttonClassName}
            buttonIcon={buttonIcon}
            handleButtonClick={handleButtonClick}
          />
        </>) : (
        <>
          <CardHeader>
            <div className='flex items-center gap-2'>
              <StarFilledIcon className='inline-block fill-neutral' width={24} height={24} />
              <span className='text-large font-semibold'>{noReviewsText}</span>
            </div>
          </CardHeader>
          <SummaryRatingFooter
            footerText={footerText}
            buttonText={buttonText}
            buttonClassName={buttonClassName}
            buttonIcon={buttonIcon}
            handleButtonClick={handleButtonClick}
          />
        </>
      )}
    </Card>
  );
};

SummaryRatingCard.displayName = 'ContentCard';
