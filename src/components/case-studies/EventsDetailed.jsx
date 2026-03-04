import { MapPin, Users, Zap } from "lucide-react";

export default function EventsDetailed() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase ">The Mega Activation Hub</h2>
          <p className="bg-gradient-to-r from-[#6900CC] to-[#39B14A] bg-clip-text text-transparent font-black uppercase tracking-[0.3em]">
            A 3-Day Immersive Brand Experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Card 1 */}
          <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#6900CC]/50 transition-all">
            <div className="w-14 h-14 bg-[#6900CC] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#6900CC]/20">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-white uppercase ">The Crowd</h3>
            <p className="text-gray-500 leading-relaxed mb-6 font-medium">
              Prime locations par simultaneous activations, 50,000+ direct brand engagements.
            </p>
            <div className="text-4xl font-black text-[#6900CC]">50K+</div>
          </div>

          {/* Center Card - Highlighted */}
          <div className="bg-gradient-to-br from-[#6900CC] to-[#39B14A] p-1 rounded-[2.5rem] lg:-mt-10">
            <div className="bg-black h-full w-full rounded-[2.4rem] p-10">
              <div className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center mb-8">
                <Zap fill="currentColor" size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase ">Innovation</h3>
              <p className="text-gray-400 leading-relaxed mb-6 font-medium">
                AR/VR kiosks ne dwell time ko 3x badha diya, bridging physical and virtual worlds.
              </p>
              <div className="text-4xl font-black text-[#39B14A]">8.5 Min</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#39B14A]/50 transition-all">
            <div className="w-14 h-14 bg-[#39B14A] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#39B14A]/20">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-white uppercase ">Presence</h3>
            <p className="text-gray-500 leading-relaxed mb-6 font-medium">
              Pan-India execution covering Tier-1 and Tier-2 cities for massive visibility.
            </p>
            <div className="text-4xl font-black text-[#39B14A]">15 Cities</div>
          </div>
        </div>
      </div>
    </section>
  );
}