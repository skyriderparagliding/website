import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getCategoryBySlug, getSubcategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";
import { FadeUp } from "@/components/motion/fade-up";

type Props = { params: Promise<{ category: string; subcategory: string }> };

export async function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];
  const { shopCategories } = await import("@/data/categories");
  shopCategories.forEach((cat) => {
    cat.subcategories?.forEach((sub) => {
      params.push({ category: cat.slug, subcategory: sub.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { category, subcategory } = await params;
  const sub = getSubcategory(category, subcategory);
  if (!sub) return {};
  return createMetadata({
    title: sub.name,
    path: `/shop/${category}/${subcategory}`,
  });
}

export default async function SubcategoryPage({ params }: Props) {
  const { category, subcategory } = await params;
  const cat = getCategoryBySlug(category);
  const sub = getSubcategory(category, subcategory);
  if (!cat || !sub) notFound();

  const products = getProductsByCategory(category, subcategory);

  return (
    <div>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeUp>
            <nav className="text-sm text-slate-500 mb-4">
              <Link href="/shop" className="hover:text-sky-500">Shop</Link>
              <span className="mx-2">/</span>
              <Link href={`/shop/${category}`} className="hover:text-sky-500">{cat.name}</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-900">{sub.name}</span>
            </nav>
            <h1 className="text-4xl font-bold text-slate-900">{sub.name}</h1>
            {sub.description && (
              <p className="mt-3 max-w-2xl text-lg text-slate-600">{sub.description}</p>
            )}
          </FadeUp>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {products.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <p className="text-center text-slate-500 py-12">
              Products coming soon. Contact us for availability.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
