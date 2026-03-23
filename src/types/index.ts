// Navigation
export interface NavigationSection {
  id: string;
  label: string;
}

// Hero Section
export interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaButtons: CTAButton[];
}

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

// Project Highlights
export interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Location
export interface LocationAdvantage {
  title: string;
  description: string;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  type: string;
}

// Amenities
export interface Amenity {
  name: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

// Gallery
export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Contact Form
export interface FormData {
  name: string;
  phone: string;
  email: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

// Footer
export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

// Component Props
export interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'gray';
}

export interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  hover?: boolean;
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'stagger';
  delay?: number;
}
