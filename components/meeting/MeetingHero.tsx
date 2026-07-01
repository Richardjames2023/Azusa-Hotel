"use client";

import React, { useState } from 'react';
import SubNav from '../subNav';

export const MeetingHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const subCategories = [
    'Overview', 'Book it easy', 'Industry Solutions', 
    'Popular Event Destinations', 'Azusa Rewards for Bookers and Planners', 
    'Food & Beverage', 'Event Type'
  ];

  return (
    <div className="w-full font-sans">
      
      {/* Visual Canvas Block */}
      <div className="w-full h-[460px] relative flex flex-col justify-center items-center px-6 text-center overflow-hidden bg-stone-900">
        <img 
          src="/images/meeting-hero.jpg" 
          alt="Premium Meeting Spaces" 
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
        
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold tracking-widest text-white uppercase font-sans mb-4 leading-tight">
            BUILT FOR WORK, DESIGNED FOR CONNECTION.
          </h1>
          <p className="text-gray-200 text-base md:text-lg font-medium max-w-2xl mx-auto tracking-wide leading-relaxed">
            Azusa provides a complete environment for businesses who value structure, privacy, and professionalism.
          </p>
        </div>
      </div>

      {/* Horizontal Category Pill Filter Navigation Strip */}
      {/* <div className="w-full bg-[#4A0A15] py-3.5 px-6 relative z-30">
        <div className="max-w-[1440px] mx-auto flex items-center overflow-x-auto gap-3 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden whitespace-nowrap">
          {subCategories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all tracking-wide ${
                activeTab === tab 
                  ? 'bg-white text-stone-900 shadow-md' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div> */}
      <SubNav/>

    </div>
  );
};
