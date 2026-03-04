"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-gray-100 relative overflow-hidden">
        {/* Success Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#39B14A]/10 rounded-full blur-3xl" />

        <div className="w-24 h-24 bg-[#39B14A]/10 text-[#39B14A] rounded-full flex items-center justify-center mx-auto mb-8 border border-[#39B14A]/20">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
          Message Sent!
        </h2>
        <p className="text-gray-500 text-lg mb-8 font-medium">
          Our strategy team will review your requirements and reach out within
          24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[#6900CC] font-black uppercase tracking-widest text-sm hover:text-[#39B14A] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100 grid lg:grid-cols-12">
        {/* Left Side: Contact Info - Dark Themed */}
        <div className="lg:col-span-4 bg-[#050505] p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-12 uppercase  leading-none tracking-tighter">
              Get in <br /> <span className="text-[#39B14A]">Touch</span>
            </h3>
            <div className="space-y-12">
              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[#6900CC] group-hover:bg-[#6900CC] group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">
                    Email Us
                  </p>
                  <p className="text-lg font-bold">hello@5thelement.agency</p>
                </div>
              </div>

              {/* Phone - Updated to XXX */}
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[#39B14A] group-hover:bg-[#39B14A] group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">
                    Call Us
                  </p>
                  <p className="text-lg font-bold">+971 XX XXX XXXX</p>
                </div>
              </div>

              {/* Office - Updated to Dubai Address */}
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[#6900CC] group-hover:bg-[#6900CC] group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">
                    Office
                  </p>
                  <p className="text-lg font-bold leading-tight">
                    Dubai Media City, Building 6 <br />
                    Al Sufouh, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form - Clean White */}
        <div className="lg:col-span-8 p-10 md:p-20 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#39B14A]/5 rounded-full blur-[100px]" />

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#6900CC]/20 focus:border-[#6900CC] outline-none transition-all font-bold text-gray-900"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                  Work Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@company.com"
                  className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#6900CC]/20 focus:border-[#6900CC] outline-none transition-all font-bold text-gray-900"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                  Company Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#6900CC]/20 focus:border-[#6900CC] outline-none transition-all font-bold text-gray-900"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                  Contact Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#6900CC]/20 focus:border-[#6900CC] outline-none transition-all font-bold text-gray-900"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                Interest Service
              </label>
              <div className="relative">
                <select className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#6900CC]/20 focus:border-[#6900CC] outline-none transition-all appearance-none cursor-pointer font-bold text-gray-900">
                  <option>Branding & Promotion</option>
                  <option>Activation & Events</option>
                  <option>Outdoor Advertising</option>
                  <option>Other / Multi-service</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#6900CC]">
                  ▼
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                How can we help?
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project requirements..."
                className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#6900CC]/20 focus:border-[#6900CC] outline-none transition-all resize-none font-bold text-gray-900"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-6 bg-black text-white font-black rounded-full hover:bg-gradient-to-r from-[#6900CC] to-[#39B14A] transition-all duration-500 flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-sm shadow-2xl hover:shadow-[#6900CC]/30"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
