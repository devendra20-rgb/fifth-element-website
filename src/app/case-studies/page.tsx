import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import BrandingDetailed from "@/components/case-studies/BrandingDetailed";
import EventsDetailed from "@/components/case-studies/EventsDetailed";
import OutdoorDetailed from "@/components/case-studies/OutdoorDetailed";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <CaseStudiesHero />
      <BrandingDetailed />
      <EventsDetailed />
      <OutdoorDetailed />
      <ServiceCTA />
    </main>
  );
}