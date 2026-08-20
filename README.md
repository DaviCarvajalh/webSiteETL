# webSiteETL

Sitio web corporativo de **ETL Servicios TI** (Next.js + TypeScript + Tailwind CSS + Lucide Icons).

## Ejecutar en local

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Estructura

- `src/app` — rutas (App Router), metadata SEO, `sitemap.ts`, `robots.ts`
- `src/components/layout` — `Header`, `Footer`, `PagePlaceholder`
- `src/components/home` — `Hero`, `Services`, `Projects`, `Clients`, `CTA`
- `src/components/ui` — `Container`, `SectionHeading`, `Reveal`, `Logo`
- `src/data` — textos y datos (`site`, `navigation`, `services`, `projects`, `clients`)
- `public` — logos e imágenes

## Dónde editar

- Textos generales y contacto: `src/data/site.ts`
- Servicios: `src/data/services.ts`
- Proyectos: `src/data/projects.ts`
- Clientes: `src/data/clients.ts` y `public/clientes/`
- Imágenes: `public/images/`
- Logo: `public/logo-etl.png` y `public/logo-etl-blanco.png`
