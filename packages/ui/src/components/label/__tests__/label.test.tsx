import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from '../label';

describe('Label', () => {
  it('should be forwarded with ref and be an HTMLLabelElement', () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label ref={ref} />);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('LABEL'); // New line to check the tag name
  });

  it('should pass htmlFor property correctly', () => {
    render(<Label htmlFor='testId'>Test Label</Label>);

    const labelElement = screen.getByText('Test Label'); // Changed this line
    expect(labelElement).toHaveAttribute('for', 'testId');
  });

  it('should apply className correctly', () => {
    render(<Label className='custom-class'>Test Label</Label>);

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toHaveClass('custom-class');
  });

  it('should render children correctly', () => {
    render(<Label>Test Child</Label>);

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
