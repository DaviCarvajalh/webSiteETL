import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/home/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Proyectos destacados" title="Casos de éxito" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
          >
            Ver todos los proyectos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
