// components/case-studies/OutdoorImpact.jsx
import { motion } from "framer-motion";

export default function OutdoorImpact() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden h-[70vh] flex items-center px-12">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=1600" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Billboard"
          />
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-white text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
              Dominating <br /> The Skyline.
            </h3>
            <div className="flex gap-10">
              <div>
                <p className="text-indigo-400 text-4xl font-black">1.2M+</p>
                <p className="text-white/60 text-sm uppercase font-bold">Daily Impressions</p>
              </div>
              <div className="w-px h-16 bg-white/20" />
              <div>
                <p className="text-indigo-400 text-4xl font-black">15</p>
                <p className="text-white/60 text-sm uppercase font-bold">Prime Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}