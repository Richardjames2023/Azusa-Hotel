"use client";

import React from "react";

export const ContactMap: React.FC = () => {
  return (
    <section className="w-full h-[450px] relative overflow-hidden border-t border-stone-200/60 shadow-inner">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.728838380924!2d7.4525644!3d9.088448399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b004f5aaa51%3A0x7aaaf10acd2abb44!2sLos%20Angeles%20Event%20Center%20%26%20Mall!5e0!3m2!1sen!2sng!4v1779718196552!5m2!1sen!2sng"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Azusa Hotels Location Map"
      />
    </section>
  );
};