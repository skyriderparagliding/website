import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { brands } from "@/data/brands";
import { FadeUp } from "@/components/motion/fade-up";

export const metadata = createMetadata({
  title: "Brands",
  description: "Shop paragliding equipment from Flow, PHI, Supair, Skywalk and more top manufacturers.",
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <div>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Our Brands</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We partner with the world&apos;s leading paragliding manufacturers to bring you
              the best equipment available.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <FadeUp key={brand.id}>
                <Link
                  href={`/brands/${brand.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={brand.heroImage}
                      alt={brand.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {brand.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-sky-500">{brand.tagline}</p>
                    <p className="mt-3 text-sm text-slate-500 line-clamp-2">{brand.description}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
