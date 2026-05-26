"use client";

import React from 'react';

export const AboutHero: React.FC = () => {
  return (
    <section className="w-full h-[360px] md:h-[420px] relative overflow-hidden bg-stone-900 select-none flex flex-col items-center justify-center text-center">
      
      {/* Background Hero Asset Window */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://unsplash.com" 
          alt="Azusa Luxury Conference Theater Auditorium" 
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#4A0A15]/40" />
      </div>

      {/* Center Editorial Typography Content */}
      <div className="relative z-10 px-6 max-w-4xl flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white font-serif uppercase leading-tight mb-4 drop-shadow-md">
          Built For Work, Designed For Connection
        </h1>
        <div className="w-24 h-[3px] bg-[#D4AF37] rounded-full" />
      </div>

    </section>
  );
};
