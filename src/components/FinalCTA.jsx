export default function JoinUsCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-white text-center border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
          Ready to scale your next campaign?
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Whether you need performance growth, a high-impact activation, or
          city-wide outdoor visibility-we’ll help you launch with confidence.
        </p>

        <a
          href="/contact" // ← Changed from /careers to /contact
          className="inline-block px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Start a Project
        </a>
      </div>
    </section>
  );
}
