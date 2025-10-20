import CTA from "@/components/cta";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <section className="flex flex-col gap-20">
      <Hero />
      <CTA />
    </section>
  );
}
