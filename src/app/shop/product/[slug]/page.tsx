import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { ProductCard } from "@/components/shop/product-card";
import { ProductDetails, ProductGallery } from "@/components/shop/product-details";
import { JsonLd } from "@/components/seo/json-ld";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/schemas";
import { SITE_CONFIG } from "@/lib/constants";
import { FadeUp } from "@/components/motion/fade-up";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return createMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/shop/product/${slug}`,
    image: product.images[0],
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <JsonLd
        data={ProductSchema({
          name: product.name,
          description: product.description,
          image: product.images[0],
          price: product.salePrice ?? product.price,
          slug: product.slug,
          manufacturer: product.manufacturer,
          inStock: product.inStock,
        })}
      />
      <JsonLd
        data={BreadcrumbSchema([
          { name: "Shop", url: `${SITE_CONFIG.url}/shop` },
          { name: product.category, url: `${SITE_CONFIG.url}/shop/${product.category}` },
          { name: product.name, url: `${SITE_CONFIG.url}/shop/product/${product.slug}` },
        ])}
      />

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="text-sm text-slate-500 mb-8">
            <Link href="/shop" className="hover:text-sky-500">Shop</Link>
            <span className="mx-2">/</span>
            <Link href={`/shop/${product.category}`} className="hover:text-sky-500 capitalize">
              {product.category.replace("-", " ")}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{product.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2">
            <FadeUp>
              <ProductGallery images={product.images} name={product.name} />
            </FadeUp>
            <FadeUp delay={0.1}>
              <ProductDetails product={product} />
            </FadeUp>
          </div>

          {product.technicalData.length > 0 && (
            <FadeUp className="mt-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Data</h2>
              <div className="overflow-hidden rounded-2xl border border-slate-100">
                <table className="w-full text-sm">
                  <tbody>
                    {product.technicalData.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-6 py-4 font-medium text-slate-700">{row.label}</td>
                        <td className="px-6 py-4 text-slate-600">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeUp>
          )}

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
