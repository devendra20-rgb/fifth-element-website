"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
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
    <section className="relative w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Background Glow (Services section se matching) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(105,0,204,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Styled like Services Section */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#39b14a] uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6"
          >
            Proven Results
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-black mb-8"
          >
            Ambitious ideas. <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#6900cc] to-[#39b14a] bg-clip-text text-transparent">
              Measurable outcomes.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Every campaign we build is designed to perform, not just look good. 
            Here&apos;s what that looks like in practice.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Main Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-8 group relative aspect-[16/10] md:aspect-auto md:h-[650px] overflow-hidden rounded-[2.5rem] bg-[#f8f8f8] border border-gray-100 shadow-sm"
          >
            <img
              src={caseStudies[0].img}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-[#6900CC] text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  {caseStudies[0].category}
                </span>
                <span className="text-white font-bold text-xl">
                  {caseStudies[0].stats}
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                {caseStudies[0].title}
              </h3>
              <Link
                href={`/case-studies/${caseStudies[0].id}`}
                className="w-fit p-4 bg-white rounded-full hover:bg-[#39B14A] hover:text-white transition-all shadow-xl"
              >
                <ArrowUpRight size={28} />
              </Link>
            </div>
          </motion.div>

          {/* Side Stack */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {caseStudies.slice(1).map((study) => (
              <motion.div
                key={study.id}
                whileHover={{ y: -5 }}
                className="flex-1 group relative overflow-hidden rounded-[2rem] bg-[#f8f8f8] p-8 border border-gray-100 transition-all duration-500 hover:border-[#6900cc]/30"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: study.color }}
                    >
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-black text-black mt-4 leading-tight group-hover:text-[#6900CC] transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  <div className="mt-8 flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-black">
                        {study.stats.split(" ")[0]}
                      </span>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                        {study.stats.split(" ")[1]}
                      </span>
                    </div>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="p-3 bg-white border border-gray-200 rounded-full group-hover:bg-black group-hover:text-white transition-all shadow-sm"
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img src={study.img} className="w-full h-full object-cover" alt="" />
                </div>
              </motion.div>
            ))}

            {/* CTA Button - Services Section Style */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-4"
            >
              <Link href="/case-studies">
                <button className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#6900cc] to-[#39b14a] text-white font-bold text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95">
                  View All Work
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </motion.div>
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
