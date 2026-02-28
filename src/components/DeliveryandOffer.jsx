"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const DeliveryAndOffer = () => {
  // Tabs for "What we offer"
  const offerTabs = [
    {
      id: "retargeting",
      label: "Next-Gen Retargeting",
      desc: "Identify overlooked high-intent users and bring them back with smarter experiences. Pair recommendations with brand-safe shoppable formats to increase sales, build momentum, and feed new learnings into the next stages of your funnel.",
    },
    {
      id: "acquisition",
      label: "Acquisition",
      desc: "Drive first-time conversions from new audiences. Utilize multi-touch strategies, dynamic product creatives, and first-party data insights to discover and convert high-value customers at scale.",
    },
    {
      id: "engagement",
      label: "Engagement",
      desc: "Reconnect with occasional visitors and high-intent users through personalized, interactive creatives and video formats with product overlays. Strengthen customer relationships and boost lifetime value.",
    },
    {
      id: "demand",
      label: "Demand Generation",
      desc: "Present your brand and products to high-intent audiences through engaging video and display formats with product overlays. Guide users through the journey and expand your potential customer base.",
    },
  ];

  const [activeOffer, setActiveOffer] = useState("retargeting");

  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* Subtle purple/pink/red glow background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(227,6,19,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(192,38,211,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-br from-transparent via-purple-950/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        {/* ────────────────────────────────────────────────
            WHAT WE OFFER – Tabbed Section (fixed red active)
        ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            First-Party{" "}
            <span className="text-purple-500">Performance Solutions</span>
            <br />
            for Web & Mobile
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Create measurable incremental growth through a connected loop of
            conversion, acquisition, engagement, and demand lift.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-stretch">
          {/* Vertical/Horizontal Tabs */}
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

          {/* Active Tab Content + Visual */}
          <motion.div
            key={activeOffer}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3 bg-gray-900/60 rounded-3xl p-8 lg:p-12 backdrop-blur-md border border-gray-800 min-h-[500px] flex flex-col"
          >
            {/* Visual placeholder – replace with real abstract video/animation if possible */}
            <div className="flex-1 relative rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-purple-950 via-red-950/70 to-black">
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-400/50">
                Abstract {offerTabs.find((t) => t.id === activeOffer)?.label}{" "}
                Visual
              </div>
              {/* Optional subtle pulse overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-red-500/10 animate-pulse-slow opacity-50" />
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              {offerTabs.find((t) => t.id === activeOffer)?.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAndOffer;