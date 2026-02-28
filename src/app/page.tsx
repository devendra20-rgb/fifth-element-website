"use client";   

import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import DeliveryAndOffer from "../components/DeliveryandOffer";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import HomeServices from "@/components/HomeServices";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustedBy /> */}
      <HomeServices />
      <ValueProposition />
      <DeliveryAndOffer />
      {/* <TechShowcase /> */}
      {/* <Solutions /> */}
      <Metrics />
      <Testimonials />
      <CaseStudies />
      {/* <FinalCTA /> */}
    </>
  );
}