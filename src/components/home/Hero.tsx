import Image from "next/image";
import Link from "next/link";
import { BarChart3, Cloud, Database, Headset, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";

const highlights = [
  { label: "Infraestructura", icon: Cloud },
  { label: "Ciberseguridad", icon: ShieldCheck },
  { label: "Bases de Datos", icon: Database },
  { label: "Data & BI", icon: BarChart3 },
  { label: "Soporte TI", icon: Headset },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-brand-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Tecnología que impulsa{" "}
            <span className="bg-gradient-to-r from-brand-sky to-brand-violet bg-clip-text text-transparent">
              tu negocio
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Soluciones integrales en infraestructura, ciberseguridad, datos y soporte TI para
            organizaciones que buscan seguridad, eficiencia y continuidad operacional.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-md bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0064c4]"
            >
              Conversemos
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
            >
              Nuestros servicios
            </Link>
          </div>

          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
            {highlights.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <Icon className="h-4 w-4 text-brand-sky" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
