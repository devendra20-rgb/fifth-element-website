// components/case-studies/EventsDetailed.jsx
import { MapPin, Users, Zap } from "lucide-react";

export default function EventsDetailed() {
  return (
    <section className="py-24 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic">The Mega Activation Hub</h2>
          <p className="text-indigo-400 font-bold uppercase tracking-widest">A 3-Day Immersive Brand Experience</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Detailed Stat Card 1 */}
          <div className="bg-[#1e293b] p-10 rounded-[2rem] border border-gray-800">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 italic underline decoration-indigo-500 underline-offset-4">The Crowd</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Humne 15 Prime locations par simultaneous activations kiye, jisme 50,000+ log directly brand se engage hue.
            </p>
            <div className="text-3xl font-black text-white">50K+ <span className="text-sm font-normal text-indigo-400">Attendees</span></div>
          </div>

          {/* Center Detailed Card (Focus on Tech) */}
          <div className="bg-indigo-600 p-10 rounded-[2rem] shadow-2xl shadow-indigo-600/20 lg:-mt-10 lg:mb-10">
            <div className="w-12 h-12 bg-white text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Zap />
            </div>
            <h3 className="text-2xl font-bold mb-4 italic underline decoration-white underline-offset-4">Innovation</h3>
            <p className="text-indigo-50 leading-relaxed mb-6">
              AR/VR kiosks ke zariye humne physical products ko virtual world mein showcase kiya, jisne dwell time 3x badha diya.
            </p>
            <div className="text-3xl font-black text-white">8.5 Min <span className="text-sm font-normal text-indigo-100">Avg. Engagement</span></div>
          </div>

          {/* Detailed Stat Card 3 */}
          <div className="bg-[#1e293b] p-10 rounded-[2rem] border border-gray-800">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 italic underline decoration-indigo-500 underline-offset-4">Presence</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Pan-India execution ne brand ko Tier-1 aur Tier-2 cities dono mein massive visibility dilaayi.
            </p>
            <div className="text-3xl font-black text-white">15 <span className="text-sm font-normal text-indigo-400">Cities Covered</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}