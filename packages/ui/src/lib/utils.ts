import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type ReactRef<T> = React.RefObject<T> | React.MutableRefObject<T> | React.Ref<T>;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Booleanish = boolean | 'true' | 'false';

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? 'true' : undefined) as Booleanish;

export type Timer = ReturnType<typeof setTimeout>;

/**
 * Returns an array of numbers, starting at `start` and ending at `end`.
 * @param start number
 * @param end number
 * @returns number[]
 */
export function range(start: number, end: number) {
  const length = end - start + 1;

  return Array.from({ length }, (_, index) => index + start);
}

/**
 * Returns "true" if the condition is true, undefined if the condition is false or undefined.
 * This function is commonly used for setting HTML data attributes conditionally.
 * @param condition
 */
export const conditionalDataAttribute = (condition: boolean | undefined) =>
  (condition ? 'true' : undefined) as boolean | 'true' | 'false';

/**
 * Rounds the given rating to one decimal place.
 * @param {number} rating - The input rating to be rounded.
 * @returns {number} The rounded rating, or 0 if the input is not a valid number.
 */
export const getRoundedRating = (rating: number): number => {
  if (isNaN(rating) || rating === 0) return 0;
  return +rating.toFixed(1);
};

/**
 * Checks if the current environment is a touch-enabled device.
 * @returns {boolean} Returns true if the device is touch-enabled, otherwise false.
 */
export const isTouchDevice = () => {
  return (
    typeof window !== 'undefined' &&
    (window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0))
  );
};

/**
 * Format Date: (Month, day Year)
 * @returns {string} Date formatted.
 */
export function formatDate(dateString: Date): string {
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return formattedDate;
}
