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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Mobile pe screen width ke hisaab se scroll, desktop pe fix 400px
      const scrollAmount =
        window.innerWidth < 768 ? window.innerWidth * 0.85 : 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-black py-16 md:py-32">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 px-6">
          <motion.p className="text-indigo-500 uppercase tracking-[0.2em] text-xs md:text-base font-bold mb-3">
            Visual Stories
          </motion.p>
          <motion.h2 className="text-3xl md:text-6xl font-black tracking-tight leading-tight text-white">
            Moments That{" "}
            <span className="text-indigo-400">Defined Success</span>
          </motion.h2>
        </div>

        {/* Gallery Container */}
        <div className="relative group">
          {/* Desktop Arrows (Mobile pe hidden) */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-2xl backdrop-blur-md"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-2xl backdrop-blur-md"
          >
            <ArrowRight size={24} />
          </button>

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-8 overflow-x-auto px-6 md:px-12 pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {galleryPreview.map((item) => (
              <motion.div
                key={item.id}
                // FIXED SIZE FOR MOBILE & DESKTOP
                className="w-[80vw] md:w-[450px] aspect-[3/4] md:aspect-[4/5] snap-center group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl cursor-pointer flex-shrink-0"
                whileTap={{ scale: 0.98 }}
              >
                {/* Image takes full container space without distortion */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <span className="text-indigo-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold text-white leading-tight">
                    {item.alt}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-10 px-6">
          <Link href="/gallery" className="inline-block w-full md:w-auto">
            <button className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all active:scale-95">
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
