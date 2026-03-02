"use client";
import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-center items-center text-center py-32 px-6 md:px-20 lg:px-32 ">
      {/* 🔥 THEME GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#6900CC]/10 to-black" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#6900CC]/15 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#39B14A]/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#39B14A] font-black tracking-[0.5em] uppercase text-xs md:text-sm mb-6 block"
        >
          Work With Us
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1] uppercase tracking-tighter"
        >
          Build the <br />
          <span className="bg-gradient-to-r from-[#6900CC] via-white to-[#39B14A] bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(105,0,204,0.3)]">
            Future of Tech
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 leading-relaxed font-medium max-w-3xl mx-auto"
        >
          We’re looking for bold thinkers, relentless problem solvers, and 
          creative engineers to join our mission in redefining performance.
        </motion.p>
      </div>

      {/* Decorative Down-Line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
           <div className="w-px h-24 bg-gradient-to-b from-[#6900CC] via-[#39B14A] to-transparent"></div>
      </div>
    </section>
  );
}