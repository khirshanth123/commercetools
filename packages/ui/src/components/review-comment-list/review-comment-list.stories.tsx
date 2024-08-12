import { Meta, StoryObj } from '@storybook/react';
import { Review } from '../../../../sdk';
import { ReviewCommentList } from './review-comment-list';

const today = new Date();
const oldDate1 = new Date('2020-06-19');
const oldDate2 = new Date('2021-06-19');

const reviews: Review[] = [
  {
    alias: 'John Doe',
    date: oldDate1,
    headline: 'Great product',
    rating: 5,
    comment:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
  },

  {
    alias: 'John Doe',
    date: today,
    headline: 'Regular',
    rating: 3,
    comment:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
  },

  {
    alias: 'John Doe',
    date: today,
    headline: 'Good',
    rating: 4,
    comment:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, thi is a test 123456768, comes from a line in section 1.10.32.',
  },

  {
    alias: 'John Doe',
    date: today,
    headline: 'Great product',
    rating: 5,
    comment:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
  },

  {
    alias: 'John Doe',
    date: today,
    headline: 'Great product',
    rating: 5,
    comment:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
  },

  {
    alias: 'John Doe',
    date: today,
    headline: 'Great product',
    rating: 5,
    comment:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
  },

  {
    alias: 'John Doe',
    date: today,
    headline: 'Great product',
    rating: 5,
    comment:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
  },

  {
    alias: 'John Doe',
    date: today,
    headline: 'Great product',
    rating: 5,
    comment:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
  },
  {
    alias: 'John Doe',
    date: oldDate2,
    headline: 'Great product',
    rating: 1,
    comment:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
  },
  {
    alias: 'John Doe',
    date: today,
    headline: 'Great product',
    rating: 2,
    comment:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
  },
];
export default {
  title: 'Components/ReviewCommentList',
  component: ReviewCommentList,
  tags: ['autodocs'],
  argTypes: {
    initialReviews: {
      description: 'Reviews that are going to be listed.',
    },
    numberOfReviews: {
      description: 'Quantity of reviews.',
    },
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The border-radius of the card.',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    bordered: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
      description: 'Whether to apply border to the card.',
      table: {
        defaultValue: { summary: true },
      },
    },
    shadow: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The box-shadow of the card.',
      defaultValue: 'sm',
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    padding: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The padding of the card.',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    gap: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The gap between the header and footer.',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    className: {
      description: 'Additional CSS classes to add to the card',
    },
    mostRecentLabel: {
      description: 'Most recent sort label',
    },
    topReviewsLabel: {
      description: 'Top reviews sort label',
    },
    criticalReviewsLabel: {
      description: 'Critical reviews sort label',
    },
    allStarsLabel: {
      description: 'all stars filter label',
    },
    starsOnlyLabel: {
      description: 'stars only filter label',
    },
  },
  render: (args) => {
    return <ReviewCommentList {...args} />;
  },
} as Meta<typeof ReviewCommentList>;

type Story = StoryObj<typeof ReviewCommentList>;

/** Default Review Comment Card. */
export const Default: Story = {
  args: {
    initialReviews: reviews.slice(0, 3),
    numberOfReviews: 3,
    mostRecentLabel: 'Most recent',
    topReviewsLabel: 'Top reviews',
    criticalReviewsLabel: 'Critical reviews',
    allStarsLabel: 'All stars',
    starsOnlyLabel: 'stars only',
    showMoreText: 'Show more',
    showLessText: 'Show Less',
  },
};

/** Review Comment List with show more button*/
export const ShowMoreButton: Story = {
  args: {
    initialReviews: reviews,
    numberOfReviews: 10,
    mostRecentLabel: 'Most recent',
    topReviewsLabel: 'Top reviews',
    criticalReviewsLabel: 'Critical reviews',
    allStarsLabel: 'All stars',
    starsOnlyLabel: 'stars only',
    showMoreText: 'Show more',
    showLessText: 'Show Less',
  },
};

/** Review Comment Card Without Border */
export const WithoutBorder: Story = {
  args: {
    initialReviews: reviews,
    numberOfReviews: 10,
    bordered: false,
    className: '[&_.card-footer>div]:mt-0',
    shadow: 'none',
    mostRecentLabel: 'Most recent',
    topReviewsLabel: 'Top reviews',
    criticalReviewsLabel: 'Critical reviews',
    allStarsLabel: 'All stars',
    starsOnlyLabel: 'stars only',
    showMoreText: 'Show more',
    showLessText: 'Show Less',
  },
};

/** Review Comment Card With Shadow */
export const WithShadow: Story = {
  args: {
    initialReviews: reviews,
    numberOfReviews: 10,
    shadow: 'xl',
    mostRecentLabel: 'Most recent',
    topReviewsLabel: 'Top reviews',
    criticalReviewsLabel: 'Critical reviews',
    allStarsLabel: 'All stars',
    starsOnlyLabel: 'stars only',
    showMoreText: 'Show more',
    showLessText: 'Show Less',
  },
};

/** Review Comment Card With Custom Radius*/
export const WithCustomRadius: Story = {
  args: {
    initialReviews: reviews,
    numberOfReviews: 10,
    radius: 'xxl',
    mostRecentLabel: 'Most recent',
    topReviewsLabel: 'Top reviews',
    criticalReviewsLabel: 'Critical reviews',
    allStarsLabel: 'All stars',
    starsOnlyLabel: 'stars only',
    showMoreText: 'Show more',
    showLessText: 'Show Less',
  },
};
