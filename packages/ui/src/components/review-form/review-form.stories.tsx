import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import { Dialog, DialogTrigger } from '../dialog';
import { ReviewForm } from './review-form';

export default {
  title: 'Components/Review Form',
  component: ReviewForm,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'className for the review form component',
      control: { type: 'text' },
    },
    formTitle: {
      description: 'title of the form component',
      control: { type: 'text' },
    },
    formSubtitle: {
      description: 'sub-title of the form component',
      control: { type: 'text' },
    },
    ratingLabel: {
      description: 'rating label for the rating component',
      control: { type: 'text' },
    },
    buttonText: {
      description: 'text of the submit button',
      control: { type: 'text' },
    },
    productSKU: {
      description: 'SKU of the product that has the reviews',
      control: { type: 'text' },
    },
    titlePlaceholder: {
      description: 'placeholder for the title input',
      control: { type: 'text' },
    },
    commentPlaceholder: {
      description: 'placeholder for the comment input',
      control: { type: 'text' },
    },
    overlayClassName: {
      description: 'className for the modal overlay',
      control: { type: 'text' },
    },
  },
  render: (args) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className='min-w-28'>Open Review Form</Button>
        </DialogTrigger>
        <ReviewForm productSKU={args.productSKU} {...args} />
      </Dialog>
    );
  },
} as Meta;

type Story = StoryObj<typeof ReviewForm>;

export const Default: Story = {
  args: {
    productSKU: '12234',
    formTitle: 'Write a review',
    formSubtitle: 'Share your experience with this product',
    ratingLabel: 'Rating',
    buttonText: 'Send Review',
    titlePlaceholder: 'Title',
    commentPlaceholder: 'Comment',
  },
};

export const CustomStyles: Story = {
  args: {
    productSKU: '12234',
    className: 'border-2 border-primary radius-10',
    formTitle: 'Write a review',
    formSubtitle: 'Share your experience with this product',
    ratingLabel: 'Rating',
    buttonText: 'Send Review',
    titlePlaceholder: 'Title',
    commentPlaceholder: 'Comment',
  },
};

export const CustomOverlay: Story = {
  args: {
    productSKU: '12234',
    formTitle: 'Write a review',
    formSubtitle: 'Share your experience with this product',
    ratingLabel: 'Rating',
    buttonText: 'Send Review',
    titlePlaceholder: 'Title',
    commentPlaceholder: 'Comment',
    overlayClassName: 'bg-info-50',
  },
};
