"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { RoomSuite } from '../app/types/rooms';

// NATIVE JSON DATA IMPORT ENGINE
import ROOMS_DATABASE_JSON from '../app/data/rooms.json';

// Typecast the external static database file into your local structure
const ROOMS_DATABASE = ROOMS_DATABASE_JSON as RoomSuite[];

// SUB-COMPONENT: Manages staggered auto-play slide operations for each image container context
const RoomCardImageGallery: React.FC<{ images: string[]; title: string; delay: number }> = ({ images, title, delay }) => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    let playTimer: NodeJS.Timeout;
    
    // Initial delay tracker block before setting up permanent running loop execution cycles
    const startDelayTimeout = setTimeout(() => {
      playTimer = setInterval(() => {
        if (window.innerWidth >= 1024) {
          setImgIdx((prev) => (prev + 1) % images.length);
        }
      }, 4000); // Main slideshow interval duration
    }, delay);

    return () => {
      clearTimeout(startDelayTimeout);
      if (playTimer) clearInterval(playTimer);
    };
  }, [images.length, delay]);

  return (
    <div className="w-full h-full relative">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`${title} view ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
            index === imgIdx 
              ? 'opacity-100 scale-100 z-10' 
              : 'opacity-0 scale-105 z-0'
          }`}
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement;
            imgElement.onerror = null;
            imgElement.src = '/images/hero-bg.jpg';
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 pointer-events-none" />
      
      {/* Visual Dot Indicators inside individual gallery items */}
      <div className="absolute bottom-4 left-4 z-30 hidden lg:flex space-x-1.5 bg-black/20 backdrop-blur-xs px-2 py-1 rounded-full">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === imgIdx ? 'bg-white w-3' : 'bg-white/40'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export const RoomShowcaseMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const searchParams = useSearchParams();
  const categories = ['ALL', 'Luxury Suites', 'Apartments', 'Penthouse'];

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.map(c => c.toLowerCase()).includes(categoryParam.toLowerCase())) {
      const targetCategory = categories.find(c => c.toLowerCase() === categoryParam.toLowerCase());
      if (targetCategory) setActiveCategory(targetCategory);
    }
  }, [searchParams]);

  const filteredRooms = activeCategory === 'ALL' 
    ? ROOMS_DATABASE 
    : ROOMS_DATABASE.filter(room => room.category === activeCategory);

  return (
    <section className="w-full bg-[#1E110E] px-4 md:px-8 pb-20 pt-6 font-sans flex flex-col items-center">
      <div className="w-full max-w-[1600px] bg-white rounded-br-[60px] md:rounded-br-[100px] p-8 md:p-14 shadow-2xl overflow-hidden">
        
        {/* UPPER MATRIX FILTER CONTROL PANEL LAYER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          <div>
            <span className="text-[11px] font-extrabold text-[#4A0A15] uppercase tracking-[0.2em] block mb-2">
              Exceptional Sanctuary Living
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-stone-900 font-serif leading-none">
              Rooms & Suites Matrix
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full border transition-all duration-300 focus:outline-none shadow-xs ${
                  activeCategory === cat 
                    ? 'bg-[#4A0A15] text-white border-[#4A0A15]' 
                    : 'border-gray-200 text-gray-600 hover:border-stone-400 hover:text-stone-900 bg-gray-50/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ROOM CARD DISPLAY MATRIX RAIL CONTAINER */}
        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-3 lg:gap-8 md:gap-10 lg:overflow-visible lg:pb-0 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div 
                key={room.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform lg:hover:-translate-y-2 w-[85vw] sm:w-[45vw] lg:w-auto flex-shrink-0 snap-center"
              >
                {/* Image Window Wrapper using embedded slide logic with passed delay attributes */}
                <div className="w-full h-64 md:h-72 relative overflow-hidden bg-stone-100">
                  <RoomCardImageGallery images={room.images || []} title={room.title} delay={room.delay || 0} />
                  
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#4A0A15] font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-md shadow-md border border-white/40 z-30">
                    {room.category}
                  </span>

                  <div className="absolute bottom-4 right-4 flex space-x-2 text-white font-semibold text-[11px] tracking-wide bg-black/40 backdrop-blur-xs px-3 py-1 rounded-md z-30">
                    <span>{room.size}</span>
                    <span className="text-white/40">|</span>
                    <span>{room.occupancy}</span>
                  </div>
                </div>

                {/* Text Information Panel Area */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900 mb-4 leading-snug tracking-tight group-hover:text-[#4A0A15] transition-colors">
                      {room.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-2 mb-6">
                      {room.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center text-xs font-semibold text-gray-500 tracking-wide">
                          <span className="mr-2 text-sm select-none">{feat.icon}</span>
                          <span>{feat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">From</span>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-xl font-extrabold text-[#4A0A15]">
                          {room.currency === 'NGN' ? '₦' : '$'}{room.pricePerNight}
                        </span>
                        <span className="text-xs text-gray-400 font-bold">/ night</span>
                      </div>
                    </div>

                    <Link 
                      href={room.href}
                      className="inline-flex items-center justify-center bg-[#4A0A15] text-white font-bold text-[11px] uppercase tracking-widest rounded-lg px-5 py-3 hover:bg-[#36070E] transition-all transform active:scale-95 shadow-md hover:shadow-lg"
                    >
                      <span>View Suite</span>
                    </Link>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-400 font-medium text-sm w-full">
              No luxury spaces match your current filter parameters.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
