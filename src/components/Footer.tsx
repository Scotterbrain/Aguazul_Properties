import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Aguazul Properties</h3>
            <p>Your guide to paradise found in Bacalar.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><Link to="/properties">Properties</Link></li>
              <li><Link to="/local-attractions">Local Attractions</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Email: info@aguazulproperties.com</p>
            <p>Phone: +52 123 456 7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-pink-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-300"><Twitter /></a>
              <a href="#" className="hover:text-blue-500"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Aguazul Properties. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/privacy-policy" className="mr-4 hover:underline">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:underline">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;