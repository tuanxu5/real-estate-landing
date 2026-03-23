import SectionWrapper from '@/components/ui/SectionWrapper';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BangGiaPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
        <SectionWrapper id="bang-gia">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Bảng giá
            </h1>
            <p className="font-inter text-lg text-neutral-gray-800 max-w-3xl mx-auto mb-8">
              Thông tin bảng giá chi tiết các căn hộ
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Loại căn</th>
                    <th className="px-6 py-4 text-left">Diện tích</th>
                    <th className="px-6 py-4 text-left">Giá</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-gray-200">
                  <tr className="hover:bg-neutral-gray-50">
                    <td className="px-6 py-4">1 phòng ngủ</td>
                    <td className="px-6 py-4">50m²</td>
                    <td className="px-6 py-4 text-accent-gold font-semibold">2.5 tỷ</td>
                  </tr>
                  <tr className="hover:bg-neutral-gray-50">
                    <td className="px-6 py-4">2 phòng ngủ</td>
                    <td className="px-6 py-4">75m²</td>
                    <td className="px-6 py-4 text-accent-gold font-semibold">3.8 tỷ</td>
                  </tr>
                  <tr className="hover:bg-neutral-gray-50">
                    <td className="px-6 py-4">3 phòng ngủ</td>
                    <td className="px-6 py-4">100m²</td>
                    <td className="px-6 py-4 text-accent-gold font-semibold">5.2 tỷ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </>
  );
}
