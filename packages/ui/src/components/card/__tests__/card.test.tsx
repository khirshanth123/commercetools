import * as React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../../button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardLabel,
  CardTitle,
} from '../card';

describe('Card', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Card className='w-[450px]'>
        <CardHeader>
          <CardLabel>Default</CardLabel>
          <CardTitle>Home</CardTitle>
          <CardDescription>Home address in Medellin</CardDescription>
        </CardHeader>
        <CardContent>
          <div>Pepita Perez</div>
          <div>Calle 34</div>
          <div>Medellin</div>
          <div>Zip: 00000000</div>
          <div>Phone: 543278999254</div>
        </CardContent>
        <CardFooter className='flex flex-row gap-2 justify-end pt-2'>
          <Button size='xs' variant={'ghost'} color='primary'>
            Edit
          </Button>
          <Button size='xs' variant={'ghost'} color='neutral'>
            Delete
          </Button>
        </CardFooter>
      </Card>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should be forwarded with ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <Card ref={ref} className='w-[450px]'>
        <CardHeader>
          <CardLabel>Default</CardLabel>
          <CardTitle>Home</CardTitle>
          <CardDescription>Home address in Medellin</CardDescription>
        </CardHeader>
        <CardContent>
          <div>Pepita Perez</div>
          <div>Calle 34</div>
          <div>Medellin</div>
          <div>Zip: 00000000</div>
          <div>Phone: 543278999254</div>
        </CardContent>
        <CardFooter className='flex flex-row gap-2 justify-end pt-2'>
          <Button size='xs' variant={'ghost'} color='primary'>
            Edit
          </Button>
          <Button size='xs' variant={'ghost'} color='neutral'>
            Delete
          </Button>
        </CardFooter>
      </Card>,
    );

    expect(ref.current).not.toBeNull();
  });

  it('should render with specified radius variant', () => {
    const { container } = render(<Card radius='lg' />);
    expect(container.firstChild).toHaveClass('rounded-lg');
  });

  it('should render with specified bordered variant', () => {
    const { container } = render(<Card bordered={false} />);
    expect(container.firstChild).not.toHaveClass('border');
  });

  it('should render with specified shadow variant', () => {
    const { container } = render(<Card shadow='xl' />);
    expect(container.firstChild).toHaveClass('shadow-xl');
  });

  it('should render all child components', () => {
    const { getByTestId } = render(
      <Card data-testid='card-component' className='w-[450px]'>
        <CardHeader data-testid='card-header-component'>
          <CardLabel data-testid='card-label-component'>Default</CardLabel>
          <CardTitle data-testid='card-title-component'>Home</CardTitle>
          <CardDescription data-testid='card-description-component'>
            Home address in Medellin
          </CardDescription>
        </CardHeader>
        <CardContent data-testid='card-content-component'>
          <div>Pepita Perez</div>
          <div>Calle 34</div>
          <div>Medellin</div>
          <div>Zip: 00000000</div>
          <div>Phone: 543278999254</div>
        </CardContent>
        <CardFooter
          data-testid='card-footer-component'
          className='flex flex-row gap-2 justify-end pt-2'
        >
          <Button size='xs' variant={'ghost'} color='primary'>
            Edit
          </Button>
          <Button size='xs' variant={'ghost'} color='neutral'>
            Delete
          </Button>
        </CardFooter>
      </Card>,
    );

    const cardComponent = getByTestId('card-component');
    const cardHeaderComponent = getByTestId('card-header-component');
    const cardLabelComponent = getByTestId('card-label-component');
    const cardTitleComponent = getByTestId('card-title-component');
    const cardDescriptionComponent = getByTestId('card-description-component');
    const cardContentComponent = getByTestId('card-content-component');
    const cardFooterComponent = getByTestId('card-footer-component');

    expect(cardComponent).not.toBeNull();
    expect(cardHeaderComponent).not.toBeNull();
    expect(cardLabelComponent).not.toBeNull();
    expect(cardTitleComponent).not.toBeNull();
    expect(cardDescriptionComponent).not.toBeNull();
    expect(cardContentComponent).not.toBeNull();
    expect(cardFooterComponent).not.toBeNull();
  });
});
