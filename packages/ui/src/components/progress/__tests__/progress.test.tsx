import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Progress } from '../progress';

// Cleanup after each test to remove any rendered components.
afterEach(cleanup);

describe('Progress', () => {
  it('should render correctly', () => {
    const { unmount } = render(<Progress aria-label='progress' />);
    // Expect no errors during unmount.
    expect(() => unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Progress ref={ref} aria-label='progress' />);
    expect(ref.current).not.toBeNull();
  });

  it('should display progress value', () => {
    const { getByText } = render(<Progress value={50} label='Loading' />);
    const progressValue = getByText('50%');
    expect(progressValue).toBeInTheDocument();
  });

  it('should display label', () => {
    const { getByText } = render(<Progress label='Loading' />);
    const label = getByText('Loading');
    expect(label).toBeInTheDocument();
  });

  it('should display custom value label', () => {
    const customGetValueLabel = (value: number, max: number) => `${value} of ${max}`;
    const { getByText } = render(
      <Progress value={25} label='Custom Label' getValueLabel={customGetValueLabel} />,
    );
    const customValueLabel = getByText('25 of 100');
    expect(customValueLabel).toBeInTheDocument();
  });

  it('should display correct progress transformation', () => {
    const { container } = render(<Progress value={75} />);
    const indicator = container.querySelector('.bg-primary');
    expect(indicator).toHaveStyle('transform: translateX(-25%);');
  });

  it('should display primary color indicator', () => {
    const { container } = render(<Progress value={50} color='primary' />);
    const primaryIndicator = container.querySelector('.bg-primary');
    expect(primaryIndicator).toBeInTheDocument();
  });

  it('should contain progress aria attributes', () => {
    const { container } = render(<Progress value={50} />);
    const progressBar = container.querySelector('[role="progressbar"]');

    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveAttribute('aria-valuetext', '50%');
  });

  it('should handle a custom minValue', () => {
    const { container } = render(<Progress value={25} minValue={10} />);
    const progressBar = container.querySelector('[role="progressbar"]');

    expect(progressBar).toHaveAttribute('aria-valuemin', '10');
    expect(progressBar).toHaveAttribute('aria-valuenow', '25');
  });

  it('should handle a custom max value', () => {
    const { container } = render(<Progress value={75} max={200} />);
    const progressBar = container.querySelector('[role="progressbar"]');

    expect(progressBar).toHaveAttribute('aria-valuemax', '200');
    expect(progressBar).toHaveAttribute('aria-valuenow', '75');
  });

  it('should handle no label', () => {
    const { queryByText } = render(<Progress />);
    const label = queryByText('Loading');
    expect(label).toBeNull();
  });
});
