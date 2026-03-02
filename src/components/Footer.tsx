"use client";

import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-10 relative overflow-hidden border-t border-[#ff0033]/30">

      {/* 🔥 TOP RED GLOW */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#ff0033]/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 relative">

        {/* 🔷 TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 relative">

          {/* LEFT */}
          <div className="lg:col-span-3">
            <img src="/5th-eleLogo.png" className="h-12 mb-6" alt="5th Element Logo" />

            <p className="text-[#ff2a4d] text-xl md:text-2xl font-medium mb-6 leading-tight">
              Integrated Marketing. <br /> Measurable Impact.
            </p>

            <div className="flex gap-4 text-gray-400">
              <Facebook size={20} className="hover:text-white cursor-pointer" />
              <Twitter size={20} className="hover:text-white cursor-pointer" />
              <Linkedin size={20} className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* 🔸 Divider 1 */}
          <div className="hidden lg:block absolute left-[25%] top-0 h-full w-px bg-white/10"></div>

          {/* MIDDLE */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ff2a4d] rounded-full"></span>
              Quick Links
            </h3>

            <div className="space-y-4 text-sm text-gray-400">
              <Link href="/about-us" className="block hover:text-white">About Us</Link>
              <Link href="/careers" className="block hover:text-white">Careers</Link>
              <Link href="/case-studies" className="block hover:text-white">Case Studies</Link>
              <Link href="/gallery" className="block hover:text-white">Gallery</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 space-y-2 text-sm text-gray-400">
              <p>📞 +1 212 555 1234</p>
              <p>✉️ hello@5thelement.agency</p>
            </div>
          </div>

          {/* 🔸 Divider 2 */}
          <div className="hidden lg:block absolute left-[50%] top-0 h-full w-px bg-white/10"></div>

          {/* RIGHT - NEWSLETTER */}
          <div className="lg:col-span-6">
            <h3 className="text-base md:text-lg font-bold uppercase tracking-widest mb-4 text-[#ff2a4d]">
              Subscribe to Our Newsletter
            </h3>

            <p className="text-sm md:text-base text-gray-400 mb-6">
              Get marketing insights, case studies, and updates straight to your inbox.
            </p>

            <form className="space-y-4 max-w-[520px]">
              <input
                placeholder="Your first name"
                className="w-full bg-[#1a1a1a] rounded-full px-6 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2a4d]"
              />

              <input
                placeholder="Your work email address*"
                className="w-full bg-[#1a1a1a] rounded-full px-6 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2a4d]"
                type="email"
              />

              <button className="w-full bg-[#ff2a4d] rounded-full py-3 text-base font-bold uppercase tracking-widest hover:bg-red-700 transition">
                Subscribe Now
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* 🔻 BOTTOM STRIP */}
        <div className="border-t border-white/10 pt-6 mt-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-gray-400">

            {/* Social */}
            <div className="flex gap-4">
              <Facebook size={18} />
              <Twitter size={18} />
              <Linkedin size={18} />
            </div>

            {/* Locations */}
            <div className="flex gap-10 text-sm">
              <span>New York</span>
              <span>London</span>
              <span>Shanghai</span>
            </div>

            {/* Legal */}
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </div>

          </div>

          <p className="text-center text-xs text-gray-600 mt-6">
            © {new Date().getFullYear()} 5th Element. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

// "use client";

// import React, { useState, useEffect } from "react";
// import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white pt-20 pb-6 relative overflow-hidden border-t border-white/10">
//       <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12">
        
//         {/* Main Grid Section */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
//           {/* 1. Left Column: Logo & Tagline */}
//           <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-r-0 md:border-r border-white/10 pr-0 md:pr-12">
//             <img src="/5th-eleLogo.png" className="h-16 mb-8 object-contain" alt="5th Element Logo" />
//             <h2 className="text-[#e30613] text-2xl md:text-3xl font-bold leading-tight mb-10 max-w-[280px]">
//               Integrated Marketing. <br />
//               Measurable Impact.
//             </h2>
//             <div className="flex gap-4">
//                <SocialIcon icon={<Facebook size={18} />} />
//                <SocialIcon icon={<Twitter size={18} />} />
//                <SocialIcon icon={<Linkedin size={18} />} />
//                <SocialIcon icon={<Instagram size={18} />} />
//             </div>
//           </div>

//           {/* 2. Middle Column: Quick Links & Contact */}
//           <div className="md:col-span-4 border-r-0 md:border-r border-white/10 px-0 md:px-12">
//             <h3 className="text-[#e30613] text-lg font-bold mb-8">Quick Links</h3>
//             <nav className="flex flex-col gap-4 mb-10">
//               <FooterLink href="/about-us" text="About Us" />
//               <FooterLink href="/careers" text="Careers" />
//               <FooterLink href="/case-studies" text="Case Studies" />
//               <FooterLink href="/gallery" text="Gallery" />
//               <FooterLink href="/contact" text="Contact" />
//             </nav>
            
