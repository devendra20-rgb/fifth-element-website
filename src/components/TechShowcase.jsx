"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const TechShowcase = () => {
  const tabs = [
    { id: 'conversion', label: 'Conversion' },
    { id: 'acquisition', label: 'Acquisition' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'demand', label: 'Demand Generation' },
  ];

  return (
    <section data-testid="tech-showcase-section" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">How we deliver</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6" data-testid="tech-showcase-heading">
            Cut through the noise with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-violet-700">
              Shoppable Creative
            </span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
            We display on-brand shoppable creative with personalized product recommendations based on first-party signals. Delivered across the entire purchase journey, it accelerates performance and strengthens your brand.
          </p>
        </motion.div>

        <Tabs defaultValue="conversion" className="w-full">
          <TabsList className="w-full flex justify-center mb-12 bg-white rounded-full p-2 shadow-lg" data-testid="tech-tabs">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                data-testid={`tech-tab-${tab.id}`}
                className="rounded-full px-6 py-3 text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-violet-600 data-[state=active]:text-white"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} data-testid={`tech-content-${tab.id}`}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1763259502804-449a0e88d641?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwM2QlMjBnZW9tZXRyaWMlMjBzaGFwZXMlMjBibHVlJTIwcHVycGxlfGVufDB8fHx8MTc3MTI2ODgyM3ww&ixlib=rb-4.1.0&q=85"
                  alt={tab.label}
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechShowcase;
