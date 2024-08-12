import { render, screen } from '@testing-library/react';
import { ReviewCommentCard } from '../review-comment-card';

describe('ReviewCommentCard', () => {
  it('renders with provided props', () => {
    const props = {
      author: 'John Doe',
      date: '2024-02-27',
      title: 'Test Title',
      description: 'Test Description',
      rating: 5,
      id: '1',
      showMoreText: 'Show more',
      showLessText: 'Show less',
    };

    render(<ReviewCommentCard {...props} />);

    expect(screen.getByText(props.author)).toBeInTheDocument();
    expect(screen.getByText(props.date)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });
});
