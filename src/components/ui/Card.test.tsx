import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('renders title and description', () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
      />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(
      <Card
        icon={<span data-testid="test-icon">🏠</span>}
        title="Test Title"
        description="Test Description"
      />
    );

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders image when provided', () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
        image="/test-image.jpg"
      />
    );

    const image = screen.getByAltText('Test Title');
    expect(image).toBeInTheDocument();
  });

  it('applies rounded-2xl and shadow-lg styling', () => {
    const { container } = render(
      <Card
        title="Test Title"
        description="Test Description"
      />
    );

    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('rounded-2xl');
    expect(card.className).toContain('shadow-lg');
  });

  it('disables hover effect when hover prop is false', () => {
    const { container } = render(
      <Card
        title="Test Title"
        description="Test Description"
        hover={false}
      />
    );

    const card = container.firstChild as HTMLElement;
    expect(card).toBeInTheDocument();
  });
});
