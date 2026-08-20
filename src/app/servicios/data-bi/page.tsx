import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Data & Business Intelligence",
  description: "Data Warehouse, ETL, analítica y visualización de datos con Power BI y herramientas líderes.",
  alternates: { canonical: "/servicios/data-bi" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Servicios"
      title="Data & Business Intelligence"
      description="Data Warehouse, ETL, analítica y visualización de datos con Power BI y herramientas líderes."
    />
  );
}
