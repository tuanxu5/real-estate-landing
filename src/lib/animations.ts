/**
 * Framer Motion animation variants for the luxury real estate landing page
 * 
 * These variants provide consistent, reusable animations throughout the application.
 * They support scroll-triggered animations, hover effects, and stagger animations.
 */

/**
 * Fade up animation - elements fade in while moving up from below
 * Used for section content entering the viewport
 * 
 * Validates: Requirements 11.1, 11.2
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

/**
 * Simple fade in animation - elements fade in without movement
 * Used for subtle content reveals
 * 
 * Validates: Requirements 11.1, 11.2
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

/**
 * Stagger container - parent container that orchestrates staggered children animations
 * Used with staggerItem for grid layouts and lists
 * 
 * Validates: Requirements 11.3
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

/**
 * Stagger item - child elements that animate in sequence
 * Used within staggerContainer for grid items, cards, etc.
 * 
 * Validates: Requirements 11.3
 */
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

/**
 * Scale on hover animation - elements scale up on hover
 * Used for interactive cards and buttons
 * 
 * Validates: Requirements 11.4
 */
export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};
