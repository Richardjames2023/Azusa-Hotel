"use client";

import React, { useState } from 'react';
import { DiningSubCategory } from '../../app/types/dining';

export const DiningSubNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('c1');

  const subnavItems = [
    { label: "Overview", active: false },
    { label: "Rooms", active: false },
    { label: "Services", active: false },
    { label: "Dining", active: true },
    { label: "Meetings & Events", active: false },
    { label: "Activities", active: false },
    { label: "Fitness & Wellness", active: false },
    { label: "Deals", active: false },
    { label: "Reviews", active: false },
    { label: "Nearby Attractions", active: false },
    { label: "Contact", active: false },
  ];

  const categoryFilters: DiningSubCategory[] = [
    { id: "c1", label: "All Restaurants & Bars", isActive: true },
    { id: "c2", label: "Vitas Rio Rooftop", isActive: false },
    { id: "c3", label: "Lobby Bar", isActive: false }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white border-b border-gray-100">
      
      {/* Upper Main Directory Strip */}
      <div className="w-full bg-[#4A0A15] overflow-x-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden h-14 flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex items-center space-x-6 whitespace-nowrap text-white text-xs font-bold uppercase tracking-wider h-full">
          {subnavItems.map((item, idx) => (
            <button 
              key={idx}
              className={`pb-3 pt-3 mt-1 border-b-2 transition-colors select-none focus:outline-none cursor-pointer ${
                item.active ? 'border-white text-white' : 'border-transparent text-white/60 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lower Multi-Brand Interactive Filter Layer */}
      <div className="w-full py-5 px-6 md:px-12 lg:px-16 max-w-[1440px] flex flex-wrap gap-3 items-center justify-start text-[11px] font-bold uppercase tracking-wider">
        {categoryFilters.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 transition-all focus:outline-none cursor-pointer rounded-full ${
              activeCategory === cat.id 
                ? 'bg-[#4A0A15] text-white shadow-xs' 
                : 'bg-stone-50 text-stone-500 border border-stone-200/60 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

    </div>
  );
};
