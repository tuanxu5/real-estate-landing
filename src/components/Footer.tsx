'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Share2 } from 'lucide-react';

/**
 * Footer Component
 * 
 * Displays contact information, social media links, and copyright notice.
 * Features multi-column layout on desktop, stacked on mobile.
 * 
 * Validates: Requirements 10.1, 10.2, 10.3, 10.4, 10.5
 */
export default function Footer() {
  const contactInfo = {
    phone: '1900 1234',
    email: 'info@luxuryestate.vn',
    address: '123 Đường ABC, Quận 1, TP. Hồ Chí Minh'
  };

  const quickLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Vị trí', href: '/vi-tri' },
    { label: 'Tiện ích', href: '/tien-ich' },
    { label: 'Mặt bằng', href: '/mat-bang' },
    { label: 'Bảng giá', href: '/bang-gia' },
  ];

  const socialLinks = [
    { platform: 'Facebook', url: '#', label: 'f' },
    { platform: 'Instagram', url: '#', label: 'in' },
    { platform: 'YouTube', url: '#', label: 'yt' },
    { platform: 'LinkedIn', url: '#', label: 'in' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-crimson text-3xl font-bold mb-4 text-accent-gold">
              Luxury Estate
            </h3>
            <p className="font-exo text-neutral-gray-100 leading-relaxed mb-6">
              Dự án bất động sản cao cấp, mang đến không gian sống đẳng cấp 
              và phong cách sống hiện đại.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-gold flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg font-exo font-bold text-sm"
                  aria-label={social.platform}
                  title={social.platform}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-crimson text-xl font-bold mb-6 text-accent-gold">
              Liên kết nhanh
            </h4>
            <ul className="space-y-3 font-exo">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-gray-100 hover:text-accent-gold transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-crimson text-xl font-bold mb-6 text-accent-gold">
              Thông tin liên hệ
            </h4>
            <ul className="space-y-4 font-exo text-neutral-gray-100">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 mt-0.5 text-accent-gold group-hover:scale-110 transition-transform" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-accent-gold transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 mt-0.5 text-accent-gold group-hover:scale-110 transition-transform" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-gold transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 mt-0.5 text-accent-gold group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-crimson text-xl font-bold mb-6 text-accent-gold">
              Nhận thông tin mới
            </h4>
            <p className="font-exo text-neutral-gray-100 mb-4 text-sm">
              Đăng ký để nhận thông tin về dự án và ưu đãi đặc biệt.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-neutral-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-gold font-exo"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent-gold text-white font-exo font-semibold rounded-lg hover:bg-accent-gold-light transition-all hover:shadow-lg"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-exo text-neutral-gray-200 text-sm">
              © {new Date().getFullYear()} Luxury Estate. All rights reserved.
            </p>
            <div className="flex gap-6 font-exo text-sm">
              <Link href="#" className="text-neutral-gray-200 hover:text-accent-gold transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="#" className="text-neutral-gray-200 hover:text-accent-gold transition-colors">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
