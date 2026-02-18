"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ValueProposition = () => {
  const cards = [
    {
      label: "FIRST-PARTY ADVERTISING",
      title: "Start with what you own",
      desc: "Use your strongest customer signals to spot what’s working, predict what’s next, reach new buyers, win better inventory, and deliver creative that drives action.",
      glow: "rgba(227, 6, 19, 0.1)"
    },
    {
      label: "FIRST-PARTY ADVERTISING",
      title: "Start with what you own",
      desc: "Use your strongest customer signals to spot what’s working, predict what’s next, reach new buyers, win better inventory, and deliver creative that drives action.",
      glow: "rgba(227, 6, 19, 0.1)"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Exact Header Alignment - Image 8 */}
        <div className="text-center mb-20">
          <h2 className="text-[42px] md:text-[56px] font-[900] tracking-[-0.03em] text-[#1a1a1a] leading-[1.1] mb-8">
            First-Party Advertising <br />
            + Deep Learning <br />
            = <span className="text-[#e30613]">a new class of performanced</span>
          </h2>
          <p className="text-[18px] text-[#5a5a5a] max-w-2xl mx-auto font-medium">
            No need to replace your tools. We plug in and strengthen what you already run.
          </p>
        </div>

        {/* Horizontal Container with Snap Effect */}
        <div 
          className="flex gap-10 overflow-x-auto pb-16 px-4 md:px-20 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0.5, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="min-w-[85vw] md:min-w-[1100px] flex flex-col md:flex-row bg-white rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-[#f0f0f0] overflow-hidden snap-center relative group"
            >
              {/* Soft White Shadow Overlay for non-focused cards */}
              <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-all duration-500 pointer-events-none z-30" />

              {/* Left Side: Black Animation (Image 11 style) */}
              <div className="w-full md:w-[46%] bg-black relative min-h-[450px] flex items-center justify-center overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-40" 
                  style={{ background: `radial-gradient(circle at center, ${card.glow} 0%, transparent 70%)` }} 
                />
                
                {/* Engine UI */}
                <div className="relative z-10 w-[70%] h-[50%] border border-white/10 rounded-3xl bg-white/[0.02] backdrop-blur-md flex flex-col items-center justify-center gap-6">
                   <div className="flex gap-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-1.5 h-12 bg-[#e30613] rounded-full opacity-50 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                   </div>
                   <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">DEEP LEARNING ENGINE</p>
                </div>
              </div>

              {/* Right Side: Content Area (Pure White) */}
              <div className="w-full md:w-[54%] p-12 md:p-20 flex flex-col justify-center bg-white">
                <p className="text-[#e30613] font-[900] uppercase tracking-[0.25em] text-[11px] mb-8">
                  {card.label}
                </p>
                <h3 className="text-[36px] md:text-[48px] font-[900] text-[#1a1a1a] mb-8 leading-[1.1] tracking-tighter">
                  {card.title}
                </h3>
                <p className="text-[18px] md:text-[20px] leading-[1.65] text-[#5a5a5a] font-medium">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Extra space at the end to allow last card to center */}
          <div className="min-w-[10vw] md:min-w-[300px]" />
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default ValueProposition;