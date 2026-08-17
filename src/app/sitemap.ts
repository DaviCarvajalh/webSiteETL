import type { MetadataRoute } from "next";
import { serviceNavItems } from "@/data/navigation";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPaths = ["/", "/servicios", "/proyectos", "/nosotros", "/contacto"];

  return [
    ...staticPaths.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...serviceNavItems.map((service) => ({
      url: `${siteConfig.url}${service.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/proyectos/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
