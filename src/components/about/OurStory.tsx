export default function OurStory() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 md:mb-20 text-[#0f172a] leading-[1.1]">
          The Evolution of <br className="hidden sm:block" />
          <span className="text-indigo-600">Digital Intelligence</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            {/* Phase 1 */}
            <div className="bg-[#f8fafc] p-10 rounded-3xl border border-gray-100 shadow-sm">
              <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4 block underline decoration-2 underline-offset-8">2020: The Spark</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Redefining Possibilities</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fifth Element was born from a singular vision: to bridge the gap between complex Deep Learning and everyday business operations. We didn't just want to build another software—we wanted to build a brain for digital ecosystems.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-[#f8fafc] p-10 rounded-3xl border border-gray-100 shadow-sm">
              <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4 block underline decoration-2 underline-offset-8">2023: Scaling Impact</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach, Local Depth</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                As our algorithms matured, so did our footprint. We moved from specialized niches to enterprise-scale solutions, helping partners across 3 continents turn raw data into predictable, high-impact revenue streams.
              </p>
            </div>

            {/* Final Statement */}
            <div className="bg-indigo-600 p-10 rounded-3xl shadow-xl">
              <p className="text-xl font-semibold text-white leading-relaxed italic">
                "We don't just predict the future of technology; we write the code that powers it. Our story is still being written by the success of our clients."
              </p>
            </div>
          </div>

          {/* Sticky Image with RTB House vibe (Sharp edges + subtle shadow) */}
          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/images/story-tech-modern.jpg" 
                alt="Tech Evolution"
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-3xl font-bold">4+ Years of</p>
                <p className="text-indigo-400 text-xl">Continuous Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}