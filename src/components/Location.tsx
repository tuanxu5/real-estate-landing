'use client';

import SectionWrapper from './ui/SectionWrapper';
import AnimatedSection from './ui/AnimatedSection';

/**
 * Location Component
 * 
 * Displays project location with map and nearby places.
 * Features 2-column layout combining map and location advantages.
 * 
 * Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5
 */
export default function Location() {
  const locationAdvantages = [
    'Chỉ 5 phút đến trung tâm thương mại lớn nhất thành phố',
    'Kết nối nhanh với sân bay quốc tế (15 phút)',
    'Gần các trường học quốc tế uy tín',
    'Hệ thống giao thông công cộng thuận tiện',
    'Khu vực an ninh, yên tĩnh và văn minh'
  ];

  const nearbyPlaces = [
    { name: 'Vincom Center', distance: '2 km', type: 'Trung tâm thương mại' },
    { name: 'Bệnh viện Quốc tế', distance: '1.5 km', type: 'Y tế' },
    { name: 'Trường Quốc tế ABC', distance: '3 km', type: 'Giáo dục' },
    { name: 'Công viên Trung tâm', distance: '1 km', type: 'Giải trí' },
    { name: 'Sân bay Tân Sơn Nhất', distance: '12 km', type: 'Giao thông' }
  ];

  return (
    <SectionWrapper id="location" background="white">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Vị trí & Kết nối
        </h2>
        <p className="font-inter text-lg text-neutral-gray-800 max-w-2xl mx-auto">
          Tọa lạc tại vị trí đắc địa, kết nối hoàn hảo với mọi tiện ích
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Map */}
        <AnimatedSection animation="fadeUp">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-neutral-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3193500642937!2d106.69746931533417!3d10.782432192318482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Project Location Map"
            />
          </div>
        </AnimatedSection>

        {/* Location Info */}
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <div className="space-y-8">
            {/* Advantages */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Ưu điểm vị trí
              </h3>
              <ul className="space-y-3">
                {locationAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-gold mr-3 mt-1">✓</span>
                    <span className="font-inter text-neutral-gray-800">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nearby Places */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Tiện ích lân cận
              </h3>
              <div className="space-y-3">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-neutral-gray-50 rounded-xl">
                    <div>
                      <p className="font-inter font-medium text-primary">{place.name}</p>
                      <p className="font-inter text-sm text-neutral-gray-800">{place.type}</p>
                    </div>
                    <span className="font-inter text-sm font-medium text-accent-gold">
                      {place.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
