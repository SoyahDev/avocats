import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { practiceAreas, insights } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-14");
  const base = site.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/actualites",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cookies",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.6,
    })),
    ...practiceAreas.map((a) => ({
      url: `${base}/expertises/${a.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...insights.map((p) => ({
      url: `${base}/actualites/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
