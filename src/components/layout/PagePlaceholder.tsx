import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PagePlaceholder({ eyebrow, title, description }: PagePlaceholderProps) {
  return (
    <>
      <section className="bg-brand-navy py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-sky">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">{description}</p>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <p className="text-base text-ink-soft">
            Estamos preparando el contenido de esta sección. Mientras tanto, puedes escribirnos y te
            respondemos con el detalle que necesites.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0064c4]"
            >
              Conversemos
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver al inicio
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
