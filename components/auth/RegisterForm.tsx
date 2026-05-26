"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneLine: '',
    userPassword: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const validateForm = (): boolean => {
    const nextErrors: typeof errors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!formData.emailAddress.trim() || !/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      nextErrors.emailAddress = "Valid email address is required";
    }
    if (!formData.phoneLine.trim()) nextErrors.phoneLine = "Phone number is required";
    if (!formData.userPassword || formData.userPassword.length < 6) {
      nextErrors.userPassword = "Password must be at least 6 characters long";
    }
    if (formData.userPassword !== formData.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeToTerms) {
      nextErrors.agreeToTerms = "You must agree to the luxury terms framework";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);
  await new Promise(resolve => setTimeout(resolve, 1500));
  setIsSubmitting(false);

  router.push('/registration-success');
};
  return (
    <section className="w-full min-h-screen bg-white grid grid-cols-1 lg:grid-cols-12 items-stretch select-none font-sans">
      
      {/* LEFT COLUMN PANEL: Immersive Editorial Brand Frame (5/12 Width) */}
      <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden bg-stone-900 flex-col justify-between p-12 text-[#F5E6C8] isolate">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Azusa Luxury Hotel Suite Entrance" 
            className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A0A15]/40 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 text-left">
          <Link href="/" className="text-3xl font-normal tracking-tight font-serif lowercase block">
            azüsa<span className="text-[10px] font-sans tracking-widest text-[#D4AF37] block -mt-1.5 uppercase font-bold pl-0.5">hotel</span>
          </Link>
        </div>

        <div className="relative z-10 text-left max-w-sm mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight font-serif uppercase mb-4 leading-tight">
            Join The <br /> Elite Circle
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mb-4" />
          <p className="text-white/70 text-xs md:text-sm font-medium leading-relaxed tracking-wide">
            Create your personalized hospitality account token to unlock preferred member-only booking frameworks and complimentary concierge upgrades across Abuja.
          </p>
        </div>

        <div className="relative z-10 text-left text-[11px] text-white/40 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Azusa Hotels & Luxury Apartments.
        </div>
      </div>

      {/* RIGHT COLUMN PANEL: Account Creation Input Matrix (7/12 Width) */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 lg:px-24 bg-[#FCFBF9] py-12 lg:py-0">
        
        <div className="w-full max-w-md bg-white border border-gray-100 p-8 md:p-10 shadow-xl rounded-none relative">
          
          <div className="flex flex-col items-start text-left mb-6 w-full border-b border-gray-50 pb-4">
            <span className="text-[10px] font-black text-[#4A0A15] tracking-[0.25em] uppercase block mb-1">Registration Portal</span>
            <h1 className="text-2xl font-serif font-normal text-stone-900 tracking-tight">Create Guest Account</h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            
            {/* Full Name Input */}
            <div className="flex flex-col w-full">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 text-left">Full Name</label>
              <div className="relative flex items-center">
                <svg className="absolute left-3 w-4 h-4 text-gray-400 z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className={`w-full h-11 pl-10 pr-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 rounded-none ${errors.fullName ? 'border-red-500' : 'border-gray-200'}`}
                />
              </div>
              {errors.fullName && <span className="text-[10px] text-red-500 font-bold mt-1 text-left">⚠️ {errors.fullName}</span>}
            </div>

            {/* Email Address Input */}
            <div className="flex flex-col w-full">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 text-left">Email Address</label>
              <div className="relative flex items-center">
                <svg className="absolute left-3 w-4 h-4 text-gray-400 z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h-3a2 2 0 01-2-2V7a2 2 0 012-2h3a2 2 0 012 2v10a2 2 0 01-2 2z" />
                </svg>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({...formData, emailAddress: e.target.value})}
                  className={`w-full h-11 pl-10 pr-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 rounded-none ${errors.emailAddress ? 'border-red-500' : 'border-gray-200'}`}
                />
              </div>
              {errors.emailAddress && <span className="text-[10px] text-red-500 font-bold mt-1 text-left">⚠️ {errors.emailAddress}</span>}
            </div>

            {/* Phone Line Input */}
            <div className="flex flex-col w-full">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 text-left">Phone Number</label>
              <div className="relative flex items-center">
                <svg className="absolute left-3 w-4 h-4 text-gray-400 z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <input 
                  type="tel" 
                  placeholder="+234 916 068 3225"
                  value={formData.phoneLine}
                  onChange={(e) => setFormData({...formData, phoneLine: e.target.value})}
                  className={`w-full h-11 pl-10 pr-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 rounded-none ${errors.phoneLine ? 'border-red-500' : 'border-gray-200'}`}
                />
              </div>
              {errors.phoneLine && <span className="text-[10px] text-red-500 font-bold mt-1 text-left">⚠️ {errors.phoneLine}</span>}
            </div>

            {/* Password Fields Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 text-left">Password</label>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  value={formData.userPassword}
                  onChange={(e) => setFormData({...formData, userPassword: e.target.value})}
                  className={`w-full h-11 px-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 rounded-none ${errors.userPassword ? 'border-red-500' : 'border-gray-200'}`}
                />
                {errors.userPassword && <span className="text-[10px] text-red-500 font-bold mt-1 text-left">⚠️ {errors.userPassword}</span>}
              </div>
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 text-left">Confirm Password</label>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className={`w-full h-11 px-4 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 rounded-none ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'}`}
                />
                {errors.confirmPassword && (
                  <span className="text-[10px] text-red-500 font-bold mt-1 text-left">
                    ⚠️ {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex flex-col items-start w-full pt-1 select-none text-left">
              <label className="flex items-center space-x-2.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="w-4 h-4 accent-[#4A0A15] cursor-pointer"
                />
                <span className="text-xs font-semibold text-stone-600">
                  I accept the luxury terms & hospitality clauses
                </span>
              </label>
              {errors.agreeToTerms && (
                <span className="text-[10px] text-red-500 font-bold mt-1">
                  ⚠️ {errors.agreeToTerms}
                </span>
              )}
            </div>

            {/* Submit Action Control */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#4A0A15] hover:bg-[#36070E] disabled:bg-stone-300 text-white font-extrabold text-xs tracking-widest uppercase py-4 transition-all shadow-md transform active:scale-[0.99] flex items-center justify-center space-x-2 rounded-none cursor-pointer mt-2"
            >
              <span>{isSubmitting ? 'Registering Core Credentials...' : 'Create Account'}</span>
            </button>

            {/* Form Alternative Sign-In Option Link */}
            <div className="text-center text-xs font-medium text-gray-500 mt-2">
              Already have an elite account?{" "}
              <Link href="/signin" className="text-[#4A0A15] font-bold hover:underline">
                Sign In
              </Link>
            </div>

          </form>
        </div>
      </div>

    </section>
  );
};
