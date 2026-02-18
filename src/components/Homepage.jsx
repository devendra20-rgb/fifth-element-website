"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import ValueProposition from '../components/ValueProposition';
import Metrics from '../components/Metrics';
import TechShowcase from '../components/TechShowcase';
import Solutions from '../components/Solutions';
import Testimonials from '../components/Testimonials';
import CaseStudies from '../components/CaseStudies';
import DeliveryAndOffer from '../components/DeliveryandOffer';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* <TrustedBy /> */}
      <ValueProposition />
      <Metrics />
      <DeliveryAndOffer />
      {/* <TechShowcase /> */}
      {/* <Solutions /> */}
      <Testimonials />
      <CaseStudies />
      {/* <FinalCTA /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
