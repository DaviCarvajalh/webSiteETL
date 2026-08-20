import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/home/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Qué hacemos" title="Soluciones tecnológicas integrales" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
