import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Ciberseguridad, bases de datos, Data & BI, infraestructura y cloud, soporte TI y transformación digital para empresas.",
  alternates: { canonical: "/servicios" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Servicios"
      title="Soluciones tecnológicas integrales"
      description="Ciberseguridad, bases de datos, Data & BI, infraestructura y cloud, soporte TI y transformación digital para empresas."
    />
  );
}
