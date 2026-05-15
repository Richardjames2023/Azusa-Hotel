"use client";

import React, { useState } from 'react';

export const MeetingBookingWidget: React.FC = () => {
  const [spaceType, setSpaceType] = useState<'room' | 'beds' | 'both'>('room');
  const [destination, setDestination] = useState('');
  const [attendees, setAttendees] = useState('10');

  return (
    <div className="w-full bg-[#FCFBF9] border-b border-gray-200 py-4 px-6 shadow-sm font-sans">
      <div className="max-w-[1440px] mx-auto flex flex-col space-y-4">
        
        {/* Toggle Selector Tabs */}
        <div className="flex items-center space-x-6 text-xs font-bold uppercase tracking-wider border-b border-gray-100 pb-2">
          <button 
            onClick={() => setSpaceType('room')}
            className={`pb-2 border-b-2 transition-colors ${spaceType === 'room' ? 'border-[#4A0A15] text-stone-900' : 'border-transparent text-gray-400'}`}
          >
            Meeting Room
          </button>
          <button 
            onClick={() => setSpaceType('beds')}
            className={`pb-2 border-b-2 transition-colors ${spaceType === 'beds' ? 'border-[#4A0A15] text-stone-900' : 'border-transparent text-gray-400'}`}
          >
            Bedrooms
          </button>
          <button 
            onClick={() => setSpaceType('both')}
            className={`pb-2 border-b-2 transition-colors ${spaceType === 'both' ? 'border-[#4A0A15] text-stone-900' : 'border-transparent text-gray-400'}`}
          >
            Meeting room + Bedrooms
          </button>
        </div>

        {/* Input Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-white p-1.5 rounded-xl border border-gray-200/60 shadow-inner items-center">
          
          {/* Target Destination Vector */}
          <div className="md:col-span-5 flex items-center px-4 py-1 relative">
            <span className="text-gray-400 text-sm mr-3">📍</span>
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-tight">Select a destination</span>
              <input 
                type="text"
                placeholder="Search for place or hotel"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-[13px] text-stone-900 placeholder-gray-400 font-bold focus:outline-none mt-0.5"
              />
            </div>
          </div>

          {/* Event Timeline Windows */}
          <div className="md:col-span-4 flex items-center px-4 py-1 border-t md:border-t-0 md:border-l border-gray-100 cursor-pointer">
            <span className="text-gray-400 text-sm mr-3">📅</span>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-tight">Event start date - Event end date</span>
              <span className="text-[13px] text-stone-900 font-bold mt-0.5 whitespace-nowrap">Wed, 15 Apr, 08:00 - Wed, 15 Apr, 18:00</span>
            </div>
          </div>

          {/* Attendees Selector Input */}
          <div className="md:col-span-2 flex items-center px-4 py-1 border-t md:border-t-0 md:border-l border-gray-100">
            <span className="text-gray-400 text-sm mr-3">👥</span>
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-tight">Attendees</span>
              <input 
                type="number"
                value={attendees}
                onChange={(e) => setAttendees(e.target.value)}
                className="w-full bg-transparent text-[13px] text-stone-900 font-bold focus:outline-none mt-0.5"
              />
            </div>
          </div>

          {/* Execution Button */}
          <div className="md:col-span-1 p-0.5">
            <button className="w-full bg-[#4A0A15] hover:bg-[#36070E] text-white py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-colors shadow-md">
              Search
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
