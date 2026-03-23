import Button from '@/components/ui/Button';

export default function ButtonDemo() {
  return (
    <div className="min-h-screen bg-neutral-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-playfair text-primary mb-8">Button Component Demo</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-playfair text-primary">Primary Variant</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Register Now</Button>
            <Button variant="primary">Contact Us</Button>
            <Button variant="primary" disabled>Disabled Primary</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-playfair text-primary">Secondary Variant</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="secondary">Learn More</Button>
            <Button variant="secondary">View Gallery</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-playfair text-primary">Hover Effects</h2>
          <p className="text-neutral-gray-800">Hover over the buttons to see the scale animation (1.05x scale)</p>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Hover Me</Button>
            <Button variant="secondary">Hover Me Too</Button>
          </div>
        </section>

        <section className="space-y-4 bg-primary p-8 rounded-2xl">
          <h2 className="text-2xl font-playfair text-white">On Dark Background</h2>
          <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
