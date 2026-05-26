"use client";

import { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

export interface AmenityItem {
    icon: IconType;
    label: string;
}

export interface RoomData {
    title: string;
    description?: string;
    images: string[];
    specs: string[];
    amenities: AmenityItem[];
}

interface RoomCardProps {
    room: RoomData;
    onReadMore?: () => void;
}

export default function RoomCard({ room, onReadMore }: RoomCardProps) {
    const [currentIdx, setCurrentIdx] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // Auto-slide effect that pauses when the user hovers over the card
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setCurrentIdx((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIdx, room.images.length, isHovered]);

    return (
        <div
            className="bg-white rounded-lg overflow-hidden border border-gray-200/60 shadow-sm flex flex-col justify-between group/card transition-all duration-300 hover:shadow-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>
                {/* Interactive Image Frame */}
                <div className="relative h-[220px] w-full bg-gray-100 overflow-hidden group/image cursor-pointer">
                    {room.images.map((imgSrc, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                index === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                        >
                            <Image
                                src={imgSrc}
                                alt={`${room.title} - View ${index + 1}`}
                                fill
                                className="object-cover scale-110 group-hover/image:scale-100 transition-transform duration-500 ease-out"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                    ))}

                    {/* Dynamic Interactive Dot Indicators */}
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1.5 z-20">
                        {room.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                    e.stopPropagation();
                                    setCurrentIdx(index);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                    index === currentIdx ? "bg-white w-3" : "bg-white/50"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Info Block */}
                <div className="p-5 lg:p-6 pb-2">
                    <h3 className="text-xl lg:text-[22px] font-bold text-[#2d3748] tracking-tight leading-snug min-h-[64px] line-clamp-2 mb-4">
                        {room.title}
                    </h3>

                    {/* Specification Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {room.specs.map((spec, sIdx) => (
                            <span
                                key={sIdx}
                                className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded border border-gray-200/40 font-semibold"
                            >
                                {spec}
                            </span>
                        ))}
                    </div>

                    {/* Amenities Row */}
                    <div className="mb-4">
                        <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-2">
                            Main amenities
                        </span>
                        <div className="flex flex-wrap gap-4 text-gray-500 min-h-[32px] items-center">
                            {room.amenities.map((item, iIdx) => {
                                const AmenityIcon = item.icon;
                                return (
                                    <div
                                        key={iIdx}
                                        title={item.label}
                                        className="hover:text-[#4A0A15] transition-colors cursor-help flex items-center justify-center"
                                    >
                                        <AmenityIcon className="w-5 h-5 stroke-[1.8]" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Card CTA Footer */}
            <div className="px-5 lg:p-6 pt-0 mt-auto">
                <button
                    onClick={onReadMore}
                    className="inline-flex items-center text-xs font-bold tracking-widest text-[#8b1e2f] uppercase hover:text-[#4a0a0c] transition-colors mb-5 group/link bg-transparent border-none p-0 cursor-pointer"
                >
                    Read More
                    <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform inline-block">➔</span>
                </button>

                <button 
                onClick={onReadMore}
                className="w-full bg-[#4A0A15] hover:bg-[#36070E] text-white py-3.5 px-4 rounded-full font-bold uppercase text-xs tracking-widest transition-colors duration-200 shadow-sm hover:shadow-md">
                    Book Now
                </button>
            </div>
        </div>
    );
}
