export default function OutdoorAds() {
  return (
    <section id="outdoor" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-8">
            Outdoor <br /><span className="text-indigo-600">Advertising</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 italic">
            "Your message, amplified across the city's most iconic locations."
          </p>
          <div className="space-y-4">
            {["Premium Digital Billboards", "Transit & Metro Media", "Airport Branding", "Unipole & Gantries"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                <span className="text-indigo-600">0{i+1}.</span> {item}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/ooh-1.jpg" className="w-full h-80 object-cover rounded-3xl mt-12 shadow-xl" alt="Outdoor 1" />
            <img src="/images/ooh-2.jpg" className="w-full h-80 object-cover rounded-3xl shadow-xl" alt="Outdoor 2" />
          </div>
        </div>
      </div>
    </section>
  );
}