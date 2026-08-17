import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Infraestructura & Cloud",
  description: "Virtualización, servidores, almacenamiento, redes y migraciones a la nube AWS, Azure y arquitecturas On-Premise.",
  alternates: { canonical: "/servicios/infraestructura" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Servicios"
      title="Infraestructura & Cloud"
      description="Virtualización, servidores, almacenamiento, redes y migraciones a la nube AWS, Azure y arquitecturas On-Premise."
    />
  );
}
