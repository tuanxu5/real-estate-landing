import Introduction from '@/components/Introduction';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GioiThieuPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
        <Introduction />
      </div>
      <Footer />
    </>
  );
}
