import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Soporte TI",
  description: "Mesa de ayuda, soporte remoto, administración de sistemas y continuidad operacional.",
  alternates: { canonical: "/servicios/soporte-ti" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Servicios"
      title="Soporte TI"
      description="Mesa de ayuda, soporte remoto, administración de sistemas y continuidad operacional."
    />
  );
}
