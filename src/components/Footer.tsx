// "use client";

// import React from "react";
// import { Facebook, Twitter, Linkedin } from "lucide-react";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white pt-16 pb-10 relative overflow-hidden border-t border-[#6900CC]/30">

//       {/* 🔥 TOP RED GLOW */}
//       <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#6900CC]/20 via-transparent to-transparent pointer-events-none"></div>

//       <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 relative">

//         {/* 🔷 TOP GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 relative">

//           {/* LEFT */}
//           <div className="lg:col-span-3">
//             <img src="/5th-eleLogo.png" className="h-12 mb-6" alt="5th Element Logo" />

//             <p className="text-[#6900CC] text-xl md:text-2xl font-medium mb-6 leading-tight">
//               Integrated Marketing. <br /> Measurable Impact.
//             </p>

//             <div className="flex gap-4 text-gray-400">
//               <Facebook size={20} className="hover:text-white cursor-pointer" />
//               <Twitter size={20} className="hover:text-white cursor-pointer" />
//               <Linkedin size={20} className="hover:text-white cursor-pointer" />
//             </div>
//           </div>

//           {/* 🔸 Divider 1 */}
//           <div className="hidden lg:block absolute left-[25%] top-0 h-full w-px bg-white/10"></div>

//           {/* MIDDLE */}
//           <div className="lg:col-span-3">
//             <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white flex items-center gap-2">
//               <span className="w-1.5 h-1.5 bg-[#6900CC] rounded-full"></span>
//               Quick Links
//             </h3>

//             <div className="space-y-4 text-sm text-gray-400">
//               <Link href="/about-us" className="block hover:text-white">About Us</Link>
//               <Link href="/careers" className="block hover:text-white">Careers</Link>
//               <Link href="/case-studies" className="block hover:text-white">Case Studies</Link>
//               <Link href="/gallery" className="block hover:text-white">Gallery</Link>
//               <Link href="/contact" className="block hover:text-white">Contact</Link>
//             </div>

//             <div className="pt-6 border-t border-white/10 mt-6 space-y-2 text-sm text-gray-400">
//               <p>📞 +1 212 555 1234</p>
//               <p>✉️ hello@5thelement.agency</p>
//             </div>
//           </div>

//           {/* 🔸 Divider 2 */}
//           <div className="hidden lg:block absolute left-[50%] top-0 h-full w-px bg-white/10"></div>

//           {/* RIGHT - NEWSLETTER */}
//           <div className="lg:col-span-6">
//             <h3 className="text-base md:text-lg font-bold uppercase tracking-widest mb-4 text-[#6900CC]">
//               Subscribe to Our Newsletter
//             </h3>

//             <p className="text-sm md:text-base text-gray-400 mb-6">
//               Get marketing insights, case studies, and updates straight to your inbox.
//             </p>

//             <form className="space-y-4 max-w-[520px]">
//               <input
//                 placeholder="Your first name"
//                 className="w-full bg-[#1a1a1a] rounded-full px-6 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2a4d]"
//               />

//               <input
//                 placeholder="Your work email address*"
//                 className="w-full bg-[#1a1a1a] rounded-full px-6 py-3 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff2a4d]"
//                 type="email"
//               />

//               <button className="w-full bg-[#6900CC] rounded-full py-3 text-base font-bold uppercase tracking-widest hover:bg-[#5a00b3] transition">
//                 Subscribe Now
//               </button>
//             </form>

//             <p className="text-xs text-gray-500 mt-4">
//               By subscribing, you agree to our Privacy Policy.
//             </p>
//           </div>
//         </div>

//         {/* 🔻 BOTTOM STRIP */}
//         <div className="border-t border-white/10 pt-6 mt-10">

//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-gray-400">

//             {/* Social */}
//             <div className="flex gap-4">
//               <Facebook size={18} />
//               <Twitter size={18} />
//               <Linkedin size={18} />
//             </div>

