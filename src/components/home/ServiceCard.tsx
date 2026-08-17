import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 transition-shadow duration-200 hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/5">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-brand-blue ring-1 ring-slate-200">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.description}</p>
      <Link
        href={`/servicios/${service.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue"
      >
        Ver más
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
        <span className="sr-only">sobre {service.title}</span>
      </Link>
    </article>
  );
}
