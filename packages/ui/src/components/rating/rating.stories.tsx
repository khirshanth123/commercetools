import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Rating } from './rating';

export default {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    readonly: {
      description: 'Whether the rating is read only',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    initialValue: {
      description: 'The initial rating value',
      control: { type: 'number', max: 5, min: 0 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    iconSize: {
      description: 'The size of the icons in pixels',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 24 },
      },
    },
    onChange: {
      description: 'Callback function to be invoked when the rating changes',
      action: 'changed',
    },
    className: {
      description: 'Additional classes to be added to the component',
      control: { type: 'text' },
    },
    iconsCount: {
      description: 'The number of icons to display',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
    },
  },
  args: {
    iconsCount: 5,
    iconSize: 24,
  },
  render: (args) => {
    return (
      <div className='w-80'>
        <Rating {...args} />
      </div>
    );
  },
} satisfies Meta<typeof Rating>;

type Story = StoryObj<typeof Rating>;

/** Default. */
export const Default: Story = {
  args: {
    readonly: false,
    initialValue: 3,
  },
};

export const ReadOnly: Story = {
  args: {
    readonly: true,
    initialValue: 3,
  },
};

export const RatingWithFraction: Story = {
  args: {
    readonly: true,
    initialValue: 4.5,
  },
};

export const CustomStarSize: Story = {
  args: {
    readonly: true,
    initialValue: 4.5,
    iconSize: 40,
  },
};

export const SetValue: Story = {
  render: function Render() {
    const [rating, setRating] = React.useState(0);

    return (
      <div className='flex flex-row gap-4 items-end'>
        <Rating initialValue={rating} onChange={setRating} />
        <span>{rating}</span>
      </div>
    );
  },
};
