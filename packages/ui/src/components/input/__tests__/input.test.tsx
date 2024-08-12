import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Input } from '../input';

describe('Input', () => {
  it('should render without errors', () => {
    const { getByRole } = render(<Input />);
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it('should be disabled when isDisabled is true', () => {
    const { getByRole } = render(<Input isDisabled />);
    expect(getByRole('textbox')).toBeDisabled();
  });

  it('should be required when isRequired is true', () => {
    const { getByRole } = render(<Input isRequired />);
    expect(getByRole('textbox')).toBeRequired();
  });

  it.each(['email', 'number', 'password', 'search', 'tel', 'text'])(
    'should set type to %s when type is %s',
    (type) => {
      const { container } = render(<Input type={type} />);
      const inputElement = container.querySelector('input');
      expect(inputElement).toHaveAttribute('type', type);
    },
  );

  it('should only call onFocus once', () => {
    const onFocus = jest.fn();
    const { getByRole } = render(<Input onFocus={onFocus} />);
    const input = getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('should update value with ref', async () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} type='text' />);
    if (!ref.current) throw new Error('ref is null');
    const value = 'test value';
    ref.current.value = value;
    fireEvent.focus(ref.current);
    await waitFor(() => {
      expect(ref.current?.value).toBe(value);
    });
  });

  it('should reflect the initial value', () => {
    const { getByRole } = render(<Input value='Initial' />);
    expect(getByRole('textbox')).toHaveValue('Initial');
  });

  it('should display placeholder text', () => {
    const { getByPlaceholderText } = render(<Input placeholder='Enter text' />);
    expect(getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('should call onChange handler when text is entered', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Input onChange={onChange} />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'New value' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('should clear the input value when clear button is clicked', () => {
    const onClear = jest.fn();
    const { getByRole } = render(<Input isClearable onClear={onClear} />);
    fireEvent.click(getByRole('button', { name: 'Clear Input' }));
    expect(onClear).toHaveBeenCalled();
  });

  it('should render with visibility toggle when showVisibilityToggle is true', () => {
    const { container } = render(<Input showVisibilityToggle />);
    const visibilityToggle = container.querySelector('[aria-label="Toggle Visibility"]');
    expect(visibilityToggle).toBeInTheDocument();
  });

  it('should render without visibility toggle when showVisibilityToggle is false', () => {
    const { container } = render(<Input showVisibilityToggle={false} />);
    const visibilityToggle = container.querySelector('[aria-label="Toggle Visibility"]');
    expect(visibilityToggle).toBeNull();
  });

  it('should make input content visible on button click', () => {
    const { container } = render(<Input showVisibilityToggle />);
    const input = container.querySelector('input');
    const visibilityToggle = container.querySelector('[aria-label="Toggle Visibility"]');
    expect(input?.type).toBe('password');
    fireEvent.click(visibilityToggle!);
    expect(input?.type).toBe('text');
    fireEvent.click(visibilityToggle!);
    expect(input?.type).toBe('password');
  });

  it('should display description', () => {
    const { getByText } = render(<Input description='Description text' />);
    expect(getByText('Description text')).toBeInTheDocument();
  });

  it('should display error message', () => {
    const { getByText } = render(<Input errorMessage='Error occurred' />);
    expect(getByText('Error occurred')).toBeInTheDocument();
  });

  it('should blur correctly', () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<Input onBlur={onBlur} />);
    const input = getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });

  it('should have correct validation state classes', () => {
    const { container } = render(<Input validationState='invalid' />);
    const firstChild = container.firstChild as HTMLElement;

    if (firstChild && firstChild.classList) {
      const classList = Array.from(firstChild.classList);
      const hasPartialMatch = classList.some((className) => className.includes('border-danger'));
      expect(hasPartialMatch).toBe(true);
    } else {
      fail('No first child or missing classList');
    }
  });
});
