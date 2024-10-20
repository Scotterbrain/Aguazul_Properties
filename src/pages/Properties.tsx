import React from 'react';

const Properties: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Properties</h1>
      <div className="bg-cover bg-center h-64 mb-8 flex items-center justify-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')"}}>
        <h2 className="text-3xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">Discover Your Dream Eco-Home</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop" alt="Aldea Xtomoc" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Aldea Xtomoc</h3>
            <p className="mb-4">Luxurious eco-friendly villas nestled in the heart of the Bacalar jungle, offering stunning views of the lagoon.</p>
            <a href="#" className="text-blue-600 hover:underline">Learn More</a>
          </div>
        </div>
        {/* More property cards would be added here */}
      </div>
    </div>
  );
};

export default Properties;