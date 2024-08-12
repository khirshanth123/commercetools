import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ItemCounter } from '../item-counter';

describe('ItemCounter', () => {
  test('renders with default props', () => {
    const { getByTestId } = render(<ItemCounter />);
    const decrementButton = getByTestId('decrement-button');
    const inputElement = getByTestId('quantity-input');
    const incrementButton = getByTestId('increment-button');

    expect(decrementButton).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<ItemCounter ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  test('increments counter when increment button is clicked', () => {
    const { getByTestId } = render(<ItemCounter />);
    const incrementButton = getByTestId('increment-button');
    const inputElement = getByTestId('quantity-input');

    fireEvent.click(incrementButton);
    expect(inputElement).toHaveValue(2);
  });

  test('decrements counter when decrement button is clicked', () => {
    const { getByTestId } = render(<ItemCounter initialValue={2} />);
    const decrementButton = getByTestId('decrement-button');
    const inputElement = getByTestId('quantity-input');

    fireEvent.click(decrementButton);
    expect(inputElement).toHaveValue(1);
  });

  test('does not decrement counter below min value', () => {
    const { getByTestId } = render(<ItemCounter min={1} />);
    const decrementButton = getByTestId('decrement-button');
    const inputElement = getByTestId('quantity-input');

    fireEvent.click(decrementButton);
    expect(inputElement).toHaveValue(1);
  });

  test('does not increment counter above max value', () => {
    const { getByTestId } = render(<ItemCounter initialValue={5} max={5} />);
    const incrementButton = getByTestId('increment-button');
    const inputElement = getByTestId('quantity-input');

    fireEvent.click(incrementButton);
    expect(inputElement).toHaveValue(5);
  });

  test('increments counter by step value', () => {
    const { getByTestId } = render(<ItemCounter initialValue={2} step={2} />);
    const incrementButton = getByTestId('increment-button');
    const inputElement = getByTestId('quantity-input');

    fireEvent.click(incrementButton);
    expect(inputElement).toHaveValue(4);
  });

  test('decrements counter by step value', () => {
    const { getByTestId } = render(<ItemCounter initialValue={4} step={2} />);
    const decrementButton = getByTestId('decrement-button');
    const inputElement = getByTestId('quantity-input');

    fireEvent.click(decrementButton);
    expect(inputElement).toHaveValue(2);
  });

  test('allows manual input to update counter', () => {
    const { getByTestId } = render(<ItemCounter />);
    const inputElement = getByTestId('quantity-input');

    fireEvent.change(inputElement, { target: { value: 5 } });
    expect(inputElement).toHaveValue(5);
  });

  test('does not allow manual input below min value', () => {
    const { getByTestId } = render(<ItemCounter min={2} />);
    const inputElement = getByTestId('quantity-input');

    fireEvent.change(inputElement, { target: { value: 1 } });
    expect(inputElement).toHaveValue(2);
  });

  test('does not allow manual input above max value', () => {
    const { getByTestId } = render(<ItemCounter max={10} />);
    const inputElement = getByTestId('quantity-input');

    fireEvent.change(inputElement, { target: { value: 20 } });
    expect(inputElement).toHaveValue(10);
  });

  test('disables input and buttons when readonly is true', () => {
    const { getByTestId } = render(<ItemCounter readonly />);
    const decrementButton = getByTestId('decrement-button');
    const inputElement = getByTestId('quantity-input');
    const incrementButton = getByTestId('increment-button');

    expect(inputElement).toBeDisabled();
    expect(decrementButton).toBeDisabled();
    expect(incrementButton).toBeDisabled();
  });
});
