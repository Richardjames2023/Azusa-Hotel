"use client";

import React from 'react';
import Link from 'next/link';

export const RegistrationThankYou: React.FC = () => {
  return (
    <section className="w-full bg-[#FCFBF9] min-h-screen font-sans flex flex-col items-center justify-center py-12 px-4 md:px-8 select-none">
      
      {/* CENTRAL CARD CONTENT MATRIX CONTAINER */}
      <div className="w-full max-w-2xl bg-white border border-gray-100 p-8 md:p-12 shadow-xl rounded-none relative overflow-hidden text-center flex flex-col items-center">
        
        {/* SUCCESS GOLD RING VECTOR ICON ACCENT */}
        <div className="w-16 h-16 bg-amber-50 text-[#D4AF37] flex items-center justify-center rounded-full mb-6 animate-scale-in border border-amber-100">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>

        {/* EDITORIAL TEXT LABELS STACK */}
        <span className="text-[10px] font-black text-[#4A0A15] uppercase tracking-[0.25em] block mb-3">
          Account Verified
        </span>
        <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-stone-900 font-serif leading-tight mb-4 max-w-md">
          Welcome to the Azusa Elite Circle
        </h1>
        <p className="text-stone-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide max-w-md mb-8">
          Thank you for joining our signature hospitality network. A secure welcome pass containing your member tier credentials and initial reward points matrix has been dispatched to your email inbox.
        </p>

        {/* ACCOUNT STATUS PREVIEW SHEET CARD */}
        <div className="w-full bg-stone-50 border border-stone-200/60 p-5 rounded-none text-left flex flex-col space-y-2 mb-8 max-w-md">
          <div className="flex justify-between items-center text-xs font-bold border-b border-stone-100 pb-2">
            <span className="text-stone-400 uppercase tracking-wider">Membership Tier</span>
            <span className="text-[#4A0A15] tracking-wide uppercase font-black">Azusa Classic Elite</span>
          </div>
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-stone-400 uppercase tracking-wider">Status Reward Bonus</span>
            <span className="text-stone-900 font-serif font-black">+500 Points Mapped</span>
          </div>
        </div>

        {/* ACTION BUTTON GRID ROW CONTROL TIMELINES */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md">
          <Link 
            href="/"
            className="inline-flex items-center justify-center border border-gray-300 text-stone-700 font-bold text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-gray-50 transition-colors transform active:scale-95 duration-200 gap-2 w-full sm:w-auto rounded-none"
          >
            Explore Hotel
          </Link>
          <Link 
            href="/signin"
            className="inline-flex items-center justify-center bg-[#4A0A15] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#36070E] transition-all transform active:scale-95 shadow-md gap-2 w-full sm:w-auto rounded-none"
          >
            Access Guest Portal
          </Link>
        </div>

      </div>
    </section>
  );
};
