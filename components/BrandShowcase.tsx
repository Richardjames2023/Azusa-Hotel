"use client";

import React from 'react';
import Link from 'next/link';

// Helper component matching the graphic profiles directly from your image assets
const BrandLogoRenderer: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'sonder':
      return (
        <div className="flex items-center space-x-3.5 font-sans select-none scale-100 md:scale-110 transform-gpu">
          {/* Sonder Stylized Gold Icon Block */}
          <div className="w-6 h-7 bg-[#C5A059] rounded-xs flex items-center justify-center text-[12px] text-white font-serif font-bold shadow-xs">S</div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[20px] font-medium text-[#A48243] tracking-tight">Sonder</span>
            <span className="text-[5.5px] uppercase tracking-[0.25em] text-[#A48243]/70 -mt-0.5 font-black">L I V I N G</span>
          </div>
        </div>
      );
    case 'caferio':
      return (
        <div className="flex flex-col items-center justify-center font-sans select-none scale-100 md:scale-110 transform-gpu">
          {/* Cafe Rio Green Vector Dynamic SVG Shape Accent */}
          <div className="flex items-center justify-center mb-1 text-[#1E5631]">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 21h18v-2H2v2M20 8h-2V5h2v3M4 19h12v-4H4v4m0-6h12V9H4v4m0-6h12V5H4v4m16-4h-2V3h2v2m0 8h-2v-3h2v3m0 4h-2v-3h2v3z"/>
            </svg>
          </div>
          <span className="text-[18px] font-bold tracking-tight text-[#1E5631]">
            CafeRio
          </span>
        </div>
      );
    case 'vitas':
      return (
        <div className="flex flex-col items-center justify-center font-serif tracking-[0.1em] text-[#917E5B] select-none text-center scale-100 md:scale-110 transform-gpu">
          <span className="text-[20px] font-medium tracking-widest uppercase">VITÀS RIO</span>
          <span className="text-[5.5px] tracking-[0.2em] text-[#917E5B]/60 uppercase -mt-0.5 font-black">RESTAURANT AND BAR</span>
        </div>
      );
    default:
      return null;
  }
};

export const BrandShowcase: React.FC = () => {
  // Filtered dataset containing exactly the 3 brands displayed in the provided image mockup
  const brandList = [
    { id: "b1", name: "Sonder Living", logoType: "sonder", href: "/brands/sonder" },
    { id: "b2", name: "Cafe Rio", logoType: "caferio", href: "/brands/cafe-rio" },
    { id: "b3", name: "Vitas Rio", logoType: "vitas", href: "/brands/vitas-rio" }
  ];

  return (
    /* 
      PARENT OUTER STORAGE CONTAINER 
      Maintains uniform full-width distribution backgrounds with flat borders
    */
    <div className="w-full bg-white py-14 md:py-20 font-sans flex flex-col items-center border-b border-gray-100">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        {/* 
          Main Clean Center Section Heading Title 
          UPDATED: Enhanced type token size to h2 standard text-2xl md:text-3xl serif layout 
        */}
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 tracking-tight mb-12 select-none text-center">
          Our Brands
        </h2>

        {/* 
          Horizontal Brand Link Row Layout 
          UPDATED: Scaled height parameters up to h-36 md:h-40 and widened constraints to max-w-6xl
        */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl">
          {brandList.map((brand) => (
            <Link
              key={brand.id}
              href={brand.href}
              className="w-full h-36 md:h-40 bg-white border border-gray-200/60 rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md hover:border-stone-300 transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              {/* Dynamic Logo Asset Component Output */}
              <div className="transform transition-transform duration-300 group-hover:scale-[1.03]">
                <BrandLogoRenderer type={brand.logoType} />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};
