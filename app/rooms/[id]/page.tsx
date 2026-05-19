"use client";

import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { DetailsHero } from '../../../components/room-details/DetailsHero';
import { BookingWidget } from '../../../components/room-details/BookingWidget';
import { ActivitiesSlider } from '../../../components/room-details/ActivitiesSlider';
import { GuestReviewCard } from '../../../components/room-details/GuestReviewCard';
import { PropertyFeature, RecommendedActivity, GuestTestimonial } from '../../../app/types/room-details';

// IMPORT THE NEW PRODUCTION-GRADE CHECKOUT MODAL SYSTEM
import { BookingFormModal } from '../../../components/booking/BookingFormModal';

// Import central vector icons explicitly to handle structural room amenities mappings safely
import { 
  LuBed, LuTv, LuWifi, LuSnowflake, LuRefrigerator, LuUserCheck 
} from 'react-icons/lu';

export default function RoomDetailsPage() {
  // STATE LIFECYCLE MANAGERS CONTROLLING COMPLIANT SECURE CHECKOUT FORM OVERLAYS
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  
  // High-fidelity structured properties definitions matching design dimensions
  const roomAmenitiesList: PropertyFeature[] = [
    { id: "feat-1", label: "bedrooms", icon: LuBed, value: 5 },
    { id: "feat-2", label: "living room", icon: LuUserCheck, value: 1 },
    { id: "feat-3", label: "bathroom", icon: LuBed, value: 3 },
    { id: "feat-4", label: "dining room", icon: LuUserCheck, value: 1 },
    { id: "feat-5", label: "mbps wifi", icon: LuWifi, value: 10 },
    { id: "feat-6", label: "unit ready", icon: LuSnowflake, value: 7 },
    { id: "feat-7", label: "refrigerator", icon: LuRefrigerator, value: 2 },
    { id: "feat-8", label: "television", icon: LuTv, value: 4 }
  ];

  const alternativeActivitiesList: RecommendedActivity[] = [
    { id: "act-1", title: "Green Lake", category: "Nature", image: "/images/hero-bg.jpg" },
    { id: "act-2", title: "Dog Clubs", category: "Pool", image: "/images/azusa2.jpg" },
    { id: "act-3", title: "Labour and Wait", category: "Shopping", image: "/images/suite_main.png", isPopular: true },
    { id: "act-4", title: "Snorkeling", category: "Beach", image: "/images/hero-bg.jpg" }
  ];

  const guestFeedbackData: GuestTestimonial = {
    id: "test-1",
    author: "Angga",
    role: "Product Designer",
    rating: 5,
    quote: "As a wife I can pick a great trip with my own lovely family _ thank you!",
    avatarImage: "/images/suite_bed_front.png"
  };

  const roomInfo = {
    title: "Village Angga Premium Suite",
    pricePerNight: 280,
    currency: "USD"
  };

  return (
    <main className="min-h-screen bg-[#FCFBF9] w-full flex flex-col overflow-x-hidden relative">
      {/* 
        BRAND DESKTOP NAVHEADER 
        Mounted cleanly matching global app architectural boundaries
      */}
      <Header />
      
      {/* 1. Upper Image Mosaic Banner Frame */}
      <DetailsHero 
        title={roomInfo.title}
        location="Bogor, Indonesia"
        mainImage="/images/hero-bg.jpg"
        galleryImages={["/images/azusa2.jpg", "/images/suite_main.png"]}
      />

      {/* 2. Middle Content Grid Layer: Split Description Text vs Interactive Booking Card */}
      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-16 flex flex-col items-center">
        <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Block Partition Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h3 className="text-base uppercase font-extrabold text-[#4A0A15] tracking-[0.2em] mb-4 border-b border-gray-100 pb-2 w-full">
              About the place
            </h3>
            <p className="text-stone-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-6">
              Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that repeats the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.
            </p>
            <p className="text-stone-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-10">
              Such bands saw the elements of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era. Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process.
            </p>

            {/* Grid display tracking the vector metric room parameters loop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 w-full pt-4 border-t border-gray-50">
              {roomAmenitiesList.map((item) => {
                const FeatureIcon = item.icon;
                return (
                  <div key={item.id} className="flex flex-col items-start select-none group">
                    <FeatureIcon className="w-6 h-6 text-[#4A0A15] mb-2.5 transition-transform duration-300 group-hover:scale-115" />
                    <div className="flex items-baseline space-x-1">
                      <span className="text-base font-black text-stone-900 font-serif">{item.value}</span>
                      <span className="text-xs text-gray-400 font-medium tracking-wide">{item.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* INLINE EMBEDDED BOOK NOW TRIGGER ACTIONS */}
            <div className="mt-12 pt-6 border-t border-gray-100 w-full flex">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-[#4A0A15] hover:bg-[#36070E] text-white font-extrabold text-xs px-12 py-4 tracking-widest uppercase shadow-md transition-all duration-200 transform active:scale-[0.98] rounded-none cursor-pointer"
              >
                Book This Suite Now
              </button>
            </div>
          </div>

          {/* Right Floating Calculator Card Box Column */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-24">
            {/* Added trigger mapping connection hooks directly inside the active layout controller widget frame */}
            <div onClick={() => setIsBookingModalOpen(true)} className="cursor-pointer">
              <BookingWidget pricePerNight={roomInfo.pricePerNight} currency={roomInfo.currency} />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Lower Dynamic Recommendations Carousel Array Track Block */}
      <ActivitiesSlider activities={alternativeActivitiesList} />

      {/* 4. Bottom Editorial User Experience Feedback Social Proof Block */}
      <GuestReviewCard testimonial={guestFeedbackData} />

      {/* 
        GLOBAL STICKY APPRECIATION NAVFOOTER SHIELD 
        Appends nicely at root boundary baseline limits
      */}
      <Footer />

      {/* 
        PRODUCTION GRADE STATEFUL BOOKING FORM MODAL INTERFACE
        Reveals instantly whenever user actions trigger active checkout channels
      */}
      <BookingFormModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        roomTitle={roomInfo.title}
        pricePerNight={roomInfo.pricePerNight}
        currency={roomInfo.currency}
      />

    </main>
  );
}
