import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Aguazul Properties</h1>
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <p className="text-lg mb-4">
          Aguazul Properties is your trusted guide to paradise in Bacalar, Mexico. We specialize in helping you discover the perfect property in this stunning lakeside destination, whether you're looking for a vacation home, investment opportunity, or your dream retirement residence.
        </p>
        <p className="text-lg mb-4">
          Our team of experienced real estate professionals combines local expertise with a deep understanding of international buyers' needs. We're committed to providing personalized service, ensuring that your journey to finding the ideal property in Bacalar is smooth and enjoyable.
        </p>
        <p className="text-lg">
          At Aguazul Properties, we're not just selling real estate; we're helping you embrace the tranquil lifestyle and natural beauty that Bacalar has to offer. From lakefront villas to eco-friendly retreats, we have a diverse portfolio of properties to suit every taste and budget.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            To connect people with their dream properties in Bacalar while promoting sustainable development and preserving the natural beauty of the region.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Integrity and transparency in all our dealings</li>
            <li>Commitment to sustainable and responsible development</li>
            <li>Exceptional customer service and personalized attention</li>
            <li>Deep knowledge of the local market and community</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;