"use client";

import React from 'react';
import Link from 'next/link';
import { ConfirmedBookingDetails } from '../../app/types/thank-you';

interface ThankYouViewProps {
  details: ConfirmedBookingDetails;
}

export const ThankYouView: React.FC<ThankYouViewProps> = ({ details }) => {
  
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <section className="w-full bg-[#FCFBF9] min-h-screen font-sans flex flex-col items-center py-12 px-4 md:px-8 select-none print:bg-white print:py-0">
      
      {/* CENTRALIZED CARD MATRIX WRAPPER */}
      <div className="w-full max-w-4xl bg-white border border-gray-100 p-6 md:p-12 shadow-xl rounded-none relative overflow-hidden print:border-0 print:shadow-none">
        
        {/* SUCCESS ICON HEADER BLOCK */}
        <div className="flex flex-col items-center text-center mb-10 pb-8 border-b border-gray-100">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 flex items-center justify-center rounded-full mb-4 animate-scale-in">
            {/* Native SVG Check Icon */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[11px] font-extrabold text-[#4A0A15] uppercase tracking-[0.25em] block mb-2">
            Reservation Confirmed
          </span>
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-stone-900 font-serif leading-tight max-w-xl">
            Thank you for choosing Azusa
          </h1>
          <p className="text-gray-500 text-xs md:text-sm font-medium mt-2 max-w-md">
            A confirmation email containing your secure digital check-in passes has been delivered to your inbox.
          </p>
        </div>

        {/* DETAILS GRID LAYOUT PARTITION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Left Column: Transaction Details Column */}
          <div className="md:col-span-7 flex flex-col space-y-5">
            <h3 className="text-xs font-black uppercase text-[#4A0A15] tracking-widest border-b border-gray-100 pb-2">
              Booking Overview
            </h3>

            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Guest Name</span>
                <span className="text-xs font-bold text-stone-900">{details.guestName}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Accommodation</span>
                <span className="text-xs font-bold text-stone-900">{details.roomType}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Booking Reference</span>
                <span className="text-xs font-mono font-bold text-[#4A0A15] uppercase tracking-wide flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  {details.bookingReference}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Total Settlement</span>
                <span className="text-xs font-black text-stone-900 font-serif">
                  {details.currency === 'NGN' ? '₦' : '$'}{parseInt(details.totalPaid).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Micro-Alert Address Banner */}
            <div className="bg-stone-50 border border-stone-200/60 p-4 flex items-start space-x-3 rounded-none">
              <svg className="w-4 h-4 text-[#4A0A15] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-stone-800 leading-tight">Property Location Address</span>
                <span className="text-[11px] text-gray-500 font-medium mt-0.5 leading-relaxed">
                  Azusa Hotels & Apartments, Central Business District, Abuja, Nigeria.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Check-in / Check-out Timeline Card */}
          <div className="md:col-span-5 bg-[#FCFBF9] border border-gray-100 p-6 flex flex-col space-y-6 shadow-inner print:bg-white">
            <h3 className="text-xs font-black uppercase text-stone-800 tracking-widest border-b border-gray-200/50 pb-2 flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Timeline
            </h3>

            <div className="flex justify-between items-center w-full relative pl-4 border-l border-dashed border-gray-300">
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-widest">Check-In</span>
                <span className="text-sm font-black font-serif text-stone-900 mt-0.5">{details.checkIn}</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">From 2:00 PM</span>
              </div>
              <div className="absolute -left-[4.5px] top-1 w-2 h-2 bg-[#4A0A15] rounded-full" />
            </div>

            <div className="flex justify-between items-center w-full relative pl-4 border-l border-transparent">
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-widest">Check-Out</span>
                <span className="text-sm font-black font-serif text-stone-900 mt-0.5">{details.checkOut}</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Before 11:00 AM</span>
              </div>
              <div className="absolute -left-[4.5px] top-1 w-2 h-2 bg-gray-400 rounded-full" />
            </div>
          </div>

        </div>

        {/* ACTION BUTTON ROW */}
        <div className="w-full pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <button 
            onClick={handlePrint}
            className="inline-flex items-center justify-center border border-gray-300 text-stone-700 font-bold text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-gray-50 transition-colors transform active:scale-95 duration-200 gap-2 w-full sm:w-auto rounded-none cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Receipt
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link 
              href="/destinations"
              className="inline-flex items-center justify-center border border border-[#3B0E17] text-[#3B0E17] font-bold text-xs uppercase tracking-widest px-6 py-3.5 hover:bg-stone-50 transition-colors transform active:scale-95 duration-200 gap-2 w-full sm:w-auto rounded-none"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m-8-4V12l8 4m0-11v4.5" />
              </svg>
              Explore Abuja
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center justify-center bg-[#4A0A15] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-[#36070E] transition-all transform active:scale-95 shadow-md gap-2 w-full sm:w-auto rounded-none"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return Home
            </Link>
          </div>
        </div>

        {/* CUSTOMER CARE FOOTER LINKS */}
        <div className="mt-12 text-center text-[11px] text-gray-400 font-medium tracking-wide leading-relaxed print:hidden">
          Need immediate concierge assistance? Contact our 24/7 client lines at{" "}
          <span className="text-[#4A0A15] font-bold underline inline-flex items-center gap-1 cursor-pointer">
            +234 916 068 3225
          </span>{" "}
          or email us at info@azusahotels.com.
        </div>

      </div>

    </section>
  );
};
