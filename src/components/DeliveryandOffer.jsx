"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const DeliveryAndOffer = () => {
  // Naya content: OUR GROWTH LOOP
  const offerTabs = [
    {
      id: "discovery",
      label: "Discovery",
      title: "Put your brand in front of the right audience",
      desc: "We build reach through the right mix of digital media, outdoor visibility, and launch moments—so your brand becomes visible where it matters.",
      bullets: ["Channel mix", "Audience targeting", "High-impact placements"],
    },
    {
      id: "engagement",
      label: "Engagement",
      title: "Turn attention into interest",
      desc: "We keep users engaged using strong creatives, clear messaging, and experiences that make the brand feel real—online and on-ground.",
      bullets: ["Content + creative system", "Activation hooks", "Retargeting signals"],
    },
    {
      id: "conversion",
      label: "Conversion",
      title: "Drive actions that matter",
      desc: "We optimize the journey to push the next step—leads, sales, installs, bookings, or footfall—supported by tracking and constant improvements.",
      bullets: ["Funnel optimization", "Landing page alignment", "Performance reporting"],
    },
    {
      id: "retention",
      label: "Retention & Scale",
      title: "Learn, improve, and scale what works",
      desc: "We use results to refine creatives, audiences, and placements—then scale the best-performing combinations for long-term growth.",
      bullets: ["Insights loop", "Budget reallocation", "Iteration & scaling"],
    },
  ];

  const [activeOffer, setActiveOffer] = useState("discovery");

  const currentTab = offerTabs.find((t) => t.id === activeOffer);

  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* Subtle purple/pink/red glow background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(227,6,19,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(192,38,211,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-br from-transparent via-purple-950/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Headline & Subhead Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
            OUR GROWTH LOOP
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Customized <span className="text-purple-500">Full-Funnel</span>
            <br />
            Growth Loop
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We combine digital, activations, and OOH to build awareness, spark interest, and drive measurable conversions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-stretch">
          {/* Buttons (4) - Vertical/Horizontal Tabs */}
          <div className="w-full lg:w-1/3 flex flex-wrap lg:flex-col gap-4 justify-center lg:justify-start">
            {offerTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveOffer(tab.id)}
                className={`
                  rounded-full px-8 py-4 text-base font-semibold transition-all duration-300
                  ${
                    activeOffer === tab.id
                      ? "bg-[#e30613] text-white shadow-xl shadow-red-900/40 scale-105"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-102"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Slide Content Content + Visual */}
          <motion.div
            key={activeOffer}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3 bg-gray-900/60 rounded-3xl p-8 lg:p-12 backdrop-blur-md border border-gray-800 min-h-[500px] flex flex-col"
          >
            {/* Visual placeholder */}
            <div className="flex-1 relative rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-purple-950 via-red-950/70 to-black">
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-400/50">
                Abstract {currentTab?.label} Visual
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-red-500/10 animate-pulse-slow opacity-50" />
            </div>

            {/* Slide Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {currentTab?.title}
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                {currentTab?.desc}
              </p>
              
              {/* Bullets Section */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
                {currentTab?.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#e30613] rounded-full" />
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