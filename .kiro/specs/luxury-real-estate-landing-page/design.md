# Design Document: Luxury Real Estate Landing Page

## Overview

This document outlines the technical design for a luxury real estate landing page built with Next.js 16 (App Router), TypeScript, TailwindCSS v4, and Framer Motion. The design follows a component-based architecture with a focus on performance, accessibility, and maintainability.

## Technology Stack

- **Framework**: Next.js 16.2.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS v4
- **Animation**: Framer Motion
- **Image Optimization**: Next.js Image component
- **Font**: Google Fonts (Playfair Display for headings, Inter for body)

## Design System

### Color Palette

```typescript
// tailwind.config.ts theme extension
colors: {
  primary: {
    DEFAULT: '#0F3D3E',
    dark: '#0A2829',
    light: '#1A5456'
  },
  accent: {
    gold: '#C9A96E',
    'gold-light': '#D4B87E',
    'gold-dark': '#B8985E'
  },
  neutral: {
    white: '#FFFFFF',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      800: '#1F2937',
      900: '#111827'
    }
  }
}
```

### Typography Scale

- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, readable)
- **Scale**: text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl

### Spacing & Layout

- **Container**: max-w-7xl with responsive padding
- **Section Padding**: py-16 md:py-24 lg:py-32
- **Grid Gaps**: gap-6 md:gap-8 lg:gap-12
- **Border Radius**: rounded-2xl for cards and buttons
- **Shadows**: shadow-lg, shadow-xl for elevation

## Component Architecture

### File Structure

```
src/
├── app/
│   ├── layout.tsx (root layout)
│   ├── page.tsx (landing page)
│   └── globals.css (global styles)
├── components/
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Introduction.tsx
│   ├── ProjectHighlights.tsx
│   ├── Location.tsx
│   ├── MasterPlan.tsx
│   ├── Amenities.tsx
│   ├── Gallery.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── SectionWrapper.tsx
│       ├── Card.tsx
│       ├── Button.tsx
│       └── AnimatedSection.tsx
├── lib/
│   ├── animations.ts (Framer Motion variants)
│   └── utils.ts (utility functions)
└── types/
    └── index.ts (TypeScript interfaces)
```

### Core Components

#### 1. Navigation Component

**Purpose**: Sticky navigation bar with scroll-based styling changes

**Props**:
```typescript
interface NavigationProps {
  sections: Array<{ id: string; label: string }>;
}
```

**State**:
- `isScrolled`: boolean (tracks if page is scrolled)
- `activeSection`: string (current section in viewport)

**Behavior**:
- Transparent background when at top (bg-transparent)
- Solid background with backdrop blur when scrolled (bg-primary/90 backdrop-blur-md)
- Smooth scroll to sections on link click
- Highlight active section based on scroll position
- Mobile: hamburger menu with slide-in drawer

**Implementation**:
```typescript
// Pseudocode
function Navigation({ sections }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    // Listen to scroll events
    // Update isScrolled when scrollY > 50
    // Use Intersection Observer to track active section
  }, []);
  
  return (
    <nav className={isScrolled ? 'bg-primary/90 backdrop-blur-md' : 'bg-transparent'}>
      {/* Navigation links */}
    </nav>
  );
}
```

#### 2. Hero Component

**Purpose**: Fullscreen hero section with background image and CTAs

**Props**:
```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaButtons: Array<{ label: string; href: string; variant: 'primary' | 'secondary' }>;
}
```

**Layout**:
- Full viewport height (min-h-screen)
- Background image with gradient overlay
- Centered content with fade-in animation
- Two CTA buttons (Register, Contact)

**Animation**:
- Fade in title with delay
- Fade in subtitle with delay
- Fade in buttons with stagger

#### 3. SectionWrapper Component

**Purpose**: Reusable wrapper for consistent section styling and animations

**Props**:
```typescript
interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray';
}
```

**Features**:
- Consistent padding (py-16 md:py-24)
- Container max-width
- Intersection Observer for scroll animations
- Fade-up animation on enter viewport

#### 4. Card Component

**Purpose**: Reusable card for highlights, amenities, etc.

**Props**:
```typescript
interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  hover?: boolean;
}
```

**Styling**:
- Rounded corners (rounded-2xl)
- Shadow (shadow-lg)
- Hover scale effect (hover:scale-105)
- Transition (transition-transform duration-300)

