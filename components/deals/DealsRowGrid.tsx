"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DealPackage } from '../../app/types/deals';
import DEALS_DATABASE_JSON from '../../app/data/deals.json';

// Import crisp vector icon for list bullet highlights
import { LuSparkles } from 'react-icons/lu';

interface DealPackageWithGallery extends DealPackage {
  images?: string[];
}

const DEALS_DATABASE = DEALS_DATABASE_JSON as DealPackageWithGallery[];

// SUB-COMPONENT: Handles the self-contained automatic carousel loops for individual image containers
const DealImageCarousel: React.FC<{ initialImage: string; title: string }> = ({ initialImage, title }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const galleryCollection = [
    initialImage,
    "/images/azusa2.jpg",
    "/images/hero-bg.jpg"
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveImgIdx((prev) => (prev + 1) % galleryCollection.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [galleryCollection.length]);

  return (
    <div className="w-full h-full relative">
      {galleryCollection.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`${title} highlight view ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
            index === activeImgIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.onerror = null;
            img.src = '/images/hero-bg.jpg';
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20 pointer-events-none" />
      
      {/* Sliding Page Micro Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-1.5 bg-black/30 backdrop-blur-xs px-2.5 py-1.5 rounded-full">
        {galleryCollection.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === activeImgIdx ? 'bg-white w-3.5' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const DealsRowGrid: React.FC = () => {
  return (
    <section className="w-full bg-[#1E110E] font-sans flex flex-col items-center">
      <div className="w-full bg-white p-8 md:p-16 shadow-2xl overflow-hidden rounded-none">
        
        {/* Upper Heading Bar */}
        <div className="max-w-[1440px] mx-auto w-full border-b border-gray-100 pb-6 mb-12 px-6 md:px-12">
          <span className="text-[11px] font-extrabold text-[#4A0A15] uppercase tracking-[0.25em] block mb-2">
            Curated Hospitality Packages
          </span>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-stone-900 font-serif leading-none">
            Exclusive Deals & Offers
          </h1>
        </div>

        {/* Stacked Rows Display Matrix */}
        <div className="w-full flex flex-col space-y-0">
          {DEALS_DATABASE.map((deal, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={deal.id}
                className="w-full border-b border-gray-100 last:border-b-0 bg-[#FCFBF9] odd:bg-white py-12 md:py-16 transition-colors duration-300"
              >
                {/* Content Alignment Lock Grid */}
                <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center px-6 md:px-12">
                  
                  {/* IMAGE CAROUSEL CONTAINER BOX */}
                  <div className={`lg:col-span-6 relative h-[340px] md:h-[440px] w-full overflow-hidden shadow-md group rounded-2xl z-10 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    
                    <DealImageCarousel initialImage={deal.image} title={deal.title} />
                    
                    {/* Dynamic Floating Action Badge Overlay */}
                    {deal.badgeText && (
                      <span className="absolute top-4 left-4 bg-[#4A0A15] text-white font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-md shadow-md z-30">
                        {deal.badgeText}
                      </span>
                    )}

                    {/* Percentage Discount Pill */}
                    {deal.discountPercentage && (
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs border border-white/20 text-[#4A0A15] font-black text-xs px-4 py-2 rounded-md shadow-md z-30">
                        {deal.discountPercentage}% OFF
                      </div>
                    )}
                  </div>

                  {/* Editorial Typography Panel Area */}
                  <div className={`lg:col-span-6 flex flex-col items-start justify-center relative z-20 ${
                    isEven ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'
                  }`}>
                    <span className="text-[10px] font-extrabold text-[#4A0A15] tracking-[0.2em] uppercase block mb-2.5">
                      {deal.tagline}
                    </span>
                    
                    <h2 className="text-xl md:text-3xl font-bold font-serif text-stone-900 leading-tight mb-4 tracking-tight">
                      {deal.title}
                    </h2>
                    
                    <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-6">
                      {deal.description}
                    </p>

                    {/* Features Bullet List Matrix Block with LuSparkles Vector Icons */}
                    <ul className="flex flex-col space-y-2 mb-8 text-xs md:text-[13px] font-bold text-gray-500 tracking-wide">
                      {deal.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2.5">
                          <LuSparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Execution Line Wrapper */}
                    <div className="w-full pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {deal.validUntil}
                      </span>
                      
                      <Link 
                        href={deal.ctaHref}
                        className="inline-flex items-center justify-center bg-[#4A0A15] text-white font-bold text-xs tracking-widest rounded-full px-8 py-3.5 hover:bg-[#36070E] transition-all transform active:scale-95 shadow-md hover:shadow-lg"
                      >
                        Claim Offer 
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
