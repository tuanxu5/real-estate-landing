'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Vị trí', href: '/vi-tri' },
    { label: 'Tiện ích', href: '/tien-ich' },
    { 
      label: 'Mặt bằng', 
      href: '/mat-bang',
      dropdown: [
        { label: 'Item 1', href: '/mat-bang/item1' },
        { label: 'Item 2', href: '/mat-bang/item2' },
        { label: 'Item 3', href: '/mat-bang/item3' },
      ]
    },
    { label: 'Bảng giá', href: '/bang-gia' },
    { label: 'Tin tức', href: '/tin-tuc' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/95 backdrop-blur-sm shadow-md py-4'
    }`}>
      {/* Top Bar - Contact Info */}
      <div className={`border-b border-neutral-gray-100 transition-all duration-300 ${
        scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-6 py-2 text-sm">
            <a href="tel:+84123456789" className="flex items-center gap-2 text-neutral-gray-600 hover:text-accent-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+84 123 456 789</span>
            </a>
            <a href="mailto:info@luxury.com" className="flex items-center gap-2 text-neutral-gray-600 hover:text-accent-gold transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@luxury.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-crimson text-2xl font-bold text-primary hover:text-accent-gold transition-colors">
            Luxury Estate
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 font-exo text-sm font-semibold rounded-lg transition-all ${
                      pathname === item.href 
                        ? 'text-accent-gold bg-accent-gold/5' 
                        : 'text-neutral-gray-700 hover:text-accent-gold hover:bg-neutral-gray-50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-neutral-gray-100 py-2 transition-all duration-200 ${
                    dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-4 py-2.5 text-sm font-exo transition-all ${
                          pathname === subItem.href 
                            ? 'text-accent-gold bg-accent-gold/5 border-l-2 border-accent-gold' 
                            : 'text-neutral-gray-700 hover:bg-neutral-gray-50 hover:text-accent-gold hover:translate-x-1'
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 font-exo text-sm font-semibold rounded-lg transition-all ${
                    pathname === item.href 
                      ? 'text-accent-gold bg-accent-gold/5' 
                      : 'text-neutral-gray-700 hover:text-accent-gold hover:bg-neutral-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            
            {/* CTA Button */}
            <Link
              href="/lien-he"
              className="ml-6 px-8 py-3.5 bg-gradient-to-r from-accent-gold to-accent-gold-light text-white font-exo text-base font-bold rounded-xl hover:shadow-xl hover:shadow-accent-gold/30 hover:-translate-y-0.5 transition-all"
            >
              Đăng ký tư vấn
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary hover:text-accent-gold transition-colors rounded-lg hover:bg-neutral-gray-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-neutral-gray-100 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 font-exo text-sm font-semibold rounded-lg transition-all ${
                    pathname === item.href 
                      ? 'text-accent-gold bg-accent-gold/5' 
                      : 'text-neutral-gray-700 hover:text-accent-gold hover:bg-neutral-gray-50'
                  }`}
                  onClick={() => !item.dropdown && setIsOpen(false)}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-4 py-2 text-sm font-exo rounded-lg transition-all ${
                          pathname === subItem.href 
                            ? 'text-accent-gold bg-accent-gold/5' 
                            : 'text-neutral-gray-600 hover:text-accent-gold hover:bg-neutral-gray-50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <Link
              href="/lien-he"
              className="block mx-4 mt-4 px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-gold-light text-white text-center font-exo text-base font-bold rounded-xl hover:shadow-xl transition-all"
              onClick={() => setIsOpen(false)}
            >
              Đăng ký tư vấn
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
