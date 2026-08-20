import type { Metadata } from "next";
import PagePlaceholder from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Cuéntanos qué necesitas y te respondemos con una propuesta a la medida.",
  alternates: { canonical: "/contacto" },
};

export default function Page() {
  return (
    <PagePlaceholder
      eyebrow="Contacto"
      title="Conversemos sobre tu próximo proyecto"
      description="Cuéntanos qué necesitas y te respondemos con una propuesta a la medida."
    />
  );
}
