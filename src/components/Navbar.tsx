"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X, ChevronUp } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu open
  const [servicesExpanded, setServicesExpanded] = useState(false); // mobile services accordion

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu close karne pe accordion bhi reset kar do (optional)
  const handleMobileClose = () => {
    setOpen(false);
    setServicesExpanded(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#EF6192] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* LEFT LOGO */}
          <div className="flex items-center gap-4">
            <Link href="/" className="transition-opacity hover:opacity-90">
              <img
                src="/5th-eleLogo.png"
                alt="Fifth Element Logo"
                className="h-12 md:h-14 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden lg:flex items-center gap-8 text-[13px] font-extrabold uppercase tracking-widest ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            {/* Services Dropdown - Desktop (pure CSS hover) */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-white/80 transition">
                Services <ChevronDown size={14} />
              </button>

              <div
                className={`
                  absolute top-full left-0 mt-2 w-64 
                  bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200 pointer-events-none group-hover:pointer-events-auto
                `}
              >
                <div className="flex flex-col">
                  <Link
                    href="/services#branding"
                    className="flex items-center justify-between px-6 py-3 hover:bg-white/10 transition text-sm font-bold uppercase tracking-wider"
                  >
                    Branding + Promotion
                    <ChevronRight size={16} className="text-white/60" />
                  </Link>

                  <Link
                    href="/services#events"
                    className="flex items-center justify-between px-6 py-3 hover:bg-white/10 transition text-sm font-bold uppercase tracking-wider"
                  >
                    Activation & Events
                    <ChevronRight size={16} className="text-white/60" />
                  </Link>

                  <Link
                    href="/services#outdoor"
                    className="flex items-center justify-between px-6 py-3 hover:bg-white/10 transition text-sm font-bold uppercase tracking-wider"
                  >
                    Outdoor Advertising
                    <ChevronRight size={16} className="text-white/60" />
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/case-studies" className="hover:text-white/80 transition">
              Case Studies
            </Link>
            <Link href="/gallery" className="hover:text-white/80 transition">
              Gallery
            </Link>
            <Link href="/about-us" className="hover:text-white/80 transition">
              About Us
            </Link>
            <Link href="/careers" className="hover:text-white/80 transition">
              Careers
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden sm:block px-6 md:px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest border transition-all ${
                isScrolled
                  ? "border-white text-white hover:bg-white hover:text-[#EF6192]"
                  : "border-white/30 text-white hover:bg-white hover:text-black"
              }`}
            >
              Contact us
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden text-white`}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - Full screen */}
      {open && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 lg:hidden flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={handleMobileClose} className="text-white">
              <X size={32} />
            </button>
          </div>

          <div className="flex-grow flex flex-col items-center justify-center px-6 space-y-8 text-center">
            {/* Services Accordion in Mobile */}
            <div className="w-full max-w-xs">
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full flex items-center justify-between text-white text-2xl font-bold py-4 border-b border-white/20"
              >
                Services
                {servicesExpanded ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>

              {/* Sub-items - accordion content */}
              {servicesExpanded && (
                <div className="bg-white/10 rounded-lg mt-2 overflow-hidden">
                  <Link
                    href="/services#branding"
                    className="block px-6 py-4 text-white text-xl hover:bg-white/20 transition"
                    onClick={handleMobileClose}
                  >
                    Branding + Promotion
                  </Link>
                  <Link
                    href="/services#events"
                    className="block px-6 py-4 text-white text-xl hover:bg-white/20 transition"
                    onClick={handleMobileClose}
                  >
                    Activation & Events
                  </Link>
                  <Link
                    href="/services#outdoor"
                    className="block px-6 py-4 text-white text-xl hover:bg-white/20 transition"
                    onClick={handleMobileClose}
                  >
                    Outdoor Advertising
                  </Link>
                </div>
              )}
            </div>

            {/* Other links */}
            <Link
              href="/case-studies"
              className="text-white text-2xl font-bold"
              onClick={handleMobileClose}
            >
              Case Studies
            </Link>

            <Link
              href="/gallery"
              className="text-white text-2xl font-bold"
              onClick={handleMobileClose}
            >
              Gallery
            </Link>

            <Link
              href="/about-us"
              className="text-white text-2xl font-bold"
              onClick={handleMobileClose}
            >
              About Us
            </Link>

            <Link
              href="/careers"
              className="text-white text-2xl font-bold"
              onClick={handleMobileClose}
            >
              Careers
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="mt-8 w-3/4 max-w-xs bg-[#e30613] text-white py-4 rounded-full font-bold text-xl hover:bg-red-700 transition text-center"
              onClick={handleMobileClose}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;