#### 5. AnimatedSection Component

**Purpose**: Wrapper for scroll-triggered animations

**Props**:
```typescript
interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'stagger';
  delay?: number;
}
```

**Implementation**:
- Uses Framer Motion's motion components
- Uses useInView hook for viewport detection
- Applies animation variants based on prop

#### 6. ProjectHighlights Component

**Purpose**: Display key selling points in a grid

**Data Structure**:
```typescript
interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}
```

**Layout**:
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Stagger animation for cards
- Icon + title + description per card

#### 7. Location Component

**Purpose**: Show project location with map and nearby places

**Layout**:
- Two-column layout (map + content)
- Embedded Google Maps iframe (or placeholder)
- List of location advantages
- List of nearby places

#### 8. MasterPlan Component

**Purpose**: Display master plan image with zoom on hover

**Features**:
- Large image display
- Hover zoom effect (scale-110)
- Overflow hidden container
- Smooth transition

#### 9. Amenities Component

**Purpose**: Display amenities in a grid of cards

**Data Structure**:
```typescript
interface Amenity {
  name: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}
```

**Layout**:
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Card component for each amenity
- Hover scale effect

#### 10. Gallery Component

**Purpose**: Image gallery with lightbox

**Features**:
- Masonry or grid layout
- Lazy loading for images
- Click to open lightbox
- Lightbox with prev/next navigation
- Close on overlay click or ESC key

**Implementation**:
```typescript
// Pseudocode
function Gallery({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  function openLightbox(index) {
    setCurrentImage(index);
    setLightboxOpen(true);
  }
  
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <Image key={i} src={img} onClick={() => openLightbox(i)} />
        ))}
      </div>
      {lightboxOpen && <Lightbox />}
    </>
  );
}
```

#### 11. ContactForm Component

**Purpose**: Collect user information with validation

**Form Fields**:
```typescript
interface FormData {
  name: string;
  phone: string;
  email: string;
}
```

**Validation Rules**:
- Name: required, min 2 characters
- Phone: required, valid phone format
- Email: required, valid email format

**State Management**:
```typescript
const [formData, setFormData] = useState<FormData>({
  name: '',
  phone: '',
  email: ''
});
const [errors, setErrors] = useState<Partial<FormData>>({});
const [isSubmitting, setIsSubmitting] = useState(false);
```

**Validation Logic**:
```typescript
function validateForm(data: FormData): Partial<FormData> {
  const errors: Partial<FormData> = {};
  
  if (!data.name || data.name.length < 2) {
    errors.name = 'Vui lòng nhập tên (tối thiểu 2 ký tự)';
  }
  
  if (!data.phone || !/^[0-9]{10,11}$/.test(data.phone)) {
    errors.phone = 'Vui lòng nhập số điện thoại hợp lệ';
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Vui lòng nhập email hợp lệ';
  }
  
  return errors;
}
```

**Submit Handler**:
```typescript
async function handleSubmit(e: FormEvent) {
  e.preventDefault();
  
  const validationErrors = validateForm(formData);
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }
  
  setIsSubmitting(true);
  // Submit form data (console.log for now)
  console.log('Form submitted:', formData);
  
  // Reset form
  setFormData({ name: '', phone: '', email: '' });
  setIsSubmitting(false);
}
```

#### 12. Footer Component

**Purpose**: Display contact info and social links

**Content**:
- Company name/logo
- Contact information (phone, email, address)
- Social media links
- Copyright notice

**Layout**:
- Multi-column layout on desktop
- Stacked on mobile
- Dark background (bg-primary)
- Light text (text-white)

## Animation System

### Framer Motion Variants

```typescript
// lib/animations.ts

export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};
```

### Scroll Animation Pattern

```typescript
// Common pattern for scroll-triggered animations
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
    >
      {/* Content */}
    </motion.div>
  );
}
```

## Responsive Design Strategy

### Breakpoints (TailwindCSS defaults)
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### Mobile-First Approach

1. **Base styles**: Mobile layout (single column, stacked)
2. **md breakpoint**: Tablet layout (2 columns where appropriate)
3. **lg breakpoint**: Desktop layout (3-4 columns, full features)

### Responsive Patterns

**Grid Layouts**:
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

**Typography**:
```css
text-3xl md:text-4xl lg:text-5xl
```

