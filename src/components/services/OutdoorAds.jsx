"use client";

import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const outdoorDeliverables = [
  "Billboard & Unipole Media (highway, city-entry, premium junctions)",
  "DOOH Screens (malls, high streets, business districts)",
  "Transit Media (metro, bus shelters, wraps, taxis)",
  "Airport Branding (baggage belts, lounges, gates, displays)",
  "Media Planning & Buying (reach/frequency planning, site recommendations)",
  "Creative Adaptation (OOH-ready formats, brand-safe layouts)",
];

const outdoorBestFor = [
  "Mass awareness",
  "City-wide presence",
  "Launch announcements",
  "Retail and real estate visibility",
  "Brand authority",
];

export default function OutdoorAds() {
  return (
    <section id="outdoor" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Content Side */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8 text-[#0f172a]"
          >
            Outdoor <br />
            <span className="text-[#e30613]">
              Advertising (OOH/DOOH)
            </span>
          </motion.h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            Outdoor works when it’s planned right—location, visibility, format, and frequency. We help brands dominate high-impact zones with smart OOH planning + premium inventory and end-to-end execution support.
          </p>

          <div className="mb-10">
            <h4 className="text-xl font-bold text-[#0f172a] mb-4">What we deliver</h4>
            <ul className="space-y-3">
              {outdoorDeliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Globe className="w-5 h-5 text-[#e30613] flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h4 className="text-xl font-bold text-[#0f172a] mb-4">Best for</h4>
            <div className="flex flex-wrap gap-3">
              {outdoorBestFor.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#e30613] hover:bg-red-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 group"
          >
            Dominate Your Market with OOH
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Image Side */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 order-first lg:order-last">
          <img
            src="/images/outdoor-main.jpg"
            alt="Outdoor Advertising"
            className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}