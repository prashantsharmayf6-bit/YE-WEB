import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'birthday', label: 'Birthdays' },
    { id: 'decoration', label: 'Decor' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'baby-shower', label: 'Baby Showers' },
  ];

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-stone-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4">Our Portfolio</h1>
        <p className="text-stone-500">A showcase of our finest work and happy moments</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 text-sm font-semibold uppercase tracking-wider border transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gold-600 text-white border-gold-600 shadow-md'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-gold-400 hover:text-gold-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 border-b-2 border-transparent group-hover:border-gold-500 transition-colors">
                <h3 className="font-serif text-lg font-bold text-stone-800">{item.title}</h3>
                <p className="text-xs text-gold-600 uppercase tracking-widest mt-1">{item.category.replace('-', ' ')}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-stone-400">
            <p>No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;