import React from 'react';

const LocalAttractions: React.FC = () => {
  const attractions = [
    {
      name: "Cenote Azul",
      info: "A stunning natural sinkhole with crystal-clear waters, perfect for swimming and diving.",
      address: "Carretera Federal 307, 77930 Bacalar, Q.R.",
      phone: "+52 983 834 2035"
    },
    {
      name: "Fuerte de San Felipe",
      info: "An 18th-century fort offering panoramic views of the Bacalar Lagoon and insights into the area's pirate history.",
      address: "Av 3 S/N, Centro, 77930 Bacalar, Q.R.",
      phone: "+52 983 834 2820"
    },
    {
      name: "Los Rapidos",
      info: "A natural lazy river with stunning turquoise waters, ideal for floating and enjoying the scenery.",
      address: "Carretera Federal 307, 77930 Bacalar, Q.R.",
      phone: "+52 983 125 6787"
    },
    {
      name: "Canal de los Piratas",
      info: "A narrow channel perfect for kayaking, with mangroves and beautiful bird-watching opportunities.",
      address: "Laguna de Bacalar, 77930 Bacalar, Q.R.",
      phone: "N/A"
    },
    {
      name: "Isla de los Pájaros",
      info: "A small island in the Bacalar Lagoon, home to various bird species and offering tranquil boat tours.",
      address: "Laguna de Bacalar, 77930 Bacalar, Q.R.",
      phone: "N/A"
    }
  ];

  const featuredAttractions = [
    {
      name: "Laguna de Bacalar",
      info: "Known as the Lake of Seven Colors, this stunning lagoon offers breathtaking views and water activities.",
      address: "77930 Bacalar, Quintana Roo, Mexico",
      phone: "N/A",
      image: "https://images.unsplash.com/photo-1585334954347-e50fe83bd30a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Cenote La Bruja",
      info: "A mystical cenote surrounded by lush jungle, perfect for swimming and exploring underwater caves.",
      address: "Carretera Federal 307, 77930 Bacalar, Q.R.",
      phone: "+52 983 102 3456",
      image: "https://images.unsplash.com/photo-1682281367670-7fc5a9a8c0e4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Mayan Ruins of Kohunlich",
      info: "Ancient Mayan ruins featuring impressive temples and surrounded by tropical forest.",
      address: "Carretera Chetumal-Escarcega Km 60, 77981 Q.R.",
      phone: "+52 983 834 0360",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=2067&auto=format&fit=crop"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Local Attractions</h1>
      
      <h2 className="text-3xl font-semibold mb-6">Featured Attractions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featuredAttractions.map((attraction, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={attraction.image} alt={attraction.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
              <p className="mb-4">{attraction.info}</p>
              <p className="text-sm"><strong>Address:</strong> {attraction.address}</p>
              <p className="text-sm"><strong>Phone:</strong> {attraction.phone}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-6">More Local Attractions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((attraction, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
            <p className="mb-4">{attraction.info}</p>
            <p className="text-sm"><strong>Address:</strong> {attraction.address}</p>
            <p className="text-sm"><strong>Phone:</strong> {attraction.phone}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-semibold my-8">Local Shopping</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Mercado Municipal",
            info: "A vibrant local market offering fresh produce, handmade crafts, and authentic Mexican goods.",
            address: "Av 5 entre Calle 20 y 22, Centro, 77930 Bacalar, Q.R.",
            phone: "+52 983 834 2800"
          },
          {
            name: "Artesanías Bacalar",
            info: "Charming shop featuring locally made handicrafts, textiles, and souvenirs.",
            address: "Av 3 S/N, Centro, 77930 Bacalar, Q.R.",
            phone: "+52 983 834 2050"
          },
          {
            name: "Eco Tienda Bacalar",
            info: "Sustainable store offering eco-friendly products, organic foods, and local artisanal items.",
            address: "Calle 22 entre Av 5 y 7, Centro, 77930 Bacalar, Q.R.",
            phone: "+52 983 102 4567"
          },
          {
            name: "Galería de Arte Bacalar",
            info: "Art gallery showcasing works by local and regional artists, with a focus on Mayan-inspired pieces.",
            address: "Av 7 entre Calle 24 y 26, Centro, 77930 Bacalar, Q.R.",
            phone: "+52 983 834 3100"
          },
          {
            name: "Tienda de Buceo Bacalar",
            info: "Dive shop offering equipment rentals, sales, and guided tours of the lagoon and cenotes.",
            address: "Calle 18 entre Av 3 y 5, Centro, 77930 Bacalar, Q.R.",
            phone: "+52 983 102 5678"
          }
        ].map((shop, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{shop.name}</h3>
            <p className="mb-4">{shop.info}</p>
            <p className="text-sm"><strong>Address:</strong> {shop.address}</p>
            <p className="text-sm"><strong>Phone:</strong> {shop.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalAttractions;