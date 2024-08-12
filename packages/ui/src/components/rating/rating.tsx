'use client';

import React, { useMemo, useState } from 'react';
import { StarFilledIcon } from '@repo/icons';
import { cn, getRoundedRating, isTouchDevice } from '../../lib';

export interface RatingProps {
  onChange?: (value: number) => void;
  className?: string;
  initialValue?: number;
  iconsCount?: number;
  readonly?: boolean;
  iconSize?: number;
}

export const Rating = ({
  onChange,
  className,
  initialValue = 0,
  iconsCount = 5,
  iconSize = 24,
  readonly = false,
}: RatingProps) => {
  const [ratingValue, setRatingValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(0);

  const localRating = useMemo(() => {
    if (initialValue > iconsCount) return 0;
    return Math.round((initialValue * 100) / iconsCount);
  }, [initialValue, iconsCount]);

  const handlePointerMove = (event: React.MouseEvent) => {
    const { clientX, currentTarget } = event;
    const { left } = currentTarget?.getBoundingClientRect();

    if (clientX) {
      const positionX = clientX - left;
      const currentValue = Math.ceil(positionX / iconSize);
      const percentageValue = (currentValue * 100) / iconsCount;

      setHoverValue(percentageValue);

      if (isTouchDevice()) {
        setRatingValue(percentageValue);
        if (onChange) onChange(currentValue);
      }
    }
  };

  const handlePointerLeave = () => {
    setHoverValue(ratingValue);
  };

  const handleClick = () => {
    if (hoverValue) {
      setRatingValue(hoverValue);
      if (onChange) onChange((hoverValue * iconsCount) / 100);
    }
  };

  const valuePercentage = useMemo(
    () => getRoundedRating(hoverValue || ratingValue || localRating),
    [hoverValue, ratingValue, localRating],
  );

  const handlePointerEvents = readonly
    ? {}
    : {
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
      onClick: handleClick,
    };

  return (
    <div
      className={cn(
        'relative inline-block overflow-hidden whitespace-nowrap align-middle select-none touch-none -ml-1',
        readonly ? '' : 'cursor-pointer',
        className,
      )}
      {...handlePointerEvents}
      aria-hidden='true'
      data-testid='rating-container'
    >
      <span className='inline-block text-neutral'>{renderIcons(iconsCount, iconSize)}</span>

      <span
        className='absolute left-0 top-0 overflow-hidden inline-block whitespace-nowrap text-secondary transition-all'
        style={{ width: `${valuePercentage}%` }}
        data-testid='filled-icons'
      >
        {renderIcons(iconsCount, iconSize)}
      </span>
    </div>
  );
};

const renderIcons = (iconsCount: number, iconSize: number) => {
  return [...Array(iconsCount)].map((_, index) => (
    <StarFilledIcon
      key={index}
      className='inline-block'
      width={iconSize}
      height={iconSize}
      data-testid='star-icon'
    />
  ));
};
