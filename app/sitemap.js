import { SITE_URL, dict } from "./lib/site";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ["", "/about", "/contact", "/reviews", "/qr"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = dict.en.services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
