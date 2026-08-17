import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Ciberseguridad",
  description: "Protección de infraestructuras, datos y aplicaciones. Evaluación de vulnerabilidades, hardening, backup y recuperación ante desastres.",
  alternates: { canonical: "/servicios/ciberseguridad" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Servicios"
      title="Ciberseguridad"
      description="Protección de infraestructuras, datos y aplicaciones. Evaluación de vulnerabilidades, hardening, backup y recuperación ante desastres."
    />
  );
}
