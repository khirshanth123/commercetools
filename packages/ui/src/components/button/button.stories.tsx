import React from 'react';
import {
  AddIcon,
  HomeIcon,
  InfoIcon,
  NotificationsIcon,
  PersonIcon,
  RemoveIcon,
} from '@sap-commerce-next/icons';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

const propOptions = {
  sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
  colors: ['primary', 'secondary', 'neutral', 'info', 'success', 'warning', 'danger'],
  variants: ['solid', 'bordered', 'light', 'ghost'],
  radius: ['none', 'sm', 'md', 'lg', 'full'],
};

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The button appearance style.',
      control: 'select',
      options: propOptions.variants,
      defaultValue: { summary: 'solid' },
    },
    color: {
      description: 'The button color theme.',
      control: 'select',
      options: propOptions.colors,
      defaultValue: { summary: 'primary' },
    },
    size: {
      description: 'The button size.',
      control: 'select',
      options: propOptions.sizes,
      defaultValue: { summary: 'md' },
    },
    radius: {
      description: 'The button border radius.',
      control: 'select',
      options: propOptions.radius,
      defaultValue: { summary: 'md' },
    },
    spinnerPlacement: {
      description: 'The spinner placement.',
      control: 'select',
      options: ['start', 'end'],
      defaultValue: { summary: 'start' },
    },
    isDisabled: {
      control: 'boolean',
      defaultValue: { summary: false },
    },
    isLoading: {
      control: 'boolean',
      defaultValue: false,
    },
    disableAnimation: {
      description: 'Whether the button should display animations.',
      control: 'boolean',
      defaultValue: { summary: false },
    },
    isIconOnly: {
      description: 'Whether the button should have the same width and height.',
      control: 'boolean',
      defaultValue: false,
    },
    spinner: {
      description: 'Spinner to display when loading.',
      control: 'none',
    },
    startContent: {
      description: 'The button start content.',
      control: 'none',
    },
    endContent: {
      description: 'The button end content.',
      control: 'none',
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Button',
    spinnerPlacement: 'start',
    variant: 'solid',
    color: 'primary',
    size: 'md',
    radius: 'md',
    isDisabled: false,
    isLoading: false,
  },
} as Meta<typeof Button>;

const Template = (args: ButtonProps, options: string[], propName: keyof ButtonProps) => (
  <div className='flex flex-row gap-4 items-center'>
    {options.map((option) => (
      <Button key={option} {...args} {...{ [propName]: option }}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </Button>
    ))}
  </div>
);

const StateTemplate = (args: ButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Button {...args} onClick={handleClick}>
      {isOpen ? 'Close' : 'Open'}
    </Button>
  );
};

const WithIconsTemplate = (args: ButtonProps) => {
  return (
    <div className='flex flex-row gap-4 items-center'>
      <Button {...args} variant={'ghost'} color='success' endContent={<HomeIcon />}>
        Home
      </Button>
      <Button
        {...args}
        color='secondary'
        startContent={<NotificationsIcon />}
        endContent={<InfoIcon />}
      ></Button>
      <Button {...args} variant={'bordered'} color='danger' startContent={<PersonIcon />}>
        Delete
      </Button>
    </div>
  );
};

const WithIconOnlyTemplate = (args: ButtonProps) => {
  return (
    <div className='flex flex-row gap-4 items-center'>
      <Button {...args}>
        <AddIcon />
      </Button>
      <Button {...args} color='secondary'>
        <InfoIcon />
      </Button>
      <Button {...args} color='danger'>
        <RemoveIcon />
      </Button>
    </div>
  );
};

export const Default = {};

export const Variants = {
  render: (args: ButtonProps) => Template(args, propOptions.variants, 'variant'),
};

export const Colors = {
  render: (args: ButtonProps) => Template(args, propOptions.colors, 'color'),
};

export const Sizes = {
  render: (args: ButtonProps) => Template(args, propOptions.sizes, 'size'),
};

export const IconOnlyButton = {
  render: WithIconOnlyTemplate,
  args: {
    isIconOnly: true,
  },
};

export const Radius = {
  render: (args: ButtonProps) => Template(args, propOptions.radius, 'radius'),
};

export const Disabled = {
  args: {
    isDisabled: true,
  },
};

export const ButtonWithState = {
  render: StateTemplate,
};

export const ButtonWithIcons = {
  render: WithIconsTemplate,
};

export const LoadingButton = {
  args: {
    color: 'primary',
    isLoading: true,
  },
};

export const ButtonWithCustomStyles = {
  args: {
    radius: 'full',
    className: 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg',
  },
};
