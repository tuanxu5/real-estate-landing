'use client';

import { useState, useEffect } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import AnimatedSection from './ui/AnimatedSection';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '@/lib/data';

/**
 * Gallery Component with Lightbox
 * 
 * Displays project images in a grid layout with lightbox functionality.
 * Features click to open lightbox, prev/next navigation, and ESC key support.
 * 
 * Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5
 */
export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Handle ESC key and arrow keys
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImage]);

  return (
    <SectionWrapper id="gallery" background="gray">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Thư viện hình ảnh
        </h2>
        <p className="font-inter text-lg text-neutral-gray-800 max-w-2xl mx-auto">
          Khám phá vẻ đẹp và đẳng cấp của dự án qua bộ sưu tập hình ảnh
        </p>
      </div>

      <AnimatedSection animation="fadeUp">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-accent-gold transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 text-white text-4xl hover:text-accent-gold transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Image */}
            <motion.div
              className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Next Button */}
            <button
              className="absolute right-4 text-white text-4xl hover:text-accent-gold transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              ›
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-inter">
              {currentImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
