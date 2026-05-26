"use client";

import React from 'react';

export const AboutInstantBooking: React.FC = () => {
  const benefitChecklist = [
    "Real-time availability",
    "3D views of our meeting spaces and bedrooms",
    "The best available rate guarantee",
    "Instant booking confirmation",
    "Easy and secure online payment"
  ];

  return (
    <section className="w-full bg-[#FCFBF9] py-12 md:py-16 border-b border-stone-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl">
        
        {/* Left Side Viewport: Video Preview Block with Centered Play Button Trigger */}
        <div className="lg:col-span-6 w-full aspect-[16/10] bg-stone-900 relative rounded-2xl overflow-hidden shadow-md flex items-center justify-center group isolate select-none">
          <img 
            src="https://unsplash.com" 
            alt="Azusa Smart Venues Presentation Guide Video Preview" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] group-hover:scale-102 transition-transform duration-700"
          />
          {/* Floating Native SVG Circular Play Trigger */}
          <button className="w-14 h-14 bg-white/90 hover:bg-white text-[#4A0A15] rounded-full flex items-center justify-center shadow-xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer relative z-10 pl-1 focus:outline-none">
            <svg className="w-6 h-6 fill-currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        {/* Right Side Viewport: List Specifications Features */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <h3 className="text-xl md:text-2xl font-bold text-stone-900 font-serif leading-tight mb-6">
            Save valuable time with instant online booking for groups, meetings and events
          </h3>
          
          <ul className="flex flex-col space-y-3 w-full">
            {benefitChecklist.map((perk, pIdx) => (
              <li key={pIdx} className="flex items-start text-xs md:text-sm font-medium text-stone-600 tracking-wide select-none">
                <span className="text-[#4A0A15] mr-2.5 font-bold">•</span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
