import { blogPosts } from "@/data/blog";
import { brands } from "@/data/brands";
import { categories, getAllCategoryPaths } from "@/data/categories";
import { products } from "@/data/products";

export type SearchResult = {
  id: string;
  title: string;
  description: string;
  type: "product" | "category" | "brand" | "blog";
  href: string;
};

export function globalSearch(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: SearchResult[] = [];

  products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.manufacturer.toLowerCase().includes(q)
    )
    .slice(0, 8)
    .forEach((p) => {
      results.push({
        id: p.id,
        title: p.name,
        description: p.shortDescription,
        type: "product",
        href: `/shop/product/${p.slug}`,
      });
    });

  getAllCategoryPaths()
    .filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q)
    )
    .slice(0, 6)
    .forEach((c) => {
      results.push({
        id: c.slug,
        title: c.name,
        description: c.description ?? "",
        type: "category",
        href: c.href,
      });
    });

  brands
    .filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    )
    .slice(0, 4)
    .forEach((b) => {
      results.push({
        id: b.id,
        title: b.name,
        description: b.tagline,
        type: "brand",
        href: `/brands/${b.slug}`,
      });
    });

  blogPosts
    .filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    )
    .slice(0, 6)
    .forEach((a) => {
      results.push({
        id: a.id,
        title: a.title,
        description: a.excerpt,
        type: "blog",
        href: `/blog/${a.slug}`,
      });
    });

  return results;
}
