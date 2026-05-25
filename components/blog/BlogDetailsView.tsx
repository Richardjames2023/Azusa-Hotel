"use client";

import React from 'react';
import Link from 'next/link';
import { LuCalendar, LuClock, LuUser, LuArrowLeft, LuShare2, LuTwitter, LuFacebook } from 'react-icons/lu';
import { DetailedBlogPost } from '@/app/types/blog-details';

interface BlogDetailsViewProps {
  article: DetailedBlogPost;
}

export const BlogDetailsView: React.FC<BlogDetailsViewProps> = ({ article }) => {
  return (
    <article className="w-full bg-[#FCFBF9] min-h-screen font-sans flex flex-col items-center pb-20 select-none">
      
      {/* HEADER META TRACKING BANNER */}
      <div className="w-full max-w-[1200px] px-6 md:px-12 pt-8 pb-10 flex flex-col items-start">
        
        {/* Back navigation line trigger */}
        <Link 
          href="/blog" 
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-[#4A0A15] transition-colors mb-8 group"
        >
          <LuArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Articles Portal</span>
        </Link>

        {/* Category Badge element */}
        <span className="text-[10px] font-black text-[#4A0A15] tracking-[0.25em] uppercase block mb-4">
          {article.category}
        </span>

        {/* Central serif heading title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal font-serif text-stone-900 tracking-tight leading-[1.15] max-w-4xl mb-6">
          {article.title}
        </h1>

        {/* Timeline Metrics Meta Strip */}
        <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold text-stone-400 uppercase tracking-wider select-none border-b border-stone-200/60 pb-6 w-full">
          <div className="flex items-center space-x-1.5">
            <LuCalendar className="w-3.5 h-3.5 text-[#4A0A15]" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <LuClock className="w-3.5 h-3.5 text-[#4A0A15]" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <LuUser className="w-3.5 h-3.5 text-[#4A0A15]" />
            <span>By {article.authorName}</span>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH IMMERSIVE MAIN COVER PICTURE BLOCK */}
      <div className="w-full max-w-[1200px] px-6 md:px-12 mb-12">
        <div className="w-full h-[320px] md:h-[480px] lg:h-[560px] relative overflow-hidden bg-stone-100 rounded-2xl shadow-md">
          <img 
            src={article.coverImage} 
            alt={article.title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* TWO-COLUMN EDITORIAL CONTENT MATRIX READ LAYER */}
      <div className="w-full max-w-[1200px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN ASPECT: Article Content Blocks Parser (8/12 Width) */}
        <div className="lg:col-span-8 flex flex-col space-y-6 text-stone-700 text-sm md:text-base leading-relaxed font-medium tracking-wide text-left">
          {article.sections.map((section, sIdx) => {
            switch (section.type) {
              case 'heading':
                return (
                  <h2 key={sIdx} className="text-xl md:text-2xl font-bold font-serif text-stone-900 tracking-tight mt-6 mb-2 pt-4 border-t border-stone-100 first:border-0 first:pt-0">
                    {section.value}
                  </h2>
                );
              case 'quote':
                return (
                  <blockquote key={sIdx} className="bg-stone-50 border-l-4 border-[#4A0A15] p-6 italic font-serif text-lg md:text-xl text-stone-900 shadow-xs my-4 leading-relaxed">
                    "{section.value}"
                    {section.subValue && (
                      <span className="block text-xs font-sans font-bold uppercase tracking-wider text-stone-400 mt-2 not-italic">— {section.subValue}</span>
                    )}
                  </blockquote>
                );
              case 'sub-image':
                return (
                  <div key={sIdx} className="w-full h-64 md:h-80 relative overflow-hidden bg-stone-100 rounded-xl my-6 shadow-xs">
                    <img src={section.value} alt={section.subValue || "Editorial sub section view"} className="w-full h-full object-cover center" />
                  </div>
                );
              default:
                return (
                  <p key={sIdx} className="text-stone-600 font-normal leading-relaxed">
                    {section.value}
                  </p>
                );
            }
          })}
        </div>

        {/* RIGHT COLUMN ASPECT: Sticky Author Panel Sheet & Share Toolkit (4/12 Width) */}
        <div className="lg:col-span-4 flex flex-col space-y-8 lg:sticky lg:top-24 w-full">
          
          {/* Author Badge Block */}
          <div className="w-full bg-white border border-gray-100 p-6 shadow-sm flex flex-col items-center text-center rounded-2xl">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-stone-100 border border-gray-100 mb-3 relative">
              <img src={article.authorAvatar} alt={article.authorName} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-sm font-bold text-stone-900 tracking-wide mb-0.5">{article.authorName}</h4>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{article.authorRole}</span>
          </div>

          {/* Social Share Anchor Utility Box */}
          <div className="w-full bg-white border border-gray-100 p-5 shadow-sm flex flex-col items-start rounded-2xl">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3.5 block pl-1">Share this Article</span>
            <div className="flex items-center space-x-2.5 w-full">
              <button className="flex-1 h-10 border border-gray-200 hover:border-[#1DA1F2] hover:text-[#1DA1F2] flex items-center justify-center transition-colors gap-2 text-xs font-bold rounded-xl cursor-pointer">
                <LuTwitter className="w-4 h-4" /> Twitter
              </button>
              <button className="flex-1 h-10 border border-gray-200 hover:border-[#1877F2] hover:text-[#1877F2] flex items-center justify-center transition-colors gap-2 text-xs font-bold rounded-xl cursor-pointer">
                <LuFacebook className="w-4 h-4" /> Facebook
              </button>
            </div>
          </div>

        </div>

      </div>

    </article>
  );
};
