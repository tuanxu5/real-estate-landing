import MasterPlan from '@/components/MasterPlan';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MatBangPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-32 pb-16">
        <MasterPlan />
      </div>
      <Footer />
    </>
  );
}
