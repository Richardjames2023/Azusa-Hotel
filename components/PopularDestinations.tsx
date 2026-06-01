"use client";

import React from 'react';
import Link from 'next/link';
import { DestinationCard } from '../app/types/destination'; 

// Clean static import from data directory replacing the hardcoded clutter array
import DESTINATIONS_JSON from '../app/data/destinations.json';

const DESTINATIONS_DATA = DESTINATIONS_JSON as DestinationCard[];

export const PopularDestinations: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 font-sans flex flex-col items-center select-none relative z-10">
      
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col rounded-none shadow-none bg-transparent">
        
        {/* UPPER TITLE & NAVIGATION CALL TO ACTION BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-gray-100 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-stone-900 font-serif">
            Places You Should Visit
          </h2>
          
          <Link 
            href="/explore" 
            className="inline-flex items-center justify-center border border-[#3B0E17] text-[#3B0E17] font-bold text-[11px] tracking-wider uppercase px-6 py-2 hover:bg-[#3B0E17] hover:text-white transition-all transform hover:-translate-y-0.5 duration-200 self-start sm:self-auto rounded-full shadow-xs"
          >
            See More
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-4 md:pb-6 snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {DESTINATIONS_DATA.map((destination) => (
            <Link 
              key={destination.id}
              href={destination.href}
              className="group relative h-[420px] w-[85vw] sm:w-[45vw] lg:w-auto overflow-hidden bg-gray-100 border border-gray-200/40 flex-shrink-0 snap-center block transform transition-all duration-300 lg:hover:-translate-y-2 lg:shadow-md rounded-2xl"
            >
              <img 
                src={destination.image} 
                alt={destination.title} 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.95] group-hover:brightness-[0.85]"
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.onerror = null; 
                  imgElement.src = '/img/discovery.webp'; 
                }}
              />

              <div className="absolute bottom-6 left-6 right-6 flex justify-start z-20">
                <div className="bg-[#DCB286]/90 backdrop-blur-md text-stone-900 font-bold text-xs px-6 py-3 rounded-full shadow-lg border border-white/20 transform transition-all duration-300 group-hover:bg-[#4A0A15] group-hover:text-white tracking-wide">
                  {destination.title}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
};
