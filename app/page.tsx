import { AboutSection } from "@/components/AboutSection";
import CTA from "@/components/cta";
import Hero from "@/components/hero";
import FloatingWhatsappIcon from "@/components/layout/FloatingWhatsappBtn";

export default function Home() {
  return (
    <section className="flex flex-col gap-y-20 w-full">
      <Hero />
      <AboutSection />
      <CTA />
      <FloatingWhatsappIcon />
    </section>
  );
}
