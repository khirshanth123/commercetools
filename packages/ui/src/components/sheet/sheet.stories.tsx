import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

export default {
  title: 'Components/Sheet',
  component: SheetContent,
  tags: ['autodocs'],
  argTypes: {
    asChild: { table: { disable: true } },
    side: {
      description: 'Indicate the side of the screen where the component will appear.',
      options: ['left', 'top', 'bottom', 'right'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'right' },
      },
    },
  },
  render: (args) => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open</Button>
        </SheetTrigger>
        <SheetContent side={args.side}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
} as Meta<typeof SheetContent>;

type Story = StoryObj<typeof SheetContent>;

/** Sheet on the right side of the screen. */
export const Default: Story = {
  args: {
    side: 'right',
  },
};

/** Sheet on the top side of the screen. */
export const Top: Story = {
  args: {
    side: 'top',
  },
};

/** Sheet on the left side of the screen. */
export const Left: Story = {
  args: {
    side: 'left',
  },
};

/** Sheet on the bottom side of the screen. */
export const Bottom: Story = {
  args: {
    side: 'bottom',
  },
};
