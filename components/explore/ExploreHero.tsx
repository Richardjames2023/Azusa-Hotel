"use client";

import React from 'react';

export const ExploreHero: React.FC = () => {
  const tabs = ['Overview', 'Rooms', 'Services', 'Dining', 'Meetings & Events', 'Activities', 'Fitness & Wellness', 'Deals', 'Reviews', 'Nearby attractions', 'Contact'];

  return (
    <div className="w-full bg-[#FCFBF9] font-sans flex flex-col items-center">
      
      {/* Mosaic Hero Grid layout block */}
      <div className="w-full max-w-[1440px] px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Aspect Side: Architectural Picture Grid Mosaic */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 h-[440px]">
          {/* Main Portrait Frame Panel */}
          <div className="col-span-6 h-full rounded-2xl overflow-hidden shadow-md group relative border border-stone-200/40">
            <img 
              src="/img/A4.webp" 
              alt="Boutique Shopping" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
          </div>
          
          {/* Stacked Right Column Panels */}
          <div className="col-span-6 flex flex-col gap-4 h-full">
            <div className="h-1/2 rounded-2xl overflow-hidden shadow-md group relative border border-stone-200/40">
              <img 
                src="/img/A5.webp" 
                alt="Varuna Lounge Vibe" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-1/2 rounded-2xl overflow-hidden shadow-md group relative border border-stone-200/40">
              <img 
                src="/img/A6.webp" 
                alt="Fine Dining Vitas Rio" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Right Aspect Side: Editorial Branding Statement Panel */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center lg:pl-6">
          <span className="text-[11px] font-extrabold text-[#4A0A15] tracking-[0.25em] uppercase block mb-3">
            Nearby Locations
          </span>
          <h1 className="text-3xl md:text-5xl font-normal tracking-tight text-stone-900 font-serif leading-tight mb-5">
            Explore the beautiful <br />city of Abuja
          </h1>
          <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed tracking-wide max-w-md">
            From the elegant boutique of Los Angeles Mall to the vibrant, bustling vibes of Varuna and African & Intercontinental Cuisine at Vitas Rio, explore everything this dynamic city has to offer from the sophisticated comfort of Azusa.
          </p>
        </div>

      </div>

      {/* Internal View Anchor Navigation Pill Strip */}
      <div className="w-full border-y border-gray-200 bg-white overflow-x-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="max-w-[1440px] mx-auto px-6 h-14 flex items-center justify-between gap-6 whitespace-nowrap">
          <div className="flex items-center space-x-1.5 md:space-x-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
            {tabs.map((tab) => (
              <button 
                key={tab}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  tab === 'Nearby attractions' 
                    ? 'bg-[#4A0A15] text-white shadow-xs' 
                    : 'hover:text-stone-900 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="bg-[#4A0A15] hover:bg-[#36070E] text-white text-[11px] font-extrabold uppercase tracking-widest px-6 h-9 rounded-lg shadow-md transition-colors">
            Book
          </button>
        </div>
      </div>

    </div>
  );
};
