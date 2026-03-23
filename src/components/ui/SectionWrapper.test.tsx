import { render, screen } from '@testing-library/react';
import SectionWrapper from './SectionWrapper';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    section: ({ children, className, id, ...props }: any) => (
      <section id={id} className={className} {...props}>
        {children}
      </section>
    )
  },
  useInView: jest.fn(() => true)
}));

describe('SectionWrapper', () => {
  it('renders children correctly', () => {
    render(
      <SectionWrapper id="test-section">
        <div>Test Content</div>
      </SectionWrapper>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the correct id attribute', () => {
    const { container } = render(
      <SectionWrapper id="hero-section">
        <div>Content</div>
      </SectionWrapper>
    );
    
    const section = container.querySelector('#hero-section');
    expect(section).toBeInTheDocument();
  });

  it('applies white background by default', () => {
    const { container } = render(
      <SectionWrapper id="test-section">
        <div>Content</div>
      </SectionWrapper>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-white');
  });

  it('applies gray background when specified', () => {
    const { container } = render(
      <SectionWrapper id="test-section" background="gray">
        <div>Content</div>
      </SectionWrapper>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-neutral-gray-50');
  });

  it('applies consistent padding classes', () => {
    const { container } = render(
      <SectionWrapper id="test-section">
        <div>Content</div>
      </SectionWrapper>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('py-16');
    expect(section).toHaveClass('md:py-24');
  });

  it('applies container max-width to inner div', () => {
    const { container } = render(
      <SectionWrapper id="test-section">
        <div>Content</div>
      </SectionWrapper>
    );
    
    const innerDiv = container.querySelector('.container');
    expect(innerDiv).toHaveClass('max-w-7xl');
    expect(innerDiv).toHaveClass('mx-auto');
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <SectionWrapper id="test-section" className="custom-class">
        <div>Content</div>
      </SectionWrapper>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });

  it('applies responsive padding classes', () => {
    const { container } = render(
      <SectionWrapper id="test-section">
        <div>Content</div>
      </SectionWrapper>
    );
    
    const innerDiv = container.querySelector('.container');
    expect(innerDiv).toHaveClass('px-4');
    expect(innerDiv).toHaveClass('sm:px-6');
    expect(innerDiv).toHaveClass('lg:px-8');
  });
});
