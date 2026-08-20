"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { mainNavItems, serviceNavItems } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {mainNavItems.map((item) =>
              item.label === "Servicios" ? (
                <li key={item.href} ref={servicesRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((open) => !open)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-brand-blue ${
                      isActive(item.href) ? "text-brand-blue" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen ? (
                    <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2">
                      <ul className="rounded-xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/5">
                        {serviceNavItems.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              onClick={closeMenus}
                              className="block rounded-lg px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-surface hover:text-brand-blue"
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className={`py-2 text-sm font-medium transition-colors hover:text-brand-blue ${
                      isActive(item.href) && item.href !== "/#clientes"
                        ? "text-brand-blue"
                        : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="hidden rounded-md bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue sm:inline-flex"
          >
            Hablemos
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="menu-movil"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-ink lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <div id="menu-movil" className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-4">
            <nav aria-label="Navegación móvil">
              <ul className="flex flex-col gap-1">
                {mainNavItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className="block rounded-lg px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-surface"
                    >
                      {item.label}
                    </Link>
                    {item.label === "Servicios" ? (
                      <ul className="mb-2 ml-3 border-l border-slate-200 pl-4">
                        {serviceNavItems.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              onClick={closeMenus}
                              className="block py-2 text-sm text-ink-soft transition-colors hover:text-brand-blue"
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="/contacto"
              onClick={closeMenus}
              className="mt-3 block rounded-md bg-brand-navy px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Hablemos
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
