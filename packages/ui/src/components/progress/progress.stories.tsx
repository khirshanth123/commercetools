import { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

export default {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'The color of the indicator',
      options: ['neutral', 'primary', 'secondary'],
      control: { type: 'select' },
      table: {
        type: { summary: ['neutral', 'primary', 'secondary'] },
        defaultValue: { summary: 'primary' },
      },
    },
    value: {
      description: 'The current value',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 50 },
      },
    },
    minValue: {
      description: 'The smallest value allowed for the input',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    max: {
      description: 'The largest value allowed for the input',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 },
      },
    },
    label: {
      description: "The content to display as the value's label",
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
      },
    },
    size: {
      description: 'The height size for the progress',
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      table: {
        type: {
          summary: ['xs', 'sm', 'md', 'lg'],
        },
        defaultValue: { summary: 'md' },
      },
    },
    getValueLabel: {
      description:
        'Function to get the value label. Signature: `((value: number, max: number) => string) | undefined`',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'undefined' },
      },
    },
    isIndeterminate: {
      description: 'Whether the progress is indeterminate or not',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  render: (args) => {
    return (
      <Progress
        color={args.color}
        value={args.value}
        minValue={args.minValue}
        max={args.max}
        label={args.label}
        getValueLabel={args.getValueLabel}
        size={args.size}
        isIndeterminate={args.isIndeterminate}
      />
    );
  },
} as Meta<typeof Progress>;

type Story = StoryObj<typeof Progress>;

/** Displays only the progress bar. */
export const Primary: Story = {
  args: {
    value: 50,
  },
};

/** Adds a label above the progress bar*/
export const PrimaryWithLabel: Story = {
  args: {
    value: 50,
    label: 'Progress label',
  },
};

/** Adds a custom value label*/
export const CustomValueLabel: Story = {
  args: {
    value: 70,
    label: 'Progress label',
    getValueLabel: (value, max) => `${value} of ${max}`,
  },
};

/** Progress bar with default color*/
export const DefaultColor: Story = {
  args: {
    color: 'neutral',
    value: 50,
  },
};

/** Progress bar with a small size*/
export const CustomSize: Story = {
  args: {
    size: 'sm',
    value: 50,
  },
};

export const isIndeterminate: Story = {
  args: {
    size: 'sm',
    isIndeterminate: true,
  },
};
