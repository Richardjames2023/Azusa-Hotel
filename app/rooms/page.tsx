"use client";

import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import RoomCard, { RoomData } from "../../components/RoomCard";
import RoomDetailModal from "../../components/RoomDetailModal";
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

interface SubNavItem {
  label: string;
  href: string;
  active: boolean;
}

export default function RoomsPage() {

  const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (room: RoomData) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

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

  const dummyDesc = "These rooms offer ample space with stylish décor and relaxing tones that allow you to feel at ease. After a restful night's sleep on your plush mattress, wake up to a refreshing rain shower with thoughtful bathroom amenities. During your stay, appreciate picturesque skyline views of the city from the comfort of your room. Unwind in the evening with your preferred entertainment on the flat-screen TV. Keep connected with our free Wi-Fi and share memorable moments.";

  const rooms: RoomData[] = [
    {
      title: "Standard Room",
      description: dummyDesc,
      images: ["/img/A15.webp", "/img/A16.webp", "/img/A17.webp"],
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
      description: dummyDesc,
      images: ["/img/A18.webp", "/img/A16.webp", "/img/A17.webp"],
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
      description: dummyDesc,
      images: ["/img/A6.webp", "/img/A7.webp", "/img/A8.webp"],
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
      description: dummyDesc,
      images: ["/img/A1.webp", "/img/A2.webp", "/img/A3.webp"],
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
      description: dummyDesc,
      images: ["/img/A3.webp", "/img/A4.webp", "/img/A6.webp"],
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
      description: dummyDesc,
      images: ["/img/A5.webp", "/img/A6.webp", "/img/A7.webp"],
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
      description: dummyDesc,
      images: ["/img/A15.webp", "/img/A16.webp", "/img/A17.webp"],
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
      description: dummyDesc,
      images: ["/img/A7.webp", "/img/A8.webp", "/img/A6.webp"],
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
    <main className="min-h-screen bg-white w-full overflow-x-hidden relative">
      <Header />

      {/* Title Section */}
      <section className="bg-[#f4f5f7] py-6 sm:py-8 lg:py-10 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2d3748] tracking-tight">
            Azusa Premier Royal Suite
          </h1>
        </div>
      </section>

      {/* Hero Showcase Split Content Section */}
      <section className="w-full flex flex-col lg:grid lg:grid-cols-5 bg-white border-b border-gray-100">
        <div className="w-full lg:col-span-3 grid grid-cols-2 grid-rows-2 gap-1 h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="relative row-span-2 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/img/A16.webp"
              alt="Azusa Premier Royal Suite Main"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="relative row-span-1 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/img/A8.webp"
              alt="Suite Bed View Side"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
          <div className="relative row-span-1 col-span-1 h-full w-full bg-gray-200 overflow-hidden group cursor-pointer">
            <Image
              src="/img/A7.webp"
              alt="Suite Bed View Front"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 50vw, 20vw"
            />
          </div>
        </div>

        {/* Right Info Section Block Panel */}
        <div className="w-full lg:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start bg-[#FCFBF9]">
          <span className="text-[10px] font-extrabold text-[#4A0A15] tracking-[0.25em] uppercase block mb-3">
            Elite Sanctuary Living
          </span>
          <h2 className="text-2xl md:text-3xl font-normal text-stone-900 font-serif tracking-tight leading-tight mb-4">
            Richness That Actually Lives Up to the Name 
          </h2>
          <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-6">
            Our luxury suites are in a completely different league: spacious, private, and set up with everything a busy executive or private traveller needs.
          </p>
          <div className="w-full h-[1px] bg-gray-200 mb-6" />
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">Pricing Structure</span>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-2xl font-black text-[#4A0A15]">₦180,000</span>
              <span className="text-xs text-gray-400 font-bold">/ night starting rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Navigation Bar */}
      <section className="bg-[#4a0a0c] border-b border-[#300508] sticky top-0 z-40 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-between">
          {/* <div className="flex flex-1 items-center overflow-x-auto scrollbar-hide py-3 space-x-1 sm:space-x-2 mr-4">
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
          </div> */}
          <div className="py-3 flex-shrink-0">
            <button className="bg-[#d4b58e] hover:bg-[#c4a37a] text-[#4a0a0c] px-6 sm:px-8 py-2 md:py-2.5 rounded-full text-sm font-bold tracking-widest transition-all hover:shadow-lg uppercase transform hover:-translate-y-0.5">
              Book
            </button>
          </div>
        </div>
      </section>

      {/* Main Suite Matrix Cards Grid Section */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-16 xl:px-24 bg-white">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col">
          <div className="mb-12 border-b border-gray-100 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 tracking-tight">
              Select Your Accommodation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((roomItem, idx) => (
              <RoomCard
                key={idx}
                room={roomItem}
                /* WIRED: Hooks click parameter callback straight to state functions */
                onReadMore={() => handleOpenModal(roomItem)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* {MOdal popup} */}
      <RoomDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        room={selectedRoom}
      />
    </main>
  );
}
