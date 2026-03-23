'use client';

import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ProjectHighlights from '@/components/ProjectHighlights';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { HeroProps } from '@/types';

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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero {...heroProps} />
      
      <ProjectHighlights />
      
      <Gallery />
      
      <Footer />
    </div>
  );
}
