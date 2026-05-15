"use client";

import React from 'react';
import Link from 'next/link';
import { BrandGroup } from '../app/types/brands'; 

const BrandLogoRenderer: React.FC<{ type: string; name: string }> = ({ type, name }) => {
  switch (type) {
    case 'vitas':
      return (
        <div className="flex flex-col items-center justify-center font-serif tracking-[0.2em] text-stone-400 lowercase select-none">
          <span className="text-[17px] font-light">VITAS RIO</span>
          <span className="text-[6px] tracking-[0.1em] text-stone-400/60 uppercase -mt-0.5">apartments & suites</span>
        </div>
      );
    case 'caferio':
      return (
        <span className="font-sans text-xl font-medium tracking-tight text-stone-900 select-none">
          Cafe Rio
        </span>
      );
    case 'azusa':
      return (
        <span className="text-2xl tracking-tight text-[#D4AF37] font-serif font-normal lowercase select-none">
          azüsa
        </span>
      );
    case 'sonder':
      return (
        <div className="flex items-center space-x-1.5 font-sans text-stone-400 select-none">
          <div className="w-4 h-5 bg-[#D4AF37]/80 rounded-sm flex items-center justify-center text-[10px] text-white font-serif font-bold">S</div>
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">Sonder</span>
            <span className="text-[5px] uppercase tracking-widest text-stone-400/60 -mt-0.5">living</span>
          </div>
        </div>
      );
    case 'marriott':
      return (
        <div className="flex flex-col items-center justify-center font-sans tracking-wider text-[#B00020] uppercase select-none">
          <span className="text-sm font-black italic tracking-widest">Marriott</span>
          <span className="text-[6px] font-bold text-stone-500 tracking-[0.2em] -mt-0.5">hotels & resorts</span>
        </div>
      );
    case 'lamall':
      return (
        <div className="bg-[#B00020] text-white px-4 py-1.5 text-[9px] font-extrabold tracking-widest uppercase font-sans select-none rounded-xs shadow-xs">
          Los Angeles Mall
        </div>
      );
    default:
      return <span className="font-bold text-xs text-stone-400">{name}</span>;
  }
};

export const BrandShowcase: React.FC = () => {
  const brandData: BrandGroup[] = [
    {
      heading: "Our brands",
      brands: [
        { id: "b1", name: "Vitas Rio", logoType: "vitas", href: "/brands/vitas-rio" },
        { id: "b2", name: "Cafe Rio", logoType: "caferio", href: "/brands/cafe-rio" },
        { id: "b3", name: "Azusa", logoType: "azusa", href: "/brands/azusa" }
      ]
    },
    {
      heading: "Our affiliated brands",
      brands: [
        { id: "b4", name: "Sonder", logoType: "sonder", href: "/brands/sonder" },
        { id: "b5", name: "Marriott", logoType: "marriott", href: "/brands/marriott" },
        { id: "b6", name: "Los Angeles Mall", logoType: "lamall", href: "/brands/los-angeles-mall" }
      ]
    }
  ];

  return (
    /* 
      RESTRUCTURED BLOCK SHEET
      The parent outer section shell layout wrapper padding values have been dropped 
      and background parameters synchronized into a standalone stacked layout panel element.
    */
    <div className="w-full bg-[#F4F4F6] rounded-[40px] md:rounded-[60px] p-8 md:p-14 flex flex-col space-y-12 border border-gray-200/50">
      
      {brandData.map((group, gIdx) => (
        <div key={gIdx} className="w-full flex flex-col items-center text-center">
          
          {/* Elegant Branding Subtitle Heading */}
          <h3 className="text-sm md:text-base font-extrabold text-[#3B0E17] uppercase tracking-widest mb-6">
            {group.heading}
          </h3>

          {/* Premium Flex Grid Row Showcase */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {group.brands.map((brand) => (
              <Link
                key={brand.id}
                href={brand.href}
                className="w-full h-24 bg-white border border-stone-200/40 rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_32px_rgba(59,14,23,0.08)] hover:border-[#3B0E17]/15 transition-all duration-300 transform lg:hover:-translate-y-1.5 active:translate-y-0 group relative overflow-hidden"
              >
                {/* Subtle Inner Glow Sheet Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-stone-50/0 to-stone-50/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Dynamic Scalable Vector Logo Asset Output */}
                <div className="transform transition-transform duration-300 group-hover:scale-[1.03]">
                  <BrandLogoRenderer type={brand.logoType} name={brand.name} />
                </div>
              </Link>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
};
