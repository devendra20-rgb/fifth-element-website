// components/case-studies/BrandingDetailed.jsx
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function BrandingDetailed() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-2 underline-offset-8">Branding & Strategy</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-8 leading-tight">
              Revitalizing the <br /> <span className="text-indigo-600">Global Tech Pulse</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">The Challenge</h4>
                <p className="text-gray-600 leading-relaxed">
                  Client ka brand image purana ho chuka tha aur wo Gen-Z audience se connect nahi kar paa rahe the. Unka visual message fragmented tha.
                </p>
              </div>

              <div className="bg-[#f8fafc] p-8 rounded-3xl border-l-4 border-indigo-600">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h4>
                <ul className="space-y-3">
                  {["Complete Visual Identity Overhaul", "Tone of Voice Development", "Multi-channel Content Strategy"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-indigo-600 w-5 h-5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-10 pt-4">
                <div>
                  <p className="text-4xl font-black text-indigo-600">140%</p>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mt-1">Brand Awareness</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-indigo-600">2.4x</p>
                  <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mt-1">User Engagement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200" 
              className="rounded-[3rem] shadow-2xl h-[600px] w-full object-cover" 
              alt="Branding Case Study"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full text-green-600"><TrendingUp /></div>
              <div>
                <p className="font-bold text-gray-900">Direct Impact</p>
                <p className="text-sm text-gray-500">Verified by Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}