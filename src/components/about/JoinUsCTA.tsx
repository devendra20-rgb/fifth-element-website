export default function JoinUsCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-white text-center border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">
          Want to Build the Future With Us?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
          We're always searching for talented, curious, and driven people who want to solve real problems with cutting-edge technology.
        </p>

        <a
          href="/contact"  // ← Changed from /careers to /contact
          className="inline-block px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Get in Touch →
        </a>
      </div>
    </section>
  );
}