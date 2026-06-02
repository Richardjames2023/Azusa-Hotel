
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header: React.FC = () => {
  // --- STATE ENGINES ---
  const [roomType, setRoomType] = useState('');
  const [showRoomSuggestions, setShowRoomSuggestions] = useState(false);

  // Custom Date System States
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date(2026, 3, 14)); // Tue 14 Apr 2026
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date(2026, 3, 15)); // Wed 15 Apr 2026
  const [activeCalendarSelector, setActiveCalendarSelector] = useState<'in' | 'out' | null>(null);
  const [currentCalendarView, setCurrentCalendarView] = useState<Date>(new Date(2026, 3, 1)); // Default view set to April 2026

  // Interface Toggle UI States
  const [showLocalization, setShowLocalization] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentLang, setCurrentLang] = useState('ENGLISH');
  const [currentCurrency, setCurrentCurrency] = useState('EUR');

  // --- REFS FOR OUTSIDE CLICK CLOSURES ---
  const localizationRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const roomRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // --- MOCK DATABASE DATA ---
  const sampleRoomTypes = [
    'Deluxe King Room',
    'Executive Studio Suite',
    'Presidential Luxury Suite',
    'Two-Bedroom Penthouse Apartment',
    'Junior Garden Suite'
  ];
  const languages = ['ENGLISH', 'FRANÇAIS', 'DEUTSCH', 'ESPAÑOL'];
  const currencies = ['NGN', 'USD', 'GBP', 'EUR'];

  // --- SIDE EFFECTS CONTROL (Outside Clicks) ---
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (localizationRef.current && !localizationRef.current.contains(target)) {
        setShowLocalization(false);
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(target)) {
        setShowMoreMenu(false);
      }
      if (roomRef.current && !roomRef.current.contains(target)) {
        setShowRoomSuggestions(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(target)) {
        setActiveCalendarSelector(null);
      }
      if (drawerRef.current && !drawerRef.current.contains(target) && showDrawer) {
        const isHamburgerClick = (event.target as HTMLElement).closest('.hamburger-trigger');
        if (!isHamburgerClick) setShowDrawer(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [showDrawer]);

  useEffect(() => {
    if (showDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showDrawer]);

  // --- CUSTOM ENGINE: CALENDAR GENERATOR ---
  const getDaysInMonthArray = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const stepsArray: (Date | null)[] = Array(firstDayIndex).fill(null);
    for (let d = 1; d <= totalDays; d++) {
      stepsArray.push(new Date(year, month, d));
    }
    return stepsArray;
  };

  const handleDateCellSelection = (date: Date) => {
    if (activeCalendarSelector === 'in') {
      setCheckInDate(date);
      if (checkOutDate && date >= checkOutDate) {
        setCheckOutDate(null);
      }
      setActiveCalendarSelector('out');
    } else if (activeCalendarSelector === 'out') {
      if (checkInDate && date > checkInDate) {
        setCheckOutDate(date);
        setActiveCalendarSelector(null);
      } else if (!checkInDate) {
        setCheckInDate(date);
        setActiveCalendarSelector('out');
      }
    }
  };

  // --- FORMATTERS FOR INTERFACE RENDERING ---
  const formatDisplayDate = (dateObj: Date | null, fallback: string) => {
    if (!dateObj) return fallback;
    return dateObj.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
  };

  const isSameDayValue = (d1: Date | null, d2: Date | null) => {
    if (!d1 || !d2) return false;
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
  };

  const isDateInBetweenSelection = (date: Date | null) => {
    if (!date || !checkInDate || !checkOutDate) return false;
    return date > checkInDate && date < checkOutDate;
  };

  const handleSearchExecution = () => {
    alert(`Searching availability for:\n🛏️ Room Type: ${roomType || 'Not specified'}\n📅 Check-in: ${checkInDate?.toDateString() || 'Empty'}\n📅 Check-out: ${checkOutDate?.toDateString() || 'Empty'}\n🌐 Language: ${currentLang} | Currency: ${currentCurrency}`);
  };

  return (
    <header className="w-full bg-white font-sans selection:bg-amber-200">

      {/* BACKGROUND DRAWER BACKDROP MASK PANEL */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity duration-300 ${showDrawer ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

        {/* INTERACTIVE COMPONENT DRAWER PANEL */}
        <div
          ref={drawerRef}
          className={`absolute top-0 left-0 h-full w-[340px] bg-[#4A0A15] shadow-2xl p-8 flex flex-col justify-between transform transition-transform duration-300 ease-out z-[110] text-[#F5E6C8] ${showDrawer ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div>
            {/* Header branding line within modular window */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="relative w-36 h-10 transition-opacity group-hover:opacity-80">
                <Image
                  src="/img/logo.png"
                  alt="Azusa Hotels Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <button
                onClick={() => setShowDrawer(false)}
                className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                aria-label="Close panel"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* HIGH-DENSITY PROFESSIONAL DRAWER LINK ROUTING NAVIGATION */}
            <nav className="flex flex-col text-sm tracking-wide font-medium">

              {/* MOBILE ONLY NAVIGATION STACK */}
              <div className="flex flex-col lg:hidden space-y-1">
                {[
                  { label: 'Rooms', href: '/rooms' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Restaurants', href: '/restaurants' },
                  { label: 'Meetings & Events', href: '/meetings-events' },
                  { label: 'Deals', href: '/deals' },
                  { label: 'Azusa Rewards', href: '/rewards' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    onClick={() => setShowDrawer(false)}
                    href={link.href}
                    className="w-full px-4 py-3 rounded-lg text-[#F5E6C8]/90 hover:text-white hover:bg-white/10 transition-all block font-semibold"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-white/10 my-4" />
              </div>

              {/* CORE UTILITY SUB-LINKS SYSTEM ACCESSIBLE VIA DESKTOP HAMBURGER */}
              <span className="text-[10px] text-[#D4AF37]/70 uppercase tracking-widest font-bold block mb-2 px-4">Explore More</span>
              <div className="flex flex-col space-y-1">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Media Gallery', href: '/gallery' },
                  { label: 'Contact & Support', href: '/contact' }
                ].map((link) => (
                  <Link
                    key={link.label}
                    onClick={() => setShowDrawer(false)}
                    href={link.href}
                    className="w-full px-4 py-3 rounded-lg text-[#F5E6C8]/80 hover:text-white hover:bg-white/10 transition-all block"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="text-[10px] text-[#F5E6C8]/40 tracking-tight leading-relaxed border-t border-white/10 pt-4 px-4">
            © 2026 Azusa Hotels & Apartments.<br />All rights reserved portal.
          </div>
        </div>
      </div>

      {/* Upper Navigation Row (Z-Index Layer 50) */}
      <div className="w-full max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between relative z-50 bg-white">

        {/* Left Side: Hamburger Trigger Hook & Branding */}
        <div className="flex items-center space-x-5">
          <button
            onClick={() => setShowDrawer(!showDrawer)}
            className="hamburger-trigger flex flex-col justify-between w-5 h-3.5 text-gray-800 hover:opacity-70 transition-opacity focus:outline-none"
            aria-label="Toggle Menu Panel"
          >
            <span className="w-full h-[2px] bg-current rounded-sm"></span>
            <span className="w-full h-[2px] bg-current rounded-sm"></span>
            <span className="w-full h-[2px] bg-current rounded-sm"></span>
          </button>

          <Link
            href="/"
            className="text-[34px] tracking-tight text-[#D4AF37] font-serif font-normal lowercase relative bottom-0.5 select-none block w-36 h-10"
          >
            <Image
              src="/img/logo-color.png"
              alt="Azusa Luxury Hotel & Apartments Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* Center Section: Core Text Hyperlinks */}
        <nav className="hidden lg:flex items-center space-x-6 text-[13px] font-bold text-black tracking-tight">
          <Link href="/rooms" className="hover:opacity-70 transition-opacity">Rooms</Link>
          <Link href="/restaurant" className="hover:opacity-70 transition-opacity">Restaurant</Link>
          <Link href="/blog" className="hover:opacity-70 transition-opacity">Blog</Link>
          <Link href="/meetings-events" className="hover:opacity-70 transition-opacity">Meetings & Events</Link>
          <Link href="/rewards" className="hover:opacity-70 transition-opacity">Azusa Rewards</Link>

          {/* Managed "More" Dropdown Hook */}
          <div className="relative z-50" ref={moreMenuRef}>
            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="flex items-center space-x-1 hover:opacity-70 transition-opacity font-bold focus:outline-none"
            >
              <span>More</span>
              <svg className={`w-3 h-3 text-black stroke-[2.5] transition-transform duration-200 ${showMoreMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Smooth Transition Menu Overlay */}
            <div className={`absolute left-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-2xl py-1.5 transform transition-all duration-200 origin-top-left ${showMoreMenu ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
              <Link href="/about" className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-black font-semibold transition-colors">About Us</Link>
              <Link href="/gallery" className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-black font-semibold transition-colors">Media Gallery</Link>
              <Link href="/contact" className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-black font-semibold transition-colors">Contact & Support</Link>
            </div>
          </div>
        </nav>

        {/* Right Section: Utility Tools & CTA */}
        <div className="flex items-center space-x-3 relative z-50">
          <div className="relative" ref={localizationRef}>
            <button
              onClick={() => setShowLocalization(!showLocalization)}
              className="flex items-center space-x-2 border border-black rounded-full px-4 py-2 text-[11px] font-bold text-black hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
              </svg>
              <span className="tracking-wide">{currentLang}</span>
              <span className="text-gray-300 mx-0.5">|</span>
              <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="tracking-wide">{currentCurrency}</span>
            </button>

            <div className={`absolute right-0 mt-3 w-64 bg-white border border-gray-100 rounded-xl shadow-2xl p-4 grid grid-cols-2 gap-4 transform transition-all duration-200 origin-top-right ${showLocalization ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
              <div>
                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">Language</span>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setCurrentLang(lang); setShowLocalization(false); }}
                    className={`block w-full text-left text-xs py-2 px-2.5 rounded-lg font-semibold transition-all ${currentLang === lang ? 'bg-[#4A0A15] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <div className="border-l border-gray-100 pl-3">
                <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">Currency</span>
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => { setCurrentCurrency(curr); setShowLocalization(false); }}
                    className={`block w-full text-left text-xs py-2 px-2.5 rounded-lg font-semibold transition-all ${currentCurrency === curr ? 'bg-[#4A0A15] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Link href="/signin" className="hidden sm:inline-block bg-[#4A0A15] text-white px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-[#36070E] transition-all shadow-sm">
            Sign In
          </Link>
        </div>
      </div>

      {/* Floating Header Booking Bar Wrap */}
      <div className="w-full bg-[#DCB286] py-3.5 px-6 relative z-10">
        <div className="max-w-[1320px] mx-auto bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 p-1 relative">

          {/* Section 1: Target Accommodation Room Type Input */}
          <div className="w-full md:w-5/12 flex items-center px-4 py-2.5 relative" ref={roomRef}>
            <div className="text-gray-500 mr-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 4v16M2 8h20M2 12h20M22 4v16M6 12V8M10 12V8" />
              </svg>
            </div>
            <div className="flex flex-col w-full">
              <span className="text-[10px] text-gray-400 font-bold tracking-tight">Choose your accommodation preference</span>
              <input
                type="text"
                placeholder="Select room or suite type"
                value={roomType}
                onFocus={() => { setShowRoomSuggestions(true); setActiveCalendarSelector(null); }}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full bg-transparent text-[13px] text-gray-800 placeholder-gray-400 font-bold focus:outline-none mt-0.5"
              />
            </div>

            <div className={`absolute top-full left-0 w-full bg-white mt-2 border border-gray-100 rounded-xl shadow-2xl py-1.5 z-40 transform transition-all duration-200 origin-top ${showRoomSuggestions ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              {sampleRoomTypes
                .filter(r => r.toLowerCase().includes(roomType.toLowerCase()))
                .map((roomName, i) => (
                  <button
                    key={i}
                    onClick={() => { setRoomType(roomName); setShowRoomSuggestions(false); }}
                    className="block w-full text-left px-4 py-2.5 text-xs text-gray-700 hover:bg-amber-50 font-bold transition-colors"
                  >
                    {roomName}
                  </button>
                ))}
            </div>
          </div>

          {/* Section 2 & 3 Combined Ref Context for Custom Floating Calendar Panel */}
          <div className="w-full md:w-6/12 grid grid-cols-2 divide-x divide-gray-200 relative" ref={calendarRef}>

            <div
              onClick={() => { setActiveCalendarSelector('in'); setShowRoomSuggestions(false); }}
              className={`flex items-center justify-between px-4 py-2.5 cursor-pointer group transition-colors ${activeCalendarSelector === 'in' ? 'bg-amber-50/50' : ''}`}
            >
              <div className="flex items-center">
                <div className="text-gray-500 mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold tracking-tight">Check-in</span>
                  <span className="text-[13px] text-gray-800 font-bold mt-0.5">{formatDisplayDate(checkInDate, 'Tue 14 Apr')}</span>
                </div>
              </div>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>

            <div
              onClick={() => { setActiveCalendarSelector('out'); setShowRoomSuggestions(false); }}
              className={`flex items-center justify-between px-4 py-2.5 cursor-pointer group transition-colors ${activeCalendarSelector === 'out' ? 'bg-amber-50/50' : ''}`}
            >
              <div className="flex items-center">
                <div className="text-gray-500 mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold tracking-tight">Check-out</span>
                  <span className="text-[13px] text-gray-800 font-bold mt-0.5">{formatDisplayDate(checkOutDate, 'Wed 15 Apr')}</span>
                </div>
              </div>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>

            {/* PREMIUM DYNAMIC CUSTOM CALENDAR POPOVER OVERLAY */}
            <div className={`absolute top-[110%] left-0 w-full md:w-[460px] bg-white border border-gray-100 rounded-xl shadow-2xl p-4 z-50 transform transition-all duration-200 origin-top-left ${activeCalendarSelector ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
              <div className="flex items-center justify-between mb-4 px-1">
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                  {currentCalendarView.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <div className="flex space-x-1">
                  <button onClick={() => setCurrentCalendarView(new Date(currentCalendarView.getFullYear(), currentCalendarView.getMonth() - 1, 1))} className="p-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={() => setCurrentCalendarView(new Date(currentCalendarView.getFullYear(), currentCalendarView.getMonth() + 1, 1))} className="p-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-gray-400 uppercase mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div key={day}>{day}</div>)}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonthArray(currentCalendarView).map((dayDate, index) => {
                  if (!dayDate) return <div key={`empty-${index}`} />;
                  const isStart = isSameDayValue(dayDate, checkInDate);
                  const isEnd = isSameDayValue(dayDate, checkOutDate);
                  const isBetween = isDateInBetweenSelection(dayDate);

                  return (
                    <button
                      key={index}
                      onClick={() => handleDateCellSelection(dayDate)}
                      className={`h-9 w-full text-xs font-bold rounded-lg flex items-center justify-center transition-all ${isStart || isEnd ? 'bg-[#4A0A15] text-white shadow-md scale-105' : isBetween ? 'bg-amber-50 text-amber-900 rounded-none' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      {dayDate.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 4: Query Engine Execution Component */}
          <div className="w-full md:w-2/12 p-1">
            <button onClick={handleSearchExecution} className="w-full bg-[#4A0A15] text-white py-3 px-6 rounded-md font-bold text-[13px] tracking-wide hover:bg-[#36070E] transition-colors whitespace-nowrap">
              Search
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};