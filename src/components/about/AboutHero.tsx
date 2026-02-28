export default function AboutHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-between items-center text-center py-32 px-10 md:px-20 lg:px-32">
      {/* Background subtle effects - orbital/red glow style */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />
        
        {/* Subtle red orbital/particle glows */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-700/8 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Small label above headline - red accent */}
        <p className="text-red-500 uppercase tracking-widest text-sm md:text-base font-medium mb-6">
          ABOUT OUR COMPANY
        </p>

        {/* Main headline - white + red gradient on key part */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8 md:mb-12 text-white">
          Building the future of
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
            performance & technology
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10 md:mb-14">
          We are a team of engineers, innovators, and strategists dedicated to unlocking hidden growth for businesses using next-generation AI-driven solutions — without losing control.
        </p>

        {/* Red CTA button - matches homepage style */}
        <a
          href="#our-story" // ya /about#our-story, ya phir OurStory section id se link kar sakte ho
          className="inline-flex items-center px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl font-bold rounded-full shadow-2xl shadow-red-900/30 transform hover:scale-105 transition-all duration-300 group"
        >
          Learn Our Story
          <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}