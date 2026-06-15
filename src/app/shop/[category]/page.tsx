import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { shopCategories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";
import { FadeUp } from "@/components/motion/fade-up";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return shopCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return createMetadata({
    title: cat.name,
    description: cat.description,
    path: `/shop/${category}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const products = getProductsByCategory(category);

  return (
    <div>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeUp>
            <nav className="text-sm text-slate-500 mb-4">
              <Link href="/shop" className="hover:text-sky-500">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-900">{cat.name}</span>
            </nav>
            <h1 className="text-4xl font-bold text-slate-900">{cat.name}</h1>
            {cat.description && (
              <p className="mt-3 max-w-2xl text-lg text-slate-600">{cat.description}</p>
            )}
          </FadeUp>
        </div>
      </section>

      {cat.subcategories && cat.subcategories.length > 0 && (
        <section className="border-b border-slate-100 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-wrap gap-2">
              {cat.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={sub.href}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-sky-500 hover:text-sky-600 transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
