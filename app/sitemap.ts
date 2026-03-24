import type { MetadataRoute } from "next";
import { fetchNewsSlugs } from "@/lib/news";
import { absoluteUrl } from "@/lib/seo";

export const revalidate = 3600;

type RouteConfig = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const STATIC_ROUTES: RouteConfig[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/all-services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/technologies", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
  { path: "/case-study", changeFrequency: "weekly", priority: 0.9 },
  { path: "/news", changeFrequency: "daily", priority: 0.9 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/wd-6k-landing", changeFrequency: "weekly", priority: 0.7 },
  { path: "/3d-animation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/3d-modelling-rendering", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-for-business", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/app-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blockchain-crypto", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blockchain-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/data-scraping", changeFrequency: "monthly", priority: 0.8 },
  { path: "/digital-marketing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ecommerce-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ecommerce-management", changeFrequency: "monthly", priority: 0.8 },
  { path: "/game-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/graphic-design", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lead-generation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/logo-brand-identity", changeFrequency: "monthly", priority: 0.8 },
  { path: "/maintenance-support", changeFrequency: "monthly", priority: 0.8 },
  { path: "/marketing-strategy", changeFrequency: "monthly", priority: 0.8 },
  { path: "/packaging-design", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pr", changeFrequency: "monthly", priority: 0.8 },
  { path: "/shopify-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/social-media-marketing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/software-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/staff-augmentation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/startup-solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tech-consultation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ui-ux-design", changeFrequency: "monthly", priority: 0.8 },
  { path: "/webflow-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/website-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/wordpress-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-study/anita-dongre", changeFrequency: "monthly", priority: 0.7 },
  { path: "/case-study/ashok-leyland", changeFrequency: "monthly", priority: 0.7 },
  { path: "/case-study/haldiram", changeFrequency: "monthly", priority: 0.7 },
  { path: "/case-study/hyundai", changeFrequency: "monthly", priority: 0.7 },
  { path: "/case-study/my-protein", changeFrequency: "monthly", priority: 0.7 },
  { path: "/case-study/myntra", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/anita-dongre", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/ashok-leyland", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/dropshipt-atlas", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/escharts", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/eskritor", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/fortis", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/goodnotes", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/gym-log", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/haldiram", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/heurist", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/hyundai", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/i-alert", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/jda", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/jobget", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/litely", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/masala-express", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/my-protein", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/myntra", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/nerdy-tips", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/one-chat", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/pc-jewellers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/surana-jewellers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/utsav-fashion", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio/xemail", changeFrequency: "monthly", priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const routes = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const route of STATIC_ROUTES) {
    const url = absoluteUrl(route.path);
    routes.set(url, {
      url,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  const newsSlugs = await fetchNewsSlugs();

  for (const slug of newsSlugs) {
    const url = absoluteUrl(`/news/${slug}`);
    routes.set(url, {
      url,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  return [...routes.values()];
}
