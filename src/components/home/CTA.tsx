import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-brand-purple py-14">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              ¿Tienes un desafío tecnológico?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
              Conversemos sobre cómo mejorar la seguridad, infraestructura y datos de tu organización.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-slate-100"
            >
              Agendar reunión
            </Link>
            <Link
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Escríbenos por WhatsApp
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
