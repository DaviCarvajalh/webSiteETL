import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow duration-200 hover:shadow-md hover:shadow-slate-900/5">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded bg-brand-purple px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
          {project.client}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug text-ink">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded border border-slate-200 bg-surface px-2.5 py-1 text-xs font-medium text-ink-soft"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
