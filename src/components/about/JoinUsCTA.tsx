"use client";

import React from "react";

export default function JoinUsCTA() {
  return (
    <section className="py-24 px-6 bg-black text-center border-t border-white/10 relative overflow-hidden">
      {/* Subtle glow background (hero jaisa) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/20 to-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">
          Want to Build the Future With Us?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          We're always searching for talented, curious, and driven people who want to solve real problems with cutting-edge technology.
        </p>

        <a
          href="/contact"
          className="inline-block px-10 py-5 bg-[#e30613] hover:bg-red-700 text-white text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Get in Touch →
        </a>
      </div>
    </section>
  );
}