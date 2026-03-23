import Amenities from '@/components/Amenities';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TienIchPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
        <Amenities />
      </div>
      <Footer />
    </>
  );
}
