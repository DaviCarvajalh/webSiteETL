import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Equipo especializado en infraestructura, datos y seguridad, con foco en resultados medibles para empresas en Chile.",
  alternates: { canonical: "/nosotros" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Nosotros"
      title="Una consultora TI orientada a la continuidad de tu operación"
      description="Equipo especializado en infraestructura, datos y seguridad, con foco en resultados medibles para empresas en Chile."
    />
  );
}
