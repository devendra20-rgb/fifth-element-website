import { Layers } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const eventImages = [
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400",
  "https://images.unsplash.com/photo-1523580494863-6f3031224594?q=80&w=500",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=500",
  "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=600",
];

export default function JustifiedGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="text-[#6900CC] font-black uppercase tracking-[0.3em] text-xs mb-6 block">
              Event Highlights
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-8 leading-[0.9] uppercase tracking-tighter">
              Moments of <br /> <span className="text-[#39B14A]">Impact</span>
            </h2>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed font-medium">
              Nationwide events aur activations ke zariye brands ko real people se connect kiya hai. Ye gallery hamari precision aur creativity ki misaal hai.
            </p>
            
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 flex items-center gap-8 shadow-sm group hover:border-[#6900CC]/30 transition-all">
                <div className="bg-white text-[#6900CC] p-5 rounded-2xl shadow-xl border border-gray-100 group-hover:bg-[#6900CC] group-hover:text-white transition-all duration-500">
                  <Layers size={28} />
                </div>
                <div>
                    <p className="text-4xl font-black text-black">100+</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Events Executed</p>
                </div>
            </div>
          </div>

          {/* Justified Gallery Side */}
          <div className="lg:col-span-8 flex flex-wrap gap-4">
            {eventImages.map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-[2rem] h-[280px] flex-grow shadow-lg">
                <img 
                  src={src} 
                  alt={`Event ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Neon Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6900CC]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <button className="px-8 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-2 hover:bg-[#39B14A] hover:text-white transition-all">
                      View Event <ArrowUpRight size={14} />
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}