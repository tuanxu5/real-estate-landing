import Card from '@/components/ui/Card';

export default function CardDemo() {
  return (
    <div className="min-h-screen bg-neutral-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair font-bold text-primary mb-8">
          Card Component Demo
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card with icon */}
          <Card
            icon={<span>🏊</span>}
            title="Infinity Pool"
            description="Outdoor infinity pool with panoramic city views"
          />
          
          {/* Card with icon */}
          <Card
            icon={<span>🏋️</span>}
            title="Fitness Center"
            description="State-of-the-art gym with modern equipment"
          />
          
          {/* Card with icon */}
          <Card
            icon={<span>🌳</span>}
            title="Garden Park"
            description="Lush green spaces for relaxation and recreation"
          />
          
          {/* Card without hover effect */}
          <Card
            icon={<span>🎾</span>}
            title="Tennis Court"
            description="Professional tennis courts for residents"
            hover={false}
          />
          
          {/* Card with custom styling */}
          <Card
            icon={<span>🧘</span>}
            title="Yoga Studio"
            description="Peaceful space for meditation and wellness"
            className="bg-primary-light text-white"
          />
          
          {/* Card with all props */}
          <Card
            icon={<span>🏢</span>}
            title="Prime Location"
            description="Located in the heart of the city with easy access to all amenities"
          />
        </div>
      </div>
    </div>
  );
}
