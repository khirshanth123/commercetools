import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardLabel,
  CardTitle,
} from './card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    radius: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The border-radius of the card.',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    bordered: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
      description: 'Whether to apply border to the card.',
      table: {
        defaultValue: { summary: true },
      },
    },
    shadow: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The box-shadow of the card.',
      defaultValue: 'sm',
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    padding: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The padding of the card.',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    gap: {
      control: {
        type: 'select',
      },
      options: ['none', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The gap between the header, content and footer.',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  args: {
    bordered: true,
    radius: 'md',
    shadow: 'sm',
    padding: 'md',
    gap: 'md',
  },
  render: (args) => {
    return (
      <Card {...args} className='w-[350px]'>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' placeholder='Name of your project' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='framework'>Framework</Label>
                <Select>
                  <SelectTrigger id='framework'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent position='popper'>
                    <SelectItem value='next'>Next.js</SelectItem>
                    <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                    <SelectItem value='astro'>Astro</SelectItem>
                    <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='bordered'>Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    );
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

/** Displays the Card with its default settings. */
export const Default: Story = {};

/** Displays the Card as an Address Card with its default settings. */
export const AddressCard: Story = {
  args: {
    bordered: false,
    shadow: 'none',
    gap: 'sm',
  },
  render: (args) => {
    return (
      <Card className='bg-neutral-50 w-[450px] pt-6' {...args}>
        <CardLabel className='bg-primary text-white'>Default</CardLabel>
        <CardContent>
          <div className='font-bold'>Jane Doe</div>
          <div>Calle 34</div>
          <div>Medellin</div>
          <div>Zip: 00000000</div>
          <div>Phone: 543278999254</div>
        </CardContent>
        <CardFooter className='gap-2 justify-end pt-2'>
          <Button size='sm' variant={'ghost'} color='primary'>
            Edit
          </Button>
          <Button size='sm' variant={'ghost'} color='neutral'>
            Delete
          </Button>
        </CardFooter>
      </Card>
    );
  },
};
