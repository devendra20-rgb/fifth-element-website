// components/case-studies/OutdoorDetailed.jsx
export default function OutdoorDetailed() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f1f5f9] rounded-[3rem] overflow-hidden grid lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7">
            <img 
              src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=1600" 
              className="w-full h-full object-cover min-h-[500px]" 
              alt="Outdoor Campaign"
            />
          </div>
          <div className="lg:col-span-5 p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">Skyline Domination</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-600 pl-6">
                <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-1">Location Strategy</p>
                <p className="text-gray-700">Prime airports aur metro corridors ko target kiya gaya for maximum high-net-worth audience reach.</p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-6">
                <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mb-1">Ad Format</p>
                <p className="text-gray-700">Digital Unipoles with 24/7 dynamic content updates based on peak traffic times.</p>
              </div>
              <div className="pt-6">
                <button className="px-8 py-4 bg-[#0f172a] text-white font-bold rounded-full hover:bg-indigo-600 transition-colors">
                  View Data Insights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}