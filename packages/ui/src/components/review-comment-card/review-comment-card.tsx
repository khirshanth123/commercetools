'use client';

import React, { HTMLAttributes, useEffect } from 'react';
import { type TypeReviewCommentCardFields } from '../../../../core';
import { cn } from '../../lib';
import { Button } from '../button';
import { Card, CardContent, CardHeader } from '../card';
import { Rating } from '../rating';

export type ReviewCommentCardProps = HTMLAttributes<HTMLDivElement> & TypeReviewCommentCardFields;

export const ReviewCommentCard = ({
  className,
  radius,
  padding = 'sm',
  gap = 'sm',
  rating,
  shadow,
  bordered,
  author,
  date,
  title,
  description,
  readMoreText,
  readLessText,
}: ReviewCommentCardProps) => {
  const descriptionRef = React.useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isTruncated, setIsTruncated] = React.useState(false);

  useEffect(() => {
    setIsTruncated(
      Boolean(
        descriptionRef.current &&
          descriptionRef.current.scrollHeight > descriptionRef.current.offsetHeight,
      ),
    );
  }, [descriptionRef]);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Card
      radius={radius}
      bordered={bordered}
      shadow={shadow}
      padding={padding}
      className={className}
      gap={gap}
    >
      <CardHeader className='flex-row justify-between items-start gap-y-4'>
        <div className='inline-flex flex-col items-start'>
          {author && <span className='text-sm text-inherit font-medium'>{author} </span>}
          {date && <span className='text-neutral-400 text-sm'> {date} </span>}
        </div>

        <Rating readonly initialValue={rating} />
      </CardHeader>

      <CardContent className='grid w-full mb-4'>
        {title && <p className='font-medium'>{title}</p>}
        {description && (
          <p
            ref={descriptionRef}
            className={cn(
              'text-neutral-400 overflow-hidden max-w-full',
              isExpanded ? 'line-clamp-unset' : 'line-clamp-3',
            )}
          >
            {description}
          </p>
        )}
        {isTruncated && (
          <Button
            color='neutral'
            className='p-0 mr-auto'
            variant='link'
            onClick={toggleExpanded}
            size='sm'
          >
            {isExpanded ? readLessText : readMoreText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

ReviewCommentCard.displayName = 'ReviewCommentCard';
