import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LienHePage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
