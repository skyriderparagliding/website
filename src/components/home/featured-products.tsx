import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { ProductCard } from "@/components/shop/product-card";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeUp className="flex flex-col items-start justify-between gap-4 mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
              Shop
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Products
            </h2>
          </div>
          <Link
            href="/shop"
            className="flex items-center gap-1 text-sm font-semibold text-sky-500 hover:text-sky-600 transition-colors"
          >
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeUp>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
