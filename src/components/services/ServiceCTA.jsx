import React from 'react';
import { ArrowRight, Send } from 'lucide-react';

export default function ServiceCTA() {
  return (
    <section className="py-24 px-6 bg-[#0f172a] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-gray-800 p-10 md:p-20 rounded-[3rem] text-center shadow-2xl">
          <span className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
            Ready to scale?
          </span>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Let's build your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">
              Next Big Campaign
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether it's a nationwide branding strategy or a high-impact local event, 
            our team is ready to deliver excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Button */}
            <a 
              href="/contact" 
              className="group relative px-10 py-5 bg-indigo-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] flex items-center gap-3"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>

            {/* Secondary Button */}
            <a 
              href="mailto:hello@fifthelement.com" 
              className="px-10 py-5 bg-transparent border border-gray-700 text-white font-bold rounded-full hover:bg-white/5 transition-all flex items-center gap-3"
            >
              <Send className="w-5 h-5" />
              Drop an Email
            </a>
          </div>

          {/* Trust Indicator */}
          <div className="mt-16 pt-10 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
              Trusted by 50+ Global Enterprises
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}