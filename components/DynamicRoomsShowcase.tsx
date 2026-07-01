"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import { RoomSuite } from "@/app/types/rooms";

interface DynamicRoomsShowcaseProps {
  rooms: RoomSuite[];
}

export default function DynamicRoomsShowcase({
  rooms = [],
}: DynamicRoomsShowcaseProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const router = useRouter(); 
  // Fallbacks if data array structure is empty
  const activeRoom = rooms[activeIdx];
  const activeTitle = activeRoom?.title || "Azusa Premier Royal Suite";

  // Safe extraction of the image array positions
  const gallery = activeRoom?.images || [];
  const img1 = gallery[0] || activeRoom?.image || "/img/A16.webp";
  const img2 = gallery[1] || "/img/A8.webp";
  const img3 = gallery[2] || "/img/A7.webp";

  const activeDesc =
    activeRoom?.description ||
    "Our luxury suites are in a completely different league: spacious, private, and set up with everything a busy executive or private traveller needs.";

  // Format price from number to local string representation
  const formattedPrice = activeRoom?.pricePerNight
    ? `${activeRoom.currency === "USD" ? "$" : "₦"}${Number(activeRoom.pricePerNight).toLocaleString()}`
    : "₦180,000";

  const handleBookingClick = () => {
    window.open(
      "https://www.weareanli.com/azusa-hotel-apartments/26/booking",
      "_blank",
      "noopener,noreferrer",
    );
  };

  if (rooms.length === 0) return null;

  return (
    <div className="w-full flex flex-col">
      {/* Title Section */}
      <section className="bg-[#f4f5f7] py-6 sm:py-6 lg:py-8 w-full border-b border-gray-200/50">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2d3748] tracking-tight transition-all duration-300">
            {activeTitle}
          </h1>
        </div>
      </section>

      {/* Hero Showcase Split Content Section */}
      <section className="w-full flex flex-col lg:grid lg:grid-cols-5 bg-white border-b border-gray-100">
        {/* Left Aspect Matrix: 3-Image Interactive Grid Box Mosaic */}
        <div className="w-full lg:col-span-3 grid grid-cols-2 grid-rows-2 gap-1 h-[400px] md:h-[500px] lg:h-[600px] bg-stone-100">
          <div className="relative row-span-2 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer isolate">
            <Image
              src={img1}
              alt={`${activeTitle} Main`}
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              unoptimized
            />
          </div>
          <div className="relative row-span-1 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer isolate">
            <Image
              src={img2}
              alt="Suite Bed View Side"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 50vw, 20vw"
              unoptimized
            />
          </div>
          <div className="relative row-span-1 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer isolate">
            <Image
              src={img3}
              alt="Suite Bed View Front"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 50vw, 20vw"
              unoptimized
            />
          </div>
        </div>

        {/* Right Info Section Block Panel */}
        <div className="w-full lg:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-between items-start bg-[#FCFBF9] min-h-[500px] lg:min-h-auto">
          <div className="w-full flex flex-col items-start text-left">
            <span className="text-[10px] font-extrabold text-[#4A0A15] tracking-[0.25em] uppercase block mb-3">
              Elite Sanctuary Living
            </span>
            <h2 className="text-2xl md:text-3xl font-normal text-stone-900 font-serif tracking-tight leading-tight mb-4 transition-all duration-300">
              Richness That Actually Lives Up to the Name
            </h2>
            <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-6 max-w-xl transition-all duration-300">
              {activeDesc}
            </p>
            <div className="w-full h-[1px] bg-gray-200 mb-6" />
          </div>

          {/* Right Dynamic Selection Tab Triggers */}
          <div className="w-full flex flex-col items-start mb-8">
            <span className="text-[15px] text-[#4a0a15] font-extrabold uppercase tracking-widest block mb-3">
              Select Accommodation Tier
            </span>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-col lg:space-y-2 gap-2 lg:gap-0">
              {rooms.map((room, idx) => {
                const isSelected = idx === activeIdx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left px-4 py-3 border text-xs font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none lg:border-l-4 rounded-none cursor-pointer ${
                      isSelected
                        ? "bg-[#4A0A15] text-white border-[#4A0A15] lg:border-l-[#cba865] shadow-md transform scale-[1.02] lg:translate-x-1"
                        : "bg-white text-gray-600 border-gray-200 hover:border-stone-400 hover:text-stone-900 hover:bg-gray-50/50"
                    }`}
                  >
                    {room.title || `Room Tier ${idx + 1}`}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-gray-200/60 mt-auto">
            {/* Price block metrics */}
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">
                Pricing Structure
              </span>
              <div className="flex items-baseline space-x-1.5 transition-all duration-300">
                <span className="text-2xl font-black text-[#4A0A15]">
                  {formattedPrice}
                </span>
                <span className="text-xs text-gray-400 font-bold">
                  / night starting rate
                </span>
              </div>
            </div>

            {/* Action booking button container element */}
            <button
              onClick={handleBookingClick}
              className="bg-[#4A0A15] hover:bg-[#32060d] text-white font-bold text-[11px] uppercase tracking-widest px-8 py-3.5 shadow-md hover:shadow-xl transition-all rounded-full transform active:scale-95 cursor-pointer shrink-0 text-center"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
