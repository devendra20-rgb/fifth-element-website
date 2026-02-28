"use client";

import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-10 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Top Section: Logo + Tagline + Newsletter (Newsletter upar rakha) */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-10 mb-10">
          {/* Left: Logo + Tagline + Social */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <img src="/5th-eleLogo.png" className="h-12 md:h-14" alt="Fifth Element Logo" />
            </div>

            <p className="text-[#e30613] text-xl md:text-2xl font-medium mb-6 leading-tight">
              The Next-Generation <br /> Performance DSP
            </p>

            <div className="flex gap-6 text-gray-400">
              <Facebook size={24} className="hover:text-[#e30613] cursor-pointer transition-colors" />
              <Twitter size={24} className="hover:text-[#e30613] cursor-pointer transition-colors" />
              <Linkedin size={24} className="hover:text-[#e30613] cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <FooterTitle text="Company" />
            <div className="space-y-4 text-sm">
              <FooterLink href="/about-us" text="About Us" />
              <FooterLink href="/careers" text="Careers" />
              <FooterLink href="/contact" text="Contact" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/gallery" text="Gallery" />
            </div>
          </div>

          {/* Right: Newsletter (upar rakha, wider feel) */}
          <div className="lg:col-span-6 w-full">
            <h3 className="text-base md:text-lg font-bold uppercase tracking-widest mb-6 text-white">
              Newsletter
            </h3>

            <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
              Stay updated with the latest in next-gen performance advertising.
              <br />
              Subscribe to our newsletter.
            </p>

            <form className="space-y-4">
              <input
                placeholder="First name*"
                className="w-full bg-[#1a1a1a] rounded-full px-6 py-4 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e30613] transition"
                required
              />

              <input
                placeholder="Your work email address*"
                className="w-full bg-[#1a1a1a] rounded-full px-6 py-4 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e30613] transition"
                type="email"
                required
              />

              <button className="w-full bg-[#e30613] rounded-full py-4 text-base font-bold uppercase tracking-widest hover:bg-red-700 transition duration-300">
                Subscribe Now
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              By subscribing, you agree that Fifth Element will process your data to send the newsletter.
            </p>

            <label className="flex items-start gap-3 mt-4 text-xs text-gray-400 cursor-pointer">
              <input type="checkbox" className="accent-[#e30613] mt-1" />
              I agree to be contacted to discuss potential cooperation.
            </label>
          </div>
        </div>

        {/* Quick Links Section - 3 neat columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16 mb-16 border-t border-white/10 pt-12">
          {/* Company */}
          {/* <div>
            <FooterTitle text="Company" />
            <div className="space-y-4 text-sm">
              <FooterLink href="/about-us" text="About Us" />
              <FooterLink href="/careers" text="Careers" />
              <FooterLink href="/contact" text="Contact" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/gallery" text="Gallery" />
            </div>
          </div> */}

          {/* Solutions */}
          {/* <div>
            <FooterTitle text="Solutions" />
            <div className="space-y-4 text-sm">
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/gallery" text="Gallery" />
            </div>
          </div> */}

          {/* Legal */}
          {/* <div>
            <FooterTitle text="Legal" />
            <div className="space-y-4 text-sm">
              <FooterLink href="/privacy-policy" text="Privacy Policy" />
              <FooterLink href="/terms-and-conditions" text="Terms & Conditions" />
            </div>
          </div> */}
        </div>

        {/* World Clock Row */}
        <div className="flex justify-center gap-12 md:gap-16 lg:gap-20 mb-8">
          <WorldClock city="New York" offset={-5} />
          <WorldClock city="London" offset={0} />
          <WorldClock city="Shanghai" offset={8} />
        </div>

        {/* Curved Line */}
        <div className="relative w-full h-[60px] mb-8">
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
            className="absolute w-full h-full"
          >
            <path
              d="M0 50 Q 300 0 600 50 T 1200 50"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#e30613" />
                <stop offset="100%" stopColor="#a020f0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-white/10 pt-6">
          <p>Copyright © {new Date().getFullYear()} Fifth Element. All rights reserved.</p>

          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Reusable Components */
const FooterTitle = ({ text }: { text: string }) => (
  <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white flex items-center gap-2">
    <span className="w-1.5 h-1.5 bg-[#e30613] rounded-full"></span>
    {text}
  </h3>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    className="text-sm text-gray-400 hover:text-white transition-colors block"
  >
    {text}
  </Link>
);

/* World Clock Component (same as before) */
const WorldClock = ({ city, offset }: { city: string; offset: number }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const utc = time.getTime() + time.getTimezoneOffset() * 60000;
  const cityTime = new Date(utc + 3600000 * offset);

  const seconds = cityTime.getSeconds();
  const minutes = cityTime.getMinutes();
  const hours = cityTime.getHours();

  const secDeg = seconds * 6;
  const minDeg = minutes * 6;
  const hourDeg = hours * 30 + minutes / 2;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-14 h-14 rounded-full border border-white/30 flex items-center justify-center">
        <div
          className="absolute w-[2px] h-4 bg-white origin-bottom"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        />
        <div
          className="absolute w-[1.5px] h-5 bg-white origin-bottom"
          style={{ transform: `rotate(${minDeg}deg)` }}
        />
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>
      <span className="text-xs text-white/80">{city}</span>
    </div>
  );
};

export default Footer;