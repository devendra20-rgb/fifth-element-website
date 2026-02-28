export default function AwardsRecognition() {
  return (
    <section className="py-20 px-6 bg-black/60 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Awards & Recognition
        </h2>
        <p className="text-xl text-gray-400 mb-16">Proud moments that fuel our drive to do more</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Replace with real logos/awards – yahan placeholder */}
          <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-500/20">
            <img src="/images/award1.png" alt="Award 1" className="h-32 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl font-bold text-purple-300">Top Innovator 2024</h3>
            <p className="text-gray-400 mt-2">Tech Excellence Awards</p>
          </div>

          <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-500/20">
            <img src="/images/award2.png" alt="Award 2" className="h-32 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl font-bold text-purple-300">Best Tech Solution 2025</h3>
            <p className="text-gray-400 mt-2">Global Innovation Summit</p>
          </div>

          <div className="p-10 rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-500/20">
            <img src="/images/award3.png" alt="Award 3" className="h-32 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl font-bold text-purple-300">Industry Leader Award</h3>
            <p className="text-gray-400 mt-2">Digital Transformation Forum</p>
          </div>
        </div>
      </div>
    </section>
  );
}