// "use client";

// import React from 'react';
// import { NewsCategoryItem } from '../../app/types/meetings';

// export const AboutNews: React.FC = () => {
//   const newsCategories: NewsCategoryItem[] = [
//     { id: "n1", title: "New and Upcoming Hotels" },
//     { id: "n2", title: "Press Releases" },
//     { id: "n3", title: "Newsletter" }
//   ];

//   return (
//     <section className="w-full bg-[#FCFBF9] py-14 md:py-20 flex flex-col items-center">
//       <div className="w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col items-start text-left max-w-5xl">
        
//         <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 tracking-tight mb-10 select-none">
//           Latest News
//         </h3>

//         {/* Horizontal Card Row List Grid Tracks Layout */}
//         <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {newsCategories.map((item) => (
//             <div 
//               key={item.id} 
//               className="bg-white border border-gray-100 p-6 h-36 flex flex-col justify-between shadow-xs rounded-xl hover:shadow-md hover:border-stone-200 transition-all cursor-pointer relative group overflow-hidden"
//             >
//               <h4 className="text-sm font-bold text-stone-900 tracking-wide pr-4 group-hover:text-[#4A0A15] transition-colors leading-snug">
//                 {item.title}
//               </h4>
              
//               {/* Micro interactive indicator vector */}
//               <div className="text-stone-400 group-hover:text-[#4A0A15] transition-colors self-end select-none">
//                 <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };
