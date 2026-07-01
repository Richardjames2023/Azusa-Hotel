"use client";

import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SubNav from "../../components/subNav";
import RoomCard, { RoomData } from "../../components/RoomCard";
import RoomDetailModal from "../../components/RoomDetailModal";
import Image from "next/image";
import DynamicRoomsShowcase from "@/components/DynamicRoomsShowcase";
import ROOMS_DATABASE_JSON from '@/app/data/rooms.json';
import { RoomSuite } from '@/app/types/rooms';
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

  const dummyDesc = "These rooms offer ample space with stylish décor and relaxing tones that allow you to feel at ease. After a restful night's sleep on your plush mattress, wake up to a refreshing rain shower with thoughtful bathroom amenities. During your stay, appreciate picturesque skyline views of the city from the comfort of your room. Unwind in the evening with your preferred entertainment on the flat-screen TV. Keep connected with our free Wi-Fi and share memorable moments.";
  const ROOMS_DATABASE = ROOMS_DATABASE_JSON as RoomSuite[];
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

      <DynamicRoomsShowcase rooms={ROOMS_DATABASE} />

      {/* Sub Navigation Bar */}
      <SubNav/>

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
