"use client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import RoomCard, { RoomData } from "../../components/RoomCard";
import Image from "next/image";
import Link from "next/link";
import {
  LuSnowflake,
  LuTv,
  LuWifi,
  LuPhone,
  LuCoffee,
  LuWine,
  LuBaby,
  LuRefrigerator
} from "react-icons/lu";
import {
  FaBanSmoking,
  FaDroplet,
  FaWheelchair,
  FaUserShield,
  FaShower,
  FaVault
} from "react-icons/fa6";
import { LuImage } from "react-icons/lu";

interface SubNavItem {
  label: string;
  href: string;
  active: boolean;
}

export default function RoomsPage() {
  const subnavItems: SubNavItem[] = [
    { label: "Overview", href: "#", active: false },
    { label: "Rooms", href: "#", active: true },
    { label: "Services", href: "#", active: false },
    { label: "Dining", href: "#", active: false },
    { label: "Meetings & Events", href: "#", active: false },
    { label: "Activities", href: "#", active: false },
    { label: "Fitness & Wellness", href: "#", active: false },
    { label: "Deals", href: "#", active: false },
    { label: "Reviews", href: "#", active: false },
    { label: "Nearby Attractions", href: "#", active: false },
    { label: "Contact", href: "#", active: false },
  ];

  const rooms: RoomData[] = [
    {
      title: "Standard Room",
      images: ["/images/suite_main.png", "/images/suite_bed_side.png", "/images/suite_bed_front.png"],
      specs: ["23 m²", "2 adults", "1 king or 2 twin"],
      amenities: [
        { icon: LuSnowflake, label: "Air Conditioning" },
        { icon: LuCoffee, label: "Coffee Maker" },
        { icon: LuWine, label: "Mini Bar" },
        { icon: LuRefrigerator, label: "Fridge" },
        { icon: FaShower, label: "Private Bathroom" },
        { icon: FaBanSmoking, label: "Non-Smoking" },
      ],
    },
    {
      title: "Standard Room - Skyline View",
      images: ["/images/suite_bed_side.png", "/images/suite_main.png", "/images/suite_bed_front.png"],
      specs: ["23 m²", "2 adults", "1 king or 2 twin"],
      amenities: [
        { icon: FaDroplet, label: "Complimentary Water" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuWifi, label: "High-Speed Wi-Fi" },
        { icon: FaVault, label: "In-Room Safe" },
        { icon: LuPhone, label: "Direct Dial Phone" },
        { icon: FaBanSmoking, label: "Non-Smoking" },
      ],
    },
    {
      title: "Superior Room",
      images: ["/images/suite_bed_front.png", "/images/suite_bed_side.png", "/images/suite_main.png"],
      specs: ["27 m²", "3 adults", "1 king or 2 twin"],
      amenities: [
        { icon: LuSnowflake, label: "Air Conditioning" },
        { icon: LuCoffee, label: "Coffee Maker" },
        { icon: FaDroplet, label: "Complimentary Water" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuWine, label: "Mini Bar" },
        { icon: FaUserShield, label: "24h Security" },
      ],
    },
    {
      title: "Superior Room - Skyline View",
      images: ["/images/suite_bed_side.png", "/images/suite_bed_front.png", "/images/suite_main.png"],
      specs: ["27 m²", "3 adults", "1 king or 2 twin"],
      amenities: [
        { icon: FaWheelchair, label: "Accessible Room" },
        { icon: FaDroplet, label: "Complimentary Water" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuWifi, label: "High-Speed Wi-Fi" },
        { icon: LuPhone, label: "Direct Dial Phone" },
        { icon: FaBanSmoking, label: "Non-Smoking" },
      ],
    },
    {
      title: "Premium Room - Skyline and Park View",
      images: ["/images/suite_main.png", "/images/suite_bed_side.png", "/images/suite_bed_front.png"],
      specs: ["27 m²", "3 adults", "1 king or 2 twin"],
      amenities: [
        { icon: LuSnowflake, label: "Air Conditioning" },
        { icon: LuCoffee, label: "Coffee Maker" },
        { icon: LuWine, label: "Premium Mini Bar" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuWifi, label: "High-Speed Wi-Fi" },
        { icon: FaShower, label: "Luxury Shower" },
      ],
    },
    {
      title: "Suite - Park View",
      images: ["/images/suite_bed_side.png", "/images/suite_main.png", "/images/suite_bed_front.png"],
      specs: ["42 m²", "3 adults", "1 king"],
      amenities: [
        { icon: LuSnowflake, label: "Air Conditioning" },
        { icon: LuCoffee, label: "Coffee & Tea" },
        { icon: LuWine, label: "Mini Bar" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuRefrigerator, label: "Fridge" },
        { icon: FaVault, label: "In-Room Safe" },
      ],
    },
    {
      title: "Suite - Skyline and Park View",
      images: ["/images/suite_bed_front.png", "/images/suite_bed_side.png", "/images/suite_main.png"],
      specs: ["42 m²", "3 adults", "1 king"],
      amenities: [
        { icon: LuWifi, label: "High-Speed Wi-Fi" },
        { icon: LuWine, label: "Premium Mini Bar" },
        { icon: LuTv, label: "Smart TV" },
        { icon: LuRefrigerator, label: "Fridge" },
        { icon: FaVault, label: "In-Room Safe" },
        { icon: FaUserShield, label: "24h Security" },
      ],
    },
    {
      title: "Family Stay - 2 Connected Rooms",
      images: ["/images/suite_bed_front.png", "/images/suite_main.png", "/images/suite_bed_side.png"],
      specs: ["50 m²", "4 adults", "1 king and 2 twin"],
      amenities: [
        { icon: LuBaby, label: "Family Friendly" },
        { icon: LuTv, label: "Multiple Smart TVs" },
        { icon: LuWifi, label: "High-Speed Wi-Fi" },
        { icon: LuRefrigerator, label: "Large Fridge" },
        { icon: LuWine, label: "Mini Bar" },
        { icon: FaBanSmoking, label: "Non-Smoking" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />

      {/* Title Section */}
      <section className="bg-[#f4f5f7] py-6 sm:py-8 lg:py-10 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2d3748] tracking-tight">
            Azusa Premier Royal Suite
          </h1>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="w-full flex flex-col lg:grid lg:grid-cols-5 bg-white">
        <div className="w-full lg:col-span-3 grid grid-cols-2 grid-rows-2 gap-1 h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="relative row-span-2 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/images/suite_main.png"
              alt="Azusa Premier Royal Suite Main"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="relative row-span-1 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/images/suite_bed_side.png"
              alt="Suite Bed View Side"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
          <div className="relative row-span-1 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/images/suite_bed_front.png"
              alt="Suite Bed View Front"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
        </div>

        <div className="w-full lg:col-span-2 flex flex-col justify-center px-6 sm:px-12 lg:pl-16 lg:pr-16 xl:pr-24 py-12 lg:py-0">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#2d3748] mb-4 lg:mb-6 leading-tight">
            Enjoy modern comforts<br className="hidden lg:block" /> in Abuja
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed max-w-xl">
            Discover not just the rooms but the comfort that comes with Amenities at Azusa
          </p>
          <div className="flex">
            <span className="inline-flex items-center px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-gray-100 text-gray-800 text-sm lg:text-[15px] font-medium shadow-sm border border-gray-200">
              <span className="font-bold mr-1.5 text-gray-900">Check-in :</span> <span className="text-gray-700">3:00pm</span>
              <span className="mx-3 lg:mx-4 text-gray-300">|</span>
              <span className="font-bold mr-1.5 text-gray-900">Check-out :</span> <span className="text-gray-700">12:00pm</span>
            </span>
          </div>
        </div>
      </section>

      {/* Sub Navigation Bar */}
      <section className="bg-[#4a0a0c] border-b border-[#300508] sticky top-0 z-40 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-between">
          <div className="flex flex-1 items-center overflow-x-auto scrollbar-hide py-3 space-x-1 sm:space-x-2 mr-4">
            {subnavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-sm font-medium transition-all duration-200 ${item.active
                  ? "bg-white text-[#4a0a0c] shadow-sm transform scale-105"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="py-3 flex-shrink-0">
            <button className="bg-[#d4b58e] hover:bg-[#c4a37a] text-[#4a0a0c] px-6 sm:px-8 py-2 md:py-2.5 rounded-full text-sm font-bold tracking-widest transition-all hover:shadow-lg uppercase transform hover:-translate-y-0.5">
              Book
            </button>
          </div>
        </div>
      </section>

      {/* Overview Details Section */}
      <section className="bg-white pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 w-full border-b border-gray-100">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#2d3748] leading-tight max-w-md">
              Our most luxurious option, ideal for families, executives, or long stays.
            </h3>
          </div>
          <div className="lg:col-span-3">
            <p className="text-gray-600 text-base sm:text-lg lg:text-[19px] leading-relaxed font-normal tracking-wide">
              This accommodation offers premium comfort and generous space, featuring three
              well-appointed bedrooms alongside a large living and dining area. It comes fully
              equipped with essentials such as a fridge, microwave, and tea and coffee-making
              facilities. Guests also benefit from private bathrooms and the added convenience
              of a 24-hour front desk and security, ensuring a comfortable and secure stay.
            </p>
          </div>
        </div>
      </section>

      {/* Room Types Grid Section */}
      <section className="bg-[#f4f5f7] py-16 lg:py-24 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">

          <h2 className="text-3xl lg:text-[40px] font-semibold text-[#2d3748] mb-12 tracking-tight">
            Room types
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {rooms.map((room, idx) => (
              <RoomCard key={idx} room={room} />
            ))}
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#f4f5f7] pb-16 lg:pb-24 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 h-auto md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-white shadow-sm">

            {/* Left Panel */}
            <div className="relative h-[300px] md:h-full col-span-1 group cursor-pointer overflow-hidden bg-gray-200">
              <Image
                src="/images/suite_bed_side.png"
                alt="Guest relaxing in room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"></div>

              <button className="absolute bottom-6 left-6 z-10 flex items-center gap-2 px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase rounded-full border border-white/60 transition-all duration-300">
                <LuImage className="w-4 h-4" />
                See the gallery
              </button>
            </div>

            {/* Middle Panel */}
            <div className="col-span-1 grid grid-rows-2 gap-1 h-[500px] md:h-full">
              <div className="relative w-full h-full group cursor-pointer overflow-hidden bg-gray-200">
                <Image
                  src="/images/suite_main.png"
                  alt="Guest having breakfast in bed"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative w-full h-full group cursor-pointer overflow-hidden bg-gray-200">
                <Image
                  src="/images/suite_bed_front.png"
                  alt="Couple enjoying room service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Right Panel */}
            <div className="relative h-[300px] md:h-full col-span-1 group cursor-pointer overflow-hidden bg-gray-200">
              <Image
                src="/images/suite_bed_side.png"
                alt="Guest reading a book"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}