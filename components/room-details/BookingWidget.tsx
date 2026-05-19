"use client";

import React, { useState } from 'react';
import { LuCalendar, LuMinus, LuPlus } from 'react-icons/lu';

interface BookingWidgetProps {
  pricePerNight: number;
  currency: string;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ pricePerNight, currency }) => {
  const [nights, setNights] = useState<number>(2);
  const [checkInDate, setCheckInDate] = useState<string>("2026-06-20");

  const incrementNights = () => setNights(prev => prev + 1);
  const decrementNights = () => setNights(prev => (prev > 1 ? prev - 1 : 1));

  // Compute live price fields matching structural reference parameters
  const baseCost = pricePerNight * nights;
  const currencySymbol = currency === "NGN" ? "₦" : "$";

  // Compute checkout checkout date window formatting string
  const getCheckoutDateString = () => {
    const dateObj = new Date(checkInDate);
    dateObj.setDate(dateObj.getDate() + nights);
    return dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  };

  const getCheckInDateFormatted = () => {
    return new Date(checkInDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="w-full bg-white border border-gray-200/80 p-8 shadow-xl flex flex-col relative z-20 font-sans">
      
      {/* Rate Matrix Heading Title Block */}
      <div className="flex flex-col mb-6">
        <span className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest block mb-1">
          Start Booking
        </span>
        <div className="flex items-baseline space-x-1">
          <span className="text-3xl font-black text-[#4A0A15] font-serif">
            {currencySymbol}{pricePerNight.toLocaleString()}
          </span>
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">per night</span>
        </div>
      </div>

      {/* Selector Set 1: Nights Counter Bar */}
      <div className="flex flex-col mb-5 w-full">
        <label className="text-xs font-bold text-stone-700 uppercase tracking-wide mb-2.5">
          How long will you stay?
        </label>
        <div className="w-full h-11 border border-gray-200 bg-gray-50/50 flex items-center justify-between px-2 shadow-xs">
          <button 
            onClick={decrementNights}
            className="w-8 h-8 bg-white border border-gray-200 text-stone-800 flex items-center justify-center font-bold hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Decrease stay duration"
          >
            <LuMinus className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-extrabold text-stone-900 tracking-wide select-none">
            {nights} {nights === 1 ? 'night' : 'nights'}
          </span>
          <button 
            onClick={incrementNights}
            className="w-8 h-8 bg-white border border-gray-200 text-stone-800 flex items-center justify-center font-bold hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Increase stay duration"
          >
            <LuPlus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Selector Set 2: Date Selector Fields Grid */}
      <div className="flex flex-col mb-6 w-full">
        <label className="text-xs font-bold text-stone-700 uppercase tracking-wide mb-2.5">
          Pick a Date
        </label>
        <div className="w-full relative h-11 border border-gray-200 bg-gray-50/50 flex items-center px-4 shadow-xs">
          <LuCalendar className="w-4 h-4 text-[#4A0A15] mr-3 flex-shrink-0" />
          <span className="text-xs font-bold text-stone-800 tracking-wide">
            {getCheckInDateFormatted()} – {getCheckoutDateString()}
          </span>
          <input 
            type="date" 
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-20"
          />
        </div>
      </div>

      {/* Statement Calculation Summary Paragraph */}
      <p className="text-xs md:text-[13px] font-medium text-gray-400 tracking-wide mb-8 leading-relaxed text-center">
        You will pay <span className="text-[#4A0A15] font-black">{currencySymbol}{baseCost.toLocaleString()} {currency}</span> for <span className="text-stone-900 font-bold">{nights} {nights === 1 ? 'night' : 'nights'}</span>.
      </p>

      {/* Transaction Action Call-To-Action Button */}
      <button className="w-full bg-[#4A0A15] hover:bg-[#36070E] text-white font-extrabold text-xs tracking-widest uppercase py-4 shadow-md transition-colors focus:outline-none transform active:scale-98">
        Continue to Book
      </button>

    </div>
  );
};
