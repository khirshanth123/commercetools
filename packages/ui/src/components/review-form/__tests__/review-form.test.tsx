import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { ReviewForm, ReviewFormProps } from '../review-form';

describe('ReviewForm', () => {
  const defaultProps: ReviewFormProps = {
    commentError: 'Comment',
    commentPlaceholder: 'commentPlaceholder',
    ratingError: 'ratingError',
    titleError: 'titleError',
    titlePlaceholder: 'titlePlaceholder',
    toastErrorDescription: 'toastErrorDescription',
    toastErrorTitle: 'toastErrorTitle',
    toastSuccessDescription: 'toastSuccessDescription',
    toastSuccessTitle: 'toastSuccessTitle',
    productSKU: 'test-sku',
    formTitle: 'Review Form',
    formSubtitle: 'Please fill out the review form',
    ratingLabel: 'Rating',
    buttonText: 'Submit Review',
    setOpen: jest.fn(),
  };

  it('renders without crashing', () => {
    render(<ReviewForm {...defaultProps} />);
  });

  it('submits form data correctly', async () => {
    const addReviewMock = jest.fn(() => Promise.resolve({ success: true }));
    jest.mock('../../../../core', () => ({
      addReview: addReviewMock,
    }));

    const { getByText, getByPlaceholderText } = render(<ReviewForm {...defaultProps} />);

    fireEvent.change(getByPlaceholderText('Enter title...'), { target: { value: 'Test Title' } });
    fireEvent.change(getByPlaceholderText('Enter your review...'), {
      target: { value: 'Test review content' },
    });

    fireEvent.click(getByText('Submit Review'));

    await waitFor(() => {
      expect(addReviewMock).toHaveBeenCalledWith('test-sku', {
        headline: 'Test Title',
        comment: 'Test review content',
        rating: 0, // Default rating value
      });
    });
  });
});
