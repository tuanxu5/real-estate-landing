import SectionWrapper from '@/components/ui/SectionWrapper';
import Card from '@/components/ui/Card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TinTucPage() {
  const news = [
    {
      title: 'Khởi công dự án Luxury Estate',
      description: 'Lễ khởi công dự án được tổ chức long trọng với sự tham gia của các đối tác chiến lược',
      image: 'https://placehold.co/600x400/0F3D3E/FFFFFF?text=News+1'
    },
    {
      title: 'Tiến độ xây dựng tháng 3/2026',
      description: 'Dự án đang trong giai đoạn hoàn thiện phần thô, dự kiến bàn giao quý 4/2026',
      image: 'https://placehold.co/600x400/1A5456/FFFFFF?text=News+2'
    },
    {
      title: 'Sự kiện mở bán đợt 1',
      description: 'Chương trình ưu đãi đặc biệt cho khách hàng đặt mua sớm trong tháng 3',
      image: 'https://placehold.co/600x400/0F3D3E/FFFFFF?text=News+3'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
        <SectionWrapper id="tin-tuc">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Tin tức
            </h1>
            <p className="font-inter text-lg text-neutral-gray-800 max-w-3xl mx-auto">
              Cập nhật thông tin mới nhất về dự án
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </>
  );
}
