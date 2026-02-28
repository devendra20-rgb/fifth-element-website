import React from 'react';

export default function CaseStudiesHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-between items-center text-center py-32 px-10 md:px-20 lg:px-32">
      
      {/* Background subtle effects - Consistent with About & Services */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/30 to-black" />
        
        {/* Orbital glows - Subtle Violet/Indigo palette */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        
        {/* Top Label */}
        <p className="text-indigo-500 uppercase tracking-[0.4em] text-sm md:text-base font-bold mb-6">
          Proven Success
        </p>

        {/* Main headline - Matching the Bold Heavyweight Style */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[1] mb-8 md:mb-12 text-white uppercase">
          Real Impact, <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-indigo-500 via-white to-indigo-400 bg-clip-text text-transparent">
            Measurable Results
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10 md:mb-14 font-medium italic">
          "From local startups to global enterprises, we’ve helped brands dominate their 
          respective markets through data-backed creativity."
        </p>

        {/* Stats Row - Case studies hero special addition */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center justify-center border-t border-white/10 pt-12">
          <div className="text-center">
            <h4 className="text-3xl md:text-5xl font-black text-white">50+</h4>
            <p className="text-indigo-400 text-xs md:text-sm uppercase tracking-widest mt-2">Projects Delivered</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl md:text-5xl font-black text-white">2.5X</h4>
            <p className="text-indigo-400 text-xs md:text-sm uppercase tracking-widest mt-2">Avg. ROI Boost</p>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <h4 className="text-3xl md:text-5xl font-black text-white">100%</h4>
            <p className="text-indigo-400 text-xs md:text-sm uppercase tracking-widest mt-2">Client Success</p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent"></div>
      </div>
    </section>
  );
}