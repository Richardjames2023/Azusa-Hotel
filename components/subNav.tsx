"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface SubNavItem {
  label: string;
  href: string;
}

export default function SubNav() {
  const router = useRouter();
  const pathname = usePathname();

  const subnavItems: SubNavItem[] = [
    { label: "Overview", href: "/" },
    { label: "Rooms", href: "/rooms" },
    { label: "Services", href: "/services" },
    { label: "Dining", href: "/restaurant" },
    { label: "Meetings & Events", href: "/meetings-events" },
    { label: "Blog", href: "/blog" },
    { label: "foods & Menu", href: "/menu" },
    { label: "Deals", href: "/deals" },
    { label: "About", href: "/about" },
    { label: "Nearby Attractions", href: "/explore" },
    { label: "Contact", href: "/contact" },
  ];

  const handleCtaClick = () => {
    router.push("/");
  };

  return (
    <section className="bg-[#4a0a15] border-b border-[#300508] sticky top-0 z-40 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-between">
        {/* Navigation Items Area */}
        <div className="flex flex-1 items-center overflow-x-auto scrollbar-hide py-3 space-x-1 sm:space-x-2 mr-4">
          {subnavItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[#4a0a0c] shadow-sm transform scale-105 font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Area */}
        <div className="py-3 flex-shrink-0">
          <button
            onClick={handleCtaClick}
            className="bg-[#d4b58e] hover:bg-[#c4a37a] text-[#4a0a0c] px-6 sm:px-8 py-2 md:py-2.5 rounded-full text-sm font-bold tracking-widest transition-all hover:shadow-lg uppercase transform hover:-translate-y-0.5"
          >
            Home
          </button>
        </div>
      </div>
    </section>
  );
}
