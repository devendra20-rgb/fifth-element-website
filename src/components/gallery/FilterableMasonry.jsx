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
    <section className="py-24 bg-black text-white border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header & Filter Controls */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight uppercase tracking-tighter">
            Portfolio <br /> <span className="bg-gradient-to-r from-[#6900CC] to-[#39B14A] bg-clip-text text-transparent">Chronicles</span>
          </h2>
          
          <div className="flex flex-wrap gap-3 justify-center items-center border border-white/10 p-2 rounded-full w-fit mx-auto bg-white/5 backdrop-blur-md">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${filter === cat ? 'bg-gradient-to-r from-[#6900CC] to-[#39B14A] text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div 
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative group overflow-hidden rounded-[2rem] border border-white/5 ${photo.height}`}
              >
                <img 
                  src={photo.src} 
                  alt={photo.category} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[#39B14A] text-[10px] font-black uppercase tracking-[0.3em] bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                      {photo.category}
                    </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}