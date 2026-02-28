import { CheckCircle2 } from "lucide-react";

export default function BrandingPromotion() {
  const features = ["Visual Identity Design", "Social Media Strategy", "Content Production", "Brand Positioning"];

  return (
    <section id="branding" className="py-24 px-6 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/images/branding-main.jpg" alt="Branding" className="w-full h-[550px] object-cover" />
            <div className="absolute inset-0 bg-indigo-900/10 hover:bg-transparent transition-all duration-500"></div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6">
            Branding & <br /><span className="text-indigo-600">Promotion</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Hum aapke brand ki core values ko ek powerful visual language mein convert karte hain. 
            Hamara goal sirf awareness nahi, balki long-term brand loyalty create karna hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-800 font-medium p-4 bg-gray-50 rounded-xl">
                <CheckCircle2 className="text-indigo-600 w-5 h-5" /> {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}