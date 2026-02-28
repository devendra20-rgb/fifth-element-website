export default function GalleryHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-black">
      
      {/* Orbital Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/20 to-black" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Label */}
        <p className="text-indigo-500 uppercase tracking-[0.4em] text-sm font-bold mb-6">
          Visual Archive
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1] uppercase tracking-tighter">
          Capturing <br />
          <span className="bg-gradient-to-r from-indigo-500 via-white to-indigo-400 bg-clip-text text-transparent">
            the Excellence
          </span>
        </h1>

        {/* Sub-text */}
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium italic">
          "A visual journey through the campaigns, events, and activations that 
          defined brand success across the nation."
        </p>

        {/* Decorative Down-Line */}
        <div className="mt-16 flex flex-col items-center gap-4 opacity-40">
           <div className="w-px h-20 bg-gradient-to-b from-indigo-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}