import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { shopCategories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";
import { FadeUp } from "@/components/motion/fade-up";

export const metadata = createMetadata({
  title: "Shop Paragliding Equipment",
  description:
    "Premium paragliding wings, harnesses, reserves, instruments and accessories from top manufacturers.",
  path: "/shop",
});

export default function ShopPage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Shop Equipment</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Premium paragliding gear from the world&apos;s best manufacturers.
              Expert advice included with every purchase.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shopCategories.map((cat) => (
              <FadeUp key={cat.slug}>
                <Link href={cat.href} className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="25vw"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {cat.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">{cat.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky-500">
                      Browse <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
