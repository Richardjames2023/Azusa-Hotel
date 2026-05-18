"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { RoomSuite } from '../app/types/rooms';

// IMPORTING RE-VALIDATED, SAFE VECTORS FROM LUCIDE ICON DICTIONARY
import { 
  LuBed, 
  LuEye, 
  LuWifi, 
  LuTv, 
  LuKey, 
  LuCookingPot, 
  LuSunset, 
  LuCastle,     
  LuBath, 
  LuUser,        
  LuCar,
  LuSparkles,
  LuChevronLeft,  
  LuChevronRight  
} from 'react-icons/lu';

// NATIVE JSON DATA IMPORT ENGINE
import ROOMS_DATABASE_JSON from '../app/data/rooms.json';

// Typecast the external static database file into your local structure
const ROOMS_DATABASE = ROOMS_DATABASE_JSON as RoomSuite[];

// HELPER RENDERER COMPONENT: Maps the JSON text keys directly to valid vector React Icons
const MatrixFeatureIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'bed': return <LuBed className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'view': return <LuEye className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'wifi': return <LuWifi className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'tv': return <LuTv className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'key': return <LuKey className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'chef': return <LuCookingPot className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'sunset': return <LuSunset className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'castle': return <LuCastle className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'bath': return <LuBath className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'butler': return <LuUser className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'car': return <LuCar className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    default: return <LuSparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />;
  }
};

// SUB-COMPONENT: Manages auto-play slide operations and manual horizontal slide-in/slide-out navigation
const RoomCardImageGallery: React.FC<{ images: string[]; title: string; delay: number }> = ({ images, title, delay }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    let playTimer: NodeJS.Timeout;
    const startDelayTimeout = setTimeout(() => {
      playTimer = setInterval(() => {
        if (window.innerWidth >= 1024) {
          setDirection('next');
          setImgIdx((prev) => (prev + 1) % images.length);
        }
      }, 4500 + (delay % 1000));
    }, delay);

    return () => {
      clearTimeout(startDelayTimeout);
      if (playTimer) clearInterval(playTimer);
    };
  }, [images.length, delay, isHovered]);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); 
    setDirection('next');
    setImgIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); 
    setDirection('prev');
    setImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="w-full h-full relative rounded-t-2xl overflow-hidden isolate group/image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 
        HORIZONTAL SLIDE CONTAINER ENGINE
        Uses hardware-accelerated translations to achieve clean, premium side-scrolling actions
      */}
      {images.map((src, index) => {
        // Calculate transition positions dynamically based on direction history
        let translationClass = 'translate-x-0';
        if (index !== imgIdx) {
          translationClass = direction === 'next' ? 'translate-x-full' : '-translate-x-full';
        }

        return (
          <img
            key={index}
            src={src}
            alt={`${title} view ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transform-gpu transition-transform duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1) rounded-t-2xl ${translationClass}`}
            style={{ zIndex: index === imgIdx ? 10 : 0 }}
            onError={(e) => {
              const imgElement = e.target as HTMLImageElement;
              imgElement.onerror = null;
              imgElement.src = '/images/hero-bg.jpg';
            }}
          />
        );
      })}
      
      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 pointer-events-none" />
      
      {/* MANUAL SLIDER ARROW BUTTONS */}
      <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
        <button
          onClick={handlePrev}
          className="w-8 h-8 bg-white/90 backdrop-blur-xs text-stone-900 rounded-full flex items-center justify-center hover:bg-[#4A0A15] hover:text-white pointer-events-auto transition-all transform active:scale-90 shadow-md focus:outline-none"
          aria-label="Previous image"
        >
          <LuChevronLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
        <button
          onClick={handleNext}
          className="w-8 h-8 bg-white/90 backdrop-blur-xs text-stone-900 rounded-full flex items-center justify-center hover:bg-[#4A0A15] hover:text-white pointer-events-auto transition-all transform active:scale-90 shadow-md focus:outline-none"
          aria-label="Next image"
        >
          <LuChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
      
      {/* Visual Indicator Dots inside gallery items */}
      <div className="absolute bottom-4 left-4 z-30 hidden lg:flex space-x-1.5 bg-black/20 backdrop-blur-md px-2 py-1 rounded-sm">
        {images.map((_, i) => (
          <button 
            key={i}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDirection(i > imgIdx ? 'next' : 'prev');
              setImgIdx(i);
            }}
            className={`w-2 h-1 rounded-xs transition-all duration-300 focus:outline-none ${i === imgIdx ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/70'}`} 
            aria-label={`Go to slide ${i + 1}`}
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
    <section className="w-full bg-[#1E110E] pb-20 pt-6 font-sans flex flex-col items-center">
      <div className="w-full bg-white p-8 md:p-16 shadow-2xl rounded-none">
        
        {/* UPPER MATRIX FILTER CONTROL PANEL LAYER */}
        <div className="max-w-[1440px] mx-auto w-full border-b border-gray-100 pb-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 px-6 md:px-12">
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
                className={`px-5 py-2.5 border transition-all duration-300 focus:outline-none rounded-none shadow-xs ${
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
        <div className="max-w-[1440px] mx-auto w-full flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-3 lg:gap-8 md:gap-10 lg:overflow-visible lg:pb-0 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-6 md:px-12">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div 
                key={room.id}
                className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform lg:hover:-translate-y-2 w-[85vw] sm:w-[45vw] lg:w-auto flex-shrink-0 snap-center rounded-t-2xl rounded-b-none"
              >
                {/* Image Window Wrapper */}
                <div className="w-full h-64 md:h-72 relative overflow-hidden bg-stone-100 rounded-t-2xl rounded-b-none isolate">
                  <RoomCardImageGallery images={room.images || []} title={room.title} delay={room.delay || 0} />
                  
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#4A0A15] font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1.5 shadow-md border border-white/40 z-30 rounded-md">
                    {room.category}
                  </span>

                  <div className="absolute bottom-4 right-4 flex space-x-2 text-white font-semibold text-[11px] tracking-wide bg-black/40 backdrop-blur-xs px-3 py-1 z-30 rounded-md">
                    <span>{room.size}</span>
                    <span className="text-white/40">|</span>
                    <span>{room.occupancy}</span>
                  </div>
                </div>

                {/* Text Information Panel Area */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow border-t border-gray-50">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900 mb-4 leading-snug tracking-tight group-hover:text-[#4A0A15] transition-colors">
                      {room.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-2 mb-6">
                      {room.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center text-xs font-semibold text-gray-500 tracking-wide space-x-2">
                          <MatrixFeatureIcon type={feat.icon} />
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
                      className="inline-flex items-center justify-center bg-[#4A0A15] text-white font-bold text-[11px] uppercase tracking-widest px-6 py-3 hover:bg-[#36070E] transition-all transform active:scale-95 shadow-md rounded-full"
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
