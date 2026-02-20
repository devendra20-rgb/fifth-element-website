"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const logos = ["google", "amazon", "netflix", "nike", "adidas"];
  const logoMap = {
    google:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    amazon:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    netflix:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    nike: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    adidas:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  };

  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-between">
      {/* 🌌 BACKGROUND GLOWS - Muted and restricted */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute right-[-5%] top-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(227,6,19,0.1)_0%,transparent_70%)] blur-[100px]" />
      </div>

      {/* 🧠 MAIN CONTENT CONTAINER - Everything aligns here */}
      <div className="relative z-10 flex-grow flex flex-col justify-start pt-48 md:pt-60 lg:pt-64">
        <div className="max-w-[1600px] mx-auto px-10 md:px-20 w-full relative">
          {/* ⚡ PARTICLES MOVE ONLY INSIDE CONTENT AREA */}
          <div className="absolute right-10 top-0 w-[50%] h-[550px] pointer-events-none opacity-60">
            {/* Background Particles - Higher Density */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.7, 0.2],
                  scale: [1, 1.8, 1],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
            {/* Signature Wave Line behind text */}
            <svg className="w-full h-full" viewBox="0 0 400 500" fill="none">
              <motion.path
                d="M400 50 Q 200 250 400 450"
                stroke="url(#grad1)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.path
                d="M380 80 Q 230 250 380 420"
                stroke="url(#grad2)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e30613" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
                <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* TEXT CONTENT - Perfectly Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[950px] relative z-20"
          >
            <p className="text-[#e30613] tracking-[0.45em] text-[12px] font-[900] mb-8 uppercase">
              NEXT-GEN PERFORMANCE ADVERTISING
            </p>

            <h1 className="text-white text-[44px] md:text-[68px] lg:text-[88px] font-[900] leading-[1.05] tracking-tight mb-8">
              Grow revenue faster — <br />
              without losing control.
              <br />
              Find the <span className="text-white">hidden wins.</span>
            </h1>

            <p className="text-white/40 text-[18px] md:text-[22px] max-w-xl font-medium mb-12 leading-relaxed">
              Add AI-led performance layers to your existing marketing setup and
              unlock growth across web and mobile.
            </p>

            <button className="group bg-[#e30613] px-12 py-5 rounded-full text-white font-black text-[18px] shadow-2xl shadow-red-600/20 hover:scale-105 transition-all flex items-center gap-4 w-fit">
              Discover the Tech
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-[22px]">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* 🧩 LOGO MARQUEE - NOW LOCKED INSIDE 1600px CONTAINER */}
      <div className="relative z-20 w-full pb-20 pt-12">
        <div className="max-w-[1600px] mx-auto px-10 md:px-20">
          {/* Alignment Line matches content width */}
          <div className="w-full h-[1px] bg-white/5 mb-12" />

          <div className="overflow-hidden relative">
            <div className="flex gap-10 sm:gap-14 md:gap-20 animate-marquee whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <img
                  key={i}
                  src={logoMap[logo]}
                  alt={logo}
                  className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-30 hover:opacity-100 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @media (max-width: 1024px) {
          .animate-marquee {
          animation-duration: 14s;
        }
        @media (max-width: 640px) {
          .animate-marquee {
          animation-duration: 8s; 
        }
        }
      `}</style>
    </section>
  );
};

export default Hero;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const logos = ["nike", "adidas", "mercedes", "decathlon", "sephora"];

//   const logoMap = {
//     nike: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
//     adidas:
//       "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//     mercedes:
//       "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//     decathlon:
//       "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//     sephora:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
//   };

//   return (
//     <section className="relative bg-black overflow-hidden flex flex-col">
//       {/* Subtle right gradient glow - mobile pe smaller */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute right-[-30%] top-[-20%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(227,6,19,0.12)_0%,transparent_70%)] blur-[80px] sm:right-[-20%] sm:top-[-15%] sm:w-[600px] sm:h-[600px] md:right-[-10%] md:top-[-10%] md:w-[800px] md:h-[800px]" />
//       </div>

//       {/* Main Content - mobile pe top padding kam, center text */}
//       <div className="relative z-10 flex-grow flex items-center pt-24 sm:pt-28 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-24">
//   {/* Left alignment ke liye outer padding hata diya + negative margin use kiya */}
//   <div className="w-full pl-0 md:pl-[max(40px,calc(50%-650px))] lg:pl-[max(40px,calc(50%-700px))]">
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       className="max-w-[700px] text-center md:text-left"
//     >
//       <p className="text-[#e30613] tracking-[0.3em] text-[11px] sm:text-[12px] font-bold mb-4 sm:mb-6 uppercase">
//         NEXT-GEN PERFORMANCE ADVERTISING
//       </p>

//       <h1 className="text-white text-[36px] sm:text-[44px] md:text-[64px] lg:text-[74px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-5 sm:mb-6">
//         Grow revenue faster — <br className="sm:hidden" />
//         without losing control.<br />
//         Find the hidden wins.
//       </h1>

//       <p className="text-white/70 text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto md:mx-0">
//         Add AI-led performance layers to your existing marketing setup and unlock growth across web and mobile.
//       </p>

//       <button className="group bg-[#e30613] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-white font-semibold text-[14px] sm:text-[16px] shadow-[0_8px_30px_rgba(227,6,19,0.35)] hover:scale-105 transition-all flex items-center gap-3 mx-auto md:mx-0">
//         Discover the Tech
//         <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-white/40 flex items-center justify-center group-hover:translate-x-1 transition">
//           →
//         </span>
//       </button>
//     </motion.div>
//   </div>
// </div>

//       {/* Logo Marquee - bottom tight, no extra gap */}
//       <div className="relative z-10 pb-8 sm:pb-10 md:pb-12">
//         <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 overflow-hidden">
//           <div className="w-full h-[1px] bg-white/10 mb-5 sm:mb-6" />

//           <div className="relative">
//             <div className="flex gap-16 sm:gap-20 animate-marquee whitespace-nowrap">
//               {[...logos, ...logos, ...logos].map((logo, i) => (
//                 <img
//                   key={i}
//                   src={logoMap[logo]}
//                   alt={logo}
//                   className="h-6 sm:h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-90 transition"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
