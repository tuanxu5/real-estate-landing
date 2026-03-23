'use client';

import SectionWrapper from './ui/SectionWrapper';
import AnimatedSection from './ui/AnimatedSection';
import Image from 'next/image';

/**
 * Introduction Component
 * 
 * Displays a brief project description with elegant typography and image.
 * Uses 2-column layout with text and image side by side.
 * 
 * Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5
 */
export default function Introduction() {
  return (
    <SectionWrapper id="introduction" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <AnimatedSection animation="fadeUp">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Không gian sống đẳng cấp
          </h2>
          <p className="font-inter text-lg text-neutral-gray-800 mb-4 leading-relaxed">
            Chào mừng bạn đến với dự án bất động sản cao cấp, nơi hội tụ của sự sang trọng, 
            tiện nghi và phong cách sống hiện đại. Được thiết kế bởi các kiến trúc sư hàng đầu, 
            dự án mang đến không gian sống hoàn hảo cho những ai trân trọng giá trị và chất lượng.
          </p>
          <p className="font-inter text-lg text-neutral-gray-800 leading-relaxed">
            Với vị trí đắc địa tại trung tâm thành phố, kết nối giao thông thuận tiện và 
            hệ thống tiện ích đẳng cấp 5 sao, đây là nơi lý tưởng để bạn và gia đình 
            tận hưởng cuộc sống trọn vẹn.
          </p>
        </AnimatedSection>

        {/* Image */}
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/800x600/0F3D3E/FFFFFF?text=Introduction"
              alt="Không gian sống đẳng cấp"
              fill
              className="object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
