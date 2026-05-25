"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  LuX,
  LuChevronLeft,
  LuChevronRight,
  LuMaximize2,
  LuLayoutGrid,
  LuImage,
  LuCompass,
  LuCoffee,
  LuUtensils
} from "react-icons/lu";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
}

const CATEGORIES = [
  { label: "All", icon: LuLayoutGrid },
  { label: "Rooms & Suites", icon: LuCoffee },
  { label: "Dining & Lounges", icon: LuUtensils },
  { label: "Amenities & Wellness", icon: LuCompass },
  { label: "Exterior & Architecture", icon: LuImage }
];

const GALLERY_ITEMS: GalleryItem[] = [
  // Exterior & Architecture
  {
    id: "ext-1",
    src: "/img/MAP13548(1).webp",
    title: "Main Entrance & Architectural Façade",
    category: "Exterior & Architecture",
    description: "The striking contemporary architectural design of Azusa Hotels, blending modern engineering with welcoming luxury."
  },
  {
    id: "ext-2",
    src: "/img/MAP13581.webp",
    title: "Grand Lobby Reception",
    category: "Exterior & Architecture",
    description: "Our grand reception area features custom book-matched marble, soaring ceilings, and warm bespoke lighting."
  },
  {
    id: "ext-3",
    src: "/img/MAP13600.webp",
    title: "Sophisticated Lobby Lounge",
    category: "Exterior & Architecture",
    description: "An elegantly furnished sanctuary for guests to relax, network, or work while enjoying ambient music and premium refreshments."
  },
  {
    id: "ext-4",
    src: "/img/MAP13626(1).webp",
    title: "Illuminated Facade - Night View",
    category: "Exterior & Architecture",
    description: "The glowing architectural silhouette of Azusa Hotels & Apartments illuminating the Abuja night sky."
  },
  // Rooms & Suites
  {
    id: "room-1",
    src: "/img/A16.webp",
    title: "Azusa Premier Royal Suite",
    category: "Rooms & Suites",
    description: "Our flagship suite offering unparalleled space, a plush king bed, and panoramic views of the city skyline."
  },
  {
    id: "room-2",
    src: "/img/A2.webp",
    title: "Grand Suite Living Space",
    category: "Rooms & Suites",
    description: "A beautifully appointed suite featuring minimalist chic decor and premium custom furnishings by Sonder-Living."
  },
  {
    id: "room-3",
    src: "/img/A7.webp",
    title: "Signature Studio Bedroom",
    category: "Rooms & Suites",
    description: "A refined space designed for comfort and focus, featuring high-end linen and ergonomic workstations."
  },
  {
    id: "room-4",
    src: "/img/A8.webp",
    title: "Deluxe Suite Comfort",
    category: "Rooms & Suites",
    description: "Relaxing neutral tones and soft ambient lighting define the sleeping quarters of our Deluxe Suite."
  },
  {
    id: "room-5",
    src: "/img/A15.webp",
    title: "Standard Skyline Sanctuary",
    category: "Rooms & Suites",
    description: "A modern, spacious room overlooking Abuja's iconic landmarks and serene park spaces."
  },
  // Dining & Lounges
  {
    id: "dining-1",
    src: "/img/A12.webp",
    title: "Azusa Gourmet Restaurant",
    category: "Dining & Lounges",
    description: "Experience a culinary journey featuring a mix of local African flavors and international haute cuisine."
  },
  {
    id: "dining-2",
    src: "/img/A9.webp",
    title: "Fine Dining Table Setting",
    category: "Dining & Lounges",
    description: "Meticulous table arrangements and premium dining setups for our private guests and banquets."
  },
  {
    id: "dining-3",
    src: "/img/A10.webp",
    title: "The Wine Cellar Selection",
    category: "Dining & Lounges",
    description: "A curated collection of fine international and regional wines to pair perfectly with your culinary selection."
  },
  {
    id: "dining-4",
    src: "/img/A11.webp",
    title: "Rooftop Mixology Bar",
    category: "Dining & Lounges",
    description: "Sip custom hand-crafted cocktails while enjoying panoramic views of the city from our sky lounge."
  },
  // Amenities & Wellness
  {
    id: "well-1",
    src: "/img/A13.webp",
    title: "Signature Wellness Spa",
    category: "Amenities & Wellness",
    description: "Rejuvenate your body and mind with our professional organic massage and steam therapy sessions."
  },
  {
    id: "well-2",
    src: "/img/A14.webp",
    title: "State-of-the-Art Fitness Center",
    category: "Amenities & Wellness",
    description: "Keep up with your fitness regime with our modern cardiorespiratory and strength training equipment."
  },
  {
    id: "well-3",
    src: "/images/azusa2.jpg",
    title: "Spa Treatment Room",
    category: "Amenities & Wellness",
    description: "A tranquil sanctuary designed for deep relaxation, aromatherapy, and facial treatments."
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on active category
  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrevImage = useCallback(() => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  }, [filteredItems.length]);

  const handleNextImage = useCallback(() => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  }, [filteredItems.length]);

  // Keyboard navigation event handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleCloseLightbox, handlePrevImage, handleNextImage]);

  // Disable page scrolling when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  return (
    <div className="w-full min-h-screen bg-[#FCFBF9] flex flex-col overflow-x-hidden selection:bg-amber-200">
      <Header />

      <main className="flex-grow flex flex-col">
        {/* HERO TITLE HEADER PANEL */}
        <section className="relative w-full bg-[#1E110E] text-white py-24 sm:py-32 lg:py-40 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden border-b border-amber-950/20 min-h-[40vh]">

          {/* Background Image Setup */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/MAP13548(1).webp"
              alt="Azusa Hotels Architectural Façade"
              fill
              className="object-cover object-center opacity-40"
              priority
            />
          </div>

          {/* Dark gradient overlay for text readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#1E110E]/80 via-[#1E110E]/50 to-[#1E110E]/90 z-0 pointer-events-none" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E110E]/40 via-transparent to-black/20" />

          {/* Ambient radial accent overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,10,21,0.3)_0%,transparent_70%)] pointer-events-none z-0" />

          <div className="max-w-3xl relative z-10">
            <span className="text-[10px] sm:text-xs font-extrabold text-[#D4AF37] uppercase tracking-[0.3em] block mb-4 animate-fade-in drop-shadow-md">
              A Visual Sanctuary
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-normal leading-tight tracking-tight mb-6 drop-shadow-lg">
              Media Gallery
            </h1>
            <div className="w-16 h-0.5 bg-[#D4AF37]/80 mx-auto mb-6 shadow-sm" />
            <p className="text-[#F5E6C8] text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto tracking-wide drop-shadow-md">
              Discover the architectural elegance, luxurious interiors, and serene wellness spaces of Azusa Hotels & Apartments. A curated visual journey into Abuja's elite sanctuary.
            </p>
          </div>
        </section>

        {/* DYNAMIC CATEGORY FILTER SELECTOR */}
        <section className="w-full bg-white border-b border-gray-100 py-5 sticky top-0 z-30 shadow-sm">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide py-1.5 -my-1.5 justify-start lg:justify-center">
              {CATEGORIES.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => {
                      setActiveCategory(cat.label);
                      setLightboxIndex(null);
                    }}
                    className={`flex items-center space-x-2 whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${isActive
                      ? "bg-[#4A0A15] text-white shadow-md transform scale-105"
                      : "text-gray-600 hover:text-[#4A0A15] hover:bg-[#4A0A15]/5"
                      }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? "text-[#D4AF37]" : "text-gray-400"}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE MEDIA GRID */}
        <section className="w-full py-16 px-6 md:px-12 bg-[#FCFBF9]">
          <div className="max-w-[1440px] mx-auto w-full">
            {filteredItems.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-sm">No items found matching this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleOpenLightbox(index)}
                    className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out cursor-pointer h-[320px] sm:h-[280px] md:h-[300px] lg:h-[280px] flex flex-col justify-end"
                  >
                    {/* Image Element container */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Gradient shade overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Hover gold thin borders */}
                    <div className="absolute inset-3 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 rounded-lg pointer-events-none transition-all duration-500" />

                    {/* Micro-interaction Maximize Icon */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <LuMaximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>

                    {/* Content Section Panel */}
                    <div className="relative p-6 z-10 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <span className="text-[9px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-sm font-semibold text-white tracking-wide font-sans mb-1 line-clamp-1 group-hover:text-amber-100 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-gray-300 font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* PREMIUM LIGHTBOX SLIDER MODAL */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[999] flex flex-col justify-between items-center transition-all duration-300"
            onClick={handleCloseLightbox}
          >
            {/* Upper control row */}
            <div className="w-full flex items-center justify-between px-6 py-4 relative z-50">
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.25em]">
                  {filteredItems[lightboxIndex].category}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                onClick={handleCloseLightbox}
                className="p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all border border-white/10 focus:outline-none"
                aria-label="Close viewer"
              >
                <LuX className="w-5 h-5" />
              </button>
            </div>

            {/* Middle slider row with image container and control arrow hooks */}
            <div className="w-full flex-grow flex items-center justify-between px-4 sm:px-6 md:px-12 relative">
              {/* Prev button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="p-3.5 rounded-full bg-black/40 hover:bg-[#4A0A15] border border-white/5 text-white/80 hover:text-white transition-all transform hover:scale-105 focus:outline-none absolute left-4 md:left-8 z-50"
                aria-label="Previous image"
              >
                <LuChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image content wrapper */}
              <div
                className="w-full h-[50vh] sm:h-[60vh] md:h-[65vh] max-w-4xl relative p-2 mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain animate-fade-in"
                  priority
                />
              </div>

              {/* Next button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="p-3.5 rounded-full bg-black/40 hover:bg-[#4A0A15] border border-white/5 text-white/80 hover:text-white transition-all transform hover:scale-105 focus:outline-none absolute right-4 md:right-8 z-50"
                aria-label="Next image"
              >
                <LuChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lower caption overlay details layout block */}
            <div
              className="w-full bg-[#1E110E] border-t border-amber-950/20 px-6 py-8 relative z-50 flex justify-center text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-2xl flex flex-col items-center">
                <h2 className="text-xl sm:text-2xl font-serif text-white font-normal mb-3 tracking-tight">
                  {filteredItems[lightboxIndex].title}
                </h2>
                <div className="w-10 h-0.5 bg-[#D4AF37]/50 mb-3" />
                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PLAN YOUR VISIT CALL TO ACTION */}
        <section className="w-full py-16 sm:py-20 lg:py-24 px-6 md:px-12 bg-white flex justify-center text-center relative border-t border-gray-100">
          <div className="max-w-xl flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-extrabold text-[#4A0A15] tracking-[0.25em] uppercase block mb-3">
              Elite Sanctuary Experience
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-stone-950 font-normal leading-tight mb-4 tracking-tight">
              Plan Your Azusa Stay
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-8 tracking-wide font-medium">
              Immerse yourself in our curated luxury apartments and five-star resort spaces firsthand. Secure your booking online for tailored premier services.
            </p>
            <Link
              href="/rooms"
              className="bg-[#4A0A15] hover:bg-[#36070E] text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Reserve Accommodation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}