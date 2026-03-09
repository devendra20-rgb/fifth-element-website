"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const DeliveryAndOffer = () => {
  const offerTabs = [
    {
      id: "discovery",
      label: "Discovery",
      // title: "Put your brand in front of the right audience",
      desc: "Put your brand in front of the right audience, in the right environment. We build reach through a precision mix of digital media, outdoor placements, and high-impact launch moments so your brand shows up where it matters.",
      bullets: ["Channel mix", "Audience targeting", "High-impact placements"],
    },
    {
      id: "engagement",
      label: "Engagement",
      // title: "Turn attention into interest",
      desc: "Turn awareness into intent. Through compelling creative, immersive activations, and smart retargeting, we give your audience reasons to lean in and stay in.",
      bullets: [
        "Creative campaigns",
        "Experiential activations",
        "Retargeting strategies",
      ],
    },
    {
      id: "conversion",
      label: "Conversion",
      // title: "Drive actions that matter",
      desc: "Close the loop with performance. We track, optimise, and report on what's working then push harder on what drives real business outcomes.",
      bullets: [
        "Performance media",
        "Conversion optimisation",
        "Measurable ROI",
      ],
    },
  ];

  const [activeOffer, setActiveOffer] = useState("discovery");

  const currentTab = offerTabs.find((t) => t.id === activeOffer);

  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* 🔥 Updated Background Glow: Purple to Green Mix */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(105,0,204,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(57,177,74,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-br from-[#6900CC]/5 via-transparent to-[#39B14A]/5" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
            How We Work
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
            A full-funnel{" "}
            <span className="bg-gradient-to-r from-[#6900CC] to-[#39B14A] bg-clip-text text-transparent">
              approach built for
            </span>
            <br />
            the way people buy in MENA.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Most agencies hand off between disciplines. We don't. Our digital,
            activation, and OOH capabilities are designed to feed each other
            building awareness, sparking interest, and driving measurable
            conversions in a single connected loop.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-stretch">
          <div className="w-full lg:w-1/3 flex flex-wrap lg:flex-col gap-4 justify-center lg:justify-start">
            {offerTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveOffer(tab.id)}
                className={`
                  rounded-full px-8 py-4 text-base font-semibold transition-all duration-300
                  ${
                    activeOffer === tab.id
                      ? "bg-[#39b14a] text-white shadow-xl shadow-green-900/40 scale-105"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-102"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeOffer}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3 bg-gray-900/40 rounded-3xl p-8 lg:p-12 backdrop-blur-md border border-gray-800/50 min-h-[500px] flex flex-col"
          >
            {/* 🔥 Updated Visual Placeholder Gradient: Purple to Green */}
            <div className="flex-1 relative rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-[#6900CC]/40 via-black to-[#39B14A]/40">
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white/20">
                Abstract {currentTab?.label} Visual
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6900CC]/10 via-transparent to-[#39B14A]/10 animate-pulse-slow opacity-50" />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {currentTab?.title}
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                {currentTab?.desc}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
                {currentTab?.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#39b14a] rounded-full" />
                    <span className="text-sm md:text-base font-medium text-gray-300">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAndOffer;
