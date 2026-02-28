import { Layers } from "lucide-react";

const eventImages = [
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400",
  "https://images.unsplash.com/photo-1523580494863-6f3031224594?q=80&w=500",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=500",
  "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?q=80&w=600",
];

export default function JustifiedGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-2 underline-offset-8">
              Event Highlights
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-8 leading-tight uppercase tracking-tighter">
              Moments of <br /> <span className="text-indigo-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Humne nationwide events aur activations ke zariye brands ko real people se connect kiya hai. Ye gallery hamari successful executions ki ek jhalak hai.
            </p>
            <div className="bg-[#f8fafc] p-8 rounded-3xl border border-gray-100 flex items-center gap-6 shadow-sm">
                <div className="bg-white text-indigo-600 p-4 rounded-2xl shadow-inner"><Layers /></div>
                <div>
                    <p className="text-3xl font-black text-gray-900">100+</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Events Executed</p>
                </div>
            </div>
          </div>

          {/* Justified Gallery Side */}
          <div className="lg:col-span-8 flex flex-wrap gap-4 justified-gallery">
            {eventImages.map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-3xl h-[250px] flex-grow">
                <img 
                  src={src} 
                  alt={`Event ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-2 border border-white text-white rounded-full text-xs font-bold uppercase">View Event</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}