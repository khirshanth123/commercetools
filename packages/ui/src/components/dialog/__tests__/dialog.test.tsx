import * as React from 'react';
import { CloseIcon } from '@sap-commerce-next/icons';
import { act, fireEvent, render } from '@testing-library/react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog';

describe('Dialog', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Dialog open={true}>
        <DialogTrigger className='bg-primary text-primary-foreground border rounded py-2 px-4'>
          Open Dialog
        </DialogTrigger>

        <DialogContent className='bg-primary-foreground'>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>

            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <DialogClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100'>
            <CloseIcon />

            <span className='sr-only'>Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should be forwarded with ref', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Dialog open={true}>
        <DialogTrigger className='bg-primary text-primary-foreground border rounded py-2 px-4'>
          Open Dialog
        </DialogTrigger>

        <DialogContent className='bg-primary-foreground' ref={ref}>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>

            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <DialogClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100'>
            <CloseIcon />

            <span className='sr-only'>Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    );

    expect(ref.current).not.toBeNull();
  });

  it("should have the proper 'aria' attributes", () => {
    const { getByRole, getByText } = render(
      <Dialog open={true}>
        <DialogTrigger className='bg-primary text-primary-foreground border rounded py-2 px-4'>
          Open Dialog
        </DialogTrigger>

        <DialogContent className='bg-primary-foreground'>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>

            <DialogDescription>This action cannot be undone.</DialogDescription>
          </DialogHeader>

          <DialogClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100'>
            <CloseIcon />

            <span className='sr-only'>Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    );

    const dialog = getByRole('dialog');

    expect(dialog).toHaveAttribute('role', 'dialog');

    const dialogHeader = getByText('Are you absolutely sure?');

    expect(dialog).toHaveAttribute('aria-labelledby', dialogHeader.id);

    const dialogBody = getByText('This action cannot be undone.');

    expect(dialog).toHaveAttribute('aria-describedby', dialogBody.id);
  });

  it("should fire 'onOpenChange' callback when close button is clicked", () => {
    const onOpenChange = jest.fn();

    const wrapper = render(
      <Dialog open={true} onOpenChange={onOpenChange}>
        <DialogTrigger className='bg-primary text-primary-foreground border rounded py-2 px-4'>
          Open Dialog
        </DialogTrigger>

        <DialogContent className='bg-primary-foreground'>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>

            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <DialogClose
            className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100'
            data-testid='close-test'
          >
            <CloseIcon />

            <span className='sr-only'>Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    );

    const closeButton = wrapper.getByTestId('close-test');

    act(() => {
      closeButton.click();
    });

    expect(onOpenChange).toHaveBeenCalledTimes(1);
  });

  it('should hide the dialog when the escape key is pressed', () => {
    const onOpenChange = jest.fn();

    const wrapper = render(
      <Dialog open={true} onOpenChange={onOpenChange}>
        <DialogTrigger className='bg-primary text-primary-foreground border rounded py-2 px-4'>
          Open Dialog
        </DialogTrigger>

        <DialogContent className='bg-primary-foreground'>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>

            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <DialogClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100'>
            <CloseIcon />

            <span className='sr-only'>Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>,
    );

    const dialog = wrapper.getByRole('dialog');

    fireEvent.keyDown(dialog, { key: 'Escape' });

    expect(onOpenChange).toHaveBeenCalledTimes(1);
  });
});
