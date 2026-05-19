"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LuX, LuChevronLeft, LuChevronRight, LuSparkles } from "react-icons/lu";
import { RoomSuite } from "../app/types/rooms";
import { RoomData } from "./RoomCard";

// IMPORT THE PRODUCTION GRADE SECURE BOOKING FORM
import { BookingFormModal } from "./booking/BookingFormModal";

interface RoomDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    room: RoomSuite | RoomData | null; // Accepts either structural format safely
}

export default function RoomDetailModal({ isOpen, onClose, room }: RoomDetailModalProps) {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    
    // CONTROL STATE FOR THE OVERLAY SECURE FORM
    const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            setCurrentImgIdx(0);
            setIsCheckoutOpen(false); // Reset checkout state when main modal opens
        }
    }, [isOpen, room]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (isCheckoutOpen) {
                    setIsCheckoutOpen(false);
                } else {
                    onClose();
                }
            }
        };
        if (isOpen) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, isCheckoutOpen, onClose]);

    useEffect(() => {
        // Manage background scrolling behavior when either modal layer is active
        if (isOpen || isCheckoutOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen, isCheckoutOpen]);

    if (!isOpen || !room) return null;

    // SAFE ARRAY MAPPING CONFIGURATION BIND
    const roomImages = room.images || [];

    const nextImg = () => {
        setCurrentImgIdx((prev) => (prev === roomImages.length - 1 ? 0 : prev + 1));
    };

    const prevImg = () => {
        setCurrentImgIdx((prev) => (prev === 0 ? roomImages.length - 1 : prev - 1));
    };

    // Smart detector verifying if the features array uses string tags or native icon objects
    const amenitiesList = 'features' in room ? room.features : room.amenities;

    // Safely extract pricing variables from the union types with smart default fallbacks
    const dynamicPrice = 'pricePerNight' in room ? room.pricePerNight : 180000;
    const dynamicCurrency = 'currency' in room ? room.currency : 'NGN';

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-xl shadow-2xl w-full max-w-5xl p-6 md:p-8 flex flex-col relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Left Block */}
            <div className="relative w-full aspect-[4/3] md:h-[420px] md:col-span-7 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              {roomImages.length > 0 && (
                <Image
                  src={roomImages[currentImgIdx]}
                  alt={`${room.title} presentation`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              )}
            </div>

            {/* Right Block */}
            <div className="flex flex-col h-full relative md:col-span-5">
              <div className="flex justify-between items-start mb-4 pr-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-950 tracking-tight leading-tight">
                  {room.title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-900 hover:text-gray-500 transition-colors p-1"
                >
                  <LuX className="w-6 h-6 stroke-[2.5]" />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[280px] md:max-h-[350px] pr-2 custom-scrollbar flex flex-col gap-5">
                {room.specs && room.specs.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {room.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full border border-gray-200/60 font-medium"
                      >
                        {typeof spec === "string" ? spec : (spec as any).label}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {room.description ||
                    "Indulge in tailored therapeutic comfort and sophisticated layout designs, perfectly structured for relaxation."}
                </p>

                {/* Main Amenities List Mapping Block */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-5 tracking-wide">
                    Main amenities
                  </h3>
                  <div className="grid grid-cols-3 gap-y-6 gap-x-4">
                    {amenitiesList &&
                      amenitiesList.map((item: any, idx: number) => {
                        const AmenityIcon =
                          typeof item.icon === "string"
                            ? LuSparkles
                            : item.icon;
                        return (
                          <div
                            key={idx}
                            className="flex flex-col items-center text-center gap-2.5 group"
                          >
                            <div className="text-gray-800 transition-colors">
                              <AmenityIcon className="w-6 h-6 stroke-[1.6]" />
                            </div>
                            <span className="text-[11px] font-medium text-gray-600 leading-snug max-w-[95px]">
                              {item.label}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-200/80 my-5 md:my-6" />

          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="flex items-center justify-center gap-4 md:col-span-7">
              <button
                onClick={prevImg}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <LuChevronLeft className="w-5 h-5 stroke-" />
              </button>
              <span className="text-sm font-medium text-gray-800 select-none tracking-wide">
                {currentImgIdx + 1}/{roomImages.length}
              </span>
              <button
                onClick={nextImg}
                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <LuChevronRight className="w-5 h-5 stroke-" />
              </button>
            </div>

            <div className="md:col-span-5">
              {/* WIRED: Clicking this opens the production grade checkout form modal directly */}
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full bg-[#4A0A15] hover:bg-[#36070E] text-white py-3 px-8 rounded-full font-bold text-sm uppercase tracking-widest transition-colors shadow-sm duration-200 cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 
        NESTED PRODUCTION-GRADE SECURE CHECKOUT LAYER FORM MODAL 
        Invokes dynamically over the presentation layout view cleanly
      */}
      <BookingFormModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        roomTitle={room.title}
        pricePerNight={dynamicPrice}
        currency={dynamicCurrency}
      />
    </>
  );
}
