import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ReviewCommentList } from '../review-comment-list';

fdescribe('ReviewCommentList', () => {
  const mockReviews = [
    {
      alias: 'User1',
      date: new Date('2024-03-01'),
      headline: 'Great Product',
      comment: 'Awesome experience!',
      rating: 5,
    },
    {
      alias: 'User2',
      date: new Date('2024-02-28'),
      headline: 'Good Product',
      comment: 'Works well.',
      rating: 4,
    },
    {
      alias: 'User3',
      date: new Date('2024-02-27'),
      headline: 'Okay Product',
      comment: 'Could be better.',
      rating: 3,
    },
  ];

  it('renders review cards', () => {
    const { getAllByTestId } = render(
      <ReviewCommentList numberOfReviews={3} initialReviews={mockReviews} />,
    );
    expect(getAllByTestId('review-comment-card')[0]).toBeInTheDocument();
  });

  it('shows more reviews when "Show More" button is clicked', () => {
    const { getByTestId, getAllByTestId } = render(
      <ReviewCommentList initialReviews={mockReviews} numberOfReviews={3} />,
    );
    const showMoreButton = getByTestId('show-more-button');

    fireEvent.click(showMoreButton);

    expect(getAllByTestId('review-comment-card', { exact: false }).length).toBe(3);
  });
});
