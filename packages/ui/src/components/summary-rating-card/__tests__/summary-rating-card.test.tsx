import { render } from '@testing-library/react';
import { SummaryRatingCard } from '../summary-rating-card';

fdescribe('SummaryRatingCard', () => {
  it('renders with reviews', () => {
    const props = {
      averageRating: 4.5,
      reviews: [{ rating: 5 }, { rating: 4 }, { rating: 3 }, { rating: 4 }, { rating: 5 }],
      footerText: 'Footer Text',
      buttonText: 'Button Text',
    };

    const { getByText } = render(<SummaryRatingCard {...props} />);

    expect(getByText('4.5')).toBeInTheDocument();
    expect(getByText('5 stars')).toBeInTheDocument();
    expect(getByText('Button Text')).toBeInTheDocument();
    expect(getByText('Footer Text')).toBeInTheDocument();
  });

  it('renders without reviews', () => {
    const props = {
      averageRating: 0,
      reviews: [],
      footerText: 'Footer Text',
      buttonText: 'Button Text',
    };

    const { getByText } = render(<SummaryRatingCard {...props} />);

    expect(getByText('No reviews yet')).toBeInTheDocument();
    expect(getByText('Button Text')).toBeInTheDocument();
    expect(getByText('Footer Text')).toBeInTheDocument();
  });
});
