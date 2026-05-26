"use client";

import React, { useState } from 'react';
import { AttractionCategory, AttractionItem } from '../../app/types/explore';

const ATTRACTIONS_DATABASE: AttractionItem[] = [
  {
    id: "att-1",
    title: "Varuna by the good Beach",
    description: "Live music, good drinks and a lively crowd, Varuna is the spot to be when you want a proper night out.",
    category: "Culture",
    image: "/img/A1.webp",
    iconType: "drink"
  },
  {
    id: "att-2",
    title: "Los Angeles Mall",
    description: "A world of shopping right at your doorstep, from fashion and lifestyle pieces to home essentials.",
    category: "Shopping",
    image: "/img/A2.webp",
    iconType: "shop"
  },
  {
    id: "att-3",
    title: "Vita Rio",
    description: "From local favourites to global flavours, dining options are closer than you imagine, just steps away.",
    category: "Culture",
    image: "/img/A3.webp",
    iconType: "food"
  }
];

export const AttractionsExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AttractionCategory | 'All'>('All');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const categories: (AttractionCategory | 'All')[] = ['All', 'Culture', 'Family', 'Landmark', 'Nature', 'Shopping', 'Other'];

  const filteredAttractions = activeCategory === 'All'
    ? ATTRACTIONS_DATABASE
    : ATTRACTIONS_DATABASE.filter(item => item.category === activeCategory);

  return (
    <div className="w-full bg-white py-16 px-6 lg:px-12 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col">
        
        {/* Pitch Headline Layer block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 border-b border-gray-100 pb-8 items-end">
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 leading-tight">
              Discover the amazing attractions on offer in Abuja
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed tracking-wide max-w-2xl">
              Explore the cobbled streets, lively cafes, and bustling art galleries in vibrant Abuja. Make sure not to miss top attractions such as Varuna and the Wonderland.
            </p>
          </div>
        </div>

        {/* Dynamic Controls Row (Categories + View Toggles) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#4A0A15] text-white border-[#4A0A15] shadow-xs'
                    : 'border-gray-200 text-gray-500 hover:border-stone-400 hover:text-stone-900 bg-gray-50/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Toggle Layout Switcher */}
          <div className="flex items-center border border-gray-200 rounded-lg p-0.5 self-start sm:self-auto bg-gray-50/50 shadow-inner">
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider transition-all ${viewMode === 'list' ? 'bg-white text-stone-900 shadow-xs' : 'text-gray-400 hover:text-stone-700'}`}
            >
              <span>📋</span> <span>List</span>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider transition-all ${viewMode === 'map' ? 'bg-white text-stone-900 shadow-xs' : 'text-gray-400 hover:text-stone-700'}`}
            >
              <span>🗺️</span> <span>Map</span>
            </button>
          </div>
        </div>

        {/* CARDS CONTAINER MATRIX DISPLAY */}
        {viewMode === 'list' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((item) => (
              <div 
                key={item.id}
                className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Window */}
                <div className="w-full h-56 relative overflow-hidden bg-stone-50">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102 filter brightness-95"
                  />
                  {/* Floating Action Vector Icon Badge Component */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md border border-white/40 text-sm">
                    {item.iconType === 'drink' && '🍹'}
                    {item.iconType === 'shop' && '🛍️'}
                    {item.iconType === 'food' && '🍽️'}
                    {item.iconType === 'landmark' && '🏛️'}
                  </div>
                </div>

                {/* Typography Information Sheet Panel */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base md:text-lg font-bold font-serif text-stone-900 mb-2 leading-tight group-hover:text-[#4A0A15] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-[13px] font-bold text-gray-500 leading-relaxed tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-[460px] bg-stone-100 rounded-2xl border border-gray-200 shadow-inner flex flex-col items-center justify-center text-center p-6 text-gray-400 font-semibold text-sm">
            <span>🗺️ Interactive Map Layer Endpoint View</span>
            <span className="text-xs font-medium text-gray-400/70 mt-1">Mapbox clustering modules integrate here dynamically</span>
          </div>
        )}

      </div>
    </div>
  );
};
