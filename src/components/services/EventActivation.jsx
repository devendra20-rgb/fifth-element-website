import { Zap, Users, Trophy } from "lucide-react";

export default function EventActivation() {
  const cards = [
    { title: "BTL Activations", icon: <Users />, desc: "Connecting brands directly with consumers at high-traffic hubs." },
    { title: "Corporate Events", icon: <Trophy />, desc: "Flawless execution for product launches and annual meets." },
    { title: "Experiential Tech", icon: <Zap />, desc: "Using AR/VR to create unforgettable brand interactions." }
  ];

  return (
    <section id="events" className="py-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Activation & Events</h2>
          <div className="h-1 w-32 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="group p-10 rounded-3xl bg-[#1e293b] border border-gray-800 hover:border-indigo-500 transition-all duration-300">
              <div className="w-16 h-16 bg-indigo-600/20 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}