// app/contact/page.tsx
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";

export const metadata = {
  title: "Contact Us | Fifth Element Strategic Partnership",
  description: "Ready to scale your brand? Reach out to our team for personalized advertising and technology solutions.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <div className="relative z-20 -mt-24 pb-32">
        <ContactFormSection />
      </div>
    </main>
  );
}