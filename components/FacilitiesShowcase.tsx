"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FacilityItem } from '../app/types/facilities';


const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "fac-1",
    title: "Experience modern comfort",
    tagline: "CHIC ACCOMMODATIONS & LOCAL FLAVORS",
    description: "Plan your next getaway to the vibrant city of Abuja and make Azusa, Abuja your ultimate destination! With its chic accommodations, exceptional dining experiences infused with local flavors, and state-of-the-art amenities, our hotel invites you to immerse yourself in a world of indulgence and relaxation.",
    image: "/images/hero-bg.jpg", 
    ctaHref: "/facilities/dining",
    highlights: ["Local Flavors", "Chic Accommodations", "Fine Wine Cellar"]
  },
  {
    id: "fac-2",
    title: "Signature Wellness Spa",
    tagline: "REVITALIZE YOUR MIND & BODY",
    description: "Indulge in tailored therapeutic massages, premium organic skincare treatments, and holistic wellness sessions designed entirely to restore clarity and balance. Complete with steam therapy paths and quiet ambient lounges, your ultimate rejuvenation awaits.",
    image: "/images/azusa2.jpg",
    ctaHref: "/facilities/spa",
    highlights: ["Organic Skincare", "Therapeutic Massage", "Steam Therapy"]
  },
  {
    id: "fac-3",
    title: "The Panoramic Sky Lounge",
    tagline: "ELEVATED ROOFTOP MIXOLOGY",
    description: "Take in sweeping city skylines from our high-end rooftop destination. Sip handcrafted custom cocktails, sample globally inspired tapas plates, and relax in an ambient interior configuration tailored perfectly for networking, late evenings, or intimate escapes.",
    image: "/images/hero-bg.jpg",
    ctaHref: "/facilities/lounge",
    highlights: ["Handcrafted Cocktails", "Panoramic Views", "Premium Tapas"]
  }
];

export const FacilitiesShowcase: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const activeFacility = FACILITIES_DATA[currentIdx];

  const handleSlideChange = (targetIdx: number) => {
    if (isAnimating || targetIdx === currentIdx) return;
    setIsAnimating(true);
    setCurrentIdx(targetIdx);
  };

  // 1. HARDWARE-ACCELERATED TIMEOUT: Resets the cross-fade state blocks safely
  useEffect(() => {
    const animTimer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(animTimer);
  }, [currentIdx]);

  // 2. BACKGROUND LOOP INTERVAL: Auto-advances items seamlessly every 5 seconds
  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIdx((prev) => (prev + 1) % FACILITIES_DATA.length);
      }
    }, 5000);

    return () => clearInterval(autoSlideTimer);
  }, [isAnimating]);

  return (
    <section className="w-full bg-[#1E110E] px-4 md:px-8 pb-24 pt-6 font-sans flex flex-col items-center">
      
      {/* Outer Premium Shelf Housing Card Container */}
      <div className="w-full max-w-[1600px] bg-white rounded-br-[60px] md:rounded-br-[100px] p-8 md:p-16 shadow-2xl overflow-hidden relative">
        
        {/* Main Grid Content Partition Matrix Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT INTERACTIVE COLUMN BLOCK: Asymmetric Curved Picture Frame */}
          <div className="lg:col-span-6 relative h-[360px] md:h-[460px] w-full rounded-[30px] md:rounded-[40px] overflow-hidden bg-stone-100 group shadow-lg">
            
            {FACILITIES_DATA.map((item, index) => (
              <div 
                key={item.id}
                className={`absolute inset-0 transition-all duration-[1000ms] ease-in-out ${
                  index === currentIdx 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-0 scale-105 pointer-events-none z-0'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center filter brightness-[0.95]"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.onerror = null;
                    img.src = '/images/hero-bg.jpg';
                  }}
                />
              </div>
            ))}

            {/* Micro Interaction Bottom Bar Indicators */}
            <div className="absolute bottom-6 right-6 z-20 flex space-x-2 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
              {FACILITIES_DATA.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => handleSlideChange(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    dotIdx === currentIdx ? 'bg-white w-5' : 'bg-white/40 hover:bg-white/60 w-2'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT EDITORIAL TYPOGRAPHY DETAILS COLUMN SECTION PANEL */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start lg:pl-4">
            
            <div className={`w-full transform transition-all duration-700 ease-out ${
              isAnimating ? 'opacity-0 translate-x-8 scale-[0.99]' : 'opacity-100 translate-x-0 scale-100'
            }`}>
              {/* Dynamic Context Tag Subtitle Line */}
              <span className="text-[11px] font-extrabold text-[#4A0A15] tracking-[0.25em] uppercase block mb-3 pl-0.5">
                {activeFacility.tagline}
              </span>

              {/* Massive Main Editorial Title Heading */}
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold font-serif text-stone-900 leading-[1.1] tracking-tight mb-5">
                {activeFacility.title}
              </h2>

              {/* Multi-sentence Descriptive Paragraph Block Text */}
              <p className="text-gray-600 text-[14px] md:text-base font-medium leading-relaxed tracking-wide mb-8 max-w-xl">
                {activeFacility.description}
              </p>

              {/* Dynamic Feature Checklist Pills Container */}
              <div className="flex flex-wrap gap-2 mb-8 max-w-xl">
                {activeFacility.highlights.map((highlight, hIdx) => (
                  <span 
                    key={hIdx}
                    className="bg-stone-50 border border-stone-200/60 text-stone-600 text-[11px] font-bold tracking-wide uppercase px-3.5 py-1.5 rounded-md shadow-xs"
                  >
                    ✦ {highlight}
                  </span>
                ))}
              </div>

              {/* Clean Maroon CTA Pill Link */}
              <Link 
                href={activeFacility.ctaHref}
                className="inline-flex items-center justify-center bg-[#4A0A15] text-white font-extrabold text-xs px-9 py-4 rounded-full shadow-lg hover:bg-[#36070E] hover:shadow-xl transition-all transform active:scale-95 duration-200 uppercase tracking-widest border border-transparent"
              >
                Discover More
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
