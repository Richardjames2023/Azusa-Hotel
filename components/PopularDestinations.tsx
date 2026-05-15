"use client";

import React from 'react';
import Link from 'next/link';
import { DestinationCard } from '../app/types/destination'; 

const DESTINATIONS_DATA: DestinationCard[] = [
  {
    id: "dest-1",
    title: "Discovery Museum",
    image: "/images/hero-bg.jpg", 
    href: "/destinations/discovery-museum"
  },
  {
    id: "dest-2",
    title: "Magicland Park",
    image: "/images/azusa2.jpg",
    href: "/destinations/magicland-park"
  },
  {
    id: "dest-3",
    title: "Farm City",
    image: "/images/hero-bg.jpg",
    href: "/destinations/farm-city"
  }
];

export const PopularDestinations: React.FC = () => {
  return (
    <section className="w-full bg-[#1E110E] px-4 md:px-8 pt-6 pb-16 font-sans flex flex-col items-center select-none">
      
      {/* 
        MAIN CONTENT HOUSING INNER BLOCK 
        Updated to support dual asymmetrical corner rounding: top-right and bottom-left
      */}
      <div className="w-[100%] max-w-[1600px] bg-white rounded-tr-[60px] md:rounded-tr-[100px] rounded-bl-[60px] md:rounded-bl-[100px] p-8 md:p-14 shadow-xl overflow-hidden">
        
        {/* UPPER TITLE & NAVIGATION CALL TO ACTION BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            Popular destinations
          </h2>
          
          <Link 
            href="/destinations" 
            className="inline-flex items-center justify-center border border-[#3B0E17] text-[#3B0E17] font-bold text-[11px] tracking-wider uppercase rounded-full px-6 py-2 hover:bg-[#3B0E17] hover:text-white transition-all transform hover:-translate-y-0.5 duration-200 self-start sm:self-auto shadow-sm"
          >
            See More
          </Link>
        </div>

        {/* 
          RESPONSIVE LAYOUT CAROUSEL GRIDS:
          Functions as an elastic fluid horizontal snap slider on mobile/tablets, then shifts 
          gracefully into a standard 3-column configuration layout on wide screens (lg:).
        */}
        <div className="flex overflow-x-auto gap-6 pb-4 md:pb-6 snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:pb-0 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {DESTINATIONS_DATA.map((destination) => (
            <Link 
              key={destination.id}
              href={destination.href}
              className="group relative h-[420px] w-[85vw] sm:w-[45vw] lg:w-auto rounded-2xl overflow-hidden bg-gray-100 shadow-md border border-gray-100/50 flex-shrink-0 snap-center block transform transition-all duration-300 lg:hover:-translate-y-2 lg:hover:shadow-xl"
            >
              {/* Media Layer Image Viewport Canvas */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={destination.image} 
                alt={destination.title} 
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out lg:group-hover:scale-105 filter brightness-[0.95] lg:group-hover:brightness-[0.85]"
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.onerror = null; 
                  imgElement.src = '/images/hero-bg.jpg'; 
                }}
              />

              {/* Dynamic Bottom Pill Overlay Label Component */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-start">
                <div className="bg-[#DCB286]/90 backdrop-blur-md text-stone-900 font-bold text-xs px-6 py-3 rounded-full shadow-lg border border-white/20 transform transition-all duration-300 lg:group-hover:bg-[#4A0A15] lg:group-hover:text-white tracking-wide">
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
