import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Transformación Digital",
  description: "Automatización de procesos, integración de sistemas y modernización tecnológica.",
  alternates: { canonical: "/servicios/transformacion-digital" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Servicios"
      title="Transformación Digital"
      description="Automatización de procesos, integración de sistemas y modernización tecnológica."
    />
  );
}
