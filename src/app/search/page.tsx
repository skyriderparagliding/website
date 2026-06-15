import { createMetadata } from "@/lib/seo";
import { SearchBar, SearchResults } from "@/components/search/search";
import { FadeUp } from "@/components/motion/fade-up";

export const metadata = createMetadata({
  title: "Search",
  description: "Search products, categories, brands, and blog articles.",
  path: "/search",
});

type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;

  return (
    <div>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeUp className="text-center mb-10">
            <h1 className="text-4xl font-bold text-slate-900">Search</h1>
            <p className="mt-3 text-slate-600">
              Find products, categories, brands, and articles
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <SearchBar defaultQuery={q} />
          </FadeUp>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SearchResults query={q} />
        </div>
      </section>
    </div>
  );
}
