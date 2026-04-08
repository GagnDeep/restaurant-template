import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = siteConfig.nav.map((route) => ({
    url: `${siteConfig.url}${route.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route.href === "/" ? 1 : 0.8,
  }));

  const extraRoutes = ["/privacy", "/terms"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...routes, ...extraRoutes];
}
