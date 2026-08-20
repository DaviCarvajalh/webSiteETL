export type NavItem = {
  label: string;
  href: string;
};

export const serviceNavItems: NavItem[] = [
  { label: "Ciberseguridad", href: "/servicios/ciberseguridad" },
  { label: "Bases de Datos", href: "/servicios/bases-de-datos" },
  { label: "Data & Business Intelligence", href: "/servicios/data-bi" },
  { label: "Infraestructura & Cloud", href: "/servicios/infraestructura" },
  { label: "Soporte TI", href: "/servicios/soporte-ti" },
  { label: "Transformación Digital", href: "/servicios/transformacion-digital" },
];

export const mainNavItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Clientes", href: "/#clientes" },
  { label: "Contacto", href: "/contacto" },
];
