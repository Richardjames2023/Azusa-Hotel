"use client";

import React from 'react';

interface DetailsHeroProps {
  title: string;
  location: string; // Left in interface signature to prevent breaking your upper page prop bindings
  mainImage: string;
  galleryImages: string[];
}

export const DetailsHero: React.FC<DetailsHeroProps> = ({ title, mainImage, galleryImages }) => {
  return (
    <div className="w-full bg-[#FCFBF9] font-sans flex flex-col items-center border-b border-b-stone-100">
      {/* EXPANDED MAXIMUM LAYOUT REAL ESTATE */}
      <div className="w-full max-w-[1600px] px-6 md:px-12 lg:px-16 pt-10 pb-14 flex flex-col">

        {/* 
          CENTERED TITLE AREA
          Removed the location text subtitle entirely and aligned heading layout to the direct center
        */}
        <div className="flex flex-col items-center justify-center text-center mb-10 w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal font-serif text-stone-900 tracking-tight leading-tight max-w-4xl">
            {title}
          </h1>
        </div>

        {/* CONTAINED ASYMMETRIC MOSAIC GRID WITH ISOLATED TRANSITIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full h-[420px] md:h-[500px] lg:h-[540px] max-h-[540px]">
          
          {/* 
            MAIN LARGE LEFT IMAGE FRAME
            Upgraded with rounded corners, hover transitions, and brightness adjustments
          */}
          <div className="lg:col-span-7 h-full w-full relative overflow-hidden bg-stone-50 border border-stone-200/30 rounded-2xl group cursor-pointer isolate">
            <img 
              src={mainImage} 
              alt={`${title} Master view`} 
              className="w-full h-full object-cover object-center transform-gpu scale-100 group-hover:scale-105 transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) filter brightness-100 group-hover:brightness-90 rounded-2xl"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.onerror = null;
                img.src = '/images/hero-bg.jpg';
              }}
            />
          </div>

          {/* STACKED RIGHT IMAGE COLUMN VIEWPORTS */}
          <div className="lg:col-span-5 flex flex-col gap-4 h-full w-full overflow-hidden">
            {galleryImages.slice(0, 2).map((img, index) => (
              <div 
                key={index}
                className="h-[calc(50%-8px)] w-full relative overflow-hidden bg-stone-50 border border-stone-200/30 rounded-2xl group cursor-pointer isolate"
              >
                <img 
                  src={img} 
                  alt={`${title} auxiliary setting ${index + 1}`} 
                  className="w-full h-full object-cover object-center transform-gpu scale-100 group-hover:scale-105 transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) filter brightness-100 group-hover:brightness-90 rounded-2xl"
                  onError={(e) => {
                    const targetImg = e.target as HTMLImageElement;
                    targetImg.onerror = null;
                    targetImg.src = '/images/hero-bg.jpg';
                  }}
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
