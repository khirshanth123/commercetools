import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    modal: {
      description:
        'The modality of the dialog. When set to `true`, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.',
      options: [true, false],
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    defaultOpen: {
      description:
        'The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.',
      options: [true, false],
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  render: (args) => {
    return (
      <Dialog modal={args.modal} defaultOpen={args.defaultOpen}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  },
} as Meta<typeof Dialog>;

type Story = StoryObj<typeof Dialog>;

/** Dialog variant with blurry background. */
export const Default: Story = {
  args: {
    modal: true,
    defaultOpen: false,
  },
};

/** Non-modal variant with not blurry background. */
export const NonModal: Story = {
  args: {
    modal: false,
    defaultOpen: false,
  },
};

/** Dialog with custom background. */
export const CustomOverlayColor: Story = {
  args: {
    modal: true,
    defaultOpen: false,
  },
  render: (args) => {
    return (
      <Dialog modal={args.modal} defaultOpen={args.defaultOpen}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent overlayClassName='bg-secondary'>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  },
};
