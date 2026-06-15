import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getBrandBySlug, brands } from "@/data/brands";
import { getProductsByBrand } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";
import { FadeUp } from "@/components/motion/fade-up";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};
  return createMetadata({
    title: brand.name,
    description: brand.description,
    path: `/brands/${slug}`,
    image: brand.heroImage,
  });
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const products = getProductsByBrand(slug);

  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <Image
          src={brand.heroImage}
          alt={brand.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6">
          <FadeUp>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
              {brand.tagline}
            </p>
            <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">{brand.name}</h1>
          </FadeUp>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeUp>
            <h2 className="text-2xl font-bold text-slate-900">Brand Story</h2>
            <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">{brand.description}</p>
          </FadeUp>

          {brand.gallery.length > 0 && (
            <FadeUp className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Gallery</h2>
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                {brand.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image src={img} alt="" fill className="object-cover" sizes="33vw" />
                  </div>
                ))}
              </div>
            </FadeUp>
          )}

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Products</h2>
            {products.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <p className="text-slate-500">Products coming soon.</p>
            )}
          </div>

          <div className="mt-12">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Product Categories</h2>
            <div className="flex flex-wrap gap-2">
              {brand.productCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/shop/${cat}`}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors capitalize"
                >
                  {cat.replace("-", " ")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
