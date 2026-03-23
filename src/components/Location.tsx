'use client';

import AnimatedSection from './ui/AnimatedSection';
import { MapPin, ShoppingBag, GraduationCap, Heart, Plane } from 'lucide-react';

export default function Location() {
  const locationAdvantages = [
    'Chỉ 5 phút đến trung tâm thương mại',
    'Kết nối sân bay quốc tế 15 phút',
    'Gần trường học quốc tế',
    'Giao thông công cộng thuận tiện',
    'Khu vực an ninh, yên tĩnh'
  ];

  const nearbyPlaces = [
    { name: 'Vincom Center', distance: '2 km', type: 'Mua sắm', icon: ShoppingBag },
    { name: 'Bệnh viện Quốc tế', distance: '1.5 km', type: 'Y tế', icon: Heart },
    { name: 'Trường Quốc tế ABC', distance: '3 km', type: 'Giáo dục', icon: GraduationCap },
    { name: 'Lotte Mart', distance: '2.5 km', type: 'Mua sắm', icon: ShoppingBag },
    { name: 'Sân bay Tân Sơn Nhất', distance: '12 km', type: 'Giao thông', icon: Plane }
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection animation="fadeUp">
          <div className="mb-16 text-center">
            <h1 className="font-crimson text-5xl md:text-6xl font-bold text-primary mb-6">
              Vị trí & Kết nối
            </h1>
            <p className="font-exo text-neutral-gray-600 text-lg max-w-3xl mx-auto">
              Tọa lạc tại vị trí đắc địa, kết nối thuận tiện
            </p>
          </div>
        </AnimatedSection>

        {/* Two columns: Map - Nearby */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Map - Left */}
          <AnimatedSection animation="fadeUp">
            <div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
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
              <div className="mt-4 flex items-center gap-2 text-neutral-gray-600">
                <MapPin className="w-5 h-5" />
                <span className="font-exo text-sm">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Nearby Places - Right */}
          <AnimatedSection animation="fadeUp">
            <div>
              <h2 className="font-crimson text-2xl font-bold text-primary mb-6">
                Tiện ích lân cận
              </h2>
              <div className="space-y-3">
                {nearbyPlaces.map((place, index) => {
                  const Icon = place.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 bg-neutral-gray-50 rounded-lg hover:bg-neutral-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-accent-gold" />
                        <div>
                          <p className="font-exo font-medium text-primary">{place.name}</p>
                          <p className="font-exo text-sm text-neutral-gray-600">{place.type}</p>
                        </div>
                      </div>
                      <span className="font-exo text-sm font-medium text-accent-gold">
                        {place.distance}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
