import { ArrowUpRight } from "lucide-react";

export default function OutdoorDetailed() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-50 rounded-[4rem] overflow-hidden grid lg:grid-cols-12 gap-0 border border-gray-100">
          <div className="lg:col-span-7 relative group">
            <img 
              src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=1600" 
              className="w-full h-full object-cover min-h-[600px] transition-transform duration-700 group-hover:scale-105" 
              alt="Outdoor Campaign"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6900CC]/20 to-transparent" />
          </div>
          <div className="lg:col-span-5 p-12 md:p-20 flex flex-col justify-center bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-10 uppercase tracking-tighter">Skyline <br /><span className="text-[#6900CC]">Domination</span></h2>
            
            <div className="space-y-8">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[#39B14A]" />
                <p className="text-gray-400 font-black uppercase text-xs tracking-widest mb-2">Location Strategy</p>
                <p className="text-gray-900 font-bold text-lg">Prime airports aur metro corridors targetted for HNW audience reach.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[#6900CC]" />
                <p className="text-gray-400 font-black uppercase text-xs tracking-widest mb-2">Ad Format</p>
                <p className="text-gray-900 font-bold text-lg">Digital Unipoles with 24/7 dynamic content updates.</p>
              </div>

              <div className="pt-8">
                <button className="group flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#6900CC] transition-all">
                  View Data Insights
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}