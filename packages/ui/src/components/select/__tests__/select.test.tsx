import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select';

type Item = {
  label: string;
  value: string;
  key: string;
};

const itemsData: Item[] = [
  { label: 'Cat', value: 'cat', key: 'cat' },
  { label: 'Dog', value: 'dog', key: 'dog' },
  { label: 'Elephant', value: 'elephant', key: 'elephant' },
  { label: 'Lion', value: 'lion', key: 'lion' },
  { label: 'Tiger', value: 'tiger', key: 'tiger' },
  { label: 'Giraffe', value: 'giraffe', key: 'giraffe' },
  { label: 'Dolphin', value: 'dolphin', key: 'dolphin' },
  { label: 'Penguin', value: 'penguin', key: 'penguin' },
  { label: 'Zebra', value: 'zebra', key: 'zebra' },
  { label: 'Shark', value: 'shark', key: 'shark' },
  { label: 'Whale', value: 'whale', key: 'whale' },
  { label: 'Otter', value: 'otter', key: 'otter' },
  { label: 'Crocodile', value: 'crocodile', key: 'crocodile' },
];
const mockOnChange = jest.fn();

describe('Select', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const wrapper = render(
      <Select aria-label='Favorite Animal'>
        <SelectTrigger>
          <SelectValue placeholder='Favorite Animal' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem key='penguin' value='penguin'>
              Penguin
            </SelectItem>
            <SelectItem key='zebra' value='zebra'>
              Zebra
            </SelectItem>
            <SelectItem key='shark' value='shark'>
              Shark
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLButtonElement>();

    render(
      <Select aria-label='Favorite Animal'>
        <SelectTrigger ref={ref}>
          <SelectValue placeholder='Favorite Animal' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem key='penguin' value='penguin'>
              Penguin
            </SelectItem>
            <SelectItem key='zebra' value='zebra'>
              Zebra
            </SelectItem>
            <SelectItem key='shark' value='shark'>
              Shark
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );
    expect(ref.current).not.toBeNull();
  });

  it('should render correctly (dynamic)', () => {
    const wrapper = render(
      <Select aria-label='Favorite Animal'>
        <SelectTrigger>
          <SelectValue placeholder='Favorite Animal' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {itemsData.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should not open select when disabled', async () => {
    const wrapper = render(
      <Select disabled={true} aria-label='Favorite Animal'>
        <SelectTrigger>
          <SelectValue placeholder='Favorite Animal' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {itemsData.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>,
    );

    const listbox = wrapper.getByRole('combobox');

    expect(listbox).toBeInTheDocument();

    await userEvent.click(listbox);

    expect(listbox).toHaveAttribute('aria-expanded', 'false');
  });

  it('should open select', async () => {
    const wrapper = render(
      <Select open={false} aria-label='Favorite Animal'>
        <SelectTrigger data-testid='select-trigger'>
          <SelectValue placeholder='Favorite Animal' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem key='penguin' value='penguin' role='option'>
              Penguin
            </SelectItem>
            <SelectItem key='zebra' value='zebra' role='option'>
              Zebra
            </SelectItem>
            <SelectItem key='shark' value='shark' role='option'>
              Shark
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );

    const listbox = wrapper.getByRole('combobox');

    expect(listbox).toBeInTheDocument();

    await userEvent.click(listbox);

    expect(wrapper.getByRole('option', { name: 'Penguin' })).toBeInTheDocument();

    expect(wrapper.getByRole('option', { name: 'Zebra' })).toBeInTheDocument();

    expect(wrapper.getByRole('option', { name: 'Shark' })).toBeInTheDocument();

    expect(listbox).toHaveAttribute('aria-expanded', 'true');
  });

  it('should open select and make a selection', async () => {
    const wrapper = render(
      <Select aria-label='Favorite Animal' onValueChange={mockOnChange}>
        <SelectTrigger>
          <SelectValue placeholder='Favorite Animal' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem key='penguin' data-testid='select-penguin' value='penguin' role='option'>
              Penguin
            </SelectItem>
            <SelectItem key='zebra' value='zebra' role='option'>
              Zebra
            </SelectItem>
            <SelectItem key='shark' value='shark' role='option'>
              Shark
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );

    const listbox = wrapper.getByRole('combobox');

    expect(listbox).toBeTruthy();

    await userEvent.click(listbox);

    const penguinSelection = wrapper.getByRole('option', { name: 'Penguin' });

    expect(listbox).toHaveAttribute('aria-expanded', 'true');

    expect(penguinSelection).toBeTruthy();

    await userEvent.click(penguinSelection);

    const textContent = listbox.querySelector('span')?.textContent;

    expect(textContent).toContain('Penguin');
  });
});
