// components/home/HomeServices.tsx
import Link from 'next/link';
import { ArrowRight, Palette, Zap, Globe } from 'lucide-react';

const homeServices = [
  {
    title: "Branding & Promotion",
    icon: <Palette className="w-6 h-6" />,
    desc: "Building visual legacies that resonate with modern audiences.",
    link: "/services#branding"
  },
  {
    title: "Activation & Events",
    icon: <Zap className="w-6 h-6" />,
    desc: "Immersive physical & digital experiences for brand growth.",
    link: "/services#events"
  },
  {
    title: "Outdoor Advertising",
    icon: <Globe className="w-6 h-6" />,
    desc: "Dominating the skyline with high-visibility OOH solutions.",
    link: "/services#outdoor"
  }
];

export default function HomeServices() {
  return (
    <section className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4 uppercase tracking-tight">
              What We <span className="text-indigo-600">Do Best</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Precision-driven marketing solutions tailored for market leaders.
            </p>
          </div>
          <Link 
            href="/services" 
            className="group flex items-center gap-2 text-indigo-600 font-bold text-lg hover:underline underline-offset-8"
          >
            Explore All Services 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {homeServices.map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
              <Link 
                href={service.link} 
                className="text-sm font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-800"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}