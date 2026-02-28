export default function ContactHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex flex-col justify-between items-center text-center py-32 px-10 md:px-20 lg:px-32">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/20 to-black" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <span className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-sm mb-6 block">
          Contact Us
        </span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
          Let's Start <br />
          <span className="bg-gradient-to-r from-indigo-400 via-white to-indigo-500 bg-clip-text text-transparent">
            the Conversation
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium italic">
          "Expertise is just a message away. Reach out to discuss your goals."
        </p>
      </div>
    </section>
  );
}