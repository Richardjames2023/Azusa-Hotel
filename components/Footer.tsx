"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const hotDestinations = [
    "Abuja", "Lagos", "Port Harcourt", "Calabar", "Kano", "Benin City", "Enugu", "Jos", "Owerri", "Warri", "Uyo", "Yola", "Zaria", "Kaduna",
  ];

  const mainLinksMatrix = [
    {
      title: "Quick links",
      links: [
        { label: "Azusa Rewards", href: "/rewards" },
        { label: "Destinations", href: "/destinations" },
        { label: "New and upcoming hotels", href: "/upcoming" },
        { label: "Family Friendly Hotels", href: "/family" },
        { label: "Health & Safety", href: "/safety" }
      ]
    },
    {
      title: "Travel professionals",
      links: [
        { label: "Partners", href: "/partners" },
        { label: "Travel agents", href: "/agents" }
      ]
    },
    {
      title: "Corporate",
      links: [
        { label: "Azusa Hotel Group", href: "/corporate-group" },
        { label: "Careers RHG", href: "/careers-rhg" },
        { label: "Careers PPHE", href: "/careers-pphe" },
        { label: "Procurement", href: "/procurement" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Center", href: "/privacy" },
        { label: "Legal notice", href: "/legal" },
        { label: "Site usage agreement", href: "/usage" },
      ]
    },
    {
      title: "Help",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Sitemap", href: "/sitemap" }
      ]
    }
  ];

  return (
    <footer className="w-full bg-[#3B0E17] text-white pt-14 pb-12 px-6 lg:px-12 font-sans selection:bg-amber-800 selection:text-white">
      <div className="max-w-[1440px] mx-auto">

        {/* BRAND LOGO SEGMENT */}
        <div className="w-full mb-10 pb-6 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link href="/" className="inline-block group focus:outline-none">
            <div className="relative w-36 h-12 transition-opacity group-hover:opacity-80">
              <Image
                src="/img/logo.png"
                alt="Azusa Hotels Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-extrabold sm:self-end sm:mb-1">
            Hotels & Apartments
          </span>
        </div>

        {/* TOP SEGMENT: Hot Destinations Flat Text Matrix Link Grid */}
        <div className="w-full mb-12">
          <h5 className="text-sm uppercase font-extrabold text-gray-300 tracking-wider mb-4">Hot destinations</h5>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 max-w-6xl text-[13px] font-bold text-gray-200">
            {hotDestinations.map((city, idx) => (
              <React.Fragment key={idx}>
                <Link
                  href={`/destinations/${city.toLowerCase()}`}
                  className="hover:text-amber-400 hover:underline transition-colors py-0.5"
                >
                  {city}
                </Link>
                {idx < hotDestinations.length - 1 && (
                  <span className="text-white/20 font-light select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CENTER SEGMENT: Multi-Column Nav Matrix Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-14 border-t border-white/10 pt-10">
          {mainLinksMatrix.map((section, index) => (
            <div key={index} className="flex flex-col space-y-4.5">
              <h4 className="text-sm uppercase font-extrabold text-amber-400 tracking-widest">{section.title}</h4>
              <div className="flex flex-col space-y-3.5">
                {section.links.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.href}
                    className="hover:text-amber-400 hover:underline text-gray-200 text-[13px] leading-relaxed transition-colors w-fit font-bold tracking-wide"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* Specialized Phone Component with Strict Zero-Wrap Rule Constraints */}
              {section.title === "Help" && (
                <div className="pt-2">
                  <a
                    href="tel:+2349160683225"
                    className="inline-flex items-center min-w-max whitespace-nowrap space-x-2 text-white font-extrabold text-[13px] bg-white/10 border border-white/20 hover:bg-white/20 rounded-full px-4 py-2.5 transition-all shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M21.384 17.791l-3.75-3.214a1.25 1.25 0 00-1.616-.046l-2.071 1.554c-.286.214-.688.24-.997.054a14.773 14.773 0 01-5.111-5.111.872.872 0 01.054-.997l1.554-2.071a1.25 1.25 0 00-.046-1.616L6.209 2.616a1.25 1.25 0 00-1.684-.054L2.302 4.417A2.616 2.616 0 001.25 6.442c0 5.434 3.738 10.518 8.784 14.308 3.518 2.64 7.632 4 11.524 4a6.388 6.388 0 001.008-.076 2.616 2.616 0 002.025-1.052l1.801-2.223a1.25 1.25 0 00-.058-1.608z" />
                    </svg>
                    <span>+234 916 068 3225</span>
                    <span className="text-[10px] text-amber-400 font-bold pl-0.5">▼</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* LOWER UTILITY FOOTER BLOCK: Three-Column Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-10 border-t border-white/10 text-white">

          {/* Sub-Column 1: Premium SVG Social Vectors Vector Grid */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm uppercase font-extrabold tracking-widest text-amber-400">Social media</h4>
            <span className="text-xs text-gray-200 block font-bold -mt-2">Azusa Hotels</span>
            <div className="flex items-center space-x-4 pt-1.5 text-white">
              {/* TikTok */}
              <Link href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-amber-800 hover:border-white transition-all text-white" aria-label="TikTok">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.03 2.61-.01 3.91-.01.08 1.53.63 3.02 1.59 4.23.96 1.21 2.34 2.11 3.86 2.57v3.85c-1.43-.11-2.83-.61-4.01-1.46-.35-.25-.67-.53-.97-.84v6.86c.03 2.12-.59 4.22-1.78 5.95-1.19 1.72-2.95 2.94-4.98 3.46-2.03.52-4.18.33-6.1-.53-1.92-.87-3.48-2.39-4.41-4.31-.93-1.92-1.21-4.1-.79-6.18.42-2.07 1.53-3.92 3.16-5.22 1.63-1.31 3.67-1.99 5.76-1.95.12 0 .24 0 .36.01v3.91c-.13-.02-.27-.03-.4-.03-1.34-.04-2.66.41-3.67 1.26-1.01.85-1.67 2.08-1.85 3.42-.18 1.34.15 2.7.93 3.8s1.95 1.83 3.26 2.05c1.3.22 2.65-.08 3.75-.85 1.1-.77 1.83-1.97 2.03-3.32.05-.33.07-.67.07-1.01V.02z" /></svg>
              </Link>
              {/* Instagram */}
              <Link href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-amber-800 hover:border-white transition-all text-white" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </Link>
              {/* YouTube */}
              <Link href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-amber-800 hover:border-white transition-all text-white" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.868.504 9.37 1.25 9.37 1.25s7.502-.746 9.37-1.25a3.016 3.016 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </Link>
              {/* Facebook */}
              <Link href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-amber-800 hover:border-white transition-all text-white" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </Link>
              {/* Pinterest */}
              <Link href="#" className="p-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-amber-800 hover:border-white transition-all text-white" aria-label="Pinterest">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.992 3.993-.283 1.194.599 2.169 1.775 2.169 2.13 0 3.769-2.247 3.769-5.49 0-2.87-2.061-4.877-5.008-4.877-3.411 0-5.413 2.561-5.413 5.204 0 1.03.397 2.133.893 2.734a.369.369 0 01.086.356c-.097.404-.313 1.272-.355 1.447-.056.23-.185.279-.427.167-1.592-.741-2.587-3.072-2.587-4.945 0-4.025 2.924-7.72 8.429-7.72 4.425 0 7.864 3.153 7.864 7.367 0 4.397-2.771 7.933-6.617 7.933-1.292 0-2.507-.671-2.923-1.463 0 0-.64 2.435-.794 3.033-.288 1.108-1.065 2.498-1.587 3.348A11.966 11.966 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>
              </Link>
            </div>
          </div>

          {/* Sub-Column 2: Newsletter Subscriptions Sign-Up Panel */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm uppercase font-extrabold tracking-widest text-amber-400">Subscribe</h4>
            <p className="text-gray-200 text-[13px] font-bold leading-snug">Never miss out on our most popular deals</p>
            <div className="flex w-full max-w-sm pt-0.5">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#2D0A11] border border-white/20 text-white rounded-l-md px-4 py-2.5 text-sm font-semibold focus:outline-none focus:border-amber-500 w-full placeholder-gray-400"
              />
              <button className="bg-amber-800 hover:bg-amber-700 text-white font-extrabold px-5 rounded-r-md uppercase text-xs tracking-wider transition-colors whitespace-nowrap shadow-md">
                Join
              </button>
            </div>
          </div>

          {/* Sub-Column 3: Localized Brand Meta Descriptor Block */}
          <div className="flex flex-col space-y-3 md:items-end text-left md:text-right">
            <h4 className="text-sm uppercase font-extrabold tracking-widest text-amber-400 w-full">Azusa Presence</h4>
            <p className="text-[13px] text-gray-200 font-bold leading-relaxed max-w-xs tracking-wide">
              Experience dynamic luxury apartment hotel services configured seamlessly for world-class hospitality journeys.
            </p>
          </div>

        </div>

        {/* BOTTOM SEGMENT: Strict Legal Footnote Copy Wrapper */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-gray-300 text-[13px] space-y-3 sm:space-y-0 font-bold">
          <p>© 2026 Azusa Hotels and Apartments. All rights reserved.</p>
          <p className="tracking-wide text-center sm:text-right text-gray-200">
            Plot 1067, Mabushi District, Ahmadu Bello Way, Opposite Varuna, Abuja, FCT.
          </p>
        </div>

      </div>
    </footer>
  );
};