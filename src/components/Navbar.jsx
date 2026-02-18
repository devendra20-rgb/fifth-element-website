"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#EF6192] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Top Utility Bar (hidden on mobile, but we'll show in mobile menu) */}
        <div className="hidden md:flex justify-end items-center py-2">
          <div
            className={`flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.15em] ${
              isScrolled ? "text-white/80" : "text-white/60"
            }`}
          >
            <a href="#">About Us</a>
            <a href="#">Newsletter</a>
            <a href="#">Opt Out</a>
            <a href="#">Privacy Center</a>
          </div>
        </div>

        {/* Main Nav Row */}
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* LEFT LOGO */}
          <div className="flex items-center gap-4">
            <img
              src="/5th-eleLogo.png"
              alt="logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <div className="hidden md:block h-7 w-[2px] bg-white/40 rotate-[20deg]" />
          </div>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden lg:flex items-center gap-8 text-[13px] font-extrabold uppercase tracking-widest ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-white/80 transition">
              Technology <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white/80 transition">
              Offer <ChevronDown size={14} />
            </div>
            <a href="#" className="hover:text-white/80 transition">Case Studies</a>
            <a href="#" className="hover:text-white/80 transition">Resources</a>
            <a href="#" className="hover:text-white/80 transition">Blog</a>
            <a href="#" className="hover:text-white/80 transition">Careers</a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* CONTACT BUTTON */}
            <button
              className={`hidden sm:block px-6 md:px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest border transition-all ${
                isScrolled
                  ? "border-white text-white hover:bg-white hover:text-[#EF6192]"
                  : "border-white/30 text-white hover:bg-white hover:text-black"
              }`}
            >
              Contact us
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden text-white`}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - full width, no right white space */}
      {open && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 lg:hidden flex flex-col">
          {/* Close button top right */}
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>

          {/* Menu Content - centered */}
          <div className="flex-grow flex flex-col items-center justify-center px-6 space-y-8 text-center">
            {/* Top Utility Links - mobile pe dikhao */}
            <div className="flex flex-col gap-4 text-white/80 text-lg font-medium mb-8">
              <a href="#" onClick={() => setOpen(false)}>About Us</a>
              <a href="#" onClick={() => setOpen(false)}>Newsletter</a>
              <a href="#" onClick={() => setOpen(false)}>Opt Out</a>
              <a href="#" onClick={() => setOpen(false)}>Privacy Center</a>
            </div>

            {/* Main Menu Links */}
            <a href="#" className="text-white text-2xl font-bold" onClick={() => setOpen(false)}>
              Technology
            </a>
            <a href="#" className="text-white text-2xl font-bold" onClick={() => setOpen(false)}>
              Offer
            </a>
            <a href="#" className="text-white text-2xl font-bold" onClick={() => setOpen(false)}>
              Case Studies
            </a>
            <a href="#" className="text-white text-2xl font-bold" onClick={() => setOpen(false)}>
              Resources
            </a>
            <a href="#" className="text-white text-2xl font-bold" onClick={() => setOpen(false)}>
              Blog
            </a>
            <a href="#" className="text-white text-2xl font-bold" onClick={() => setOpen(false)}>
              Careers
            </a>

            {/* Contact Button */}
            <button
              className="mt-8 w-3/4 max-w-xs bg-[#e30613] text-white py-4 rounded-full font-bold text-xl hover:bg-red-700 transition"
              onClick={() => setOpen(false)}
            >
              Contact us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;