import * as React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = render(<Button>Button</Button>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should be forwarded with ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Forwarded Ref</Button>);

    expect(ref.current).not.toBeNull();
  });
  it('should render child component with asChild', () => {
    const wrapper = render(
      <Button className={'button-class'} asChild>
        <button data-testid='child'>AsChild Button</button>
      </Button>,
    );
    const child = wrapper.getByTestId('child');

    expect(child).toBeTruthy();
    expect(child).toHaveClass('button-class');
  });
  it('should set disabled status and data-disabled attribute from isDisabled prop', () => {
    const wrapper = render(
      <Button data-testid='disabled' isDisabled>
        Disabled Button
      </Button>,
    );
    const disabled = wrapper.getByTestId('disabled');

    expect(disabled).toBeDisabled();
    expect(disabled).toHaveAttribute('data-disabled', 'true');
  });
  it('should render spinner when isLoading is true', () => {
    const wrapper = render(
      <Button data-testid='loading' isLoading spinnerPlacement={'start'}>
        <span>Loading</span>
      </Button>,
    );
    const loading = wrapper.getByTestId('loading');

    expect(loading.querySelector('svg.animate-spin')).toBeTruthy();
    expect(loading.querySelector('svg.animate-spin+span')).toBeTruthy();
    expect(loading.querySelector('svg.animate-spin+span')).toHaveTextContent('Loading');
    expect(loading).toHaveAttribute('data-loading', 'true');
  });
  it('should place spinner at the end', () => {
    const wrapper = render(
      <Button data-testid='loading' isLoading spinnerPlacement={'end'}>
        <span>Loading</span>
      </Button>,
    );
    const loading = wrapper.getByTestId('loading');

    expect(loading.querySelector('span+svg.animate-spin')).toBeTruthy();
  });
  it('should render custom spinner', () => {
    const wrapper = render(
      <Button
        data-testid='loading'
        isLoading
        spinnerPlacement={'start'}
        spinner={<svg data-testid='spinner'></svg>}
      >
        Loading
      </Button>,
    );
    const spinner = wrapper.getByTestId('spinner');

    expect(spinner).toBeTruthy();
  });
});
