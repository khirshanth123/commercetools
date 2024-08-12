import { ChatBubbleIcon } from '@sap-commerce-next/icons';
import type { Meta, StoryObj } from '@storybook/react';
import type { TypeReviewSummaryCard } from '../../../../core';
import { Dialog } from '../dialog';
import { SummaryRatingCard } from './summary-rating-card';

const data: TypeReviewSummaryCard = {
  averageRating: 4.2,
  reviews: [
    {
      id: '1',
      rating: 1,
    },
    {
      id: '2',
      rating: 2,
    },
    {
      id: '3',
      rating: 3,
    },
    {
      id: '4',
      rating: 3,
    },
    {
      id: '4',
      rating: 4,
    },
    {
      id: '5',
      rating: 5,
    },
    {
      id: '5',
      rating: 5,
    },
    {
      id: '5',
      rating: 5,
    },
    {
      id: '5',
      rating: 5,
    },
    {
      id: '5',
      rating: 5,
    },
  ],
};

export default {
  title: 'Components/Summary Rating',
  component: SummaryRatingCard,
  tags: ['autodocs'],
  argTypes: {
    averageRating: {
      description: 'Average Rating of the reviews',
      control: { type: 'number' },
      table: {
        description: 'Average Rating of the reviews',
      },
    },
    reviews: {
      description: 'Array of reviews',
      control: { type: 'Array' },
      table: {
        table: {
          description: { summary: 'Array of reviews' },
          type: { summary: 'Array' },
          defaultValue: { summary: [] },
        },
      },
    },
    footerText: {
      description: 'Text that is placed in the footer of the card',
      control: { type: 'text' },
      table: {
        description: 'Text that is placed in the footer of the card',
      },
    },
    buttonText: {
      description: 'Text that is placed in the write review button',
      control: { type: 'text' },
      table: {
        description: 'Text that is placed in the write review button',
      },
    },
    textQtyReviews: {
      description: 'Text that shows the quantity of reviews',
      control: { type: 'text' },
      table: {
        description: 'Text that shows the quantity of reviews',
      },
    },
    bordered: {
      description: 'Whether to add border to the card',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    padding: {
      description: 'Content Card Padding',
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      defaultValue: { summary: 'none' },
    },
    gap: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The gap between the header, content and footer',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    radius: {
      description: 'Content Card Radius',
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      defaultValue: { summary: 'none' },
    },
    shadow: {
      description: 'Content Card Shadow',
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      defaultValue: { summary: 'none' },
    },
    cardClassName: {
      description: 'Additional CSS classes to add to the card',
    },
    progressColor: {
      description: 'Color of the progress bar',
      control: 'select',
      options: ['primary', 'secondary', 'neutral'],
    },
    buttonClassName: {
      description: 'Additional CSS classes to add to the button',
    },
  },
  render: (args: TypeReviewSummaryCard) => (
    <div className='w-full md:w-1/2 lg:w-1/3 '>
      <Dialog>
        <SummaryRatingCard {...args} />
      </Dialog>
    </div>
  ),
} as Meta<TypeReviewSummaryCard>;

type Story = StoryObj<typeof SummaryRatingCard>;

/** Default Summary Rating Card. */
export const Default: Story = {
  args: {
    averageRating: data.averageRating,
    reviews: data.reviews,
    textQtyReviews: `Based on ${data.reviews.length} reviews`,
    numberOfReviews: 10,
    footerText: 'Share your experience with us',
    buttonText: 'Write a review',
    summaryStarsLabel: 'stars',
    summaryStarLabel: 'star',
  },
};

/** Summary Rating Card Without Border. */
export const WithoutBorder: Story = {
  args: {
    averageRating: data.averageRating,
    reviews: data.reviews,
    textQtyReviews: `Based on ${data.reviews.length} reviews`,
    bordered: false,
    shadow: 'none',
    numberOfReviews: 10,
    footerText: 'Share your experience with us',
    buttonText: 'Write a review',
    summaryStarsLabel: 'stars',
    summaryStarLabel: 'star',
  },
};

/** Summary Rating Card Without Button. */
export const WithoutButton: Story = {
  args: {
    averageRating: data.averageRating,
    reviews: data.reviews,
    textQtyReviews: `Based on ${data.reviews.length} reviews`,
    numberOfReviews: 10,
    footerText: 'Share your experience with us',
    buttonText: 'Write a review',
    summaryStarsLabel: 'stars',
    summaryStarLabel: 'star',
  },
};

/** Summary Rating Card With Custom Button Icon. */
export const WithCustomButtonIcon: Story = {
  args: {
    averageRating: data.averageRating,
    reviews: data.reviews,
    textQtyReviews: `Based on ${data.reviews.length} reviews`,
    buttonIcon: <ChatBubbleIcon />,
    numberOfReviews: 10,
    footerText: 'Share your experience with us',
    buttonText: 'Write a review',
    summaryStarsLabel: 'stars',
    summaryStarLabel: 'star',
  },
};

/** Summary Rating Card With Primary Color. */
export const WithPrimaryColor: Story = {
  args: {
    averageRating: data.averageRating,
    reviews: data.reviews,
    textQtyReviews: `Based on ${data.reviews.length} reviews`,
    progressColor: 'primary',
    numberOfReviews: 10,
    footerText: 'Share your experience with us',
    buttonText: 'Write a review',
    summaryStarsLabel: 'stars',
    summaryStarLabel: 'star',
  },
};

/** Summary Rating Card With No Reviews. */
export const noReviews: Story = {
  args: {
    averageRating: 0,
    reviews: [],
    textQtyReviews: `Based on ${data.reviews.length} reviews`,
    progressColor: 'primary',
    numberOfReviews: 0,
    footerText: 'Share your experience with us',
    buttonText: 'Write a review',
    summaryStarsLabel: 'stars',
    summaryStarLabel: 'star',
  },
};
