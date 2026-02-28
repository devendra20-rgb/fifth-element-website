import { Zap, ShieldCheck, Target, Cpu, MessageSquare } from "lucide-react";

const values = [
  { 
    title: "Deep Tech DNA", 
    desc: "We leverage advanced Neural Networks and Deep Learning to solve problems that traditional logic can't touch.", 
    icon: <Cpu className="w-8 h-8" /> 
  },
  { 
    title: "Radical Clarity", 
    desc: "No black boxes. We believe in transparent AI where every decision and every cent spent is fully accountable.", 
    icon: <ShieldCheck className="w-8 h-8" /> 
  },
  { 
    title: "Hyper-Performance", 
    desc: "Speed is our standard. We optimize for millisecond-latency and maximum ROI in every deployment.", 
    icon: <Zap className="w-8 h-8" /> 
  },
  { 
    title: "Human-First AI", 
    desc: "Technology is a tool, not a replacement. We design our systems to empower human creativity, not restrict it.", 
    icon: <MessageSquare className="w-8 h-8" /> 
  },
  { 
    title: "Relentless Precision", 
    desc: "Every data point matters. We obsess over the details to ensure 99.9% accuracy in our predictive models.", 
    icon: <Target className="w-8 h-8" /> 
  },
];

export default function TeamValues() {
  return (
    <section className="py-24 px-6 bg-[#0f172a]"> {/* Dark Theme like RTB House deep sections */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            The Principles of <span className="text-indigo-400">Our Craft</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our values are the algorithms that govern our company culture and client relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div 
              key={i}
              className="p-10 rounded-2xl bg-[#1e293b] border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="mb-6 text-indigo-400 group-hover:text-white transition-colors">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {value.desc}
              </p>
            </div>
          ))}
          
          {/* Custom RTB Style Gradient Card */}
          <div className="p-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col justify-center border border-indigo-500 shadow-lg shadow-indigo-500/20">
             <h3 className="text-2xl font-bold text-white mb-2">Join the Future</h3>
             <p className="text-indigo-100 text-sm mb-6">We are always looking for bold minds to join our journey.</p>
             <a href="#careers" className="text-white font-bold flex items-center gap-2 group">
               Connect with us <span className="group-hover:translate-x-2 transition-transform">→</span>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}