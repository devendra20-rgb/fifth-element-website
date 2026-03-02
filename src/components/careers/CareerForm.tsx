"use client";
import React, { useState } from "react";
import { Send, Upload, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CareerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/send-email", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Please try again later. Something went wrong.");
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-gray-100 relative overflow-hidden">
        {/* Success Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#39B14A]/10 rounded-full blur-3xl" />
        
        <div className="w-24 h-24 bg-[#39B14A]/10 text-[#39B14A] rounded-full flex items-center justify-center mx-auto mb-8 border border-[#39B14A]/20">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
          Application Received!
        </h2>
        <p className="text-gray-500 text-lg mb-8 font-medium">
          Thank you for your interest. Our talent acquisition team will review 
          your profile and get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[#6900CC] font-black uppercase tracking-widest text-sm hover:text-[#39B14A] transition-colors"
        >
          Apply for another role
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 md:p-20 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden">
      {/* Decorative Corner Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#6900CC]/5 rounded-full blur-[80px]" />
      
      <div className="mb-16 relative z-10">
        <span className="text-[#6900CC] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Joining 5th Element</span>
        <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-4 uppercase tracking-tighter italic">
          Apply Now
        </h2>
        <p className="text-gray-400 text-lg font-medium">
          Fill out the details below and attach your latest CV.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Name */}
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6900CC]/20 focus:border-[#6900CC] transition-all font-bold text-gray-900"
            />
          </div>

          {/* Phone */}
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              Phone Number
            </label>
            <input
              required
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6900CC]/20 focus:border-[#6900CC] transition-all font-bold text-gray-900"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
            Email Address
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="john@example.com"
            className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6900CC]/20 focus:border-[#6900CC] transition-all font-bold text-gray-900"
          />
        </div>

        {/* Position Selection */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
            Interested Position
          </label>
          <div className="relative">
            <select
              name="position"
              className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#6900CC]/20 focus:border-[#6900CC] transition-all appearance-none cursor-pointer font-bold text-gray-900"
            >
              <option>Creative Designer</option>
              <option>Backend Developer (Next.js/Node)</option>
              <option>Marketing Strategist</option>
              <option>Account Manager</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#6900CC]">
               ▼
            </div>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
            Resume / CV (PDF)
          </label>
          <div className="relative group">
            <input
              required
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
            />
            <div className="w-full px-8 py-12 border-2 border-dashed border-gray-100 rounded-[2.5rem] bg-gray-50 flex flex-col items-center justify-center group-hover:border-[#6900CC]/30 group-hover:bg-[#6900CC]/5 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Upload className="w-8 h-8 text-[#6900CC]" />
              </div>
              <p className="text-gray-500 font-black uppercase text-xs tracking-widest">
                Upload Resume
              </p>
              <p className="text-[10px] text-gray-400 mt-2 uppercase">PDF, DOC up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-6 bg-black text-white font-black rounded-full hover:bg-gradient-to-r from-[#6900CC] to-[#39B14A] shadow-2xl hover:shadow-[#6900CC]/30 transition-all duration-500 flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-sm"
        >
          Submit Application <Send size={18} />
        </button>
      </form>
    </div>
  );
}