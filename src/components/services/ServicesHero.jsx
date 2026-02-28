import React from 'react';

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-between items-center text-center py-32 px-10 md:px-20 lg:px-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/20 to-black" />
        
        {/* Subtle Indigo orbital/particle glows */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        
        {/* Top Label - Matching AboutHero but Indigo accent */}
        <p className="text-indigo-500 uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6">
          Expertise & Solutions
        </p>

        {/* Main headline - White + Indigo gradient */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-8 md:mb-12 text-white uppercase">
          Impactful Solutions <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-white bg-clip-text text-transparent">
            For Modern Brands
          </span>
        </h1>

        {/* Subheadline - Matching text-lg/2xl and gray-300 from AboutHero */}
        <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10 md:mb-14 font-medium">
          From digital identity to physical presence, we provide end-to-end 
          advertising ecosystems designed for high-performance growth — powered by precision.
        </p>

        <a
          href="#branding"
          className="inline-flex items-center px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white text-lg md:text-xl font-bold rounded-full shadow-2xl shadow-indigo-900/40 transform hover:scale-105 transition-all duration-300 group"
        >
          Explore Our Services
          <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <div className="w-px h-16 bg-gradient-to-b from-indigo-500 to-transparent"></div>
      </div>
    </section>
  );
}