import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Check, Home, Bed, Bath, Maximize, Phone } from 'lucide-react';
import Link from 'next/link';

export default function BangGiaPage() {
  const apartments = [
    {
      type: '1 Phòng ngủ',
      bedrooms: 1,
      bathrooms: 1,
      area: '50m²',
      price: '2.5 tỷ',
      pricePerM2: '50 triệu/m²',
      features: ['Ban công riêng', 'Bếp hiện đại', 'Phòng khách rộng'],
      available: 15,
      popular: false
    },
    {
      type: '2 Phòng ngủ',
      bedrooms: 2,
      bathrooms: 2,
      area: '75m²',
      price: '3.8 tỷ',
      pricePerM2: '50.6 triệu/m²',
      features: ['2 Ban công', 'Bếp + Phòng ăn', 'Phòng giặt riêng', 'View thành phố'],
      available: 8,
      popular: true
    },
    {
      type: '3 Phòng ngủ',
      bedrooms: 3,
      bathrooms: 2,
      area: '100m²',
      price: '5.2 tỷ',
      pricePerM2: '52 triệu/m²',
      features: ['3 Ban công', 'Bếp + Phòng ăn rộng', 'Phòng giặt', 'Phòng làm việc', 'View panorama'],
      available: 5,
      popular: false
    },
    {
      type: 'Penthouse',
      bedrooms: 4,
      bathrooms: 3,
      area: '150m²',
      price: '8.5 tỷ',
      pricePerM2: '56.6 triệu/m²',
      features: ['Sân thượng riêng', 'Bếp cao cấp', 'Phòng giải trí', 'Phòng thay đồ', 'View 360°'],
      available: 2,
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-48 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-16">
              <h1 className="font-crimson text-5xl md:text-6xl font-bold text-primary mb-6">
                Bảng giá
              </h1>
              <p className="font-exo text-lg text-neutral-gray-600 max-w-3xl mx-auto">
                Thông tin bảng giá chi tiết các loại căn hộ cao cấp
              </p>
            </div>
          </AnimatedSection>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {apartments.map((apt, index) => (
              <AnimatedSection key={index} animation="fadeUp">
                <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                  apt.popular ? 'border-accent-gold' : 'border-neutral-gray-100'
                }`}>
                  {apt.popular && (
                    <div className="absolute top-4 right-4 px-4 py-1.5 bg-accent-gold text-white text-sm font-exo font-semibold rounded-full">
                      Phổ biến
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Type */}
                    <div className="flex items-center gap-3 mb-4">
                      <Home className="w-6 h-6 text-accent-gold" />
                      <h3 className="font-crimson text-2xl font-bold text-primary">
                        {apt.type}
                      </h3>
                    </div>

                    {/* Specs */}
                    <div className="flex items-center gap-6 mb-6 text-neutral-gray-600">
                      <div className="flex items-center gap-2">
                        <Bed className="w-5 h-5" />
                        <span className="font-exo text-sm">{apt.bedrooms} PN</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="w-5 h-5" />
                        <span className="font-exo text-sm">{apt.bathrooms} WC</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Maximize className="w-5 h-5" />
                        <span className="font-exo text-sm">{apt.area}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-neutral-gray-200">
                      <div className="font-crimson text-4xl font-bold text-accent-gold mb-2">
                        {apt.price}
                      </div>
                      <div className="font-exo text-sm text-neutral-gray-600">
                        {apt.pricePerM2}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <p className="font-exo font-semibold text-primary mb-3">Tiện nghi:</p>
                      <ul className="space-y-2">
                        {apt.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-accent-gold flex-shrink-0" />
                            <span className="font-exo text-sm text-neutral-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Availability */}
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-gray-50 rounded-full">
                        <span className="font-exo text-sm text-neutral-gray-600">
                          Còn {apt.available} căn
                        </span>
                      </span>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/lien-he"
                      className="block w-full text-center px-6 py-3 bg-accent-gold text-white font-exo font-semibold rounded-xl hover:bg-accent-gold-light transition-all"
                    >
                      Đăng ký tư vấn
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Payment Info */}
          <AnimatedSection animation="fadeUp">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
              <h2 className="font-crimson text-3xl font-bold mb-6 text-center">
                Chính sách thanh toán
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="font-crimson text-4xl font-bold text-accent-gold mb-2">30%</div>
                  <p className="font-exo text-sm">Đặt cọc ban đầu</p>
                </div>
                <div className="text-center">
                  <div className="font-crimson text-4xl font-bold text-accent-gold mb-2">40%</div>
                  <p className="font-exo text-sm">Trong quá trình xây dựng</p>
                </div>
                <div className="text-center">
                  <div className="font-crimson text-4xl font-bold text-accent-gold mb-2">30%</div>
                  <p className="font-exo text-sm">Khi nhận nhà</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-exo mb-6">Hỗ trợ vay ngân hàng lên đến 70% giá trị căn hộ</p>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent-gold text-white font-exo font-bold rounded-xl hover:bg-accent-gold-light transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Liên hệ ngay
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Note */}
          <AnimatedSection animation="fadeUp">
            <div className="mt-12 text-center">
              <p className="font-exo text-sm text-neutral-gray-600">
                * Giá có thể thay đổi theo thời điểm. Vui lòng liên hệ để được tư vấn giá chính xác nhất.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </>
  );
}
