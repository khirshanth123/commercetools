import * as React from 'react';
import { act, render } from '@testing-library/react';
import { Checkbox, CheckboxProps } from '../checkbox';

describe('Checkbox', () => {
  it('should render correctly', () => {
    const wrapper = render(<Checkbox />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(<Checkbox ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('should work correctly with initial value', () => {
    const { getByTestId } = render(<Checkbox checked={true} data-testid='checkbox-test-checked' />);

    let checkbox = getByTestId('checkbox-test-checked');

    expect(checkbox).toHaveAttribute('data-state', 'checked');

    checkbox = render(<Checkbox checked data-testid='checkbox-test-unchecked' />).getByTestId(
      'checkbox-test-unchecked',
    );

    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('should change value after click', () => {
    const { getByTestId } = render(<Checkbox data-testid='checkbox-test' />);

    const checkbox = getByTestId('checkbox-test');

    expect(checkbox).toHaveAttribute('data-state', 'unchecked');

    act(() => {
      getByTestId('checkbox-test').click();
    });

    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('should ignore events when disabled', () => {
    const { getByTestId } = render(<Checkbox data-testid='checkbox-test' disabled />);

    const checkbox = getByTestId('checkbox-test');

    expect(checkbox).toHaveAttribute('data-state', 'unchecked');

    act(() => {
      getByTestId('checkbox-test').click();
    });

    expect(checkbox).toHaveAttribute('data-state', 'unchecked');
  });

  it('should work correctly with "onChange" prop', () => {
    const onChange = jest.fn();
    const wrapper = render(
      <Checkbox data-testid='checkbox-test' onCheckedChange={onChange}>
        Option
      </Checkbox>,
    );

    act(() => {
      wrapper.getByTestId('checkbox-test').click();
    });

    expect(onChange).toBeCalled();
  });

  it('should work correctly with "required" prop', () => {
    const { getByTestId } = render(<Checkbox data-testid='checkbox-test' required />);

    const checkbox = getByTestId('checkbox-test');

    expect(checkbox).toHaveAttribute('aria-required', 'true');
  });

  it('should work correctly with controlled value', () => {
    const onChange = jest.fn();

    const Component = (props: CheckboxProps) => {
      const [value, setValue] = React.useState(false);

      return (
        <Checkbox
          {...props}
          checked={value}
          onCheckedChange={(checked) => {
            act(() => {
              if (typeof checked === 'boolean') {
                setValue(checked);
              }
              onChange(checked);
            });
          }}
        />
      );
    };

    const wrapper = render(
      <Component data-testid='checkbox-test' onChange={onChange}>
        Option
      </Component>,
    );

    act(() => {
      wrapper.getByTestId('checkbox-test').click();
    });

    expect(onChange).toBeCalled();
  });
});
