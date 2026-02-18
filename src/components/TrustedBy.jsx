"use client";

import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const logos = [
    { name: 'Nike', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png' },
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Adidas', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png' },
  ];

  return (
    <section data-testid="trusted-by-section" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-12"
          data-testid="trusted-by-title"
        >
          Trusted by Industry Leaders
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              data-testid={`logo-${logo.name.toLowerCase()}`}
            >
              <img 
                src={logo.url} 
                alt={`${logo.name} logo`}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
