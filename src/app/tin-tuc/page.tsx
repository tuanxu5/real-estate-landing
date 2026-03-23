import SectionWrapper from '@/components/ui/SectionWrapper';
import Card from '@/components/ui/Card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

export default function TinTucPage() {
  const featuredNews = {
    title: 'Khởi công dự án Luxury Estate - Dấu mốc quan trọng',
    description: 'Lễ khởi công dự án được tổ chức long trọng với sự tham gia của các đối tác chiến lược và nhà đầu tư hàng đầu. Dự án hứa hẹn mang đến không gian sống đẳng cấp cho cộng đồng cư dân tinh hoa.',
    image: 'https://placehold.co/1200x600/0F3D3E/FFFFFF?text=Featured+News',
    date: '15/03/2026',
    readTime: '5 phút đọc',
    category: 'Sự kiện'
  };

  const news = [
    {
      title: 'Tiến độ xây dựng tháng 3/2026',
      description: 'Dự án đang trong giai đoạn hoàn thiện phần thô, dự kiến bàn giao quý 4/2026',
      image: 'https://placehold.co/600x400/1A5456/FFFFFF?text=News+1',
      date: '20/03/2026',
      readTime: '3 phút đọc',
      category: 'Tiến độ'
    },
    {
      title: 'Sự kiện mở bán đợt 1',
      description: 'Chương trình ưu đãi đặc biệt cho khách hàng đặt mua sớm trong tháng 3',
      image: 'https://placehold.co/600x400/0F3D3E/FFFFFF?text=News+2',
      date: '18/03/2026',
      readTime: '4 phút đọc',
      category: 'Ưu đãi'
    },
    {
      title: 'Thiết kế nội thất cao cấp',
      description: 'Khám phá phong cách thiết kế nội thất sang trọng và hiện đại',
      image: 'https://placehold.co/600x400/1A5456/FFFFFF?text=News+3',
      date: '16/03/2026',
      readTime: '6 phút đọc',
      category: 'Thiết kế'
    },
    {
      title: 'Tiện ích vượt trội cho cư dân',
      description: 'Hệ thống tiện ích đẳng cấp 5 sao phục vụ mọi nhu cầu của cư dân',
      image: 'https://placehold.co/600x400/0F3D3E/FFFFFF?text=News+4',
      date: '14/03/2026',
      readTime: '4 phút đọc',
      category: 'Tiện ích'
    },
    {
      title: 'Vị trí vàng - Kết nối thuận tiện',
      description: 'Phân tích lợi thế vị trí và khả năng kết nối của dự án',
      image: 'https://placehold.co/600x400/1A5456/FFFFFF?text=News+5',
      date: '12/03/2026',
      readTime: '5 phút đọc',
      category: 'Vị trí'
    },
    {
      title: 'Chính sách thanh toán linh hoạt',
      description: 'Nhiều phương thức thanh toán ưu đãi dành cho khách hàng',
      image: 'https://placehold.co/600x400/0F3D3E/FFFFFF?text=News+6',
      date: '10/03/2026',
      readTime: '3 phút đọc',
      category: 'Chính sách'
    }
  ];

  const categories = ['Tất cả', 'Sự kiện', 'Tiến độ', 'Ưu đãi', 'Thiết kế', 'Tiện ích'];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-48 pb-16 bg-gradient-to-b from-neutral-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-16">
              <h1 className="font-crimson text-5xl md:text-6xl font-bold text-primary mb-6">
                Tin tức & Sự kiện
              </h1>
              <p className="font-exo text-lg text-neutral-gray-600 max-w-3xl mx-auto">
                Cập nhật thông tin mới nhất về dự án và các sự kiện đặc biệt
              </p>
            </div>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection animation="fadeUp">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className={`px-6 py-2.5 rounded-full font-exo font-semibold transition-all ${
                    index === 0
                      ? 'bg-accent-gold text-white shadow-lg'
                      : 'bg-white text-neutral-gray-700 hover:bg-accent-gold/10 hover:text-accent-gold border border-neutral-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Featured News */}
          <AnimatedSection animation="fadeUp">
            <div className="mb-16">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 bg-accent-gold rounded-full text-sm font-exo font-semibold">
                      {featuredNews.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm font-exo">
                      <Calendar className="w-4 h-4" />
                      {featuredNews.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-exo">
                      <Clock className="w-4 h-4" />
                      {featuredNews.readTime}
                    </div>
                  </div>
                  <h2 className="font-crimson text-white text-3xl md:text-5xl font-bold mb-4">
                    {featuredNews.title}
                  </h2>
                  <p className="font-exo text-lg mb-6 max-w-3xl opacity-90">
                    {featuredNews.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gold text-white font-exo font-semibold rounded-full hover:bg-accent-gold-light transition-all hover:gap-3"
                  >
                    Đọc thêm
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* News Grid */}
          <AnimatedSection animation="fadeUp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-accent-gold text-white rounded-full text-xs font-exo font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-neutral-gray-500 font-exo">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </div>
                  </div>
                  <h3 className="font-crimson text-xl font-bold text-primary mb-3 group-hover:text-accent-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-exo text-neutral-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-accent-gold font-exo font-semibold hover:gap-3 transition-all"
                  >
                    Xem chi tiết
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
            </div>
          </AnimatedSection>

          {/* Load More Button */}
          <AnimatedSection animation="fadeUp">
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-white border-2 border-accent-gold text-accent-gold font-exo font-semibold rounded-xl hover:bg-accent-gold hover:text-white transition-all hover:shadow-lg">
                Xem thêm tin tức
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </>
  );
}
