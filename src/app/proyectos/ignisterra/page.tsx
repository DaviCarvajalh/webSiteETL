import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Ignisterra",
  description: "Implementación de arquitectura de datos, Data Warehouse, procesos ETL y reportería Power BI.",
  alternates: { canonical: "/proyectos/ignisterra" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Caso de éxito"
      title="Plataforma de datos y Business Intelligence"
      description="Implementación de arquitectura de datos, Data Warehouse, procesos ETL y reportería Power BI."
    />
  );
}
