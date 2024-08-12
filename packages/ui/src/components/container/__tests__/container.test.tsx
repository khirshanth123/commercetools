import React from 'react';
import { render } from '@testing-library/react';
import { Container } from '../container';

describe('Container component', () => {
  it('renders with default props', () => {
    const { getByText, container } = render(<Container>This is the content</Container>);

    expect(getByText('This is the content')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('mx-auto');
    expect(container.firstChild).toHaveClass('px-4');
    expect(container.firstChild).toHaveClass('lg:px-8');
    expect(container.firstChild).toHaveClass('max-w-screen-2xl');
  });

  it('renders with custom class names', () => {
    const { container } = render(
      <Container className='custom-class'>This is the content</Container>,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies the right class names based on props', () => {
    const { container } = render(
      <Container gutters={false} maxWidth={false}>
        This is the content
      </Container>,
    );

    expect(container.firstChild).toHaveClass('mx-auto');
    expect(container.firstChild).not.toHaveClass('px-4');
    expect(container.firstChild).not.toHaveClass('lg:px-8');
    expect(container.firstChild).not.toHaveClass('max-w-screen-2xl');
  });
});
