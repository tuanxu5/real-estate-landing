'use client';

import AnimatedSection from './ui/AnimatedSection';
import Image from 'next/image';
import { Building2, Users, Award, TrendingUp, CheckCircle, Target, Heart, Shield } from 'lucide-react';

/**
 * Introduction Component
 * 
 * Displays comprehensive project introduction with stats, values, and timeline.
 * Modern layout with hero section, stats, company values, and milestones.
 * 
 * Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5
 */
export default function Introduction() {
  const stats = [
    { icon: Building2, value: '500+', label: 'Căn hộ cao cấp' },
    { icon: Users, value: '10,000+', label: 'Khách hàng tin tưởng' },
    { icon: Award, value: '15+', label: 'Giải thưởng uy tín' },
    { icon: TrendingUp, value: '98%', label: 'Tỷ lệ hài lòng' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Tầm nhìn',
      description: 'Trở thành nhà phát triển bất động sản hàng đầu, mang đến không gian sống đẳng cấp quốc tế'
    },
    {
      icon: Heart,
      title: 'Sứ mệnh',
      description: 'Kiến tạo những cộng đồng sống văn minh, hiện đại với chất lượng cuộc sống vượt trội'
    },
    {
      icon: Shield,
      title: 'Giá trị cốt lõi',
      description: 'Uy tín, chất lượng, sáng tạo và trách nhiệm với cộng đồng là nền tảng của mọi dự án'
    }
  ];

  const milestones = [
    { year: '2015', title: 'Thành lập công ty', description: 'Khởi đầu hành trình kiến tạo không gian sống' },
    { year: '2018', title: 'Dự án đầu tiên', description: 'Hoàn thành 200 căn hộ cao cấp đầu tiên' },
    { year: '2021', title: 'Mở rộng quy mô', description: 'Phát triển 5 dự án lớn trên toàn quốc' },
    { year: '2026', title: 'Luxury Estate', description: 'Ra mắt dự án biểu tượng mới' }
  ];

  const features = [
    'Thiết kế kiến trúc hiện đại, sang trọng',
    'Vị trí đắc địa, kết nối thuận tiện',
    'Hệ thống tiện ích đẳng cấp 5 sao',
    'An ninh 24/7 với công nghệ thông minh',
    'Không gian xanh, môi trường trong lành',
    'Cộng đồng cư dân văn minh, đẳng cấp'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-neutral-gray-50 to-white pt-48 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <AnimatedSection animation="fadeUp">
            <h1 className="font-crimson text-5xl md:text-6xl font-bold text-primary mb-6">
              Về Luxury Estate
            </h1>
            <p className="font-exo text-xl text-neutral-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nơi hội tụ của sự sang trọng, tiện nghi và phong cách sống hiện đại
            </p>
          </AnimatedSection>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Text Content */}
          <AnimatedSection animation="fadeUp">
            <div className="space-y-6">
              <h2 className="font-crimson text-3xl md:text-4xl font-bold text-primary">
                Không gian sống đẳng cấp
              </h2>
              <p className="font-exo text-lg text-neutral-gray-700 leading-relaxed">
                Chào mừng bạn đến với dự án bất động sản cao cấp, nơi hội tụ của sự sang trọng, 
                tiện nghi và phong cách sống hiện đại. Được thiết kế bởi các kiến trúc sư hàng đầu, 
                dự án mang đến không gian sống hoàn hảo cho những ai trân trọng giá trị và chất lượng.
              </p>
              <p className="font-exo text-lg text-neutral-gray-700 leading-relaxed">
                Với vị trí đắc địa tại trung tâm thành phố, kết nối giao thông thuận tiện và 
                hệ thống tiện ích đẳng cấp 5 sao, đây là nơi lý tưởng để bạn và gia đình 
                tận hưởng cuộc sống trọn vẹn.
              </p>

              {/* Features List */}
              <div className="space-y-3 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0" />
                    <span className="font-exo text-neutral-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection animation="fadeUp">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/800x600/0F3D3E/FFFFFF?text=Luxury+Estate"
                alt="Không gian sống đẳng cấp"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Section */}
        <AnimatedSection animation="fadeUp">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-12 mb-20 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-gold flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="font-crimson text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="font-exo text-neutral-gray-100">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-crimson text-4xl font-bold text-primary mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="font-exo text-lg text-neutral-gray-600">
              Những giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={index} animation="fadeUp">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                    <div className="w-16 h-16 mb-6 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent-gold" />
                    </div>
                    <h3 className="font-crimson text-2xl font-bold text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="font-exo text-neutral-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-crimson text-4xl font-bold text-primary mb-4">
              Hành trình phát triển
            </h2>
            <p className="font-exo text-lg text-neutral-gray-600">
              Những cột mốc quan trọng trong lịch sử công ty
            </p>
          </div>

          <AnimatedSection animation="fadeUp">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent-gold/30 hidden lg:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row gap-8 items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 lg:text-right lg:pr-12">
                      <div className={`bg-white rounded-2xl p-6 shadow-lg ${index % 2 === 0 ? '' : 'lg:text-left lg:pl-12 lg:pr-6'}`}>
                        <div className="font-crimson text-3xl font-bold text-accent-gold mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="font-crimson text-xl font-bold text-primary mb-2">
                          {milestone.title}
                        </h3>
                        <p className="font-exo text-neutral-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="relative z-10 w-6 h-6 rounded-full bg-accent-gold border-4 border-white shadow-lg flex-shrink-0" />

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
