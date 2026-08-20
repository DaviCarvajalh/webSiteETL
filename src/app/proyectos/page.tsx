import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos de infraestructura, datos y continuidad operacional ejecutados junto a nuestros clientes.",
  alternates: { canonical: "/proyectos" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Proyectos"
      title="Casos de éxito"
      description="Proyectos de infraestructura, datos y continuidad operacional ejecutados junto a nuestros clientes."
    />
  );
}
