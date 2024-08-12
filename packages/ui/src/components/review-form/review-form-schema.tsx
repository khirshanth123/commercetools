import { z } from 'zod';

export const ReviewFormSchema = (
  headlineValidation: string,
  commentValidation: string,
  ratingValidation: string,
) =>
  z.object({
    headline: z.string().min(1, { message: headlineValidation }),
    comment: z.string().min(1, { message: commentValidation }),
    rating: z.number().min(1, { message: ratingValidation }),
  });
