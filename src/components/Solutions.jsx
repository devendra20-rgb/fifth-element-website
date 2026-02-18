"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('retargeting');

  const offers = {
    retargeting: {
      label: "Next-Gen Retargeting",
      desc: "Maximize conversion by capturing non-obvious converters that others miss while making novel product recommendations. Deploy engaging, brand-friendly shoppable creative to drive sales.",
      sub: "Add next-gen retargeting to create momentum and generate actionable insights used in the next phases of the cycle.",
    },
    acquisition: {
      label: "Acquisition",
      desc: "Generate initial conversion from new-to-file customers. Leverage multi-touch efforts, and dynamic product ads. Get insights about the most valuable new customers.",
      sub: "Expand your reach and build brand awareness with highly targeted acquisition campaigns.",
    },
    engagement: {
      label: "Engagement",
      desc: "Engage infrequent visitors and high-intent prospects with personalized, shoppable creative and video with product overlay ads using richer formats.",
      sub: "Deepen customer relationships with content that resonates and converts.",
    },
    demand: {
      label: "Demand Generation",
      desc: "Showcase your products and brand message among high-intent prospects. Use video and display ads with product overlays to guide prospects toward purchase.",
      sub: "Build a robust pipeline by targeting prospects at the top of the funnel.",
    }
  };

  return (
    <section className="bg-white py-24 md:py-40 overflow-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
      <div className="max-w-[1600px] mx-auto px-10">
        
        {/* --- PART 1: HOW WE DELIVER (The Creative Slider) --- */}
        <div className="text-center mb-44">
          <p className="text-[#e30613] font-black tracking-[0.35em] text-[10px] mb-8 uppercase">
            HOW WE DELIVER
          </p>
          <h2 className="text-[42px] md:text-[56px] font-[900] tracking-tight text-[#1a1a1a] leading-[1.05] mb-8">
            Cut through the noise with <br /> Shoppable Creative
          </h2>
          <p className="text-[18px] text-[#5a5a5a] max-w-2xl mx-auto font-medium mb-20 leading-relaxed">
            We display on-brand shoppable creative with personalized product recommendations based on first-party signals.
          </p>

          {/* Shoppable Frames Placeholder - Matching image 16 */}
          <div className="flex justify-center items-center gap-6 md:gap-12 relative">
             {/* Left Fade Frame */}
             <div className="hidden md:block w-[280px] h-[480px] bg-gray-50 rounded-[35px] opacity-40 grayscale blur-[1px] transform -rotate-6">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400" className="w-full h-full object-cover rounded-[35px]" alt="fashion" />
             </div>

             {/* Center Focus Frame */}
             <motion.div 
               whileHover={{ y: -15 }}
               className="w-[320px] h-[550px] bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative z-10"
             >
                <div className="p-6 flex flex-col items-center">
                   <div className="w-full h-[360px] bg-gray-200 rounded-3xl mb-8 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400" className="w-full h-full object-cover" alt="fashion-center" />
                   </div>
                   <div className="w-[85%] h-5 bg-gray-100 rounded-full mb-4" />
                   <div className="w-[65%] h-5 bg-gray-100 rounded-full" />
                </div>
             </motion.div>

             {/* Right Fade Frame */}
             <div className="hidden md:block w-[280px] h-[480px] bg-gray-50 rounded-[35px] opacity-40 grayscale blur-[1px] transform rotate-6">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400" className="w-full h-full object-cover rounded-[35px]" alt="fashion" />
             </div>
          </div>
        </div>

        {/* --- PART 2: WHAT WE OFFER (The Tabbed Solutions) --- */}
        <div className="pt-24 border-t border-gray-100">
          <div className="text-center mb-16">
            <p className="text-[#1a1a1a] font-black tracking-[0.35em] text-[10px] mb-8 uppercase">
              WHAT WE OFFER
            </p>
            <h2 className="text-[42px] md:text-[56px] font-[900] tracking-tight text-[#1a1a1a] leading-[1.05] mb-12">
              First-Party <span className="text-[#e30613]">Performance Advertising</span> <br /> for Web and App
            </h2>

            {/* Pill Tabs */}
            <div className="inline-flex bg-[#f2f2f2] p-1.5 rounded-full border border-[#ececec]">
              {Object.keys(offers).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-3.5 rounded-full text-[12px] font-black uppercase tracking-widest transition-all duration-300 ${
                    activeTab === key 
                      ? "bg-[#e30613] text-white shadow-xl" 
                      : "text-black/50 hover:text-black"
                  }`}
                >
                  {key === 'demand' ? 'Demand Generation' : key}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col md:flex-row bg-white rounded-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.06)] border border-[#f0f0f0] overflow-hidden min-h-[550px]"
            >
              {/* Left Side: Dark Visualizer */}
              <div className="w-full md:w-[46%] bg-black relative flex items-center justify-center p-12 overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,6,19,0.1)_0%,transparent_70%)]" />
                 <div className="relative z-10 w-full h-[60%] border border-white/5 rounded-3xl bg-white/[0.01] backdrop-blur-md flex flex-col items-center justify-center">
                    <div className="flex gap-2 mb-4">
                       {[1,2,3,4].map(i => (
                         <motion.div key={i} animate={{ height: [20, 50, 20] }} transition={{ repeat: Infinity, duration: 1.5, delay: i*0.2 }} className="w-1.5 bg-[#e30613] rounded-full opacity-50" />
                       ))}
                    </div>
                    <span className="text-white/10 text-[9px] font-black tracking-[0.4em] uppercase">{activeTab} system active</span>
                 </div>
              </div>

              {/* Right Side: Clean Typography */}
              <div className="w-full md:w-[54%] p-12 md:p-24 flex flex-col justify-center bg-white">
                <h3 className="text-[38px] md:text-[50px] font-[900] text-[#1a1a1a] mb-8 leading-[1.05] tracking-tighter">
                  {offers[activeTab].label}
                </h3>
                <p className="text-[19px] leading-[1.7] text-[#5a5a5a] font-medium mb-8">
                  {offers[activeTab].desc}
                </p>
                <p className="text-[16px] leading-relaxed text-[#1a1a1a]/30 font-medium italic">
                  {offers[activeTab].sub}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Solutions;