import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ItemCounter, ItemCounterProps } from './item-counter';

export default {
  title: 'Components/Item Counter',
  component: ItemCounter,
  tags: ['autodocs'],
  argTypes: {
    readonly: {
      description: 'Whether the input is readonly or not.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    initialValue: {
      description: 'The initial value of the counter.',
      control: 'number',
      table: {
        type: { summary: 'number' },
      },
    },
    min: {
      description: 'Specifies the minimum value that the counter can have.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
    },
    max: {
      description: 'Specifies the maximum value that the counter can have.',
      control: 'number',
      table: {
        type: { summary: 'number' },
      },
    },
    step: {
      description: 'Indicates the increment/decrement step when users interact with the counter.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
    },
    size: {
      description: 'The size of the counter.',
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg', 'xl'],
      table: {
        type: { summary: 'sm | md | lg | xl' },
        defaultValue: { summary: 'sm' },
      },
    },
    color: {
      description: 'The color of the counter buttons.',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral', 'info', 'success', 'warning', 'danger'],
      table: {
        type: { summary: 'primary | secondary | neutral | info | success | warning | danger' },
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      description: 'Defines the visual style of the counter.',
      control: { type: 'inline-radio' },
      options: ['flat', 'rounded'],
      table: {
        type: { summary: 'flat | rounded' },
        defaultValue: { summary: 'flat' },
      },
    },
    className: {
      description: 'Additional CSS classes to add to the component.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    initialValue: undefined,
    max: undefined,
    min: 1,
    step: 1,
    color: 'primary',
    size: 'sm',
    variant: 'flat',
    readonly: false,
    className: '',
  },
  render: (args: ItemCounterProps) => <ItemCounter {...args} />,
} satisfies Meta<typeof ItemCounter>;

type Story = StoryObj<typeof ItemCounter>;

export const Default: Story = {};
