import * as React from 'react';
import { CloseIcon } from '@sap-commerce-next/icons';
import { act, fireEvent, render } from '@testing-library/react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../sheet';

describe('Sheet', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Sheet open={true}>
        <SheetTrigger className='bg-primary text-primary-foreground py-1 px-3 rounded'>
          Open
        </SheetTrigger>
        <SheetContent className='bg-primary-foreground'>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100'>
            <CloseIcon />
            <span className='sr-only'>Close</span>
          </SheetClose>
        </SheetContent>
      </Sheet>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should be forwarded with ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Sheet open={true}>
        <SheetTrigger className='bg-primary text-primary-foreground py-1 px-3 rounded'>
          Open
        </SheetTrigger>
        <SheetContent ref={ref} className='bg-primary-foreground'>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100'>
            <CloseIcon />
            <span className='sr-only'>Close</span>
          </SheetClose>
        </SheetContent>
      </Sheet>,
    );
    expect(ref.current).not.toBeNull();
  });

  it("should have the proper 'aria' attributes", () => {
    const { getByRole, getByText } = render(
      <Sheet open={true}>
        <SheetTrigger className='bg-primary text-primary-foreground py-1 px-3 rounded'>
          Open
        </SheetTrigger>
        <SheetContent className='bg-primary-foreground'>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>This action cannot be undone.</SheetDescription>
          </SheetHeader>
          <SheetClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100'>
            <CloseIcon />
            <span className='sr-only'>Close</span>
          </SheetClose>
        </SheetContent>
      </Sheet>,
    );

    const sheet = getByRole('dialog');
    expect(sheet).toHaveAttribute('role', 'dialog');
    const sheetHeader = getByText('Are you absolutely sure?');
    expect(sheet).toHaveAttribute('aria-labelledby', sheetHeader.id);
    const sheetBody = getByText('This action cannot be undone.');
    expect(sheet).toHaveAttribute('aria-describedby', sheetBody.id);
  });

  it("should fire 'onOpenChange' callback when close button is clicked", () => {
    const onOpenChange = jest.fn();

    const wrapper = render(
      <Sheet defaultOpen={true} onOpenChange={onOpenChange}>
        <SheetTrigger className='bg-primary text-primary-foreground py-1 px-3 rounded'>
          Open
        </SheetTrigger>
        <SheetContent className='bg-primary-foreground'>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetClose
            data-testid='close-test'
            className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100'
          >
            <CloseIcon />
            <span className='sr-only'>Close</span>
          </SheetClose>
        </SheetContent>
      </Sheet>,
    );

    const closeButton = wrapper.getByTestId('close-test');
    act(() => {
      closeButton.click();
    });

    expect(onOpenChange).toHaveBeenCalledTimes(1);
  });

  it('should hide the component when pressing the escape key', () => {
    const onOpenChange = jest.fn();

    const wrapper = render(
      <Sheet defaultOpen={true} onOpenChange={onOpenChange}>
        <SheetTrigger className='bg-primary text-primary-foreground py-1 px-3 rounded'>
          Open
        </SheetTrigger>
        <SheetContent className='bg-primary-foreground'>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <SheetClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100'>
            <CloseIcon />
            <span className='sr-only'>Close</span>
          </SheetClose>
        </SheetContent>
      </Sheet>,
    );
    const sheet = wrapper.getByRole('dialog');
    act(() => {
      fireEvent.keyDown(sheet, { key: 'Escape' });
    });

    expect(onOpenChange).toHaveBeenCalledTimes(1);
  });
});
