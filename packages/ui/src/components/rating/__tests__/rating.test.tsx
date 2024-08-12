import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Rating } from '../rating';

describe('Rating Component', () => {
  test('renders the correct number of icons', () => {
    const { getByTestId } = render(<Rating iconsCount={5} />);
    const iconsContainer = getByTestId('filled-icons');
    const icons = iconsContainer.querySelectorAll('[data-testid="star-icon"]');

    expect(icons.length).toBe(5);
  });

  test('sets initial value correctly', () => {
    const initialValue = 3;
    const { getByTestId } = render(<Rating initialValue={initialValue} />);
    const filledIconsContainer = getByTestId('filled-icons');

    expect(filledIconsContainer.style.width).toBe('60%');
  });

  test('resets hoverValue on pointer leave', () => {
    const { getByTestId } = render(<Rating />);
    const ratingContainer = getByTestId('rating-container');

    fireEvent.pointerMove(ratingContainer, { clientX: 50 });
    fireEvent.pointerLeave(ratingContainer);

    const filledIconsContainer = getByTestId('filled-icons');
    expect(filledIconsContainer.style.width).toBe('0%');
  });

  test('does not call onChange when readonly', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<Rating onChange={onChangeMock} readonly />);
    const ratingContainer = getByTestId('rating-container');

    fireEvent.click(ratingContainer);

    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
