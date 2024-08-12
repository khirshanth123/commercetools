import React from 'react';
import { act, render } from '@testing-library/react';
import { Chip } from '../chip';

describe('Chip', () => {
  it('should render correctly', () => {
    const wrapper = render(<Chip>Grapefruit</Chip>);

    expect(() => wrapper.unmount()).not.toThrow();
  });
  it('should be closeable on click', () => {
    const handleClose = jest.fn();

    const wrapper = render(<Chip onClose={() => handleClose('Grapefruit')}>Grapefruit</Chip>);
    const chip = wrapper.getByRole('button');
    act(() => {
      chip?.click();
    });
    expect(handleClose).toHaveBeenCalledWith('Grapefruit');
  });
  it('should render with default color classes', () => {
    const wrapper = render(<Chip data-testid='chip'>Grapefruit</Chip>);
    const chip = wrapper.getByTestId('chip');

    expect(chip).toHaveClass('bg-primary text-primary-foreground');
  });
  it('should render with selected color classes', () => {
    const wrapper = render(
      <Chip data-testid='chip' color={'warning'}>
        Grapefruit
      </Chip>,
    );
    const chip = wrapper.getByTestId('chip');

    expect(chip).toHaveClass('bg-warning text-warning-foreground');
  });
  it('should render end content', () => {
    const wrapper = render(
      <Chip endContent={<svg data-testid='endContent'></svg>}>Grapefruit</Chip>,
    );
    const endContent = wrapper.getByTestId('endContent');

    expect(endContent).not.toBeNull();
  });
});
