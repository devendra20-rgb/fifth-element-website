"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-center items-center text-center py-32 px-6 md:px-20 lg:px-32 ">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#6900CC]/10 to-black" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#6900CC]/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#39B14A]/10 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#39B14A] uppercase tracking-[0.4em] text-xs md:text-sm font-black mb-6"
        >
          ABOUT OUR COMPANY
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-8 md:mb-12 text-white uppercase"
        >
          Building the future of <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#6900CC] via-white to-[#39B14A] bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(105,0,204,0.3)]">
            performance & tech
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10 md:mb-14 font-medium"
        >
          We are a team of engineers, innovators, and strategists dedicated to unlocking hidden growth for businesses using next-generation solutions - without losing control.
        </motion.p>

        <motion.a
          href="#our-story"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#6900CC] to-[#39B14A] text-white text-lg md:text-xl font-black uppercase tracking-widest rounded-full shadow-2xl shadow-purple-900/30 transform hover:scale-105 transition-all duration-300 group"
        >
          Learn Our Story
          <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
        </motion.a>
      </div>
    </section>
  );
}