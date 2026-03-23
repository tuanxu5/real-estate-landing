'use client';

import SectionWrapper from './ui/SectionWrapper';
import AnimatedSection from './ui/AnimatedSection';
import Image from 'next/image';

/**
 * MasterPlan Component
 * 
 * Displays the project's master plan image with zoom effect on hover.
 * Features overflow hidden container with smooth transition.
 * 
 * Validates: Requirements 6.1, 6.2, 6.3, 6.4
 */
export default function MasterPlan() {
  return (
    <SectionWrapper id="masterplan" background="gray">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Mặt bằng tổng thể
        </h2>
        <p className="font-inter text-lg text-neutral-gray-800 max-w-2xl mx-auto">
          Thiết kế tổng thể hài hòa, tối ưu không gian sống và tiện ích
        </p>
      </div>

      <AnimatedSection animation="fadeUp">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-xl bg-neutral-gray-100">
          <div className="relative w-full h-full group">
            <Image
              src="https://placehold.co/1200x800/0F3D3E/FFFFFF?text=Master+Plan"
              alt="Mặt bằng tổng thể dự án"
              fill
              className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
        </div>
        
        <p className="font-inter text-center text-neutral-gray-800 mt-6 italic">
          Di chuột vào hình để phóng to chi tiết
        </p>
      </AnimatedSection>
    </SectionWrapper>
  );
}
