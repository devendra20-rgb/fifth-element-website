"use client";
import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-10">
        {/* GRID MAIN */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
          {/* LEFT BLOCK */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/5th-eleLogo.png" className="h-12 md:h-14" />
              <span className="text-xl text-[#e30613] font-bold">/</span>
            </div>

            <p className="text-[#e30613] text-lg font-medium mb-6 leading-snug">
              The Next-Generation <br /> Performance DSP
            </p>

            <div className="flex gap-6 text-gray-400">
              <Facebook size={20} className="hover:text-white cursor-pointer" />
              <Twitter size={20} className="hover:text-white cursor-pointer" />
              <Linkedin size={20} className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* HOME */}
          <div>
            <FooterTitle text="Home" />
            <div className="space-y-6">
              <FooterLink text="Next-Gen Tech" />
              <FooterLink text="IntentGPT" />
              <FooterLink text="Case Studies" />
              <FooterLink text="Blog" />
              <FooterLink text="Contact" />
            </div>
          </div>

          {/* OFFER */}
          <div>
            <FooterTitle text="Offer" />
            <div className="space-y-6">
              <FooterLink text="Personalized Retargeting" />
              <FooterLink text="Branding" />
              <FooterLink text="For industries" />
              <FooterLink text="For agencies" />
              <FooterLink text="Gaming" />
              <FooterLink text="In-app" />
            </div>
          </div>

          {/* LEARN MORE */}
          <div>
            <FooterTitle text="Learn more" />
            <div className="space-y-6">
              <FooterLink text="Careers" />
              <FooterLink text="About Us" />
              <FooterLink text="Partners" />
              <FooterLink text="Techblog" />
              <p className="text-s text-gray-500 mt-5">
                <span className="text-[#e30613] cursor-pointer">
                  Cookie preferences
                </span>
              </p>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 max-w-[380px] ml-auto">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
              Newsletter
            </h3>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Stay on top of the latest in digital ads.
              <br />
              Sign up to our newsletter.
            </p>

            <form className="space-y-4">
              <input
                placeholder="First name*"
                className="w-full bg-[#1a1a1a] rounded-full px-5 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e30613]"
              />

              <input
                placeholder="Your work e-mail address...*"
                className="w-full bg-[#1a1a1a] rounded-full px-5 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e30613]"
              />

              <button className="w-full bg-[#e30613] rounded-full py-3 text-sm font-semibold uppercase tracking-wide hover:bg-red-700 transition">
                Sign up
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              By subscribing you agree that 5th Element will process your data
              to send the newsletter.
            </p>

            <label className="flex items-start gap-2 mt-4 text-xs text-gray-400">
              <input type="checkbox" className="accent-[#e30613]" />I agree to
              be contacted to discuss potential cooperation.
            </label>
          </div>
        </div>

        {/* LOCATION CLOCK ROW */}
        <div className="flex justify-center gap-20 md:gap-32 mb-12">
          <WorldClock city="New York" offset={-4} />
          <WorldClock city="London" offset={0} />
          <WorldClock city="Shanghai" offset={8} />
        </div>

        {/* CURVED LINE */}
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

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-white/10 pt-6">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <span>Modern Slavery Statement</span>
            <span>Our Technologies</span>
            <span>Investors</span>
            <span>Tax Strategy</span>
            <span>Diversity & Inclusion Policy</span>
          </div>

          <p>Copyright © 2026 5th Element. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* reusable */
const FooterTitle = ({ text }) => (
  <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
    <span className="w-1.5 h-1.5 bg-[#e30613] rounded-full"></span>
    {text}
  </h3>
);

const FooterLink = ({ text }) => (
  <p className="text-sm text-gray-400 hover:text-white cursor-pointer transition-all duration-300">
    {text}
  </p>
);

const WorldClock = ({ city, offset }) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // local time + offset convert
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
      {/* Clock Circle */}
      <div className="relative w-14 h-14 rounded-full border border-white/30 flex items-center justify-center">
        {/* hour hand */}
        <div
          className="absolute w-[2px] h-4 bg-white origin-bottom"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        />

        {/* minute hand */}
        <div
          className="absolute w-[1.5px] h-5 bg-white origin-bottom"
          style={{ transform: `rotate(${minDeg}deg)` }}
        />

        {/* center dot */}
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>

      {/* City label */}
      <span className="text-[11px] text-white">{city}</span>
    </div>
  );
};
