import React, { useState } from 'react';
import { Search, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    {
      title: "Top 5 Cenotes Near Bacalar",
      excerpt: "Discover the most stunning natural sinkholes in the Bacalar region...",
      image: "https://images.unsplash.com/photo-1682281367670-7fc5a9a8c0e4?q=80&w=2070&auto=format&fit=crop",
      tags: ["Nature", "Adventure", "Swimming"]
    },
    {
      title: "Investing in Bacalar Real Estate: What You Need to Know",
      excerpt: "Learn about the opportunities and considerations when buying property in Bacalar...",
      image: "https://images.unsplash.com/photo-1582879304171-8041c73b8a1b?q=80&w=2070&auto=format&fit=crop",
      tags: ["Real Estate", "Investment", "Bacalar"]
    },
    {
      title: "A Foodie's Guide to Bacalar",
      excerpt: "Explore the best local restaurants and dishes in this lakeside paradise...",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
      tags: ["Food", "Culture", "Local Cuisine"]
    },
    {
      title: "Sustainable Tourism in Bacalar: How to Travel Responsibly",
      excerpt: "Tips for minimizing your environmental impact while enjoying Bacalar's beauty...",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
      tags: ["Eco-Tourism", "Sustainability", "Travel Tips"]
    },
    {
      title: "The History of Bacalar: From Mayan Times to Today",
      excerpt: "Dive into the rich history of this enchanting Mexican town...",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=2067&auto=format&fit=crop",
      tags: ["History", "Culture", "Mayan Civilization"]
    },
    {
      title: "Water Activities in Bacalar: Beyond Swimming",
      excerpt: "Discover exciting water sports and activities to try on the Bacalar Lagoon...",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
      tags: ["Water Sports", "Adventure", "Lagoon"]
    }
  ];

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Bacalar Insights Blog</h1>
      
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center">
              <Tag size={14} className="mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.slice(0, 3).map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
              <a href="#" className="mt-2 inline-block text-blue-600 hover:underline text-sm">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;