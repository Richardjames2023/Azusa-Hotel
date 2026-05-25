"use client";

import React from 'react';
import { DiningImageGridItem } from '../../app/types/dining';
import { LuInstagram, LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export const DiningGalleryMap: React.FC = () => {
  const horizontalGallery: DiningImageGridItem[] = [
    { id: "g1", image: "/images/hero-bg.jpg", altText: "Vitas Rio Fine Dining Table Arrangement" },
    { id: "g2", image: "/images/suite_main.png", altText: "Luxury Restaurant Seating Architecture Layout" },
    { id: "g3", image: "/images/azusa2.jpg", altText: "Premium Drinks Lounge Bar Coordinates" }
  ];

  return (
    <section className="w-full bg-[#FCFBF9] pt-14 flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center relative">
        
        {/* 1. Horizontal Image Carousel Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6 md:px-12 lg:px-16 w-full mb-12">
          {horizontalGallery.map((tile) => (
            <div key={tile.id} className="w-full h-64 relative overflow-hidden bg-stone-200 group shadow-sm border border-gray-200/30 rounded-2xl isolate cursor-pointer">
              <img 
                src={tile.image} 
                alt={tile.altText} 
                className="w-full h-full object-cover object-center transform-gpu scale-100 group-hover:scale-105 transition-all duration-[1000ms] ease-in-out filter brightness-95 group-hover:brightness-90"
              />
            </div>
          ))}
        </div>

        {/* Manual Arrow Indicators Pagination Overlay */}
        <div className="w-full px-6 md:px-12 lg:px-16 flex justify-end items-center gap-3 mb-14">
          <button className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-stone-700 bg-white hover:bg-stone-50 transition-colors cursor-pointer"><LuChevronLeft className="w-4 h-4" /></button>
          <button className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-stone-700 bg-white hover:bg-stone-50 transition-colors cursor-pointer"><LuChevronRight className="w-4 h-4" /></button>
        </div>

        {/* 2. Follow Us Social Ribbon Banner */}
        <div className="w-full px-6 md:px-12 lg:px-16 mb-14">
          <div className="w-full bg-[#4A0A15] p-5 text-[#F5E6C8] flex items-center justify-between shadow-md rounded-xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] block pl-2">Follow us on:</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center rounded-xl transition-all mr-2">
              <LuInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3. Static Contact Information Block Title Panel Section */}
        <div className="w-full px-6 md:px-12 lg:px-16 mb-10">
          <div className="w-full bg-[#DCB286]/40 border border-[#DCB286]/30 px-8 py-6 flex flex-col items-start rounded-xl text-left">
            <h4 className="text-lg font-bold font-serif text-stone-900 tracking-wide mb-1 select-none">Contact Information</h4>
            <p className="text-xs font-medium text-stone-500 tracking-wide">For private group dining enquiries or luxury lounge events table reservations.</p>
          </div>
        </div>

        {/* 4. Full Width Interactive Property Location Map Plate */}
        <div className="w-full h-[400px] relative border-t border-gray-200 bg-stone-100 overflow-hidden shadow-inner flex">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.728838380924!2d7.4525644!3d9.088448399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b004f5aaa51%3A0x7aaaf10acd2abb44!2sLos%20Angeles%20Event%20Center%20%26%20Mall!5e0!3m2!1sen!2sng!4v1779718196552!5m2!1sen!2sng"
                className="w-full h-full border-0 filter brightness-[0.98] contrast-[1.02]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Azusa Hotel & Restaurant Location Map - Kado, Abuja"
            />
        </div>

      </div>
    </section>
  );
};
