"use client";

import React from 'react';
import { GuestTestimonial } from '../../app/types/room-details';

interface GuestReviewCardProps {
  testimonial: GuestTestimonial;
}

export const GuestReviewCard: React.FC<GuestReviewCardProps> = ({ testimonial }) => {
  return (
    <div className="w-full bg-[#FCFBF9] border-t border-gray-100 py-16 px-6 md:px-12 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Aspect Side Frame Image Block */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="relative w-[280px] h-[380px] border border-gray-200/60 shadow-xl overflow-hidden bg-stone-100">
            <img 
              src={testimonial.avatarImage} 
              alt={testimonial.author} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right Aspect Side Frame Text Plate Panel Section */}
        <div className="lg:col-span-8 flex flex-col items-start justify-center lg:pl-6">
          <span className="text-xs font-extrabold text-[#4A0A15] tracking-[0.2em] uppercase block mb-3">
            Happy Family
          </span>
          
          {/* Static Star SVG Array Execution Loop Row */}
          <div className="flex items-center space-x-1.5 mb-5 text-amber-500 text-sm">
            {Array.from({ length: testimonial.rating }).map((_, starI) => (
              <span key={starI}>★</span>
            ))}
          </div>

          {/* Large Quote Statement Block Heading */}
          <blockquote className="text-xl md:text-2xl font-light italic text-stone-900 font-serif leading-relaxed tracking-wide mb-6 border-l-2 border-stone-200 pl-5">
            "{testimonial.quote}"
          </blockquote>

          {/* Author Name Tag Coordinates Subtitle */}
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-8">
            — {testimonial.author}, {testimonial.role}
          </span>

          {/* Action Trigger Button Pillar Anchor Link */}
          <button className="bg-[#4A0A15] hover:bg-[#36070E] text-white font-extrabold text-[11px] tracking-widest uppercase px-8 py-3.5 shadow-md transition-colors focus:outline-none">
            Read Their Story
          </button>
        </div>

      </div>
    </div>
  );
};
