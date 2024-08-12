'use client';

import { ReviewCommentList, ReviewForm, SummaryRatingCard } from '@repo/ui';
import { Dialog } from '@repo/ui/src/components/dialog';
import React from 'react';
export type ProductReviewProps = {
  reviews: [];
  numberOfReviews: number;
  productName?: string;
  productSKU?: string;
};

export const ProductReview = ({
  reviews,
  numberOfReviews,
  productSKU,
}: ProductReviewProps) => {
  const [open, setOpen] = React.useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <div className='flex flex-wrap flex-col gap-8 justify-between md:gap-x-16 md:flex-row md:items-start'>
      <h2 className='headline font-bold w-full'>Review</h2>
      <SummaryRatingCard
        className='md:flex-1 md:max-w-[280px] lg:max-w-[350px] xl:max-w-[400px]'
        padding='none'
        reviews={reviews}
        numberOfReviews={numberOfReviews}
        textQtyReviews={'summaryTitle'}
        footerText={'Share your experience with this product'}
        buttonText={'Write a review'}
        bordered={false}
        shadow='none'
        progressColor='secondary'
        summaryStarsLabel={'summaryStar'}
        summaryStarLabel={'summaryStar'}
        handleButtonClick={openDialog}
      />
      <ReviewCommentList
        className="w-full md:flex-1 xl:basis-3/5 xl:grow-0"
        initialReviews={reviews}
        numberOfReviews={numberOfReviews}
        mostRecentLabel="Most Recent"
        topReviewsLabel="Top Reviews"
        criticalReviewsLabel="Critical Reviews"
        allStarsLabel="All Stars"
        starsOnlyLabel="Stars Only"
        readMoreText="Read More"
        readLessText="Read Less"
        loadMoreReviewsText="Load More Reviews"
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <ReviewForm
          formTitle="Write a Review"
          formSubtitle="Share Your Experience"
          buttonText="Submit Review"
          titlePlaceholder="Review Title"
          commentPlaceholder="Review Comment"
          productSKU={productSKU}
          setOpen={setOpen}
          ratingError="Please provide a rating."
          titleError="Title is required."
          commentError="Comment is required."
          toastErrorTitle="Error"
          toastErrorDescription="Something went wrong. Please try again."
          toastSuccessTitle="Success"
          toastSuccessDescription="Your review has been submitted successfully."
        />

      </Dialog>
    </div>
  )
}


