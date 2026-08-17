import {
  BarChart3,
  Cloud,
  Database,
  Headset,
  Rocket,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "ciberseguridad",
    title: "Ciberseguridad",
    description:
      "Protección de infraestructuras, datos y aplicaciones. Evaluación de vulnerabilidades, hardening, backup y recuperación ante desastres.",
    icon: ShieldCheck,
  },
  {
    slug: "bases-de-datos",
    title: "Bases de Datos",
    description:
      "Administración, optimización y alta disponibilidad en Oracle, SQL Server, PostgreSQL y MySQL.",
    icon: Database,
  },
  {
    slug: "data-bi",
    title: "Data & Business Intelligence",
    description:
      "Data Warehouse, ETL, analítica y visualización de datos con Power BI y herramientas líderes.",
    icon: BarChart3,
  },
  {
    slug: "infraestructura",
    title: "Infraestructura & Cloud",
    description:
      "Virtualización, servidores, almacenamiento, redes y migraciones a la nube AWS, Azure y arquitecturas On-Premise.",
    icon: Cloud,
  },
  {
    slug: "soporte-ti",
    title: "Soporte TI",
    description:
      "Mesa de ayuda, soporte remoto, administración de sistemas y continuidad operacional.",
    icon: Headset,
  },
  {
    slug: "transformacion-digital",
    title: "Transformación Digital",
    description:
      "Automatización de procesos, integración de sistemas y modernización tecnológica.",
    icon: Rocket,
  },
];
