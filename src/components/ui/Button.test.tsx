import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByText('Primary Button');
    expect(button).toHaveClass('bg-accent-gold');
  });

  it('applies secondary variant styles when specified', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByText('Secondary Button');
    expect(button).toHaveClass('bg-transparent');
    expect(button).toHaveClass('border-2');
    expect(button).toHaveClass('border-accent-gold');
  });

  it('applies disabled state correctly', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:bg-neutral-gray-300');
  });

  it('applies rounded-2xl border radius', () => {
    render(<Button>Rounded Button</Button>);
    const button = screen.getByText('Rounded Button');
    expect(button).toHaveClass('rounded-2xl');
  });

  it('accepts custom className prop', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByText('Custom Button');
    expect(button).toHaveClass('custom-class');
  });

  it('passes through additional button props', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Handler</Button>);
    const button = screen.getByText('Click Handler');
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
