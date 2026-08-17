export type Project = {
  slug: string;
  client: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "banco-popular",
    client: "Banco Popular",
    title: "Modernización de infraestructura y bases de datos",
    description:
      "Migraciones y actualización de plataformas críticas Oracle y SQL Server, alta disponibilidad y optimización de infraestructura.",
    technologies: ["Oracle", "SQL Server", "Linux", "VMware"],
    image: "/images/proyecto-banco-popular.jpg",
    imageAlt: "Pasillo de data center con racks de servidores",
  },
  {
    slug: "ignisterra",
    client: "Ignisterra",
    title: "Plataforma de datos y Business Intelligence",
    description:
      "Implementación de arquitectura de datos, Data Warehouse, procesos ETL y reportería Power BI.",
    technologies: ["PostgreSQL", "Python", "Power BI", "Linux"],
    image: "/images/proyecto-ignisterra.jpg",
    imageAlt: "Escritorio con monitores mostrando dashboards de Business Intelligence",
  },
  {
    slug: "provida",
    client: "Provida AFP",
    title: "Desarrollo y modernización tecnológica",
    description:
      "Participación en iniciativas tecnológicas asociadas a plataformas corporativas y procesos críticos.",
    technologies: ["SQL Server", "Integraciones", "Gestión TI"],
    image: "/images/proyecto-provida.jpg",
    imageAlt: "Dos profesionales TI revisando una plataforma en un notebook",
  },
];
