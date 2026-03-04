import { Zap, ShieldCheck, Target, Cpu, MessageSquare } from "lucide-react";

const values = [
  {
    title: "Deep Tech DNA",
    desc: "We leverage advanced Neural Networks and Deep Learning to solve problems that traditional logic can't touch.",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: "Radical Clarity",
    desc: "No black boxes. We believe in transparent AI where every decision and every cent spent is fully accountable.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Hyper-Performance",
    desc: "Speed is our standard. We optimize for millisecond-latency and maximum ROI in every deployment.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Human-First AI",
    desc: "Technology is a tool, not a replacement. We design our systems to empower human creativity, not restrict it.",
    icon: <MessageSquare className="w-8 h-8" />,
  },
  {
    title: "Relentless Precision",
    desc: "Every data point matters. We obsess over the details to ensure 99.9% accuracy in our predictive models.",
    icon: <Target className="w-8 h-8" />,
  },
];

export default function TeamValues() {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter leading-none">
            Principles of{" "}
            <span className="bg-gradient-to-r from-[#6900CC] to-[#39B14A] bg-clip-text text-transparent">
              Our Craft
            </span>
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">
            Our values are the algorithms that govern our company culture and
            client relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="p-12 rounded-[2.5rem] bg-[#0f0f0f] border border-white/5 hover:border-[#6900CC]/50 transition-all group"
            >
              <div className="mb-8 text-[#39B14A] group-hover:text-white transition-colors">
                {value.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase  tracking-tight">
                {value.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                {value.desc}
              </p>
            </div>
          ))}

          <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-[#6900CC] to-[#39B14A] flex flex-col justify-center shadow-2xl shadow-purple-900/20">
            <h3 className="text-3xl font-black text-white mb-4 uppercase leading-tight">
              Join the <br /> Future
            </h3>
            <p className="text-white/80 font-medium mb-8">
              We are always looking for bold minds to join our journey.
            </p>
            <a
              href="/careers"
              className="text-white font-black uppercase tracking-widest text-sm flex items-center gap-2 group"
            >
              Connect with us{" "}
              <span className="group-hover:translate-x-3 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
