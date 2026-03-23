'use client';

import SectionWrapper from './ui/SectionWrapper';
import Card from './ui/Card';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { highlights } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

/**
 * ProjectHighlights Component
 * 
 * Displays key selling points in a grid layout with icons and descriptions.
 * Features stagger animation for each card entering the viewport.
 * 
 * Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5
 */
export default function ProjectHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="highlights" background="gray">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Điểm nổi bật dự án
        </h2>
        <p className="font-inter text-lg text-neutral-gray-800 max-w-2xl mx-auto">
          Khám phá những ưu điểm vượt trội làm nên giá trị đặc biệt của dự án
        </p>
      </div>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        {highlights.map((highlight, index) => (
          <motion.div key={index} variants={staggerItem}>
            <Card
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
              hover={true}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
