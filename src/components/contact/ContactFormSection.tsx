"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // SMTP logic yahan add karein (fetch calling /api/send-email)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-gray-100">
        <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-4">Message Sent!</h2>
        <p className="text-gray-600 mb-8">Our strategy team will review your requirements and reach out within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="text-indigo-600 font-bold hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 grid lg:grid-cols-12">
        
        {/* Left Side: Contact Info */}
        <div className="lg:col-span-4 bg-[#0f172a] p-10 md:p-16 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-black mb-8 uppercase italic">Get in <br />Touch</h3>
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-indigo-600/20 rounded-xl text-indigo-400"><Mail /></div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-bold">hello@fifthelement.com</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="p-3 bg-indigo-600/20 rounded-xl text-indigo-400"><Phone /></div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-lg font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="p-3 bg-indigo-600/20 rounded-xl text-indigo-400"><MapPin /></div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Office</p>
                  <p className="text-lg font-bold">Tech Park, Sector 62, <br />Noida, UP - 201301</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-800">
             <p className="text-gray-500 text-sm font-medium">Follow our journey on social media for latest updates.</p>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="lg:col-span-8 p-10 md:p-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
                <input required type="email" placeholder="john@company.com" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Company Name</label>
                <input required type="text" placeholder="Acme Corp" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Contact Number</label>
                <input required type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Interest Service</label>
              <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all appearance-none cursor-pointer">
                <option>Branding & Promotion</option>
                <option>Activation & Events</option>
                <option>Outdoor Advertising</option>
                <option>Other / Multi-service</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">How can we help?</label>
              <textarea rows={4} placeholder="Tell us about your project requirements..." className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-indigo-600 text-white font-black rounded-full hover:bg-[#0f172a] transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-xl shadow-indigo-600/20">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}