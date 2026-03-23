'use client';

import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ProjectHighlights from '@/components/ProjectHighlights';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { HeroProps } from '@/types';
import { Building2, MapPin, Award, Users, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const heroProps: HeroProps = {
    title: 'Luxury Estate',
    subtitle: 'Không gian sống đẳng cấp - Phong cách sống hiện đại',
    backgroundImage: 'https://placehold.co/1920x1080/0F3D3E/FFFFFF?text=Luxury+Estate',
    ctaButtons: [
      {
        label: 'Đăng ký ngay',
        href: '/lien-he',
        variant: 'primary'
      },
      {
        label: 'Tìm hiểu thêm',
        href: '/gioi-thieu',
        variant: 'secondary'
      }
    ]
  };

  const stats = [
    { icon: Building2, value: '500+', label: 'Căn hộ cao cấp' },
    { icon: MapPin, value: '1', label: 'Vị trí đắc địa' },
    { icon: Award, value: '15+', label: 'Giải thưởng' },
    { icon: Users, value: '10K+', label: 'Khách hàng' }
  ];

  const features = [
    {
      title: 'Thiết kế hiện đại',
      description: 'Kiến trúc đương đại kết hợp hài hòa với thiên nhiên',
      image: 'https://placehold.co/600x400/0F3D3E/FFFFFF?text=Design'
    },
    {
      title: 'Tiện ích đẳng cấp',
      description: 'Hệ thống tiện ích 5 sao phục vụ mọi nhu cầu',
      image: 'https://placehold.co/600x400/1A5456/FFFFFF?text=Amenities'
    },
    {
      title: 'Vị trí vàng',
      description: 'Kết nối thuận tiện với trung tâm thành phố',
      image: 'https://placehold.co/600x400/0F3D3E/FFFFFF?text=Location'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero {...heroProps} />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent-gold" />
                    </div>
                    <div className="font-crimson text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="font-exo text-neutral-gray-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-neutral-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeUp">
              <div>
                <h2 className="font-crimson text-4xl md:text-5xl font-bold text-primary mb-6">
                  Về dự án
                </h2>
                <p className="font-exo text-lg text-neutral-gray-700 mb-6 leading-relaxed">
                  Luxury Estate là dự án bất động sản cao cấp, mang đến không gian sống đẳng cấp 
                  với thiết kế hiện đại, tiện ích hoàn hảo và vị trí đắc địa tại trung tâm thành phố.
                </p>
                <p className="font-exo text-lg text-neutral-gray-700 mb-8 leading-relaxed">
                  Được phát triển bởi đội ngũ chuyên gia hàng đầu, dự án hứa hẹn mang đến 
                  trải nghiệm sống vượt trội cho cư dân tinh hoa.
                </p>
                <Link
                  href="/gioi-thieu"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gold text-white font-exo font-semibold rounded-xl hover:bg-accent-gold-light transition-all"
                >
                  Tìm hiểu thêm
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/800x600/0F3D3E/FFFFFF?text=About"
                  alt="Về dự án"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <ProjectHighlights />

      {/* Features Section */}
      <section className="py-16 bg-neutral-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-crimson text-4xl md:text-5xl font-bold text-primary mb-4">
                Điểm nổi bật
              </h2>
              <p className="font-exo text-lg text-neutral-gray-600 max-w-2xl mx-auto">
                Những giá trị vượt trội làm nên sự khác biệt
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} animation="fadeUp">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-crimson text-2xl font-bold text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-exo text-neutral-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <Gallery />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeUp">
            <div className="text-center text-white">
              <h2 className="font-crimson text-4xl md:text-5xl font-bold mb-6">
                Sẵn sàng sở hữu căn hộ mơ ước?
              </h2>
              <p className="font-exo text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Đăng ký ngay để nhận tư vấn chi tiết và ưu đãi đặc biệt từ chúng tôi
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/lien-he"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-gold text-white font-exo font-bold rounded-xl hover:bg-accent-gold-light transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Đăng ký tư vấn
                </Link>
                <Link
                  href="/bang-gia"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-exo font-bold rounded-xl hover:bg-neutral-gray-100 transition-all"
                >
                  Xem bảng giá
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
