import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, MapPin, Users, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Aguazul Properties</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="flex items-center"><Home className="mr-1" size={18} /> Home</Link></li>
            <li><Link to="/properties" className="flex items-center"><Building className="mr-1" size={18} /> Properties</Link></li>
            <li><Link to="/local-attractions" className="flex items-center"><MapPin className="mr-1" size={18} /> Local Attractions</Link></li>
            <li><Link to="/about-us" className="flex items-center"><Users className="mr-1" size={18} /> About Us</Link></li>
            <li><Link to="/blog" className="flex items-center"><BookOpen className="mr-1" size={18} /> Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;