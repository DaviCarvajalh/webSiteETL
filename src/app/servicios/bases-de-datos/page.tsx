import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Bases de Datos",
  description: "Administración, optimización y alta disponibilidad en Oracle, SQL Server, PostgreSQL y MySQL.",
  alternates: { canonical: "/servicios/bases-de-datos" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Servicios"
      title="Bases de Datos"
      description="Administración, optimización y alta disponibilidad en Oracle, SQL Server, PostgreSQL y MySQL."
    />
  );
}
