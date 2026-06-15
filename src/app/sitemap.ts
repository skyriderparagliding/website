import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { flights } from "@/data/flights";
import { products } from "@/data/products";
import { brands } from "@/data/brands";
import { blogPosts } from "@/data/blog";
import { shopCategories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  const staticPages = ["", "/flights", "/shop", "/brands", "/blog", "/contact", "/search"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const flightPages = flights.map((f) => ({
    url: `${base}/flights/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const productPages = products.map((p) => ({
    url: `${base}/shop/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const brandPages = brands.map((b) => ({
    url: `${base}/brands/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const categoryPages = shopCategories.flatMap((cat) => [
    {
      url: `${base}/shop/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...(cat.subcategories?.map((sub) => ({
      url: `${base}${sub.href}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })) ?? []),
  ]);

  return [
    ...staticPages,
    ...flightPages,
    ...categoryPages,
    ...productPages,
    ...brandPages,
    ...blogPages,
  ];
}