//             <div className="space-y-4 pt-6 border-t border-white/5">
//               <div className="flex items-center gap-3 text-gray-400 text-sm">
//                 <Phone size={16} className="text-[#e30613]" />
//                 <span>+1 212 555 1234</span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-400 text-sm">
//                 <Mail size={16} className="text-[#e30613]" />
//                 <span>hello@5thelement.agency</span>
//               </div>
//             </div>
//           </div>

//           {/* 3. Right Column: Newsletter */}
//           <div className="md:col-span-4 pl-0 md:pl-12">
//             <h3 className="text-[#e30613] text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
//             <p className="text-gray-400 text-sm mb-8 leading-relaxed">
//               Get marketing insights, case studies, and updates straight to your inbox.
//             </p>
            
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your first name"
//                 className="w-full bg-[#121212] border border-white/10 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:border-[#e30613] transition"
//               />
//               <input
//                 type="email"
//                 placeholder="Your work email address*"
//                 className="w-full bg-[#121212] border border-white/10 rounded-full px-6 py-3.5 text-sm focus:outline-none focus:border-[#e30613] transition"
//               />
//               <button className="w-full bg-[#e30613] text-white rounded-full py-3.5 text-sm font-black uppercase tracking-widest hover:bg-red-700 transition duration-300">
//                 SUBSCRIBE NOW
//               </button>
//             </form>
//             <p className="text-[10px] text-gray-500 mt-4">
//               By subscribing, you agree to our <Link href="/privacy" className="text-[#e30613] hover:underline">Privacy Policy</Link>.
//             </p>
//           </div>
//         </div>

//         {/* Bottom Section: World Clock & Legal */}
//         <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
//           {/* Social icons for bottom (as per image) */}
//           <div className="flex gap-3 order-3 lg:order-1">
//              <SocialIcon icon={<Facebook size={16} />} small />
//              <SocialIcon icon={<Twitter size={16} />} small />
//              <SocialIcon icon={<Linkedin size={16} />} small />
//              <SocialIcon icon={<Instagram size={16} />} small />
//           </div>

//           {/* Clocks Section */}
//           <div className="flex gap-8 md:gap-12 order-1 lg:order-2">
//             <WorldClock city="New York" offset={-5} />
//             <WorldClock city="London" offset={0} />
//             <WorldClock city="Shanghai" offset={8} />
//           </div>

//           {/* Legal Links & Copyright */}
//           <div className="flex flex-col items-center lg:items-end gap-2 order-2 lg:order-3">
//              <div className="flex gap-4 text-[11px] text-gray-500 uppercase tracking-wider">
//                 <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
//                 <span className="text-white/20">|</span>
//                 <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
//              </div>
//              <p className="text-[10px] text-gray-600 uppercase tracking-tighter">
//                 © 2025 5th Element. All rights reserved.
//              </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// /* Reusable Components */
// const SocialIcon = ({ icon, small }: { icon: React.ReactNode; small?: boolean }) => (
//   <div className={`flex items-center justify-center border border-white/20 rounded-lg cursor-pointer hover:border-[#e30613] hover:text-[#e30613] transition-all
//     ${small ? 'w-8 h-8' : 'w-10 h-10'}`}>
//     {icon}
//   </div>
// );

// const FooterLink = ({ href, text }: { href: string; text: string }) => (
//   <Link href={href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
//     {text}
//   </Link>
// );

// const WorldClock = ({ city, offset }: { city: string; offset: number }) => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const cityTime = new Date(time.getTime() + (time.getTimezoneOffset() * 60000) + (3600000 * offset));
//   const formatTime = (date: Date) => date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });

//   return (
//     <div className="flex items-center gap-4 group">
//       <div className="flex flex-col text-right">
//         <span className="text-[11px] font-bold text-gray-400 group-hover:text-white transition uppercase tracking-widest">{city}</span>
//         <span className="text-sm font-mono text-gray-500">{formatTime(cityTime)}</span>
//       </div>
//       <div className="relative w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
//         {/* Analog hands logic using your fixed version */}
//         <div className="absolute w-[1.5px] h-2.5 bg-white origin-bottom -translate-y-full" style={{ transform: `rotate(${(cityTime.getHours() % 12) * 30 + cityTime.getMinutes() / 2}deg)` }} />
//         <div className="absolute w-[1px] h-3.5 bg-white/60 origin-bottom -translate-y-full" style={{ transform: `rotate(${cityTime.getMinutes() * 6}deg)` }} />
//         <div className="w-1 h-1 bg-white rounded-full z-10" />
//       </div>
//     </div>
//   );
// };

// export default Footer;