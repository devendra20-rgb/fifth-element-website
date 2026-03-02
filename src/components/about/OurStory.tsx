export default function OurStory() {
  return (
    <section id="our-story" className="py-24 md:py-32 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-center mb-16 md:mb-24 text-[#0f172a] leading-[1] uppercase tracking-tighter">
          Evolution of <br className="hidden sm:block" />
          <span className="text-[#6900CC]">Digital Intelligence</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="bg-gray-50 p-12 rounded-[2.5rem] border border-gray-100 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#6900CC]" />
              <span className="text-xs font-black text-[#6900CC] uppercase tracking-widest mb-4 block">2020: The Spark</span>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Redefining Possibilities</h3>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                5th Element was born from a singular vision: to bridge the gap between complex Deep Learning and everyday business operations. We wanted to build a brain for digital ecosystems.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-gray-50 p-12 rounded-[2.5rem] border border-gray-100 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#39B14A]" />
              <span className="text-xs font-black text-[#39B14A] uppercase tracking-widest mb-4 block">2023: Scaling Impact</span>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Global Reach, Local Depth</h3>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                We moved from specialized niches to enterprise-scale solutions, helping partners across 3 continents turn raw data into predictable, high-impact revenue streams.
              </p>
            </div>

            {/* Final Statement Card */}
            <div className="bg-gradient-to-br from-[#6900CC] to-[#39B14A] p-12 rounded-[2.5rem] shadow-2xl shadow-purple-900/20">
              <p className="text-2xl font-black text-white leading-tight italic">
                "We don't just predict the future of technology; we write the code that powers it."
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white group">
              <img src="/images/story-tech-modern.jpg" alt="Tech Evolution" className="w-full h-[700px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 text-white">
                <p className="text-4xl font-black uppercase tracking-tighter">4+ Years of</p>
                <p className="text-[#39B14A] text-2xl font-bold uppercase tracking-widest mt-2">Continuous Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}