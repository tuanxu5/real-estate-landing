import SectionWrapper from '@/components/ui/SectionWrapper';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MatBangItem1Page() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
        <SectionWrapper id="mat-bang-item1">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Mặt bằng Item 1
            </h1>
            <p className="font-inter text-lg text-neutral-gray-800 max-w-3xl mx-auto">
              Nội dung chi tiết về mặt bằng Item 1
            </p>
          </div>
        </SectionWrapper>
      </div>
      <Footer />
    </>
  );
}
