"use client";

import React from "react";
import { motion } from "framer-motion";

const Metrics = () => {
  const metrics = [
    { value: "57%", label: "stronger scaling while maintaining ROAS goals." },
    {
      value: "61%",
      label: "purchases came from items users hadn’t explored earlier.",
    },
    {
      value: "44%",
      label: "higher engagement using IntentGPT-style contextual relevance.",
    },
    { value: "0%", label: "of your proprietary data is sold or traded." },
  ];

  return (
    <section
      className="pt-12 pb-16 md:pt-16 md:pb-24 bg-white overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <div className="max-w-[1600px] mx-auto px-10">
        {/* Section Heading - Clean & Centered like Image 13 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-[40px] md:text-[54px] font-[900] tracking-tight text-[#1a1a1a] leading-tight">
            Bring signals together. Move faster. Scale smarter.
          </h2>
        </motion.div>

        {/* Metrics Row - Horizontal Layout with Separators */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {metrics.map((metric, index) => (
            <React.Fragment key={index}>
              {/* Metric Item */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex-1 flex flex-col items-center text-center px-8"
              >
                {/* Value with Gradient - Exact Image 13 Style */}
                <div className="text-[54px] md:text-[68px] font-[900] leading-none mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#e30613] via-[#a855f7] to-[#8b5cf6]">
                  {metric.value}
                </div>

                {/* Label - Muted & Minimal */}
                <p className="text-[14px] md:text-[16px] text-[#5a5a5a] font-medium leading-[1.5] max-w-[240px]">
                  {metric.label}
                </p>
              </motion.div>

              {/* Vertical Separator Line (Visible only on Desktop, hidden on last item) */}
              {index !== metrics.length - 1 && (
                <div className="hidden lg:block h-12 w-[1px] bg-[#e9e9e9]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
