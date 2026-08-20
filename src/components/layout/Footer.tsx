import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { mainNavItems, serviceNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-slate-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Soluciones tecnológicas confiables, seguras y alineadas a los objetivos de tu negocio.
            </p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <h2 className="text-sm font-semibold text-white">Enlaces</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNavItems
                .filter((item) => item.label !== "Clientes")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-slate-400 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <nav aria-label="Servicios">
            <h2 className="text-sm font-semibold text-white">Servicios</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceNavItems.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-slate-400 transition-colors hover:text-white">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-white">Síguenos</h2>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de ETL Servicios TI"
              className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-slate-300 transition-colors hover:border-white/40 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.4 8.75 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.05-3.3-2.06 0-2.37 1.57-2.37 3.2V21h-4V9Z" />
              </svg>
            </Link>
            <p className="mt-5 text-sm text-slate-400">
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p>Diseñado en Chile</p>
        </div>
      </Container>
    </footer>
  );
}
