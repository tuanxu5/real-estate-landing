'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './ui/Button';
import { HeroProps } from '@/types';

/**
 * Hero Component
 * 
 * Fullscreen hero section with background image, gradient overlay, and CTAs.
 * Features fade-in animations with stagger for title, subtitle, and buttons.
 * 
 * Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 15.1
 */
export default function Hero({ title, subtitle, backgroundImage, ctaButtons }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        priority
        quality={90}
        className="object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        <motion.p
          className="font-inter text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {ctaButtons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              onClick={() => {
                const element = document.querySelector(button.href);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {button.label}
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
