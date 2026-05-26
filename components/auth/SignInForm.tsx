"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState({
    emailAddress: '',
    userPassword: '',
    rememberClient: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const validateForm = (): boolean => {
    const nextErrors: typeof errors = {};
    if (!formData.emailAddress.trim() || !/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      nextErrors.emailAddress = "Valid guest email address is required";
    }
    if (!formData.userPassword || formData.userPassword.length < 6) {
      nextErrors.userPassword = "Password must be at least 6 characters long";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate premium guest database authentication verification safely
    await new Promise(resolve => setTimeout(resolve, 1800));
    setIsSubmitting(false);

    alert(`Welcome back to Azusa Portal! Session authorized successfully.`);
  };

  return (
    <section className="w-full min-h-screen bg-white grid grid-cols-1 lg:grid-cols-12 items-stretch select-none font-sans">
      
      {/* LEFT COLUMN PANEL: Immersive Editorial Brand Frame (5/12 Width) */}
      <div className="hidden lg:flex lg:col-span-5 relative overflow-hidden bg-stone-900 flex-col justify-between p-12 text-[#F5E6C8] isolate">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Azusa Luxury Hotel Executive Lounge Interior" 
            className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A0A15]/40 via-transparent to-black/80" />
        </div>

        {/* Top Branding Section */}
        <div className="relative z-10 text-left">
          <Link href="/" className="text-3xl font-normal tracking-tight font-serif lowercase block">
            azüsa<span className="text-[10px] font-sans tracking-widest text-[#D4AF37] block -mt-1.5 uppercase font-bold pl-0.5">hotel</span>
          </Link>
        </div>

        {/* Middle Typography Section */}
        <div className="relative z-10 text-left max-w-sm mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight font-serif uppercase mb-4 leading-tight">
            Your Sanctuary <br /> Awaits You
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mb-4" />
          <p className="text-white/70 text-xs md:text-sm font-medium leading-relaxed tracking-wide">
            Access your secure executive guest account portal to customize upcoming stays, track active rewards, or request specialized concierge parameters.
          </p>
        </div>

        {/* Bottom Baseline Note */}
        <div className="relative z-10 text-left text-[11px] text-white/40 font-medium tracking-wide">
          © {new Date().getFullYear()} Azusa Hotels & Luxury Apartments.
        </div>
      </div>

      {/* RIGHT COLUMN PANEL: High-Precision Customer Credentials Input Matrix (7/12 Width) */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center px-6 sm:px-12 md:px-20 lg:px-24 bg-[#FCFBF9]">
        
        {/* Form Main Container Core Card */}
        <div className="w-full max-w-md bg-white border border-gray-100 p-8 md:p-10 shadow-xl rounded-none relative">
          
          <div className="flex flex-col items-start text-left mb-8 w-full border-b border-gray-50 pb-4">
            <span className="text-[10px] font-black text-[#4A0A15] tracking-[0.25em] uppercase block mb-1">Guest Portal</span>
            <h1 className="text-2xl font-serif font-normal text-stone-900 tracking-tight">Sign In to Azusa</h1>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            
            {/* Email Input Node */}
            <div className="flex flex-col w-full">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5 text-left">Email Address</label>
              <div className="relative flex items-center">
                {/* Inline SVG Email Icon */}
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

            {/* Password Input Node */}
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-700">Password</label>
                <Link href="/forgot-password" className="text-[10px] font-bold text-[#4A0A15] uppercase tracking-wider hover:underline">Forgot?</Link>
              </div>
              <div className="relative flex items-center">
                {/* Inline SVG Key Icon */}
                <svg className="absolute left-3 w-4 h-4 text-gray-400 z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  value={formData.userPassword}
                  onChange={(e) => setFormData({...formData, userPassword: e.target.value})}
                  className={`w-full h-11 pl-10 pr-12 border bg-gray-50/50 text-xs font-medium focus:outline-none focus:border-stone-800 rounded-none ${errors.userPassword ? 'border-red-500' : 'border-gray-200'}`}
                />
                {/* Toggle Password Concealment Trigger */}
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-400 hover:text-stone-700 focus:outline-none transition-colors cursor-pointer z-10 p-1"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.userPassword && <span className="text-[10px] text-red-500 font-bold mt-1 text-left">⚠️ {errors.userPassword}</span>}
            </div>

            {/* Remember Me Input Checkbox Row */}
            <div className="flex items-center justify-between w-full pt-1 select-none text-left">
              <label className="flex items-center space-x-2.5 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={formData.rememberClient}
                  onChange={(e) => setFormData({...formData, rememberClient: e.target.checked})}
                  className="w-4 h-4 accent-[#4A0A15] cursor-pointer"
                />
                <span className="text-xs font-semibold text-stone-600">Remember this device</span>
              </label>
            </div>

            {/* Submit Action Control */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#4A0A15] hover:bg-[#36070E] disabled:bg-stone-300 text-white font-extrabold text-xs tracking-widest uppercase py-4 transition-all shadow-md transform active:scale-[0.99] flex items-center justify-center space-x-2 rounded-none cursor-pointer mt-2"
            >
              <span>{isSubmitting ? 'Verifying Guest Account Securely...' : 'Sign In Portal'}</span>
            </button>

                       {/* Form Registration Alternative Links */}
            <div className="text-center text-xs font-medium text-gray-500 mt-4">
              Don&apos;t have an elite member account?{" "}
              <Link href="/register" className="text-[#4A0A15] font-bold hover:underline">
                Create Account
              </Link>
            </div>

          </form>
        </div>
      </div>

    </section>
  );
};
