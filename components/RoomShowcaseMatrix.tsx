"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { RoomSuite } from '../app/types/rooms';
import RoomDetailModal from './RoomDetailModal';
import { 
  LuBed, LuEye, LuWifi, LuTv, LuKey, LuCookingPot, 
  LuSunset, LuCastle, LuBath, LuUser, LuCar, LuSparkles,
  LuChevronLeft, LuChevronRight 
} from 'react-icons/lu';

import ROOMS_DATABASE_JSON from '../app/data/rooms.json';
const ROOMS_DATABASE = ROOMS_DATABASE_JSON as RoomSuite[];

const MatrixFeatureIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type?.toLowerCase()) {
    case 'bed': return <LuBed className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'view': return <LuEye className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'wifi': return <LuWifi className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'tv': return <LuTv className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'key': return <LuKey className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'chef': return <LuCookingPot className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'sunset': return <LuSunset className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'castle': return <LuCastle className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'bath': return <LuBath className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'butler': return <LuUser className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    case 'car': return <LuCar className="w-4 h-4 text-amber-600 flex-shrink-0" />;
    default: return <LuSparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />;
  }
};

const RoomCardImageGallery: React.FC<{ images: string[]; title: string; delay: number }> = ({ images, title, delay }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || !images || images.length <= 1) return;
    let playTimer: NodeJS.Timeout;
    const startDelayTimeout = setTimeout(() => {
      playTimer = setInterval(() => {
        if (window.innerWidth >= 1024) {
          setDirection('next');
          setImgIdx((prev) => (prev + 1) % images.length);
        }
      }, 4500 + (delay % 1000));
    }, delay);
    return () => {
      clearTimeout(startDelayTimeout);
      if (playTimer) clearInterval(playTimer);
    };
  }, [images?.length, delay, isHovered]);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation(); 
    setDirection('next');
    setImgIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation(); 
    setDirection('prev');
    setImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return <div className="w-full h-full bg-stone-200" />;

  return (
    <div className="w-full h-full relative rounded-t-2xl overflow-hidden isolate group/image" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {images.map((src, index) => {
        let translationClass = 'translate-x-0';
        if (index !== imgIdx) {
          translationClass = direction === 'next' ? 'translate-x-full' : '-translate-x-full';
        }
        return (
          <img
            key={index} src={src} alt={`${title} view ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transform-gpu transition-transform duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1) rounded-t-2xl ${translationClass}`}
            style={{ zIndex: index === imgIdx ? 10 : 0 }}
            onError={(e) => { (e.target as HTMLImageElement).src = '/img/room-fallback.webp'; }}
          />
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
        <button onClick={handlePrev} className="w-8 h-8 bg-white/90 text-stone-900 rounded-full flex items-center justify-center hover:bg-[#4A0A15] hover:text-white pointer-events-auto shadow-md">
          <LuChevronLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
        <button onClick={handleNext} className="w-8 h-8 bg-white/90 text-stone-900 rounded-full flex items-center justify-center hover:bg-[#4A0A15] hover:text-white pointer-events-auto shadow-md">
          <LuChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
export const RoomShowcaseMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const searchParams = useSearchParams();
  const categories = ['ALL', 'Luxury Suites', 'Apartments', 'Penthouse'];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomSuite | null>(null);

  const handleOpenModal = (room: RoomSuite) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.map(c => c.toLowerCase()).includes(categoryParam.toLowerCase())) {
      const targetCategory = categories.find(c => c.toLowerCase() === categoryParam.toLowerCase());
      if (targetCategory) setActiveCategory(targetCategory);
    }
  }, [searchParams]);

  const filteredRooms = activeCategory === 'ALL' 
    ? ROOMS_DATABASE 
    : ROOMS_DATABASE.filter(room => room.category === activeCategory);

  // ✅ FORCES MAX 3 DISPLAY ROOMS
  const displayedRooms = filteredRooms.slice(0, 3);

  return (
    <section className="w-full bg-[#1E110E] font-sans flex flex-col items-center">
      <div className="w-full bg-white p-8 md:p-16 shadow-2xl rounded-none">
        
        <div className="max-w-[1440px] mx-auto w-full border-b border-gray-100 pb-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 px-6 md:px-12">
          <div>
            <span className="text-[11px] font-extrabold text-[#4A0A15] uppercase tracking-[0.2em] block mb-2">Exceptional Sanctuary Living</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-stone-900 font-serif leading-none">Rooms & Suites Matrix</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 border transition-all duration-300 rounded-none shadow-xs cursor-pointer ${activeCategory === cat ? 'bg-[#cba865] text-white border-[#cba865]' : 'border-gray-200 text-gray-600 hover:border-stone-400 hover:text-stone-900 bg-gray-50/50'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto w-full flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-3 lg:gap-8 md:gap-10 lg:overflow-visible lg:pb-0 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-6 md:px-12">
          {displayedRooms.length > 0 ? (
            displayedRooms.map((room) => (
              <div key={room.id} className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform lg:hover:-translate-y-2 w-[85vw] sm:w-[45vw] lg:w-auto flex-shrink-0 snap-center rounded-t-2xl">
                <div className="w-full h-64 md:h-72 relative overflow-hidden bg-stone-100 rounded-t-2xl isolate">
                  <RoomCardImageGallery images={room.images || []} title={room.title} delay={room.delay || 0} />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#4A0A15] font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1.5 shadow-md border border-white/40 z-30 rounded-md">{room.category}</span>
                  <div className="absolute bottom-4 right-4 flex space-x-2 text-white font-semibold text-[11px] tracking-wide bg-black/40 backdrop-blur-xs px-3 py-1 z-30 rounded-md">
                    <span>{room.size}</span><span className="text-white/40">|</span><span>{room.occupancy}</span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow border-t border-gray-50">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900 mb-4 leading-snug tracking-tight group-hover:text-[#4A0A15] transition-colors">{room.title}</h3>
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-2 mb-6">
                      {room.features?.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center text-xs font-semibold text-gray-500 tracking-wide space-x-2">
                          <MatrixFeatureIcon type={feat.icon} />
                          <span>{feat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">From</span>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-xl font-extrabold text-[#4A0A15]">{room.currency === 'NGN' ? '₦' : '$'}{Number(room.pricePerNight).toLocaleString()}</span>
                        <span className="text-xs text-gray-400 font-bold">/ night</span>
                      </div>
                    </div>
                    <button onClick={() => handleOpenModal(room)} className="inline-flex items-center justify-center bg-slate-900 text-white font-bold text-[11px] uppercase tracking-widest px-6 py-3 hover:bg-[#36070E] transition-all transform active:scale-95 shadow-md rounded-full cursor-pointer">
                      <span>View Suite</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-400 font-serif">No suites available in this category.</div>
          )}
        </div>
      </div>
      {isModalOpen && selectedRoom && (
        <RoomDetailModal isOpen={isModalOpen} room={selectedRoom} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
};

