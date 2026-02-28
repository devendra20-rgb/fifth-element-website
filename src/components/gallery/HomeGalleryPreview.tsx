"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

// Gallery preview images – 12 images (tum apne real photos replace kar sakte ho)
const galleryPreview = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200",
    alt: "Brand Activation - Live Crowd Engagement",
    category: "Activations",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800",
    alt: "Corporate Event - Modern Stage Setup",
    category: "Corporate",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224594?q=80&w=1000",
    alt: "Outdoor Activation - Interactive Experience",
    category: "Activations",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200",
    alt: "Large Scale Outdoor Billboard Campaign",
    category: "Outdoor",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000",
    alt: "Corporate Conference - Networking Session",
    category: "Corporate",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=1200",
    alt: "Street Activation - Brand Experience Booth",
    category: "Activations",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
    alt: "Corporate Team Building Event",
    category: "Corporate",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200",
    alt: "Outdoor Digital Billboard - Night View",
    category: "Outdoor",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1517458038778-2a21dd0a3d0d?q=80&w=1200",
    alt: "Product Launch Activation Event",
    category: "Activations",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
    alt: "Corporate Seminar - Keynote Speaker",
    category: "Corporate",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200",
    alt: "Mobile Outdoor Advertising Truck Campaign",
    category: "Outdoor",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1517458038778-2a21dd0a3d0d?q=80&w=1200",
    alt: "Festival Activation - Brand Immersion",
    category: "Activations",
  },
];

export default function HomeGalleryPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-between items-center text-center py-32 px-10 md:px-20 lg:px-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-indigo-500 uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4"
          >
            Visual Stories
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
          >
            Moments That <span className="text-indigo-400">Defined Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto"
          >
            A glimpse into our activations, corporate executions, and outdoor campaigns that turned brands into unforgettable experiences.
          </motion.p>
        </div>

        {/* Gallery Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl backdrop-blur-md"
            aria-label="Scroll left"
          >
            <ArrowLeft size={32} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl backdrop-blur-md"
            aria-label="Scroll right"
          >
            <ArrowRight size={32} />
          </button>

          {/* Scrollable Gallery - scrollbar completely hide with inline style */}
          <div
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
            style={{
              // Hide scrollbar cross-browser
              msOverflowStyle: "none" /* IE and Edge */,
              scrollbarWidth: "none" /* Firefox */,
            }}
          >
            {/* Webkit browsers (Chrome, Safari) scrollbar hide */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {galleryPreview.map((item) => (
              <motion.div
                key={item.id}
                className="min-w-[300px] md:min-w-[420px] snap-center group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {item.alt}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade gradients for scroll hint */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link href="/gallery">
            <button className="group inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg rounded-full shadow-xl shadow-indigo-900/30 transition-all duration-300 hover:scale-105">
              View Full Gallery
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}