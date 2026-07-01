
"use client";

import React from 'react';
import Link from 'next/link'; // ✅ IMPORTED standard Next.js routing wrapper

export const AboutInstantBooking: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28 flex justify-center items-center">
      <div className="w-full max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Overlapping Graphic Layout Matrix Box */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-start">
          <div className="relative w-[85%] md:w-[440px] aspect-[4/5] overflow-hidden rounded-sm shadow-xl z-10 border border-gray-100">
            {/* ✅ FIXED: Sourced reliably from local public directory folder path */}
            <img 
              src="/img/A7.webp" 
              alt="Premium Bedroom" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating Gold Border Accent Block */}
          <div className="absolute -top-6 -left-4 w-[40px] h-[120px] border-t-2 border-l-2 border-[#cba865]/60 z-0" />
          
          {/* Floating Luxury Award Badge */}
          <div className="absolute bottom-6 right-0 bg-[#161719] text-white p-6 w-[160px] aspect-square flex flex-col items-center justify-center text-center shadow-2xl z-20 rounded-xs border border-white/5">
            <span className="text-xl mb-2">⭐</span>
            <h4 className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#cba865] leading-tight mb-1">AZUSA HOTEL</h4>
            <span className="text-[9px] font-bold text-white/50 tracking-wider uppercase font-sans">Apartments</span>
          </div>
        </div>

        {/* Right Side: Editorial Context Description Typography */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="text-[10px] font-extrabold text-[#cba865] tracking-[0.3em] uppercase block mb-3 font-sans">
            LUXURY HOTEL AND APARTMENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-normal text-stone-900 font-serif tracking-tight leading-tight mb-6 uppercase">
            Luxury Best Hotel In City<br />ABUJA, NIGERIA
          </h2>
          <p className="text-gray-500 text-xs md:text-sm font-normal leading-relaxed mb-4 max-w-xl">
            Rapidly orchestrate cross-platform intellectual capital after marketing models. Appropriately create interactive infrastructures after maintainable systems. Holistically facilitate stand-alone software.
          </p>
          <p className="text-gray-500 text-xs md:text-sm font-normal leading-relaxed mb-8 max-w-xl">
            Rapidly orchestrate cross-platform intellectual capital after marketing models. Appropriately create interactive infrastructures after maintainable systems.
          </p>

          {/* Localized Address Block */}
          <div className="w-full bg-[#FCFBF9] border border-gray-100 p-5 rounded-sm mb-8 text-xs font-medium text-stone-600 tracking-wide font-sans leading-relaxed">
            Ahmadu Bello Wy, Kado, Abuja, Federal Capital Territory
          </div>

          {/* ✅ FIXED BUTTON: Converted into a high-performance Link component redirecting to your live booking system URL */}
          <Link 
            href="/explore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#cba865] hover:bg-stone-900 text-white font-bold text-[10px] tracking-widest uppercase px-8 py-4 shadow-md transition-colors rounded-sm cursor-pointer font-sans select-none text-center"
          >
            About More
          </Link>
        </div>

      </div>
    </section>
  );
};

