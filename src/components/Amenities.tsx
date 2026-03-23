'use client';

import SectionWrapper from './ui/SectionWrapper';
import Card from './ui/Card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { amenities } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

/**
 * Amenities Component
 * 
 * Displays amenities in a grid of cards with hover scale effects.
 * Features stagger animation for each amenity card.
 * 
 * Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5
 */
export default function Amenities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="amenities" background="white">
      <div className="text-center mb-12">
        <h2 className="font-crimson text-5xl md:text-6xl font-bold text-primary mb-6">
          Tiện ích đẳng cấp
        </h2>
        <p className="font-exo text-lg text-neutral-gray-600 max-w-2xl mx-auto">
          Hệ thống tiện ích hoàn hảo phục vụ mọi nhu cầu của cư dân
        </p>
      </div>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
      >
        {amenities.map((amenity, index) => (
          <motion.div key={index} variants={staggerItem}>
            <Card
              icon={amenity.icon}
              title={amenity.name}
              description={amenity.description}
              hover={true}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
