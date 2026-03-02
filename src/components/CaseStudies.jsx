"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Users, Zap } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Global Tech Launch",
    client: "Future Dynamics",
    category: "Full-Funnel Growth",
    stats: "+140% Conversion",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
    color: "#6900CC",
  },
  {
    id: 2,
    title: "City-Wide OOH Takeover",
    client: "Urban Wear",
    category: "Outdoor Advertising",
    stats: "2.4M Impressions",
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800",
    color: "#39B14A",
  },
  {
    id: 3,
    title: "Experiential Brand Activation",
    client: "Spark Beverages",
    category: "Activations",
    stats: "15k Engagements",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800",
    color: "#6900CC",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#6900CC] font-bold uppercase tracking-[0.2em] text-sm mb-4"
            >
              Proven Results
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-black leading-none"
            >
              Case <span className="text-gray-300">Studies.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-lg md:max-w-xs font-medium"
          >
            How we turned ambitious ideas into <span className="text-[#39B14A]">measurable success stories</span>.
          </motion.p>
        </div>

        {/* Bento-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
          
          {/* Large Featured Case - 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-8 group relative aspect-[16/10] md:aspect-auto md:h-[600px] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-sm border border-gray-100"
          >
            <img src={caseStudies[0].img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 md:p-12 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-[#6900CC] text-white text-xs font-bold rounded-full uppercase tracking-widest">{caseStudies[0].category}</span>
                <span className="text-white font-bold text-xl">{caseStudies[0].stats}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{caseStudies[0].title}</h3>
              <Link href={`/case-studies/${caseStudies[0].id}`} className="w-fit p-4 bg-white rounded-full hover:bg-[#39B14A] hover:text-white transition-all">
                <ArrowUpRight size={28} />
              </Link>
            </div>
          </motion.div>

          {/* Sidebar Cases Stack - 2 & 3 */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {caseStudies.slice(1).map((study) => (
              <motion.div 
                key={study.id}
                whileHover={{ y: -5 }}
                className="flex-1 group relative overflow-hidden rounded-[2rem] bg-gray-50 p-8 border border-gray-100"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest" style={{ color: study.color }}>{study.category}</span>
                    <h3 className="text-2xl font-black text-black mt-4 leading-tight group-hover:text-[#6900CC] transition-colors">{study.title}</h3>
                  </div>
                  <div className="mt-8 flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-black">{study.stats.split(' ')[0]}</span>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{study.stats.split(' ')[1]}</span>
                    </div>
                    <Link href={`/case-studies/${study.id}`} className="p-3 bg-white border border-gray-200 rounded-full group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>
                {/* Subtle Image Reveal on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                   <img src={study.img} className="w-full h-full object-cover" alt="" />
                </div>
              </motion.div>
            ))}

            {/* View All Button Card */}
            <Link href="/case-studies" className="group h-24 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center gap-4 hover:border-[#39B14A] transition-all">
              <span className="font-black uppercase tracking-widest text-gray-400 group-hover:text-[#39B14A]">View All Works</span>
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#39B14A] group-hover:text-white transition-all">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const CaseStudies = () => {
//   return (
//     <section className="bg-[#f4f4f4] py-32 overflow-hidden">
//       <div className="max-w-[1250px] mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center mb-24">
//           <p className="text-[11px] tracking-[0.4em] uppercase text-gray-500 mb-4">
//             Case Studies
//           </p>

//           <h2 className="text-[42px] md:text-[58px] font-extrabold leading-tight text-[#111] mb-4">
//             Results from <br />
//             <span className="bg-gradient-to-r from-[#ff2a2a] via-[#ff4d4d] to-[#ff6a6a] text-transparent bg-clip-text">
//               around the globe
//             </span>
//           </h2>

//           <p className="text-gray-500 max-w-xl mx-auto mb-8">
//             Wherever you are, we'll take you to new places on the world wide web.
//           </p>

//           {/* 🔥 PREMIUM DARK BUTTON */}
//           <button className="group inline-flex items-center gap-3 bg-black text-white px-8 py-3 rounded-full font-semibold text-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:scale-105 transition-all">
//             See more
//             <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center group-hover:translate-x-1 transition">
//               <ArrowRight size={16} />
//             </span>
//           </button>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

//           {/* LEFT CARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="md:mt-40"
//           >
//             <CaseCard
//               image="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800"
//               title="Autotrader"
//               desc="Adding traction to the UK’s most popular car marketplace"
//             />
//           </motion.div>

//           {/* CENTER SPACE */}
//           <div />

//           {/* RIGHT BIG CARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <CaseCard
//               large
//               image="https://images.unsplash.com/photo-1520975922284-9e0ce8276fda?q=80&w=800"
//               title="MINTO"
//               desc="Deep Learning Secures a 200% Increase for Minto"
//             />
//           </motion.div>

//           {/* EMPTY */}
//           <div />

//           {/* BOTTOM CARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <CaseCard
//               image="https://images.unsplash.com/photo-1520975867597-0af37a22e31b?q=80&w=800"
//               title="STEVE MADDEN"
//               desc="Deep Learning Video Campaign Extended New User Reach"
//             />
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;
// const CaseCard = ({ image, title, desc, large }) => {
//   return (
//     <div
//       className={`relative rounded-[24px] overflow-hidden group cursor-pointer ${
//         large ? "h-[440px]" : "h-[320px]"
//       } shadow-[0_20px_60px_rgba(0,0,0,0.15)]`}
//     >
//       {/* IMAGE */}
//       <img
//         src={image}
//         className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//       {/* SOFT LIGHT EFFECT */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-white/10 via-transparent to-transparent" />

//       {/* ARROW */}
//       <div className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/40 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
//         <ArrowRight size={18} />
//       </div>

//       {/* TEXT */}
//       <div className="absolute bottom-6 left-6 text-white">
//         <h3 className="text-[20px] font-bold tracking-tight mb-1">{title}</h3>
//         <p className="text-[13px] opacity-80 max-w-[240px] leading-relaxed">
//           {desc}
//         </p>
//       </div>

//       {/* HOVER BORDER GLOW */}
//       <div className="absolute inset-0 rounded-[24px] border border-white/10 group-hover:border-white/30 transition duration-500 pointer-events-none" />
//     </div>
//   );
// };
