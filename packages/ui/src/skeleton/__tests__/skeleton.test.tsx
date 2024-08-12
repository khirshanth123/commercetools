import * as React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '../skeleton';

describe('Skeleton', () => {
  it('should render correctly', () => {
    const wrapper = render(<Skeleton />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
