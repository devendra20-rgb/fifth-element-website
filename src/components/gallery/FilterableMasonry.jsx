"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allPhotos = [
  { id: 1, src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600", category: "activations", height: "h-[300px]" },
  { id: 2, src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400", category: "corporate", height: "h-[450px]" },
  { id: 3, src: "https://images.unsplash.com/photo-1523580494863-6f3031224594?q=80&w=500", category: "activations", height: "h-[350px]" },
  { id: 4, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600", category: "outdoor", height: "h-[400px]" },
  { id: 5, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=500", category: "corporate", height: "h-[320px]" },
  { id: 6, src: "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=600", category: "outdoor", height: "h-[380px]" },
  { id: 7, src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600", category: "corporate", height: "h-[420px]" },
  { id: 8, src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600", category: "activations", height: "h-[330px]" },
];

const categories = ["all", "activations", "corporate", "outdoor"];

export default function FilterableMasonry() {
  const [filter, setFilter] = useState("all");

  const filteredPhotos = filter === "all" 
    ? allPhotos 
    : allPhotos.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header & Filter Controls */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase tracking-tight">
            Portfolio <br /> <span className="text-indigo-400">Chronicles</span>
          </h2>
          
          <div className="flex flex-wrap gap-3 justify-center items-center border border-gray-800 p-3 rounded-full w-fit mx-auto bg-black/30 shadow-inner">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${filter === cat ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid with Animations */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justified-gallery">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div 
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`relative group overflow-hidden rounded-3xl ${photo.height}`}
              >
                <img 
                  src={photo.src} 
                  alt={photo.category} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest">{photo.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}