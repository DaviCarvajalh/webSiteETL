import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Provida AFP",
  description: "Participación en iniciativas tecnológicas asociadas a plataformas corporativas y procesos críticos.",
  alternates: { canonical: "/proyectos/provida" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Caso de éxito"
      title="Desarrollo y modernización tecnológica"
      description="Participación en iniciativas tecnológicas asociadas a plataformas corporativas y procesos críticos."
    />
  );
}
