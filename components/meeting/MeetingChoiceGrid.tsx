import React from 'react';
import Link from 'next/link';

export const MeetingChoiceGrid: React.FC = () => {
  const pillars = [
    { title: "Transparent & trustworthy", desc: "Our proposals are simple to follow so you always know what to expect, with no unwanted surprises or hidden costs." },
    { title: "Industry focused", desc: "We have a long, proven track record of delivering successful meetings across many specialist sectors. We hand-pick the perfect properties based on specific criteria required by each individual industry." },
    { title: "Enabling creativity", desc: "We offer a choice of blank canvas spaces that can be transformed into immersive events. As local experts, we can help create the memorable big picture imagined by our M&E partners." }
  ];

  const eventTypes = [
    "Press conferences", "Company retreats", "Business conferences", "Award ceremonies",
    "Public lectures and Academic Seminars", "Annual general meetings (AGMs)", "Workshops and training sessions",
    "Networking events", "Board meetings", "Product launches", "Corporate seminars", "... And More"
  ];

  const features = [
    "100-Person Sitting Capacity", "Best payment rates", "Instant booking confirmation",
    "Writing Pads, pens, and pencils", "Smart LED Screen and Projector", "High-Speed Wi-Fi",
    "Sweets, mints, and candy", "Public Address System & Private Cafe Lounge"
  ];

  const updates = [
    { title: "New and Upcoming Hotels", href: "/news/upcoming" },
    { title: "Press Releases", href: "/news/press" },
    { title: "Newsletter", href: "/news/newsletter" }
  ];

  return (
    <div className="w-full bg-white py-16 px-6 lg:px-12 font-sans flex flex-col items-center border-b border-gray-100">
      <div className="w-full max-w-[1440px] flex flex-col space-y-16">
        
        {/* Core Differentiation Proposition Grid Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900 mb-2">Why Choose Azusa Meeting & Event Spaces?</h2>
          <p className="text-xs md:text-[13px] font-bold text-gray-400 uppercase tracking-widest mb-10 border-b border-gray-100 pb-4">
            Azusa offers a range of meeting and event facilities that sit up to a hundred people. Our spaces are designed for productivity, privacy, and professional gatherings. Each space is equipped with modern technology and supported by a team that ensures every session runs smoothly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="flex flex-col space-y-3 bg-[#FCFBF9] border border-gray-200/50 p-6 rounded-xl shadow-xs hover:shadow-md transition-shadow">
                <h4 className="text-[15px] font-bold text-stone-900 tracking-tight">{p.title}</h4>
                <p className="text-xs md:text-[13px] text-gray-500 font-medium leading-relaxed tracking-wide">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Events Hosted & Offers Matrix */}
        <div className="border-t border-gray-100 pt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sub-Column: What Events Do We Host? */}
          <div className="lg:col-span-6 bg-[#FCFBF9] border border-gray-200/60 p-8 rounded-2xl shadow-xs">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 tracking-tight mb-6 font-serif">
              What Events Do We Host?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-4 text-xs md:text-[13px] font-bold text-gray-600 tracking-wide">
              {eventTypes.map((event, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <span className="text-[#4A0A15] text-[10px]">■</span>
                  <span className={event === "... And More" ? "text-[#4A0A15] italic" : ""}>{event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sub-Column: What We Offer & Call To Action */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full bg-[#F4F4F6] border border-stone-200/40 p-8 rounded-2xl shadow-xs">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-stone-900 tracking-tight mb-6 font-serif">
                What We Offer
              </h3>
              <ul className="flex flex-col space-y-3 mb-8 text-xs md:text-[13px] font-bold text-gray-700 tracking-wide">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="text-[#4A0A15] text-sm">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CTA Button Block */}
            <Link 
              href="/bookings" 
              className="w-full sm:w-fit text-center bg-[#4A0A15] text-white px-8 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-widest hover:bg-[#32060E] transition-all shadow-md hover:shadow-lg transform active:scale-[0.98]"
            >
              Book a Space Now
            </Link>
          </div>

        </div>

        {/* Lower Matrix: Corporate Updates Block Sheet Grid */}
        <div className="border-t border-gray-100 pt-14">
          <h2 className="text-xl font-bold tracking-tight text-stone-900 mb-8 font-serif">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {updates.map((item, idx) => (
              <div key={idx} className="bg-[#F4F4F6] border border-stone-200/40 p-6 rounded-xl flex flex-col justify-between h-44 shadow-xs transform transition-transform duration-300 hover:-translate-y-1">
                <h4 className="text-base font-bold text-stone-900 tracking-tight leading-snug">{item.title}</h4>
                <Link href={item.href} className="text-[#4A0A15] text-[11px] font-extrabold uppercase tracking-widest hover:underline inline-flex items-center">
                  <span>SEE MORE</span>
                  <span className="ml-1 text-[9px]">➔</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};