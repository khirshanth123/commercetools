import React from 'react';
import { AddIcon, CheckIcon } from '@sap-commerce-next/icons';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'The icon to be displayed when the checkbox is checked',
    },
    isReadOnly: {
      description: 'Whether the input can be selected but not changed by the user',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      description: 'The size of the checkbox',
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      defaultValue: { summary: 'md' },
    },
    color: {
      description: 'The color of the checkbox',
      options: ['primary', 'neutral', 'success', 'warning', 'danger'],
      control: { type: 'select' },
      defaultValue: { summary: 'primary' },
    },
    checked: {
      description: 'Whether the checkbox is checked',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      description: 'Whether the checkbox is disabled',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    required: {
      description: 'Whether user input is required on the input before form submission',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    name: {
      description: 'The name of the input element, used when submitting an HTML form',
      control: { type: 'text' },
      table: {
        type: { summary: 'text' },
      },
    },
    value: {
      description: 'The value of the input element, used when submitting an HTML form',
      control: { type: 'text' },
      table: {
        type: { summary: 'text' },
      },
    },
    asChild: {
      description:
        'Change the default rendered element for the one passed as a child, merging their props and behavior.',
    },
  },
  render: (args) => (
    <Checkbox
      icon={args.icon}
      value={args.value}
      size={args.size}
      required={args.required}
      name={args.name}
      disabled={args.disabled}
      isReadOnly={args.isReadOnly}
      color={args.color}
      checked={args.checked}
    />
  ),
} as Meta<typeof Checkbox>;

const ColorTemplate = () => {
  return (
    <div className='flex flex-row gap-4 items-center'>
      <Checkbox color='primary' />
      <Checkbox color='neutral' />
      <Checkbox color='success' />
      <Checkbox color='warning' />
      <Checkbox color='danger' />
    </div>
  );
};

const SizeTemplate = () => {
  return (
    <div className='flex flex-row gap-4 items-center'>
      <Checkbox size='sm' />
      <Checkbox size='md' />
      <Checkbox size='lg' />
    </div>
  );
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
};

export const Colors: Story = {
  render: ColorTemplate,
};

export const Sizes: Story = {
  render: SizeTemplate,
};

export const CustomIcon: Story = {
  args: {
    icon: <AddIcon />,
    size: 'md',
    color: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    size: 'md',
    color: 'primary',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    icon: <CheckIcon />,
    size: 'md',
    color: 'primary',
    disabled: true,
    checked: true,
  },
};

export const Checked: Story = {
  args: {
    size: 'md',
    color: 'primary',
    checked: true,
  },
};
