"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-between items-center py-24 md:py-32 px-6 md:px-12 lg:px-16">
      
      {/* 🔥 THEME GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#6900CC]/10 to-black" />

        {/* Dynamic Neon Orbs */}
        <div className="absolute inset-0 opacity-50">
          {/* Purple Glow */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#6900CC]/20 rounded-full blur-[130px] animate-pulse" />
          
          {/* Green Glow */}
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#39B14A]/15 rounded-full blur-[110px] animate-pulse delay-1000" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Top Label - Green Theme */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#39B14A] uppercase tracking-[0.4em] text-sm md:text-base font-black mb-6"
        >
          Expertise & Solutions
        </motion.p>

        {/* Main headline - Purple to Green Gradient */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[1] mb-8 md:mb-12 text-white uppercase"
        >
          Impactful <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#6900CC] via-[#8b2fff] to-[#39B14A] bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(105,0,204,0.3)]">
            Solutions
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10 md:mb-14 font-medium"
        >
          From brand identity to performance growth, from on-ground activations
          to high-visibility outdoor advertising, 5th Element delivers
          end-to-end campaigns designed for <span className="text-white">measurable business impact.</span>
        </motion.p>

        {/* Button - Theme Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#branding"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#6900CC] to-[#39B14A] text-white text-lg md:text-xl font-black uppercase tracking-widest rounded-full shadow-[0_15px_40px_rgba(105,0,204,0.4)] transform hover:scale-105 transition-all duration-300 group"
          >
            Explore Our Services
            <span className="ml-3 group-hover:translate-x-2 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
        <div className="w-px h-20 bg-gradient-to-b from-[#39B14A] via-[#6900CC] to-transparent"></div>
      </div>
    </section>
  );
}