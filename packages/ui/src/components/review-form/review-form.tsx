'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-dropdown-menu';
import { toast } from 'sonner';
import { z } from 'zod';
import { addReview } from '../../../../core/actions';
import { cn } from '../../lib';
import { Button } from '../button';
import { DialogContent, DialogHeader } from '../dialog';
import { Input } from '../input';
import { Rating } from '../rating';
import { Textarea } from '../textarea';
import { ReviewFormSchema } from './review-form-schema';

export interface ReviewFormProps {
  className?: string;
  formTitle: string;
  formSubtitle: string;
  ratingLabel?: string;
  buttonText: string;
  titlePlaceholder: string;
  commentPlaceholder: string;
  overlayClassName?: string;
  productSKU: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  ratingError: string;
  titleError: string;
  commentError: string;
  toastErrorTitle: string;
  toastErrorDescription: string;
  toastSuccessTitle: string;
  toastSuccessDescription: string;
}
interface ReviewData {
  id: string;
  headline: string;
  comment: string;
  rating: number;
}
export const ReviewForm = ({
  className,
  formTitle,
  formSubtitle,
  ratingLabel,
  buttonText,
  titlePlaceholder = '',
  commentPlaceholder = '',
  overlayClassName,
  productSKU,
  setOpen,
  ratingError,
  titleError,
  commentError,
  toastErrorTitle,
  toastErrorDescription,
  toastSuccessTitle,
  toastSuccessDescription,
}: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = ReviewFormSchema(titleError, commentError, ratingError);

  type Fields = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Fields>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    setValue('rating', rating);
  }, [rating, setValue]);

  const processForm: SubmitHandler<Fields> = async (data) => {
    setIsLoading(true);
    const { headline, comment, rating } = data
    let obj = { headline, comment, rating, id: productSKU }
    const result = await addReview(obj);

    setRating(0);
    reset();
    setValue('headline', '');

    if (setOpen) {
      setOpen(false);
    }
    setIsLoading(false);

    if (!result.success) {
      toast.error(toastErrorTitle, { description: toastErrorDescription });
      return;
    }

    toast.success(toastSuccessTitle, { description: toastSuccessDescription });
  };

  return (
    <DialogContent
      className={cn('max-h-screen overflow-auto p-6', className)}
      overlayClassName={overlayClassName}
    >
      <DialogHeader>
        <div className='flex flex-initial font-semibold flex-col text-left'>
          <h1 className='text-lg font-semibold'>{formTitle}</h1>
          <p className='text-sm font-normal text-neutral-400'>{formSubtitle}</p>
        </div>
      </DialogHeader>

      <form onSubmit={handleSubmit(processForm)} className='flex flex-col gap-6'>
        <div>
          {ratingLabel && <Label>{ratingLabel}</Label>}
          <div>
            <Rating iconSize={40} initialValue={rating} onChange={setRating} />
            <input {...register('rating')} hidden />
            {rating <= 0 && errors.rating?.message && (
              <p className='text-sm mt-1 text-danger'>{errors.rating.message}</p>
            )}
          </div>
        </div>
        <Input
          size='sm'
          placeholder={titlePlaceholder}
          value={getValues('headline') || ''}
          errorMessage={errors.headline?.message ? errors.headline.message : ''}
          validationState={errors.headline?.message ? 'invalid' : 'valid'}
          {...register('headline')}
        />

        <div className='flex flex-col gap-2'>
          <Textarea
            placeholder={commentPlaceholder}
            {...register('comment')}
            validationState={errors.comment?.message ? 'invalid' : 'valid'}
          />
          {errors.comment?.message && (
            <p className='text-sm text-danger'>{errors.comment?.message}</p>
          )}
        </div>

        <Button
          size='md'
          type='submit'
          radius='lg'
          isLoading={isLoading}
          disabled={isLoading}
          className=''
        >
          {buttonText}
        </Button>
      </form>
    </DialogContent>
  );
};

ReviewForm.displayName = 'ReviewForm';
