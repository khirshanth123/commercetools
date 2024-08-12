import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Container } from './container';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    gutters: {
      description:
        'Whether to use horizontal gutters (left and right padding) inside the container.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    maxWidth: {
      description:
        'Whether to set a maximum width for the container. If true, it sets the max-width to the value configured for screen-size 2xl.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
  render: (args) => (
    <Container className='bg-primary-50 h-full' {...args}>
      <p>This is the content inside the Container component.</p>
    </Container>
  ),
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    gutters: true,
    maxWidth: true,
  },
};
