"use client";
import React, { useState } from "react";
import { Send, Upload, CheckCircle } from "lucide-react";

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
      <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-gray-100">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-4">
          Application Received!
        </h2>
        <p className="text-gray-600 mb-8">
          Thank you for your interest. Our talent acquisition team will review
          your profile and get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-indigo-600 font-bold hover:underline"
        >
          Apply for another role
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-[#0f172a] mb-2 uppercase italic">
          Apply Now
        </h2>
        <p className="text-gray-500">
          Fill out the details below and attach your latest CV.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">
              Full Name
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">
              Phone Number
            </label>
            <input
              required
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">
            Email Address
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="john@example.com"
            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Position Selection */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">
            Interested Position
          </label>
          <select
            name="position"
            className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none cursor-pointer"
          >
            <option>Creative Designer</option>
            <option>Backend Developer (Next.js/Node)</option>
            <option>Marketing Strategist</option>
            <option>Account Manager</option>
          </select>
        </div>

        {/* Resume Upload */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">
            Resume / CV (PDF)
          </label>
          <div className="relative group">
            <input
              required
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="w-full px-6 py-8 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50 flex flex-col items-center justify-center group-hover:border-indigo-400 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 group-hover:text-indigo-600 mb-2 transition-colors" />
              <p className="text-gray-500 font-medium">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-400 mt-1">PDF, DOC up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-5 bg-[#0f172a] text-white font-black rounded-full hover:bg-indigo-600 shadow-xl shadow-indigo-900/10 transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
        >
          Submit Application <Send size={20} />
        </button>
      </form>
    </div>
  );
}
