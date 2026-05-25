"use client";

import React from 'react';
import Link from 'next/link';
import { LuCalendar, LuClock, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { BlogPostCard } from '@/app/types/blog';

interface BlogFeaturedProps {
  article: BlogPostCard;
}

export const BlogFeatured: React.FC<BlogFeaturedProps> = ({ article }) => {
  return (
    <section className="w-full bg-[#FCFBF9] py-8 md:py-12 border-b border-stone-100 flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col">
        
        {/* Breadcrumb Navigation Line */}
        <nav className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-stone-400 mb-6 select-none">
          <Link href="/" className="hover:text-[#4A0A15] transition-colors">Home</Link>
          <span className="text-stone-300 font-normal">›</span>
          <span className="text-stone-800">Blog</span>
        </nav>

        {/* Asymmetric Split Layout Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative w-full">
          
          {/* LEFT PANEL: Core Meta Typography Details */}
          <div className="lg:col-span-5 flex flex-col items-start text-left relative z-10 order-2 lg:order-1">
            <span className="text-[10px] font-black text-[#4A0A15] tracking-[0.25em] uppercase block mb-3">
              {article.category}
            </span>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal font-serif text-stone-900 tracking-tight leading-[1.15] mb-5 max-w-xl">
              {article.title}
            </h1>
            
            <p className="text-stone-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-6 max-w-lg">
              {article.description}
            </p>

            {/* Micro Details Row */}
            <div className="flex items-center space-x-5 text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-8 select-none">
              <div className="flex items-center space-x-1.5">
                <LuCalendar className="w-3.5 h-3.5 text-[#4A0A15]" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <LuClock className="w-3.5 h-3.5 text-[#4A0A15]" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <Link 
              href={article.href}
              className="inline-flex items-center justify-center bg-[#4A0A15] text-white font-extrabold text-[11px] tracking-widest uppercase px-8 py-3.5 hover:bg-[#36070E] transition-all transform active:scale-98 shadow-sm rounded-full"
            >
              Read More
            </Link>
          </div>

          {/* RIGHT PANEL: Large Media Viewport Window with Slider Indicators */}
          <div className="lg:col-span-7 h-[300px] md:h-[400px] lg:h-[460px] w-full relative overflow-hidden bg-stone-100 rounded-2xl shadow-md group isolate order-1 lg:order-2">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover object-center transform-gpu scale-100 group-hover:scale-[1.02] transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1)"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Manual Slider Navigation Nodes Layout */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-9 h-9 bg-white/90 backdrop-blur-md text-stone-900 rounded-full flex items-center justify-center hover:bg-[#4A0A15] hover:text-white pointer-events-auto transition-all shadow-md focus:outline-none cursor-pointer">
                <LuChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button className="w-9 h-9 bg-white/90 backdrop-blur-md text-stone-900 rounded-full flex items-center justify-center hover:bg-[#4A0A15] hover:text-white pointer-events-auto transition-all shadow-md focus:outline-none cursor-pointer">
                <LuChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
