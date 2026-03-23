'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedSectionProps } from '@/types';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getVariants = () => {
    switch (animation) {
      case 'fadeIn':
        return fadeInVariants;
      case 'stagger':
        return staggerContainerVariants;
      case 'fadeUp':
      default:
        return fadeUpVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={getVariants()}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}

// Export stagger item variants for use in child components
export { staggerItemVariants };
