// components/MenuGridMatrix.tsx
import React from 'react';

export default function MenuGridMatrix() {
  const menuListItems = [
    {
      title: 'Maitama Harvest Salad',
      category: 'Starters / Organic Fields',
      price: '₦14,500',
      image: 'img/menu-1.webp ',
    },
    {
      title: 'Sovereign Garlic Meatballs',
      category: 'Small Plates / Appetizers',
      price: '₦22,000',
      image: 'img/menu-1.webp ',
    },
    {
      title: 'Prime Aged Ribeye Steak',
      category: 'Main Entrées / Charred Cuts',
      price: '₦68,000',
      image: 'img/menu-1.webp ',
    },
    {
      title: 'Signature Berry Tartlet',
      category: 'Confections / Sweet Terminus',
      price: '₦12,500',
     image: 'img/menu-1.webp ',
    },
  ];

  return (
    <section className="w-full bg-[#0A0A0C] py-6 md:py-8 flex flex-col items-center">
      <div className="w-full max-w-[1400px] px-6 flex flex-col items-center">
        
        {/* Layout Centered Section Header Block */}
        <div className="text-center max-w-2xl mb-16">
          <h3 className="text-3xl md:text-4xl font-normal text-white font-serif tracking-tight mb-4 uppercase">
            Vita Rio Menu
          </h3>
          <p className="text-stone-400 text-xs md:text-sm font-normal leading-relaxed max-w-md mx-auto">
            Bringing the warmth of an elite home kitchen straight to your family's table. Every plate is a masterclass in rich flavors, fresh local ingredients, and premium culinary artistry.
          </p>
        </div>

        {/* 4-Column High-Density Product Grid Track Matrix */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12">
          {menuListItems.map((dish, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col bg-[#111113] border border-stone-900/60 p-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-2xl hover:border-stone-800 transition-all duration-500"
            >
              {/* Product Visual Container Image block */}
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-stone-950 rounded-lg mb-6 isolate">
                <img 
                  src={dish.image} 
                  alt={dish.title} 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out filter brightness-[0.9]"
                />
              </div>

              {/* Text Meta Content Stack Area Description */}
              <div className="flex flex-col text-left flex-grow">
                <span className="text-[9px] font-extrabold text-stone-500 tracking-wider uppercase block mb-1">
                  {dish.category}
                </span>
                <h4 className="text-sm font-bold text-white tracking-wide leading-snug font-serif mb-3 group-hover:text-[#E5C07B] transition-colors">
                  {dish.title}
                </h4>
                <div className="w-full h-px bg-stone-900 mb-4 mt-auto" />
                
                {/* Price block parameters matrix footer line */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-black text-[#E5C07B] font-mono">
                    {dish.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
