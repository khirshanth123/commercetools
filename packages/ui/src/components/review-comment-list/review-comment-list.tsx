'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { SizeVariant } from '../../../../core';
import { cn, formatDate } from '../../lib';
import { Button } from '../button';
import { ReviewCommentCard } from '../review-comment-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';

export interface ReviewListProps {
  initialReviews: [];
  numberOfReviews: number;
  bordered?: boolean;
  padding?: SizeVariant;
  radius?: SizeVariant;
  shadow?: SizeVariant;
  gap?: SizeVariant;
  className?: string;
  mostRecentLabel?: string;
  topReviewsLabel?: string;
  criticalReviewsLabel?: string;
  allStarsLabel?: string;
  starsOnlyLabel?: string;
  readMoreText: string;
  readLessText: string;
  loadMoreReviewsText: string;
}

export const ReviewCommentList = ({
  initialReviews,
  numberOfReviews,
  mostRecentLabel,
  topReviewsLabel,
  criticalReviewsLabel,
  allStarsLabel,
  starsOnlyLabel,
  readMoreText,
  readLessText,
  loadMoreReviewsText,
  className,
  bordered,
  padding = 'sm',
  radius,
  shadow,
}: ReviewListProps) => {
  const MIN_QTY_REVIEWS = 3;
  const [maxQtyReviews, setMaxQtyReviews] = useState(numberOfReviews);
  const initialQtyReviews = Math.min(maxQtyReviews, MIN_QTY_REVIEWS);
  const [currentQtyReviews, setCurrentQtyReviews] = useState(initialQtyReviews);
  const [showMore, setShowMore] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [filterBy, setFilterBy] = useState(0);
  const [sortedReviews, setSortedReviews] = useState<any>(initialReviews);

  const filterByRating = useMemo(() => {
    const filterByRating = [{ value: 0, label: allStarsLabel }];
    const stars = initialReviews.map(({ rating }) => rating);
    const uniqueStars = Array.from(new Set(stars));
    const sortedUnique = uniqueStars.sort((a, b) => b! - a!);

    sortedUnique.forEach((rating) => {
      filterByRating.push({ value: rating!, label: `${rating} ${starsOnlyLabel}` });
    });

    return filterByRating;
  }, [allStarsLabel, initialReviews, starsOnlyLabel]);

  const sortByList = useMemo(() => {
    if (filterBy === 0) {
      return [
        { value: 'date', label: mostRecentLabel },
        { value: 'top', label: topReviewsLabel },
        { value: 'critical', label: criticalReviewsLabel },
      ];
    }
    return [{ value: 'date', label: mostRecentLabel }];
  }, [criticalReviewsLabel, filterBy, mostRecentLabel, topReviewsLabel]);

  const handleFilterChange = (value: string) => {
    setFilterBy(parseInt(value));
  };

  useEffect(() => {
    const sortReviews = (reviews: any) => {
      if (reviews) {
        switch (sortBy) {
          case 'date':
            return [...reviews].sort((a, b) =>
              b.createdAt && a.createdAt ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime() : 0,
            );
          case 'top':
            return [...reviews].sort((a, b) => (b.rating && a.rating ? b.rating - a.rating : 0));
          case 'critical':
            return [...reviews].sort((a, b) => (b.rating && a.rating ? a.rating - b.rating : 0));
          default:
            return reviews;
        }
      }
      return [];
    };

    const filteredReviews =
      filterBy > 0 ? initialReviews.filter((review: any) => review.rating === filterBy) : initialReviews;
    if (filteredReviews) {
      setMaxQtyReviews(filteredReviews.length);
      setShowMore(filteredReviews.length > MIN_QTY_REVIEWS);
      setCurrentQtyReviews(Math.min(filteredReviews.length, MIN_QTY_REVIEWS));
    }
    setSortedReviews(sortReviews(filteredReviews));
  }, [sortBy, initialReviews, filterBy]);

  useEffect(() => {
    if (filterBy > 0) {
      setSortBy('date');
    }
  }, [filterBy]);

  const handleShowMoreReviews = () => {
    const remainingReviews = maxQtyReviews - currentQtyReviews;
    const reviewsToAdd = Math.min(remainingReviews, MIN_QTY_REVIEWS);

    setShowMore(remainingReviews > MIN_QTY_REVIEWS);
    setCurrentQtyReviews((prev) => prev + reviewsToAdd);
  };

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* {numberOfReviews > 0 && (
        <div className='grid gap-2 grid-cols-2 justify-end ml-auto w-full sm:w-auto'>
          <Select name='sort' value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className='border-neutral-100'>
              <SelectValue placeholder={sortBy} />
            </SelectTrigger>
            <SelectContent>
              {sortByList.map((sort, index) => (
                <SelectItem key={index} value={sort.value}>
                  {sort.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select name='filter' value={filterBy.toString()} onValueChange={handleFilterChange}>
            <SelectTrigger className='border-neutral-100'>
              <SelectValue placeholder={filterBy} />
            </SelectTrigger>
            <SelectContent>
              {filterByRating.map((filter, index) => (
                <SelectItem key={index} value={filter.value.toString()}>
                  {filter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )} */}

      {sortedReviews &&
        sortedReviews.slice(0, currentQtyReviews).map((review: any) => (
          <div data-testid='review-comment-card' key={`${review?.id}`}>
            <ReviewCommentCard
              author={review.principal?.name || ''}
              date={formatDate(review.createdAt!)}
              title={review.title || ''}
              description={review.text || ''}
              rating={review.rating || 0}
              readMoreText={readMoreText}
              readLessText={readLessText}
              bordered={bordered}
              padding={padding}
              radius={radius}
              shadow={shadow}
              className={className}
            />
          </div>
        ))}
      <div data-testid='show-more-button' className='flex justify-center w-full'>
        {showMore && (
          <Button
            color='neutral'
            variant='link'
            className='mt-0 font-semibold'
            onClick={handleShowMoreReviews}
          >
            {loadMoreReviewsText}
          </Button>
        )}
      </div>
    </div>
  );
};
