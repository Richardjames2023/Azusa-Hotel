"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LuX, LuUser, LuMail, LuPhone, LuFileText, LuPlaneTakeoff } from 'react-icons/lu';
import { BookingFormInput } from '../../app/types/booking';

interface BookingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomTitle: string;
  pricePerNight: number;
  currency: string;
}

export const BookingFormModal: React.FC<BookingFormModalProps> = ({ 
  isOpen, 
  onClose, 
  roomTitle, 
  pricePerNight, 
  currency 
}) => {
  // INITIALIZE NEXT.JS CLIENT ROUTER FOR RE-DIRECT PATHS
  const router = useRouter();

  const [formData, setFormData] = useState<BookingFormInput>({
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
    guestCount: 2,
    idType: 'passport',
    idNumber: '',
    airportTransfer: false,
  });

  const [nights, setNights] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormInput, string>>>({});

  // Trap body layout scroll paths cleanly when modal layers mount
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const nextErrors: typeof errors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = "Valid email address is required";
    if (!formData.phone.trim()) nextErrors.phone = "Phone coordinate line is required";
    if (!formData.idNumber.trim()) nextErrors.idNumber = "Identification number verification is required";
    
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate industrial API payment authorization gateway delay hooks safely
    await new Promise(resolve => setTimeout(resolve, 1800));
    setIsSubmitting(false);
    
    onClose();
    
    // REDIRECTS CLIENT SECURELY TO THE SEO-FRIENDLY THANK YOU PAGE
    router.push('/booking-confirmation');
  };

  const currencySymbol = currency === 'NGN' ? '₦' : '$';
  const transferCost = formData.airportTransfer ? 25000 : 0; 
  const totalPrice = (pricePerNight * nights) + transferCost;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md font-sans overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-3xl w-full flex flex-col relative my-8 shadow-2xl overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* UPPER TITLE CONTAINER STAGE */}
        <div className="bg-[#4A0A15] p-6 text-white flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black text-amber-400 tracking-[0.2em] uppercase block mb-1">Secure Checkout</span>
            <h2 className="text-xl md:text-2xl font-serif font-normal tracking-tight">{roomTitle}</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close booking checkout form"
          >
            <LuX className="w-5 h-5" />
          </button>
        </div>

        {/* FORMS MATRIX CONTENT WRAPPER */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Frame Form Column Inputs Fields */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xs font-black uppercase text-[#4A0A15] tracking-widest border-b border-gray-100 pb-1.5">Guest Information</h3>
              
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Full Name</label>
                <div className="relative flex items-center">
                  <LuUser className="absolute left-3 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className={`w-full h-11 pl-10 pr-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 ${errors.fullName ? 'border-red-500' : 'border-gray-200'}`}
                  />
                </div>
                {errors.fullName && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.fullName}</span>}
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Email Address</label>
                <div className="relative flex items-center">
                  <LuMail className="absolute left-3 w-4 h-4 text-gray-400" />
                  <input 
                    type="email" 
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full h-11 pl-10 pr-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                  />
                </div>
                {errors.email && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.email}</span>}
              </div>

              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Phone Line</label>
                <div className="relative flex items-center">
                  <LuPhone className="absolute left-3 w-4 h-4 text-gray-400" />
                  <input 
                    type="tel" 
                    placeholder="+234 916 068 3225"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full h-11 pl-10 pr-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                  />
                </div>
                {errors.phone && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.phone}</span>}
              </div>
            </div>

            {/* Right Frame Verification Credentials Fields */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xs font-black uppercase text-[#4A0A15] tracking-widest border-b border-gray-100 pb-1.5">Stay Settings</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Nights Duration</label>
                  <input 
                    type="number" 
                    min="1"
                    value={nights}
                    onChange={(e) => setNights(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full h-11 border border-gray-200 bg-gray-50/50 text-xs font-bold px-4 focus:outline-none focus:border-stone-800"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Total Occupants</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="6"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({...formData, guestCount: Math.max(1, parseInt(e.target.value) || 1)})}
                    className="w-full h-11 border border-gray-200 bg-gray-50/50 text-xs font-bold px-4 focus:outline-none focus:border-stone-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">ID Type</label>
                  <select 
                    value={formData.idType}
                    onChange={(e) => setFormData({...formData, idType: e.target.value as any})}
                    className="w-full h-11 border border-gray-200 bg-gray-50/50 text-xs font-bold px-3 focus:outline-none focus:border-stone-800 cursor-pointer"
                  >
                    <option value="passport">International Passport</option>
                    <option value="national_id">National ID Card</option>
                    <option value="driver_license">Drivers License</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Document Number</label>
                  <div className="relative flex items-center">
                    <LuFileText className="absolute left-3 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="A0023456"
                      value={formData.idNumber}
                      onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                      className={`w-full h-11 pl-10 pr-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 ${errors.idNumber ? 'border-red-500' : 'border-gray-200'}`}
                    />
                  </div>
                  {errors.idNumber && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.idNumber}</span>}
                </div>
              </div>

              {/* Add-on Amenities Checkboxes */}
              <div className="pt-2">
                <label className="flex items-center space-x-3 cursor-pointer select-none bg-stone-50 border border-stone-200/60 p-3">
                  <input 
                    type="checkbox" 
                    checked={formData.airportTransfer}
                    onChange={(e) => setFormData({...formData, airportTransfer: e.target.checked})}
                    className="w-4 h-4 accent-[#4A0A15] cursor-pointer"
                  />
                  <div className="flex items-center space-x-2 text-stone-800">
                    <LuPlaneTakeoff className="w-4 h-4 text-[#4A0A15]" />
                    <span className="text-xs font-bold uppercase tracking-wide">Request Airport Shuttle Transfer (+₦25,000)</span>
                  </div>
                </label>
              </div>

            </div>
          </div>

          {/* Bottom Custom Requests Area Box */}
          <div className="flex flex-col w-full">
            <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Special Requests or Preferences</label>
            <textarea 
              rows={2}
              placeholder="e.g. Early arrival request, structural dietary allergy tokens, high-floor suite configuration choice..."
              value={formData.specialRequests}
              onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
              className="w-full border border-gray-200 bg-gray-50/50 text-xs font-medium p-4 focus:outline-none focus:border-stone-800 resize-none"
            />
          </div>

          {/* REAL TIME PRICING DISPLAY MATRIX SHEET SUMMARY */}
          <div className="w-full bg-stone-50 border border-stone-100 p-4 mt-2 flex items-center justify-between">
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">Total Invoice Fee</span>
              <span className="text-2xl font-black font-serif text-[#4A0A15]">
                {currencySymbol}{totalPrice.toLocaleString()}
              </span>
            </div>
            <div className="text-right text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <span>{currencySymbol}{pricePerNight.toLocaleString()} × {nights} Nights</span>
              {formData.airportTransfer && <span className="block text-stone-700">+ Shuttle Included</span>}
            </div>
          </div>

          {/* Form Action Triggers Submission Control Pillar */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4A0A15] hover:bg-[#36070E] disabled:bg-stone-300 text-white font-extrabold text-xs tracking-widest uppercase py-4 transition-all shadow-md transform active:scale-[0.99] cursor-pointer"
          >
            {isSubmitting ? 'Authorizing Secure Booking Link...' : 'Confirm Secure Hotel Booking'}
          </button>

        </form>

      </div>
    </div>
  );
};
