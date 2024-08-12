import * as React from 'react';
import { SearchIcon } from '@sap-commerce-next/icons';
import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './input';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'The size of the input.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    value: {
      description: 'The current value of the input (controlled).',
      control: 'text',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
    defaultValue: {
      description: 'The default value of the input (uncontrolled).',
      control: 'text',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      description: 'The placeholder text when the input is empty.',
      control: 'text',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
    label: {
      description: 'The label associated to the input.',
      control: 'text',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
    description: {
      description:
        'A description for the input. Provides a hint such as specific requirements for what to choose.',
      control: 'text',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
    errorMessage: {
      description: 'An error message for the input.',
      control: 'text',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
    },
    startContent: {
      description: 'Element to be rendered in the left side of the input.',
      control: 'none',
    },
    endContent: {
      description: 'Element to be rendered in the right side of the input.',
      control: 'none',
    },
    isDisabled: {
      description: 'Whether the input is disabled.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isClearable: {
      description: 'Whether the input should have a clear button.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    showVisibilityToggle: {
      description: 'Whether to show a toggle for password visibility.',
      control: { type: 'boolean' },
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    isRequired: {
      description: 'Whether user input is required on the input before form submission.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    validationState: {
      description: "Whether the textarea should display its 'valid' or 'invalid' visual styling.",
      control: 'inline-radio',
      options: ['valid', 'invalid'],
      table: {
        type: { summary: 'valid | invalid' },
      },
    },
    onClear: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

const InputTemplate = (args: InputProps) => {
  return (
    <div className='flex flex-col h-20 max-w-xs w-full'>
      <Input placeholder='First Name' required {...args} />
    </div>
  );
};

const InputSizesTemplate = (args: InputProps) => {
  return (
    <div className='max-w-xs'>
      <div className='mb-4'>
        <Input size='sm' placeholder='First Name' label='Label' id='name1' {...args} />
      </div>
      <div className='mb-4'>
        <Input size='md' placeholder='First Name' label='Label' id='name2' {...args} />
      </div>
      <div>
        <Input size='lg' placeholder='First Name' label='Label' id='name3' {...args} />
      </div>
    </div>
  );
};

const PasswordInputTemplate = (args: InputProps) => {
  return (
    <div className='flex flex-col h-20 max-w-xs w-full'>
      <Input {...args} />
    </div>
  );
};

export const Default: Story = {
  render: InputTemplate,
};

export const WithLabel: Story = {
  args: {
    label: 'Label',
    id: 'inputWithLabel',
  },
  render: InputTemplate,
};

export const WithLabelRequired: Story = {
  args: {
    label: 'Label',
    id: 'requiredInputWithLabel',
    isRequired: true,
  },
  render: InputTemplate,
};

export const InputSizes: Story = {
  render: InputSizesTemplate,
};

export const WithDescription: Story = {
  args: {
    description: 'Text description',
  },
  render: InputTemplate,
};

export const WithErrorMessage: Story = {
  args: {
    errorMessage: 'Error message',
    validationState: 'invalid',
  },
  render: InputTemplate,
};

export const InvalidWithErrorMessageAndLabel: Story = {
  args: {
    label: 'Label',
    isRequired: true,
    errorMessage: 'Error message',
    validationState: 'invalid',
  },
  render: InputTemplate,
};

export const WithStarContent: Story = {
  args: {
    startContent: <SearchIcon />,
  },
  render: InputTemplate,
};

export const WithEndContent: Story = {
  args: {
    endContent: <SearchIcon />,
  },
  render: InputTemplate,
};

export const PasswordInput: Story = {
  args: {
    showVisibilityToggle: true,
  },
  render: PasswordInputTemplate,
};

export const Clearable: Story = {
  args: {
    isClearable: true,
  },
  render: InputTemplate,
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: InputTemplate,
};
