"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Palette, Zap, Globe, ArrowRight } from "lucide-react";

const homeServices = [
  {
    title: "Branding & Performance",
    icon: <Palette className="w-10 h-10" />,
    oneLiner: "Build a sharp brand identity, then scale it with high-intent performance campaigns.",
    microText: ["Strategy", "Creative", "Paid Media (Social & Programmatic)", "Conversion Growth"],
    link: "/services#branding",
  },
  {
    title: "Activations",
    icon: <Zap className="w-10 h-10" />,
    oneLiner: "Bring your brand to life with experiences people remember-and share.",
    microText: ["BTL", "Events", "Retail", "Experiential"],
    link: "/services#events",
  },
  {
    title: "Outdoor Advertising",
    icon: <Globe className="w-10 h-10" />,
    oneLiner: "Own the streets, highways, airports, and key city hotspots with premium OOH.",
    microText: ["Billboards", "Transit", "Airport", "DOOH"],
    link: "/services#outdoor",
  },
];

export default function HomeServices() {
  return (
    // Background changed to dark for better gradient contrast
    <section className="relative w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(105,0,204,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#39b14a] uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6"
          >
            What We Do Best
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-black mb-6"
          >
            Precision-driven marketing solutions <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#6900cc] to-[#39b14a] bg-clip-text text-transparent">
              for brands that want both visibility and outcomes.
            </span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {homeServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              // Card background changed to dark with subtle border
              className="group relative bg-[#f8f8f8] rounded-3xl p-8 md:p-10 border border-white/10 hover:border-[#6900cc]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6900cc]/5 to-[#39b14a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon with Gradient Background */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#6900cc] to-[#39b14a] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-900/20">
                <div className="text-white">
                    {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative text-2xl md:text-3xl font-black text-black mb-4 leading-tight">
                {service.title}
              </h3>

              {/* 1-liner */}
              <p className="relative text-gray-400 text-lg font-medium mb-6 leading-relaxed">
                {service.oneLiner}
              </p>

              {/* Micro text bullets */}
              <ul className="relative space-y-3 text-sm text-gray-500 mb-8">
                {service.microText.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#6900cc] to-[#39b14a] rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link
                href={service.link}
                className="relative inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm text-[#39b14a] hover:text-[#6900cc] transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Explore All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 md:mt-20"
        >
          <Link href="/services">
            <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#6900cc] to-[#39b14a] text-white font-bold text-lg rounded-full shadow-xl shadow-purple-900/20 transition-all duration-300 hover:scale-105 active:scale-95">
              Explore All Services
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}