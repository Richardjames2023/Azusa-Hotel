"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // IMPORT CLIENT-SIDE ROUTER CONTROLLER
import { LuClock, LuArrowUpRight } from 'react-icons/lu';
import { BlogPostCard } from '@/app/types/blog';

interface BlogGridCardProps {
  post: BlogPostCard;
  isFullWidthRow?: boolean;
}

export const BlogGridCard: React.FC<BlogGridCardProps> = ({ post, isFullWidthRow = false }) => {
  const router = useRouter();

  // Handles click events programmatically to navigate clients to the dynamic article path safely
  const handleCardNavigation = () => {
    router.push(post.href);
  };

  return (
    <div 
      onClick={handleCardNavigation}
      className={`group flex flex-col bg-white border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-500 transform lg:hover:-translate-y-1.5 rounded-2xl overflow-hidden relative cursor-pointer ${
        isFullWidthRow ? 'col-span-full h-auto lg:grid lg:grid-cols-12 lg:gap-8 items-stretch' : 'col-span-1'
      }`}
    >
      {/* CARD MEDIA FRAME CONTAINER */}
      <div className={`relative overflow-hidden bg-stone-50 isolate ${
        isFullWidthRow ? 'lg:col-span-7 h-56 sm:h-72 lg:h-[320px]' : 'w-full h-52 sm:h-60'
      }`}>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover object-center transform-gpu scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Floating Read-Time Overlay Pill */}
        <div className="absolute top-4 left-4 z-20 bg-black/30 backdrop-blur-md text-white px-3 py-1.5 text-[10px] font-bold flex items-center space-x-1.5 rounded-full border border-white/10 select-none">
          <LuClock className="w-3.5 h-3.5" />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* CARD CONTENT DETAILS SHEET */}
      <div className={`p-6 flex flex-col justify-between flex-grow ${
        isFullWidthRow ? 'lg:col-span-5 lg:p-8 justify-center' : ''
      }`}>
        <div>
          <span className="text-[9px] font-black text-[#4A0A15] uppercase tracking-[0.2em] block mb-2">
            {post.category}
          </span>
          <h3 className="text-base md:text-[17px] font-bold text-stone-900 leading-snug tracking-tight mb-4 group-hover:text-[#4A0A15] transition-colors line-clamp-3 font-serif">
            {post.title}
          </h3>
        </div>

        {/* Bottom Interactive Arrow Node */}
        <div className="pt-4 border-t border-gray-50 flex items-center justify-end text-stone-400 group-hover:text-[#4A0A15] transition-colors select-none mt-auto">
          <div className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[#4A0A15]/20 flex items-center justify-center bg-stone-50/50 group-hover:bg-amber-50/40 transition-all transform group-hover:rotate-45">
            <LuArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>
      </div>

    </div>
  );
};
