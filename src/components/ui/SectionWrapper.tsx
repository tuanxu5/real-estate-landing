'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
  background?: 'white' | 'gray';
}

export default function SectionWrapper({
  id,
  className = '',
  children,
  background = 'white'
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-neutral-gray-50'
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </motion.section>
  );
}