//             {/* Locations */}
//             <div className="flex gap-10 text-sm">
//               <span>New York</span>
//               <span>London</span>
//               <span>Shanghai</span>
//             </div>

//             {/* Legal */}
//             <div className="flex gap-6 text-sm">
//               <Link href="/privacy-policy">Privacy Policy</Link>
//               <Link href="/terms-and-conditions">Terms & Conditions</Link>
//             </div>

//           </div>

//           <p className="text-center text-xs text-gray-600 mt-6">
//             © {new Date().getFullYear()} 5th Element. All rights reserved.
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-10 relative overflow-hidden border-t border-[#6900CC]/30">
      
      {/* 🔥 TOP PURPLE GLOW */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#6900CC]/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 relative">

        {/* 🔷 MAIN GRID (3 : 6 : 3) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 mb-12 relative">

          {/* 1. LEFT - LOGO SECTION (Grid span 3) */}
          <div className="md:col-span-12 lg:col-span-3">
            <img src="/5th-eleLogo.png" className="h-12 mb-6" alt="5th Element Logo" />

            <p className="text-[#6900CC] text-xl md:text-2xl font-medium mb-6 leading-tight">
              Integrated Marketing. <br /> Measurable Impact.
            </p>

            <div className="flex gap-4 text-gray-400">
              {/* <Facebook size={20} className="hover:text-[#6900CC] cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-[#6900CC] cursor-pointer transition-colors" /> */}
              <Linkedin size={20} className="hover:text-[#6900CC] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* 🔸 Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block absolute left-[25%] top-0 h-full w-px bg-white/10"></div>

          {/* 2. MIDDLE - MAP SECTION (Grid span 6) */}
          <div className="md:col-span-12 lg:col-span-6 flex flex-col items-center">
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl shadow-[#6900CC]/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12232.21336787043!2d55.1437044!3d25.0948316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b966919a995%3A0x7217c7b67f9147b5!2sDubai%20Media%20City%20Building%206!5e1!3m2!1sen!2sin!4v1772476682636!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* 🔸 Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block absolute left-[75%] top-0 h-full w-px bg-white/10"></div>

          {/* 3. RIGHT - QUICK LINKS (Grid span 3) */}
          <div className="md:col-span-12 lg:col-span-3 lg:pl-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#6900CC] rounded-full"></span>
              Quick Links
            </h3>

            <div className="space-y-4 text-sm text-gray-400">
              <Link href="/about-us" className="block hover:text-white transition-colors">About Us</Link>
              <Link href="/careers" className="block hover:text-white transition-colors">Careers</Link>
              <Link href="/case-studies" className="block hover:text-white transition-colors">Case Studies</Link>
              <Link href="/gallery" className="block hover:text-white transition-colors">Gallery</Link>
              <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2 text-[#6900CC] font-bold">
                <Phone size={14} />
                <span>+1 212 555 1234</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={14} className="text-[#6900CC]" />
                <span className="hover:text-white transition-colors">hello@5thelement.agency</span>
              </div>
            </div>
          </div>

        </div>

        {/* 🔻 BOTTOM STRIP */}
        <div className="border-t border-white/10 pt-6 mt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-gray-400 text-xs md:text-sm">

            {/* Social */}
            <div className="flex gap-4">
              {/* <Facebook size={18} className="hover:text-white cursor-pointer" />
              <Twitter size={18} className="hover:text-white cursor-pointer" /> */}
              {/* <Linkedin size={18} className="hover:text-white cursor-pointer" /> */}
            </div>

            {/* Locations */}
            {/* <div className="flex gap-10">
              <span className="hover:text-white cursor-default">New York</span>
              <span className="hover:text-white cursor-default">London</span>
              <span className="hover:text-white cursor-default">Shanghai</span>
            </div> */}

            {/* Legal */}
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
            </div>

          </div>

          <p className="text-center text-[10px] md:text-xs text-gray-600 mt-6 uppercase tracking-widest">
            © {new Date().getFullYear()} 5th Element. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;