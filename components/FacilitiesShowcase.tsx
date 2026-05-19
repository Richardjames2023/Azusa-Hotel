"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FacilityItem } from '../app/types/facilities';

// Import editorial stars icon to style the highlights matrix cleanly
import { LuSparkles } from 'react-icons/lu';

import FACILITIES_JSON from '../app/data/facilities.json';

const FACILITIES_DATA = FACILITIES_JSON as FacilityItem[];

export const FacilitiesShowcase: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const activeFacility = FACILITIES_DATA[currentIdx];

  const handleSlideChange = (targetIdx: number) => {
    if (isAnimating || targetIdx === currentIdx) return;
    setIsAnimating(true);
    setCurrentIdx(targetIdx);
  };

  useEffect(() => {
    const animTimer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(animTimer);
  }, [currentIdx]);

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIdx((prev) => (prev + 1) % FACILITIES_DATA.length);
      }
    }, 6000);

    return () => clearInterval(autoSlideTimer);
  }, [isAnimating]);

  return (
    <section className="w-full bg-[#FCFBF9] py-12 md:py-16 font-sans flex flex-col items-center relative z-10 overflow-hidden">
      
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[500px]">
          
          <div className="lg:col-span-6 relative h-[360px] md:h-[480px] lg:h-auto w-full bg-stone-900 group overflow-hidden z-10 shadow-lg rounded-2xl isolate">
            
            {FACILITIES_DATA.map((item, index) => (
              <div 
                key={item.id}
                /* UPDATED: Added 'rounded-2xl' and 'transform-gpu' straight to transition targets */
                className={`absolute inset-0 transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) rounded-2xl transform-gpu ${
                  index === currentIdx 
                    ? 'opacity-100 scale-100 z-10 filter brightness-[0.85]' 
                    : 'opacity-0 scale-105 pointer-events-none z-0 filter brightness-50'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center rounded-2xl"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.onerror = null;
                    img.src = '/images/hero-bg.jpg';
                  }}
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-20 pointer-events-none rounded-2xl" />

            <div className="absolute bottom-6 left-6 z-30 flex items-center space-x-3 bg-black/40 backdrop-blur-md px-3 py-2.5 border border-white/10 rounded-xl">
              <span className="text-white/80 font-serif text-xs font-semibold select-none">
                {String(currentIdx + 1).padStart(2, '0')}
              </span>
              <div className="flex space-x-1.5">
                {FACILITIES_DATA.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => handleSlideChange(dotIdx)}
                    className={`h-1 rounded-full transition-all duration-500 ease-out focus:outline-none ${
                      dotIdx === currentIdx ? 'bg-[#D4AF37] w-6' : 'bg-white/30 hover:bg-white/60 w-2'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center items-start p-6 md:p-10 lg:p-12 xl:p-14 bg-white border border-gray-100 shadow-xs relative z-20 rounded-2xl">
            
            <div className={`w-full transform transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
              isAnimating ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'
            }`}>
              
              <div className="flex flex-col mb-4">
                <span className="text-[10px] font-extrabold text-[#4A0A15] tracking-[0.25em] uppercase block pl-0.5">
                  {activeFacility.tagline}
                </span>
                <div className="w-12 h-[2px] bg-[#D4AF37] mt-2.5 ml-0.5" />
              </div>

              <h2 className="text-2xl md:text-3xl xl:text-4xl font-normal font-serif text-stone-900 leading-[1.15] tracking-tight mb-5">
                {activeFacility.title}
              </h2>

              <p className="text-stone-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-6 border-l-2 border-stone-200 pl-4 max-w-xl">
                {activeFacility.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
                {activeFacility.highlights.map((highlight, hIdx) => (
                  <div 
                    key={hIdx}
                    className="flex items-center space-x-3 bg-stone-50/60 border border-stone-200/40 p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.01)] rounded-xl"
                  >
                    <LuSparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                    <span className="text-stone-800 text-[11px] font-bold tracking-wide uppercase">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <Link 
                href={activeFacility.ctaHref}
                className="inline-flex items-center justify-center bg-[#4A0A15] text-white font-extrabold text-xs px-10 py-3.5 shadow-md hover:bg-[#36070E] hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 duration-200 uppercase tracking-widest min-w-[180px] rounded-full"
              >
                <span>Discover More</span>
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
