import * as React from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../collapsible';

describe('Collapsible', () => {
  it('should render correctly (static)', () => {
    const wrapper = render(
      <Collapsible aria-label='Collapsible static test'>
        <CollapsibleTrigger>Collapsible Component</CollapsibleTrigger>
        <CollapsibleContent>Content 1</CollapsibleContent>
        <CollapsibleContent>Content 2</CollapsibleContent>
        <CollapsibleContent>Content 3</CollapsibleContent>
      </Collapsible>,
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  test('should open collapsible when clicked', async () => {
    const wrapper = render(
      <Collapsible aria-label='Collapsible static test'>
        <CollapsibleTrigger data-testid='collapsible-trigger'>
          Collapsible Component
        </CollapsibleTrigger>
        <CollapsibleContent>Content 1</CollapsibleContent>
        <CollapsibleContent>Content 2</CollapsibleContent>
        <CollapsibleContent>Content 3</CollapsibleContent>
      </Collapsible>,
    );
    const trigger = wrapper.getByTestId('collapsible-trigger');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });
  test('should open collapsible using keyboard', async () => {
    const wrapper = render(
      <Collapsible aria-label='Collapsible static test'>
        <CollapsibleTrigger data-testid='collapsible-trigger'>
          Collapsible Component
        </CollapsibleTrigger>
        <CollapsibleContent>Content 1</CollapsibleContent>
        <CollapsibleContent>Content 2</CollapsibleContent>
        <CollapsibleContent>Content 3</CollapsibleContent>
      </Collapsible>,
    );

    const trigger = wrapper.getByTestId('collapsible-trigger');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    act(() => {
      trigger.focus();
    });

    await userEvent.keyboard('[Enter]');

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('should not open collapsible when disabled', async () => {
    const wrapper = render(
      <Collapsible aria-label='Collapsible static test'>
        <CollapsibleTrigger data-testid='collapsible-trigger' disabled={true}>
          Collapsible Component
        </CollapsibleTrigger>
        <CollapsibleContent>Content 1</CollapsibleContent>
        <CollapsibleContent>Content 2</CollapsibleContent>
        <CollapsibleContent>Content 3</CollapsibleContent>
      </Collapsible>,
    );
    const trigger = wrapper.getByTestId('collapsible-trigger');

    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
