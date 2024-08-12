import * as React from 'react';
import { ChevronDownIcon } from '@sap-commerce-next/icons';
import { Meta } from '@storybook/react';
import { Button } from '../button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The controlled open state of the collapsible.',
    },
    defaultOpen: {
      description: 'The open state of the collapsible when it is initially rendered.',
      control: 'boolean',
      defaultValue: { summary: false },
    },
    disabled: {
      description: 'When true, prevents the user from interacting with the collapsible.',
      control: 'boolean',
      defaultValue: { summary: false },
    },
    asChild: {
      description:
        'Change the default rendered element for the one passed as a child, merging their props and behavior.',
    },
  },
  render: (args) => {
    return (
      <Collapsible
        open={args.open}
        defaultOpen={args.defaultOpen}
        disabled={args.disabled}
        className='w-[350px] space-y-2 transition-all'
      >
        <div className='flex justify-between items-center rounded-md border pl-4 font-mono text-sm'>
          <p>Trigger</p>
          <div>
            <CollapsibleTrigger asChild>
              <Button
                className='transition-all [&[data-state=open]>svg]:rotate-180 w-auto hover:bg-transparent'
                isIconOnly
                variant='light'
                size='sm'
                color='neutral'
              >
                <ChevronDownIcon />
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>
        <div className='pl-4'>
          <p>Content 1 not collapsed</p>
          <CollapsibleContent className='space-y-2'>
            <p>
              lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text
              lorem ipsum text lorem ipsum text
            </p>
          </CollapsibleContent>
        </div>
      </Collapsible>
    );
  },
} as Meta<typeof Collapsible>;

/** Default Collapsible. */
export const DefaultCollapsible = {
  args: {
    defaultOpen: false,
  },
};

/** Disabled Collapsible. */
export const DisabledCollapsible = {
  args: {
    disabled: true,
  },
};
