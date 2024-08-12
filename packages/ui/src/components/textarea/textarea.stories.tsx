import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Label } from '../label';
import { Textarea, TextareaProps } from './textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      description: 'Defines if the textarea is disabled or not.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    value: {
      description: 'Defines the current value of the textarea.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    autoComplete: {
      description: 'Allows autocomplete for the value of the textarea.',
      table: {
        type: { summary: 'string' },
      },
    },
    readOnly: {
      description: 'If is true does not allow to edit the content of the textarea.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      description: 'If is true is required that the textarea have a value.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    cols: {
      description: 'The number of columns in the textarea.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },
    rows: {
      description: 'The number of rows in the textarea.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },
    maxLength: {
      description: 'The maximum number of characters that can be entered in the textarea.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },
    minLength: {
      description: 'The minimum number of characters that can be entered in the textarea.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },

    placeholder: {
      description: 'The placeholder value of the textarea.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    defaultValue: {
      description: 'The default value of the textarea.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<TextareaProps>;

type Story = StoryObj<TextareaProps>;

const TextareaTemplate = (args: TextareaProps) => {
  return <Textarea {...args} placeholder='Type your message here.' id='message' />;
};

const TextareaLabelTemplate = (args: TextareaProps) => {
  return (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='message' className='font-semibold'>
        Your message
      </Label>
      <Textarea {...args} placeholder='Type your message here.' id='message' />
    </div>
  );
};

const TextareaTextTemplate = (args: TextareaProps) => {
  return (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='message-2' className='font-semibold'>
        Your Message
      </Label>
      <Textarea {...args} placeholder='Type your message here.' id='message-2' />
      <p className='text-sm text-neutral'>Your message will be copied to the support team.</p>
    </div>
  );
};

const TextareaColorTemplate = (args: TextareaProps) => {
  return (
    <div className='grid w-full gap-1.5'>
      <Textarea
        {...args}
        placeholder='Type your message here.'
        id='message'
        className='bg-secondary placeholder:text-secondary-foreground'
      />
    </div>
  );
};

export const Default: Story = {
  render: TextareaTemplate,
};

export const WithLabel: Story = {
  render: TextareaLabelTemplate,
};

export const WithText: Story = {
  render: TextareaTextTemplate,
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'This is a default value.',
  },
  render: TextareaTemplate,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: TextareaTemplate,
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'This value cannot be changed.',
  },
  render: TextareaTemplate,
};
