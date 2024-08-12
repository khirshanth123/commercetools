import * as React from 'react';
import { render } from '@testing-library/react';
import { Textarea } from '../textarea';

describe('Textarea', () => {
  it('should render correctly', () => {
    const wrapper = render(<Textarea placeholder='Type your message here.' id='message' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should be forwarded with ref', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<Textarea ref={ref} placeholder='Type your message here.' id='message' />);

    expect(ref.current).not.toBeNull();
  });
});
