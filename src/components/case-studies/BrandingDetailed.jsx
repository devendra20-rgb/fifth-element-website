import { CheckCircle2, TrendingUp } from "lucide-react";

export default function BrandingDetailed() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#6900CC] font-black uppercase tracking-widest text-sm mb-4 block">Branding & Strategy</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-8 leading-tight">
              Revitalizing the <br /> <span className="text-[#39B14A]">Global Tech Pulse</span>
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-[2rem] border-l-8 border-[#6900CC]">
                <h4 className="text-xl font-bold text-gray-900 mb-4 ">Our Solution</h4>
                <ul className="space-y-3">
                  {["Complete Visual Identity Overhaul", "Tone of Voice Development", "Multi-channel Content Strategy"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-bold">
                      <CheckCircle2 className="text-[#39B14A] w-6 h-6" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-12 pt-4">
                <div>
                  <p className="text-5xl font-black text-[#6900CC]">140%</p>
                  <p className="text-gray-400 text-xs uppercase font-black tracking-widest mt-1">Brand Awareness</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-[#39B14A]">2.4x</p>
                  <p className="text-gray-400 text-xs uppercase font-black tracking-widest mt-1">User Engagement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#6900CC] to-[#39B14A] rounded-[3.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200" 
              className="relative rounded-[3rem] shadow-2xl h-[600px] w-full object-cover z-10" 
              alt="Branding Case Study"
            />
          </div>
        </div>
      </div>
    </section>
  );
}