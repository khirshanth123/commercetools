import { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} as Meta<typeof Skeleton>;

type Story = StoryObj<typeof Skeleton>;

/** Default Skeleton. */
export const DefaultSkeleton: Story = {
  render: () => {
    return <Skeleton className='h-44' />;
  },
};

/** Skeleton in a Grid. */
export const AvatarProfile: Story = {
  render: () => {
    return (
      <div className='flex items-center space-x-4'>
        <Skeleton className='h-12 w-12 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
    );
  },
};

/** Skeleton in a Grid. */
export const WithinGrid: Story = {
  render: () => {
    return (
      <div className='flex flex-col gap-6 items-center mx-auto max-w-7xl'>
        <Skeleton className='h-44 w-full' />
        <div className='flex flex-row w-full gap-8 items-center'>
          <Skeleton className='w-1/2 h-96' />
          <Skeleton className='w-1/2 h-96' />
        </div>
      </div>
    );
  },
};
