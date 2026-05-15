"use client";

import React from 'react';
import Link from 'next/link';
import { FaqCategory } from '../../app/types/faq';

interface FaqHeroProps {
  activeCategory: FaqCategory;
  onCategoryChange: (category: FaqCategory) => void;
}

export const FaqHero: React.FC<FaqHeroProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: FaqCategory[] = [
    'General hotel information',
    'Reservations',
    'Azusa Rewards',
    'Voucher Codes (e-certs)',
    'Best Rate Guarantee (BRG)',
    'Gift cards'
  ];

  return (
    <div className="w-full font-sans">
      {/* Editorial Content Stage Header Background Block Layer */}
      <div className="w-full h-[320px] relative flex flex-col justify-center items-start px-6 md:px-16 overflow-hidden bg-stone-900 border-b border-gray-100">
        <img 
          src="/images/faq-hero.jpg" // Place your high-contrast close-up hand device asset here in public/images/
          alt="FAQ Support Hub" 
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20 z-10" />
        
        <div className="relative z-20 max-w-4xl text-left">
          {/* Breadcrumb Navigation Chain */}
          <nav className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 select-none">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600 font-normal">/</span>
            <span className="text-white">FAQ</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-white font-serif leading-none mb-3">
            FAQs
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium tracking-wide">
            Find answers to your frequently asked questions
          </p>
        </div>
      </div>

      {/* Categories Filter Tabs Matrix Strip Row */}
      <div className="w-full bg-white border-b border-gray-100 py-6 px-6 md:px-16 overflow-x-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="max-w-[1440px] mx-auto flex items-center gap-3 whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wide uppercase transition-all shadow-xs border ${
                activeCategory === cat 
                  ? 'bg-stone-900 border-stone-900 text-white scale-[1.02]' 
                  : 'bg-gray-50/50 border-gray-200 text-gray-500 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
