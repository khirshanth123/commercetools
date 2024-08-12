import React, { useState } from 'react';
import {
  CheckCircleFilledIcon,
  CloseIcon,
  NotificationsFilledIcon,
} from '@sap-commerce-next/icons';
import { Meta } from '@storybook/react';
import { Chip, ChipProps } from './chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the chip.',
    },
    color: {
      description: 'Chip background color',
      control: 'select',
      options: ['primary', 'secondary', 'neutral', 'success', 'warning', 'danger'],
      defaultValue: { summary: 'primary' },
    },
    variant: {
      description: 'The chip appearance style.',
      options: ['solid', 'bordered'],
      defaultValue: { summary: 'solid' },
    },
    size: {
      description: 'The size of the chip.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: { summary: 'md' },
    },
    isDisabled: {
      description: 'Whether the chip is disabled.',
      control: 'boolean',
      defaultValue: { summary: false },
    },
    isCloseable: {
      table: {
        disable: true,
      },
    },
    startContent: {
      table: {
        disable: true,
      },
    },
    endContent: {
      table: {
        disable: true,
      },
    },
    isOneChar: {
      table: {
        disable: true,
      },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
  },

  args: {
    children: 'Chip',
    color: 'primary',
    size: 'md',
    variant: 'solid',
    isDisabled: false,
    onClose: undefined,
  },
} as Meta<typeof Chip>;

// Helper function for rendering multiple Chips
const renderMultipleChips = (
  args: any,
  options: string[],
  optionType: 'size' | 'color',
  variant: 'solid' | 'bordered' = 'solid',
  showClose: boolean = false,
) => (
  <div className='flex flex-row gap-4 items-center'>
    {options.map((option) => (
      <Chip
        key={option}
        {...args}
        {...{ [optionType]: option, variant, ...(showClose ? { onClose: () => {} } : {}) }}
      >
        {option}
      </Chip>
    ))}
  </div>
);

export const Default = {};
export const StartContent = { args: { startContent: <CheckCircleFilledIcon /> } };
export const EndContent = { args: { endContent: <NotificationsFilledIcon /> } };
export const Closeable = { args: { onClose: () => console.log('Close') } };
export const CustomCloseIcon = {
  args: { endContent: <CloseIcon />, onClose: () => console.log('Close') },
};
export const Sizes = {
  render: (args: ChipProps) => renderMultipleChips(args, ['sm', 'md', 'lg'], 'size'),
};
export const Colors = {
  render: (args: ChipProps) =>
    renderMultipleChips(
      args,
      ['primary', 'secondary', 'neutral', 'success', 'warning', 'danger'],
      'color',
    ),
};

export const Bordered = {
  render: (args: ChipProps) =>
    renderMultipleChips(
      args,
      ['primary', 'secondary', 'neutral', 'success', 'warning', 'danger'],
      'color',
      'bordered',
    ),
};

export const BorderedWithClose = {
  render: (args: ChipProps) =>
    renderMultipleChips(
      args,
      ['primary', 'secondary', 'neutral', 'success', 'warning', 'danger'],
      'color',
      'bordered',
      true,
    ),
};

const ListOfChips = (args: ChipProps) => {
  const initialFruits = ['Apple', 'Banana', 'Cherry', 'Watermelon', 'Orange', 'Mango'];
  const colors = ['primary', 'secondary', 'neutral', 'success', 'warning', 'danger'];
  const [fruits, setFruits] = useState(initialFruits);

  const handleClose = (fruit: string) => {
    setFruits((prev) => prev.filter((f) => f !== fruit));
    if (fruits.length === 1) setFruits(initialFruits);
  };

  return (
    <div className='flex gap-2'>
      {fruits.map((fruit, index) => (
        <Chip
          {...args}
          key={index}
          onClose={() => handleClose(fruit)}
          color={
            colors[index % colors.length] as
              | 'primary'
              | 'secondary'
              | 'neutral'
              | 'success'
              | 'warning'
              | 'danger'
          }
        >
          {fruit}
        </Chip>
      ))}
    </div>
  );
};

export const ListOfClosableChips = {
  render: ListOfChips,
};
