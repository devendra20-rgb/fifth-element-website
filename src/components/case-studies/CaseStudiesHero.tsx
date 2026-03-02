"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function CaseStudiesHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-center items-center text-center py-32 px-6 md:px-20 lg:px-32 ">
      
      {/* Background Neon Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#6900CC]/10 to-black" />
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#6900CC]/20 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#39B14A]/15 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#39B14A] uppercase tracking-[0.4em] text-sm md:text-base font-black mb-6"
        >
          Proven Success
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[1] mb-8 md:mb-12 text-white uppercase"
        >
          Real Impact, <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#6900CC] via-white to-[#39B14A] bg-clip-text text-transparent">
            Measurable Results
          </span>
        </motion.h1>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center justify-center border-t border-white/10 pt-12">
          <div className="text-center">
            <h4 className="text-3xl md:text-6xl font-black text-white">50+</h4>
            <p className="text-[#39B14A] text-xs md:text-sm font-bold uppercase tracking-widest mt-2">Projects Delivered</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl md:text-6xl font-black text-white">2.5X</h4>
            <p className="text-[#6900CC] text-xs md:text-sm font-bold uppercase tracking-widest mt-2">Avg. ROI Boost</p>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <h4 className="text-3xl md:text-6xl font-black text-white">100%</h4>
            <p className="text-[#39B14A] text-xs md:text-sm font-bold uppercase tracking-widest mt-2">Client Success</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-20 bg-gradient-to-b from-[#6900CC] via-[#39B14A] to-transparent"></div>
      </div>
    </section>
  );
}