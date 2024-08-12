import { ComponentPropsWithoutRef, useId } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../checkbox';
import { Input } from '../input';
import { RadioGroup, RadioGroupItem } from '../radio-group';
import { Label } from './label';

export default {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      description: 'The id of the element the label is associated with.',
      control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'checkbox' },
      },
    },
    required: {
      description: 'Weather the associated input is required or not',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta<typeof Label>;
type Story = StoryObj<typeof Label>;

const WithCheckBoxTemplate = (args: ComponentPropsWithoutRef<typeof Label>) => {
  const id = useId();
  return (
    <div className='w-full flex justify-center'>
      <div className='flex items-center gap-3'>
        <Checkbox value='checkbox' name='checkbox' id={`${id}-${args.htmlFor}`} />
        <Label htmlFor={`${id}-${args.htmlFor}`} required={args.required}>
          Checkbox
        </Label>
      </div>
    </div>
  );
};

const WithInputTemplate = (args: ComponentPropsWithoutRef<typeof Label>) => {
  const id = useId();
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='max-w-md w-ful flex flex-col gap-3'>
        <Label htmlFor={`${id}-${args.htmlFor}`} required={args.required}>
          Label
        </Label>
        <Input placeholder='John Doe' id={`${id}-${args.htmlFor}`} />
      </div>
    </div>
  );
};

const WithRadioTemplate = (args: ComponentPropsWithoutRef<typeof Label>) => {
  const id = useId();
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='flex items-center gap-3'>
        <RadioGroup>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='default' id={`${id}-default-${args.htmlFor}`} />
            <Label htmlFor={`${id}-default-${args.htmlFor}`} required={args.required}>
              Default
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='confortable' id={`${id}-confortable-${args.htmlFor}`} />
            <Label htmlFor={`${id}-confortable-${args.htmlFor}`} required={args.required}>
              Confortable
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='compact' id={`${id}-compact-${args.htmlFor}`} />
            <Label htmlFor={`${id}-compact-${args.htmlFor}`} required={args.required}>
              Compact
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export const WithCheckbox: Story = {
  args: {
    htmlFor: 'checkbox',
  },
  render: WithCheckBoxTemplate,
};

export const WithInput: Story = {
  args: {
    htmlFor: 'input',
  },
  render: WithInputTemplate,
};

export const WithRequiredInput: Story = {
  args: {
    htmlFor: 'input',
    required: true,
  },
  render: WithInputTemplate,
};

export const WithRadio: Story = {
  args: {
    htmlFor: 'radio',
  },
  render: WithRadioTemplate,
};
