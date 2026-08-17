import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Banco Popular",
  description: "Migraciones y actualización de plataformas críticas Oracle y SQL Server, alta disponibilidad y optimización de infraestructura.",
  alternates: { canonical: "/proyectos/banco-popular" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Caso de éxito"
      title="Modernización de infraestructura y bases de datos"
      description="Migraciones y actualización de plataformas críticas Oracle y SQL Server, alta disponibilidad y optimización de infraestructura."
    />
  );
}
