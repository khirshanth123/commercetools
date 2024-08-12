import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './select';

export default {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description:
        'The name of the select. Submitted with its owning form as part of a name/value pair.',
      control: { type: 'text' },
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'The value of the select when initially rendered.',
    },
    value: {
      control: { type: 'text' },
      description: 'The controlled value of the select.',
    },
    open: {
      control: 'boolean',
      description: 'The controlled open state of the select.',
    },
    defaultOpen: {
      description: 'The open state of the select when it is initially rendered.',
      control: 'boolean',
      defaultValue: { summary: false },
    },
    dir: {
      control: { type: 'select' },
      options: ['ltr', 'rtl'],
      table: {
        type: { summary: ['ltr', 'rtl'] },
        defaultValue: { summary: 'ltr' },
      },
      description:
        'The reading direction of the select when applicable. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.',
    },
    required: {
      description:
        'When true, indicates that the user must select a value before the owning form can be submitted.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      description: 'When true, prevents the user from interacting with select.',
      control: 'boolean',
      defaultValue: { summary: false },
    },
  },
} as Meta<typeof Select>;

const DefaultSelectTemplate = (args: any) => (
  <Select {...args}>
    <SelectTrigger className='w-[180px]'>
      <SelectValue placeholder='Select a fruit' />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value='apple'>Apple</SelectItem>
        <SelectItem value='banana'>Banana</SelectItem>
        <SelectItem value='blueberry'>Blueberry</SelectItem>
        <SelectItem value='grapes'>Grapes</SelectItem>
        <SelectItem value='pineapple'>Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

type Story = StoryObj<typeof Select>;

/** Default Select. */
export const DefaultSelect: Story = {
  render: DefaultSelectTemplate,
  args: {
    defaultOpen: false,
  },
};

/** Disabled Select. */
export const DisabledSelect: Story = {
  render: DefaultSelectTemplate,
  args: {
    disabled: true,
  },
};
