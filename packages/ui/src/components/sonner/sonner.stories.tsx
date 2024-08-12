import { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';
import { Button } from '../button';
import { Toaster, ToasterProps } from './sonner';

export default {
  title: 'Components/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  argTypes: {
    closeButton: {
      description: 'Whether to show close button on the toast.',
      control: { type: 'boolean' },
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    duration: {
      description: 'Duration of the toast in milliseconds.',
      control: { type: 'number' },
      defaultValue: 5000,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5000 },
      },
    },
    position: {
      description: 'Place where the toast will be rendered.',
      control: { type: 'select' },
      options: [
        'bottom-right',
        'bottom-center',
        'bottom-left',
        'top-right',
        'top-center',
        'top-left',
      ],
      defaultValue: 'bottom-right',
      table: {
        type: {
          summary: 'top-left | top-right | bottom-left | bottom-right | top-center | bottom-center',
        },
        defaultValue: { summary: 'bottom-right' },
      },
    },
    expand: {
      description: 'Whether to expand the toasts by default',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    visibleToasts: {
      description: 'Number of toasts that are visible when expanding',
      control: { type: 'number' },
      defaultValue: 3,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
    },
    className: {
      description: 'className of the toast',
      control: { type: 'string' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },

  decorators: [
    (Story, storyContext) => (
      <div className='m-10'>
        <Story />
        <Toaster {...storyContext.args} />
      </div>
    ),
  ],
} as Meta;

type Story = StoryObj<ToasterProps>;

/** Default Toaster. */
export const DefaultToast: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Info Toaster. */
export const InfoToast: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast.info('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Success Toaster. */
export const SuccessToast: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast.success('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Warning Toaster. */
export const WarningToast: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast.warning('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Error Toaster. */
export const ErrorToast: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast.error('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** RichColors Info Toaster. */
export const RichColorsInfoToast: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
    richColors: true,
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast.info('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** RichColors Success Toaster. */
export const RichColorsSuccessToast: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
    richColors: true,
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast.success('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** RichColors Warning Toaster. */
export const RichColorsWarningToast: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
    richColors: true,
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast.warning('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** RichColors Error Toaster. */
export const RichColorsErrorToast: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
    richColors: true,
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast.error('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Toaster expanded by default. */
export const ExpandedByDefault: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
    expand: true,
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** 5 Visible toasts when expanding. */
export const CustomVisibleToasts: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
    visibleToasts: 5,
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Toaster with custom duration. */
export const CustomDuration: Story = {
  args: {
    closeButton: true,
    duration: 10000,
    position: 'bottom-right',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Toaster without close Button. */
export const WithoutCloseButton: Story = {
  args: {
    closeButton: false,
    duration: 5000,
    position: 'bottom-right',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Close all toaster programmatically. */
export const CloseProgrammatically: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-right',
  },
  render: () => {
    return (
      <>
        <Button
          onClick={() =>
            toast('Event has been created', {
              description: 'Monday, January 3rd at 6:00pm',
            })
          }
        >
          Render a toast
        </Button>

        <Button color='danger' onClick={() => toast.dismiss()} className='ml-2'>
          Close all Toasts
        </Button>
      </>
    );
  },
};

/** Bottom Center Position. */
export const BottomCenter: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-center',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Bottom Left Position. */
export const BottomLeft: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'bottom-left',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Top Right Position. */
export const TopRight: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'top-right',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Top Center Position. */
export const TopCenter: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'top-center',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Top Left Position. */
export const TopLeft: Story = {
  args: {
    closeButton: true,
    duration: 5000,
    position: 'top-left',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/** Action Toast. */
export const Action: Story = {
  args: {
    closeButton: false,
    duration: 5000,
    position: 'bottom-right',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            action: {
              label: 'Undo',
              onClick: () => {},
            },
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};

/**Toaster with Custom Styles. */
export const CustomStyles: Story = {
  args: {
    closeButton: false,
    duration: 5000,
    position: 'bottom-right',
    className: '[&>li]:!bg-neutral-100 [&>li]:!border-neutral-500',
  },
  render: () => {
    return (
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Render a toast
      </Button>
    );
  },
};
