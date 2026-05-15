"use client";

import React from 'react';
import Link from 'next/link';
import { ExclusiveBenefit } from '../app/types/benefits';

const BENEFITS_DATA: ExclusiveBenefit[] = [
  {
    id: "benefit-1",
    title: "Member Only Rate",
    description: "Members get up to 15% discount",
    iconSvg: (
      <svg className="w-5 h-5 text-[#3B0E17]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2zM9 16h6M9 12h6" />
      </svg>
    )
  },
  {
    id: "benefit-2",
    title: "Discount on Food and Beverages",
    description: "Discount on food and beverages",
    iconSvg: (
      <svg className="w-5 h-5 text-[#3B0E17]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: "benefit-3",
    title: "Priority Line",
    description: "Save waiting time during check-in and check-out",
    iconSvg: (
      <svg className="w-5 h-5 text-[#3B0E17]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export const ExclusiveBenefitsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#F4F4F6] rounded-[40px] md:rounded-[60px] p-8 md:p-14 border border-gray-200/50 shadow-sm relative">
      
      {/* Upper Control Row Elements */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-3">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-stone-900">
          Enjoy the exclusive benefits
        </h2>
        
        <div className="flex flex-wrap items-center gap-3">
          <Link 
            href="/benefits" 
            className="inline-flex items-center justify-center border border-[#3B0E17] text-[#3B0E17] font-bold text-[11px] tracking-wider uppercase rounded-full px-6 py-2.5 hover:bg-stone-100 transition-all transform hover:-translate-y-0.5 duration-200 shadow-sm bg-white"
          >
            Discover More Benefits
          </Link>
          <Link 
            href="/signup" 
            className="inline-flex items-center justify-center bg-[#4A0A15] text-white font-bold text-[11px] tracking-widest uppercase rounded-full px-6 py-3 hover:bg-[#36070E] transition-all transform hover:-translate-y-0.5 duration-200 shadow-sm"
          >
            Become a Member
          </Link>
        </div>
      </div>

      <p className="text-sm md:text-base font-bold text-gray-600 tracking-wide mb-10 max-w-5xl leading-relaxed">
        As a Radisson Rewards member, you enjoy exclusive benefits. You collect points that you can use to enhance your travel experience or to pay for your booking. Join for free and elevate your stay!
      </p>

      {/* Perks Cards Layout Grid Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {BENEFITS_DATA.map((benefit) => (
          <div 
            key={benefit.id}
            className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center space-x-5 shadow-sm transform transition-all duration-300 lg:hover:-translate-y-1.5 lg:hover:shadow-md"
          >
            {/* Visual Anchor Circle Icon Frame wrapper */}
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 shadow-inner">
              {benefit.iconSvg}
            </div>
            
            <div className="flex flex-col space-y-1">
              <h4 className="text-[15px] font-extrabold text-stone-900 tracking-tight leading-tight">
                {benefit.title}
              </h4>
              <p className="text-xs md:text-[13px] font-bold text-gray-500 leading-relaxed tracking-wide">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
