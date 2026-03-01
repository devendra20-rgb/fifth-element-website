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
    microText: ["Strategy", "Creative", "Paid Media", "Conversion Growth"],
    link: "/services#branding",
  },
  {
    title: "Activations",
    icon: <Zap className="w-10 h-10" />,
    oneLiner: "Bring your brand to life with experiences people remember—and share.",
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
    <section className="relative w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#e30613] uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6"
          >
            What We Do Best
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-[#0f172a] mb-6"
          >
            Precision-driven marketing solutions <br className="hidden md:block" />
            <span className="text-[#e30613]">
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
              className="group relative bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-lg hover:shadow-2xl hover:border-[#e30613]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#e30613]/10 text-[#e30613] rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-[#e30613]/20">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-black text-[#0f172a] mb-4 leading-tight">
                {service.title}
              </h3>

              {/* 1-liner */}
              <p className="text-gray-700 text-lg md:text-xl font-medium mb-6 leading-relaxed">
                {service.oneLiner}
              </p>

              {/* Micro text bullets */}
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                {service.microText.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#e30613] rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-[#e30613] font-bold uppercase tracking-widest text-sm hover:text-[#c2040f] transition-colors group/link"
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
            <button className="group inline-flex items-center gap-3 px-10 py-5 bg-[#e30613] hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-xl shadow-red-900/30 transition-all duration-300 hover:scale-105">
              Explore All Services
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}