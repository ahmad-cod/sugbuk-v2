import { AboutSection } from "@/components/AboutSection";
import CTA from "@/components/cta";
import Hero from "@/components/hero";
// import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <section className="flex flex-col gap-y-20 w-full">
      <Hero />
      {/* <HeroSection /> */}
      <AboutSection />
      <CTA />
    </section>
  );
}
