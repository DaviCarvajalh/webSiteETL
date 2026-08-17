import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Clients from "@/components/home/Clients";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Clients />
      <CTA />
    </>
  );
}