**Spacing**:
```css
py-12 md:py-16 lg:py-24
```

**Navigation**:
- Mobile: Hamburger menu
- Desktop: Horizontal nav links

## Performance Optimization

### Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Hero image"
  fill
  priority // For above-the-fold images
  quality={90}
  className="object-cover"
/>
```

### Lazy Loading

- Use `loading="lazy"` for below-the-fold images
- Implement Intersection Observer for section animations
- Load gallery images on demand

### Code Splitting

- Next.js automatically code-splits by route
- Use dynamic imports for heavy components (e.g., lightbox)

```typescript
import dynamic from 'next/dynamic';

const Lightbox = dynamic(() => import('./Lightbox'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
```

## Data Management

### Static Data

All content is static and defined in the components or imported from a data file:

```typescript
// lib/data.ts

export const highlights = [
  {
    icon: '🏢',
    title: 'Vị trí đắc địa',
    description: 'Nằm tại trung tâm thành phố, kết nối mọi tiện ích'
  },
  // ... more highlights
];

export const amenities = [
  {
    name: 'Hồ bơi vô cực',
    description: 'Hồ bơi ngoài trời với tầm nhìn panorama',
    icon: '🏊'
  },
  // ... more amenities
];
```

## Accessibility Considerations

1. **Semantic HTML**: Use proper heading hierarchy (h1, h2, h3)
2. **Alt Text**: All images have descriptive alt attributes
3. **Keyboard Navigation**: All interactive elements are keyboard accessible
4. **Focus States**: Visible focus indicators for keyboard users
5. **ARIA Labels**: Use aria-label for icon-only buttons
6. **Color Contrast**: Ensure WCAG AA compliance for text contrast

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features (supported by Next.js transpilation)
- CSS Grid and Flexbox
- No IE11 support required

## Correctness Properties

### Property 1: Form Validation Consistency
**Statement**: For any form submission, if validation fails, the form state remains unchanged and error messages are displayed for all invalid fields.

**Validates**: Requirements 9.6, 9.7, 9.8

**Formal Expression**:
```
∀ formData, errors = validate(formData)
  IF errors ≠ ∅ THEN
    - formData remains unchanged
    - errors are displayed in UI
    - form is not submitted
```

### Property 2: Navigation Active State Accuracy
**Statement**: The navigation bar always highlights exactly one section that corresponds to the section currently in the viewport.

**Validates**: Requirements 12.2, 12.3

**Formal Expression**:
```
∀ scroll position p, ∃! section s
  WHERE s is in viewport at position p
  THEN navigation highlights s
```

### Property 3: Responsive Layout Integrity
**Statement**: For any viewport width, all content remains readable and interactive elements remain accessible without horizontal scrolling.

**Validates**: Requirements 13.2, 13.3, 13.5

**Formal Expression**:
```
∀ viewport width w ∈ [320px, ∞)
  - No horizontal overflow
  - All text is readable
  - All interactive elements are clickable/tappable
```

### Property 4: Image Optimization Compliance
**Statement**: All images use Next.js Image component with appropriate optimization settings.

**Validates**: Requirements 14.1, 14.2

**Formal Expression**:
```
∀ image i in application
  - i uses Next.js Image component
  - i has alt attribute
  - i has appropriate loading strategy (priority OR lazy)
```

### Property 5: Animation Performance
**Statement**: Animations do not cause layout shifts or block user interaction.

**Validates**: Requirements 11.7

**Formal Expression**:
```
∀ animation a
  - a does not trigger layout recalculation
  - a uses transform/opacity properties
  - a does not block user input
```

## Implementation Notes

1. **Next.js App Router**: Use server components by default, add 'use client' only when needed (for hooks, event handlers)
2. **TailwindCSS v4**: Check for any breaking changes from v3
3. **Framer Motion**: Install with `npm install framer-motion`
4. **Google Fonts**: Use next/font for optimized font loading
5. **Environment Variables**: Store any API keys (Google Maps) in .env.local

## Testing Strategy

1. **Visual Testing**: Manual testing across devices and browsers
2. **Accessibility Testing**: Use axe DevTools or Lighthouse
3. **Performance Testing**: Lighthouse performance score > 90
4. **Responsive Testing**: Test on mobile, tablet, desktop viewports
5. **Form Validation Testing**: Test all validation rules and edge cases

