'use client';

import { Meta, StoryObj } from '@storybook/react';
import { ReviewCommentCard } from './review-comment-card';

export default {
  title: 'Components/ReviewCommentCard',
  component: ReviewCommentCard,
  tags: ['autodocs'],
  argTypes: {
    author: {
      description: 'Author of the comment',
      control: { type: 'text' },
      table: {
        type: { summary: 'text' },
      },
    },
    date: {
      description: 'Date when the comment was written',
      control: { type: 'text' },
      table: {
        type: { summary: 'text' },
      },
    },
    title: {
      description: 'Title of the comment',
      control: { type: 'text' },
      table: {
        type: { summary: 'text' },
      },
    },
    rating: {
      description: 'Rating of the review',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },
    description: {
      description: 'Description of the comment',
      control: { type: 'text' },
      table: {
        type: { summary: 'text' },
      },
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
  },
  render: (args) => {
    return <ReviewCommentCard {...args} />;
  },
} as Meta<typeof ReviewCommentCard>;

type Story = StoryObj<typeof ReviewCommentCard>;

/** Default Review Comment Card. */
export const Default: Story = {
  args: {
    author: 'John Doe',
    date: 'August 1, 2021',
    title: 'Great product',
    rating: 5,
    description:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
    showMoreText: 'show more',
    showLessText: 'show less',
  },
};

/** Review Comment Card Without Border */
export const WithoutBorder: Story = {
  args: {
    author: 'John Doe',
    date: 'August 1, 2021',
    title: 'Great product',
    rating: 5,
    description:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
    bordered: false,
    shadow: 'none',
    showMoreText: 'show more',
    showLessText: 'show less',
  },
};

/** Review Comment Card With Shadow */
export const WithShadow: Story = {
  args: {
    author: 'John Doe',
    date: 'August 1, 2021',
    rating: 5,
    title: 'Great product',
    description:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
    shadow: 'xl',
    showMoreText: 'show more',
    showLessText: 'show less',
  },
};

/** Review Comment Card With Custom Radius*/
export const WithCustomRadius: Story = {
  args: {
    author: 'John Doe',
    date: 'August 1, 2021',
    title: 'Great product',
    rating: 5,
    description:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
    radius: 'xxl',
    showMoreText: 'show more',
    showLessText: 'show less',
  },
};

/** Review Comment Card With Custom BackgroundColor*/
export const WithCustomBackgroundColor: Story = {
  args: {
    author: 'John Doe',
    date: 'August 1, 2021',
    title: 'Great product',
    rating: 5,
    description:
      'Arcu dui vivamus arcu felis bibendum. Amet tellus cras adipiscing enim eu turpis egestas pretium.',
    className: 'bg-primary-50',
    showMoreText: 'show more',
    showLessText: 'show less',
  },
};

export const ShowMoreButton: Story = {
  args: {
    author: 'John Doe',
    date: 'August 1, 2021',
    rating: 4,
    title: 'Great product',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    showMoreText: 'show more',
    showLessText: 'show less',
  },
};
