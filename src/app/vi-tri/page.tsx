import Location from '@/components/Location';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ViTriPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-32">
        <Location />
      </div>
      <Footer />
    </>
  );
}
