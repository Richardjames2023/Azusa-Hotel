"use client";

import React, { useState, useEffect } from 'react';
import { HeroSlide } from '../app/types/hero';
import Link from 'next/link';

// NATIVE JSON DATA IMPORT ENGINE
import SLIDES_DATABASE_JSON from '../app/data/slides.json';

// Typecast the external static database file safely into your local TypeScript blueprint
const SLIDES_DATABASE = SLIDES_DATABASE_JSON as HeroSlide[];

export const HeroSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const activeSlide = SLIDES_DATABASE[currentIdx];

  // VIEWPORT BREAKPOINT CONFIGURATION CAPTURE HOOK
  useEffect(() => {
    const checkViewportSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Matches Tailwind's standard 'lg' desktop breakpoint
    };
    
    checkViewportSize(); // Initial execution run loop flag
    window.addEventListener('resize', checkViewportSize);
    return () => window.removeEventListener('resize', checkViewportSize);
  }, []);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIdx((prev) => (prev + 1) % SLIDES_DATABASE.length);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIdx((prev) => (prev - 1 + SLIDES_DATABASE.length) % SLIDES_DATABASE.length);
  };

  // ANIMATION RESET TRACKER
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 700); 
    return () => clearTimeout(timer);
  }, [currentIdx]);

  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIdx((prev) => (prev + 1) % SLIDES_DATABASE.length);
      }
    }, 5000); // Rotates slides flawlessly every 5000ms (5 seconds)

    return () => clearInterval(autoPlayTimer);
  }, [isAnimating]);

  return (
    <section className="w-full bg-[#1E110E] p-0 relative overflow-hidden font-sans flex flex-col items-center">
      
      {/* MAIN HERO STAGE CONTAINER */}
      <div className="w-full max-w-none h-[740px] rounded-none relative overflow-hidden bg-stone-900 shadow-2xl group/stage flex flex-col items-center">
        
        <div className="absolute inset-0 z-0">
          <img 
            src={activeSlide.bgImage} 
            alt="Hero Background" 
            className={`w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.05] transition-all duration-700 ease-in-out ${isAnimating ? 'opacity-40 blur-sm scale-100' : 'opacity-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E110E]/40 via-transparent to-black/20" />
        </div>

        {/* CONTROLS AREA: Slide Counter Indicator Block */}
        <div className="absolute bottom-16 left-8 md:left-16 lg:left-24 z-30 flex items-center space-x-4">
          <span className="font-serif text-2xl font-semibold text-white/90 tracking-wide select-none">
            {String(currentIdx + 1).padStart(2, '0')}
          </span>
          <div className="w-24 h-[1px] bg-white/30 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-[#D4AF37] transition-all duration-500 ease-out" 
              style={{ width: `${((currentIdx + 1) / SLIDES_DATABASE.length) * 100}%` }}
            />
          </div>
        </div>

        {/* PRIMARY EDITORIAL LAYOUT CONTENT BLOCK */}
        <div className="w-full max-w-[1440px] h-full relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center px-6 md:px-12 lg:px-16 pt-12 pb-20 gap-8">
          
          {/* LEFT INTERACTIVE TRACK AREA: absolute cards preview rail slider */}
          <div className="lg:col-span-6 xl:col-span-5 flex items-end space-x-4 h-full pb-8 overflow-visible self-end">
            {activeSlide.cards.map((card, idx) => (
              <div 
                key={card.id}
                className={`w-[140px] md:w-[170px] h-[220px] md:h-[260px] rounded-2xl relative overflow-hidden shadow-xl border border-white/10 flex-shrink-0 group/card cursor-pointer transform transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:border-white/30 ${
                  isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110 filter brightness-[0.65] group-hover/card:brightness-[0.5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                
                <div className="absolute bottom-5 left-4 right-4 flex flex-col justify-end text-white">
                  <h6 className="font-serif text-sm md:text-[15px] font-normal leading-tight tracking-wide text-gray-100 group-hover/card:text-[#D4AF37] transition-colors">
                    {card.title}
                  </h6>
                  {card.subtitle && (
                    <span className="font-serif text-sm md:text-[15px] font-normal leading-tight tracking-wide text-gray-200">
                      {card.subtitle}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-end h-full pb-14 space-y-3 lg:opacity-0 lg:group-hover/stage:opacity-100 transition-opacity duration-300">
            <button 
              onClick={handlePrevSlide}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all transform hover:scale-105 active:scale-95 bg-black/10 backdrop-blur-sm shadow-md cursor-pointer"
              aria-label="Previous Slide"
            >
              <svg className="w-4 h-4 transform rotate-180 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={handleNextSlide}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all transform hover:scale-105 active:scale-95 bg-black/10 backdrop-blur-sm shadow-md cursor-pointer"
              aria-label="Next Slide"
            >
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* RIGHT EDITORIAL TYPOGRAPHY DETAILS SECTION PANEL AREA */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center text-left lg:pl-6 xl:pl-10 lg:h-full">
            <div className={`transform transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'}`}>
              <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight mb-2 flex flex-col">
                <span>{activeSlide.titleLight}</span>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
                  {activeSlide.titleBold}
                </span>
              </h1>
              <p className="text-gray-300 text-sm md:text-base font-normal tracking-wide leading-relaxed max-w-md mb-8 pl-1 border-l-2 border-[#D4AF37]/60">
                {activeSlide.subtitle}
              </p>
              <Link 
                href={activeSlide.ctaHref}
                className="inline-flex items-center justify-center bg-white text-black font-semibold text-sm px-10 py-4 rounded-full shadow-xl hover:bg-[#D4AF37] hover:text-black transition-all transform hover:-translate-y-0.5 active:translate-y-0 duration-200 tracking-wide hover:shadow-2xl"
              >
                <span>{activeSlide.ctaText}</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

      <div className="flex lg:hidden items-center justify-center space-x-4 mt-6">
        <button 
          onClick={handlePrevSlide}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-[#3B0E17]/40 hover:bg-[#D4AF37] hover:text-black transition-all active:scale-95"
        >
          <svg className="w-4 h-4 transform rotate-180 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
        <button 
          onClick={handleNextSlide}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-[#3B0E17]/40 hover:bg-[#D4AF37] hover:text-black transition-all active:scale-95"
        >
          <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

    </section>
  );
};
