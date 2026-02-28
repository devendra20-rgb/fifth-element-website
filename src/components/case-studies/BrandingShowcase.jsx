// components/case-studies/BrandingShowcase.jsx
import { ArrowRight } from "lucide-react";

export default function BrandingShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden bg-[#0f172a] text-white">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-6 block">Featured Branding Case</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Re-imagining <br /> Digital Identity.
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-md">
              How we helped a fintech giant pivot to a Gen-Z audience with a 40% increase in brand recall.
            </p>
            <button className="flex items-center gap-4 text-white font-bold group">
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-5 h-5" />
              </span>
              View Full Process
            </button>
          </div>
          <div className="relative h-[400px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Case Study"
            />
          </div>
        </div>
      </div>
    </section>
  );
}