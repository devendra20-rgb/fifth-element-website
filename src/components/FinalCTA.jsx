"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section data-testid="final-cta-section" className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6" data-testid="final-cta-heading">
            Ready to boost your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
              performance marketing?
            </span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto mb-8">
            Join leading brands worldwide and accelerate your revenue with Deep Learning-powered campaigns.
          </p>
          <Button 
            data-testid="final-cta-button"
            className="rounded-full px-10 py-6 text-lg font-bold bg-white hover:bg-slate-100 text-slate-900 shadow-2xl transition-all hover:scale-105"
          >
            Book a Demo
            <ArrowRight className="ml-2" size={24} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
