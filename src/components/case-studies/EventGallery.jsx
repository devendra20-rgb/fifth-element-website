// components/case-studies/EventGallery.jsx
export default function EventGallery() {
  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 uppercase italic">Events in Action</h2>
          <p className="text-gray-500 mt-2">Physical experiences that drove digital conversations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800" className="w-full h-full object-cover" alt="Event 1" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
              <p className="text-white font-bold text-xl">Tech Summit 2025</p>
            </div>
          </div>
          <div className="md:col-span-1 relative rounded-3xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800" className="w-full h-full object-cover" alt="Event 2" />
          </div>
          <div className="md:col-span-1 grid grid-rows-2 gap-6">
             <div className="relative rounded-3xl overflow-hidden bg-indigo-600 p-8 flex items-center justify-center text-center">
                <p className="text-white text-2xl font-black">50k+ <br /><span className="text-sm font-normal">Attendees</span></p>
             </div>
             <div className="relative rounded-3xl overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1540575861501-7ad060e39fe5?q=80&w=800" className="w-full h-full object-cover" alt="Event 3" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}