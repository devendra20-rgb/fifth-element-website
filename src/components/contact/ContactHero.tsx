"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-center items-center text-center py-32 px-6 md:px-20 lg:px-32 ">
      {/* 🔥 THEME GLOW EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#6900CC]/10 to-black" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#6900CC]/20 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#39B14A]/15 rounded-full blur-[110px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Label */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#39B14A] uppercase tracking-[0.5em] text-xs md:text-sm font-black mb-6"
        >
          Contact Us
        </motion.p>

        {/* Headline - Purple to Green Gradient */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-9xl font-black text-white mb-8 leading-[1] uppercase tracking-tighter"
        >
          Let's Start <br />
          <span className="bg-gradient-to-r from-[#6900CC] via-white to-[#39B14A] bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(105,0,204,0.3)]">
            the Conversation
          </span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium italic"
        >
          "Expertise is just a message away. Reach out to discuss your goals."
        </motion.p>

        {/* Decorative Down-Line */}
        <div className="mt-16 flex flex-col items-center gap-4 opacity-40">
           <div className="w-px h-24 bg-gradient-to-b from-[#6900CC] via-[#39B14A] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}