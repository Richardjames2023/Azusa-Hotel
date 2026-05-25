"use client";

import React, { useState } from 'react';
import { LuBuilding, LuUser, LuMail, LuPhone, LuUsers, LuSend, LuInfo } from 'react-icons/lu';
import { CorporateContactInput } from '@/app/types/contact';

export const CorporateFormSection: React.FC = () => {
  const [formData, setFormData] = useState<CorporateContactInput>({
    companyName: '',
    contactName: '',
    businessEmail: '',
    phoneLine: '',
    enquiryType: 'corporate_booking',
    estimatedGuests: 10,
    messageDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof CorporateContactInput, string>>>({});

  const validateForm = (): boolean => {
    const nextErrors: typeof errors = {};
    if (!formData.contactName.trim()) nextErrors.contactName = "Contact name is required";
    if (!formData.businessEmail.trim() || !/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      nextErrors.businessEmail = "Valid business email address is required";
    }
    if (!formData.phoneLine.trim()) nextErrors.phoneLine = "Phone coordinate line is required";
    if (!formData.messageDetails.trim()) nextErrors.messageDetails = "Please specify your requirements";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate enterprise communication server API delay hooks safely
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Clear fields cleanly after submission
    setFormData({
      companyName: '',
      contactName: '',
      businessEmail: '',
      phoneLine: '',
      enquiryType: 'corporate_booking',
      estimatedGuests: 10,
      messageDetails: '',
    });
    
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

    return (
    <section className="w-full bg-[#FCFBF9] py-16 px-6 md:px-12 lg:px-16 flex flex-col items-center border-b border-stone-100">
      <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: Premium Editorial Info Plate (5/12 Width) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left lg:pr-6">
          <span className="text-[10px] font-black text-[#4A0A15] tracking-[0.25em] uppercase block mb-3">
            Corporate Relations
          </span>
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-stone-900 font-serif leading-tight mb-4">
            Boutique Enterprise <br />
            & Event Account Solutions
          </h1>
          <p className="text-stone-600 text-xs md:text-sm font-medium leading-relaxed tracking-wide mb-8 max-w-md">
            Partner with Azusa to unlock specialized corporate tariffs, priority luxury event configurations, and tailored executive stays in the Central Business District, Abuja. Submit your inquiry to initiate your custom arrangement.
          </p>

          <div className="w-full h-px bg-stone-200/60 my-6" />

          {/* Quick Info Parameters */}
          <div className="flex flex-col space-y-4 text-xs font-bold text-stone-500 uppercase tracking-wider">
            <div>📍 <span className="text-stone-800 ml-2">Ahmadu Bello Wy, Kado, Abuja, Federal Capital Territory</span></div>
            <div>📧 <span className="text-stone-800 ml-2">corporate@azusahotels.com</span></div>
            <div>📞 <span className="text-stone-800 ml-2">+234 916 068 3225</span></div>
          </div>
        </div>

        {/* RIGHT COLUMN: Stateful Production Booking Form Matrix Sheet (7/12 Width) */}
        <div className="lg:col-span-7 w-full bg-white border border-gray-100 p-6 md:p-10 shadow-xl relative overflow-hidden">
          
          {submitSuccess && (
            <div className="absolute inset-0 bg-white/95 z-30 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
              <svg className="w-12 h-12 text-emerald-600 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-bold text-stone-900 font-serif mb-1">Inquiry Sent Successfully</h3>
              <p className="text-xs text-gray-500 max-w-sm">Our corporate accounts team will review your parameters and follow up with a tailored itinerary matrix within 24 hours.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Company Name */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Company Name (Optional)</label>
                <div className="relative flex items-center">
                  <LuBuilding className="absolute left-3 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="e.g. Azusa Enterprise"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full h-11 pl-10 pr-4 border border-gray-200 bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800"
                  />
                </div>
              </div>

              {/* Contact Person Name */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Contact Name</label>
                <div className="relative flex items-center">
                  <LuUser className="absolute left-3 w-4 h-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    className={`w-full h-11 pl-10 pr-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 ${errors.contactName ? 'border-red-500' : 'border-gray-200'}`}
                  />
                </div>
                {errors.contactName && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.contactName}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Business Email */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Business Email</label>
                <div className="relative flex items-center">
                  <LuMail className="absolute left-3 w-4 h-4 text-gray-400" />
                  <input 
                    type="email" 
                    placeholder="johndoe@company.com"
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({...formData, businessEmail: e.target.value})}
                    className={`w-full h-11 pl-10 pr-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 ${errors.businessEmail ? 'border-red-500' : 'border-gray-200'}`}
                  />
                </div>
                {errors.businessEmail && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.businessEmail}</span>}
              </div>

              {/* Phone line number */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Phone Line</label>
                <div className="relative flex items-center">
                  <LuPhone className="absolute left-3 w-4 h-4 text-gray-400" />
                  <input 
                    type="tel" 
                    placeholder="+234 916 068 3225"
                    value={formData.phoneLine}
                    onChange={(e) => setFormData({...formData, phoneLine: e.target.value})}
                    className={`w-full h-11 pl-10 pr-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 ${errors.phoneLine ? 'border-red-500' : 'border-gray-200'}`}
                  />
                </div>
                {errors.phoneLine && <span className="text-[10px] text-red-500 font-bold mt-1">⚠️ {errors.phoneLine}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Enquiry Type Dropdown Selector */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">Request Type</label>
                <div className="relative flex items-center">
                 <LuInfo className="absolute left-3 w-4 h-4 text-gray-400 z-10" />
                  <select 
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({...formData, enquiryType: e.target.value as any})}
                    className="w-full h-11 pl-10 pr-4 border border-gray-200 bg-gray-50/50 text-xs font-bold focus:outline-none focus:border-stone-800 cursor-pointer appearance-none relative z-0"
                  >
                    <option value="corporate_booking">Corporate Bulk Booking Rates</option>
                    <option value="event_space">Luxury Meeting & Event Venues</option>
                    <option value="partnership">Brand & Commercial Partnership</option>
                    <option value="general">General Executive Support Inquiries</option>
                  </select>
                </div>
              </div>

              {/* Estimated Guests Count Input */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Estimated Delegates / Occupants
                </label>
                <div className="relative flex items-center">
                  <LuUsers className="absolute left-3 w-4 h-4 text-gray-400" />
                  <input 
                    type="number" 
                    min="1"
                    value={formData.estimatedGuests}
                    onChange={(e) => setFormData({
                      ...formData, 
                      estimatedGuests: Math.max(1, parseInt(e.target.value) || 1)
                    })}
                    className="w-full h-11 pl-10 pr-4 border border-gray-200 bg-gray-50/50 text-xs font-bold focus:outline-none focus:border-stone-800"
                  />
                </div>
              </div>
            </div>

            {/* Requirement Details Textarea */}
            <div className="flex flex-col w-full">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Inquiry Specifications
              </label>
              <textarea 
                rows={4}
                placeholder="Please describe your event timelines, required suite allocations, workspace amenities preferences, or specific concierge assistance vectors..."
                value={formData.messageDetails}
                onChange={(e) => setFormData({
                  ...formData, 
                  messageDetails: e.target.value
                })}
                className={`w-full border text-xs font-medium p-4 focus:outline-none focus:border-stone-800 bg-gray-50/50 resize-none ${
                  errors.messageDetails ? 'border-red-500' : 'border-gray-200'
                }`}
              />
              {errors.messageDetails && (
                <span className="text-[10px] text-red-500 font-bold mt-1">
                  ⚠️ {errors.messageDetails}
                </span>
              )}
            </div>

            <button type="submit" disabled={isSubmitting} className="self-start bg-[#4A0A15] hover:bg-[#36070E] text-white font-extrabold text-xs tracking-widest uppercase px-8 py-3.5 shadow-sm transition-colors duration-200 transform active:scale-98 rounded-none cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <LuSend className="w-4 h-4 animate-pulse" />
                  Sending...
                </>
              ) : (
                <>
                  <LuSend className="w-4 h-4" />
                  Submit Inquiry
                </>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
