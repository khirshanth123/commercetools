import React from 'react';
import { act, render } from '@testing-library/react';
import { toast } from 'sonner';
import { Button } from '../../button';
import { Toaster } from '../sonner';

describe('Toaster component', () => {
  it('renders correctly', () => {
    const toaster = render(<Toaster />);
    expect(() => toaster.unmount()).not.toThrow();
  });

  it('passes props correctly', () => {
    const props = {
      closeButton: true,
      duration: 5000,
      position: undefined,
      visibleToasts: 5,
      expand: true,
      richColors: true,
    };

    const toaster = render(<Toaster {...props} />);
    expect(() => toaster.unmount()).not.toThrow();
  });

  it('should fire toast function when clicking trigger', async () => {
    const handleRenderToast = jest.fn(() =>
      toast('Event has been created', {
        description: 'Monday, January 3rd at 6:00pm',
      }),
    );

    const wrapper = render(
      <>
        <Button onClick={handleRenderToast}>Render a toast</Button>
        <Toaster duration={10000} />
      </>,
    );

    const renderToast = wrapper.container.querySelector('button');

    await act(async () => {
      renderToast?.click();
    });

    expect(handleRenderToast).toHaveBeenCalledTimes(1);
  });
});
