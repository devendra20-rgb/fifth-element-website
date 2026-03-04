"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Linkedin, MessageSquare } from "lucide-react";
import Link from "next/link";

const thoughts = [
  {
    id: 1,
    name: "Vikram Malhotra",
    role: "CEO & Founder",
    thought:
      "Performance marketing is not just about clicks; it's about building a digital ecosystem that breathes with your brand's core values.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    color: "#6900CC",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Head of Strategy",
    thought:
      "Data tells you what happened. Strategy tells you why it matters. We bridge that gap to create measurable success stories.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    color: "#39B14A",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    role: "Director of OOH",
    thought:
      "The physical world is the ultimate canvas. We use premium outdoor media to turn city hotspots into unforgettable brand experiences.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    color: "#6900CC",
  },
];

export default function OurThoughts() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-12 h-[2px] bg-[#6900CC]"></span>
            <p className="text-[#6900CC] font-bold uppercase tracking-[0.3em] text-sm">
              Leadership Perspective
            </p>
            <span className="w-12 h-[2px] bg-[#39B14A]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-black leading-tight"
          >
            Words from <br /> Our{" "}
            <span className="bg-gradient-to-r from-[#6900CC] to-[#39B14A] text-transparent bg-clip-text">
              Founding Heads.
            </span>
          </motion.h2>
        </div>

        {/* Thoughts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {thoughts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              {/* Background Image */}
              <img
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={item.name}
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: item.color }}
              />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                {/* Top Icon */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center text-white">
                    <Quote size={24} fill="white" />
                  </div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Linkedin
                      className="text-white/60 hover:text-white cursor-pointer"
                      size={20}
                    />
                  </motion.div>
                </div>

                {/* Bottom Content */}
                <div className="space-y-6">
                  <p className="text-white/90 text-lg md:text-xl font-medium  leading-relaxed">
                    "{item.thought}"
                  </p>

                  <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                    <div
                      className="w-1 h-12 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <h4 className="text-white text-xl font-bold tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-white/60 text-sm font-semibold uppercase tracking-widest">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Hover Border */}
              <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2.5rem] group-hover:border-white/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
          link="/contact"
        >
          <Link href="/contact" className="inline-block">
            <button className="group flex items-center gap-3 mx-auto bg-gradient-to-r from-[#6900CC] to-[#39B14A] text-white px-10 py-4 rounded-full font-bold hover:bg-[#6900CC] transition-all">
              Join our journey
              <MessageSquare
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
