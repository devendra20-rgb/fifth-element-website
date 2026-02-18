"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop",
      brand: "DriveZone",
      title:
        "Accelerating Growth for the U.K.’s Leading Automotive Marketplace",
      offset: "md:mt-40",
    },
    {
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
      brand: "StyleSphere",
      title: "AI-Driven Campaigns Deliver a 2X Revenue Boost for StyleSphere",
      offset: "md:mt-0",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop",
      brand: "Urban Steps",
      title: "Expanding New Customer Reach with Intelligent Video Advertising",
      offset: "md:-mt-20",
    },
  ];

  return (
    <section
      className="py-24 md:py-40 bg-white"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <div className="max-w-[1600px] mx-auto px-10">
        {/* Header Section - Exact Image 18 Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[#1a1a1a] font-black tracking-[0.3em] text-[10px] uppercase mb-8">
            CASE STUDIES
          </p>
          <h2 className="text-[42px] md:text-[54px] font-[900] tracking-tight text-[#1a1a1a] leading-tight mb-8">
            Performance outcomes <br />{" "}
            <span className="text-[#e30613]">across markets</span>
          </h2>
          <p className="text-[16px] text-[#5a5a5a] max-w-xl mx-auto font-medium mb-12">
            No matter where you operate, we help you expand reach and results
            online.
          </p>
          <button className="border border-gray-200 px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest text-[#e30613] hover:bg-gray-50 transition">
            Explore case studies
          </button>
        </motion.div>

        {/* Asymmetric Grid Layout - Exact Image 18 Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={`relative group cursor-pointer ${study.offset}`}
            >
              {/* Image Container with Rounded Corners */}
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl">
                <img
                  src={study.image}
                  alt={study.brand}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content Overlayed on Image */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-white text-[24px] font-black uppercase tracking-tighter">
                      {study.brand}
                    </h4>
                    <ArrowUpRight
                      className="text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
                      size={28}
                    />
                  </div>
                  <p className="text-white/80 text-[14px] font-bold leading-relaxed line-clamp-2">
                    {study.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

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
