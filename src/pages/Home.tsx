import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="hero bg-cover bg-center h-screen flex items-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2070&auto=format&fit=crop')"}}> 
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Bacalar: Your Guide to Paradise Found</h1>
          <p className="text-xl mb-8">Get insider tips on local shopping, attractions, and exclusive properties in this stunning Mexican paradise</p>
          <a href="#whats-new" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            Explore More <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      <section id="whats-new" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What's New in Bacalar</h2>
          <p className="text-xl text-center mb-12">Stay up-to-date on the latest happenings, events, and insider tips for visiting and living in Bacalar.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured items would go here */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">New Eco-Friendly Resort Opens</h3>
              <p>Discover the latest sustainable luxury accommodation in Bacalar...</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Upcoming Lagoon Festival</h3>
              <p>Join us for a celebration of Bacalar's stunning lagoon and culture...</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Top 5 Hidden Gems in Bacalar</h3>
              <p>Explore these off-the-beaten-path locations for a unique experience...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Bacalar Insights</h2>
          <p className="text-xl text-center mb-12">Stay informed about the latest news, trends, and insights on real estate, shopping, and attractions in Bacalar.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured articles would go here */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1582879304171-8041c73b8a1b?q=80&w=2070&auto=format&fit=crop" alt="Bacalar Lagoon" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Real Estate Market Trends in Bacalar</h3>
                <p>Discover the latest developments and opportunities in Bacalar's growing property market...</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop" alt="Bacalar Cenote" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eco-Tourism on the Rise in Bacalar</h3>
                <p>Learn how sustainable tourism is shaping the future of this Mexican paradise...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <p className="text-xl text-center mb-12">Have a question or want to learn more about Bacalar? Contact us today!</p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p>+52 123 456 7890</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p>info@aguazulproperties.com</p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-2xl font-semibold mb-2">Address</h3>
              <p>123 Lagoon View, Bacalar, Quintana Roo, Mexico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather widget and webcam feed would be added here */}
    </div>
  );
};

export default Home;