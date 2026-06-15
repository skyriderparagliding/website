"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { globalSearch } from "@/lib/search";
import Link from "next/link";

const typeLabels = {
  product: "Product",
  category: "Category",
  brand: "Brand",
  blog: "Article",
};

export function SearchBar({ defaultQuery = "" }: { defaultQuery?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products, categories, brands, articles..."
        className="h-14 pl-12 text-base rounded-2xl"
      />
    </form>
  );
}

export function SearchResults({ query }: { query: string }) {
  const results = globalSearch(query);

  if (!query) {
    return (
      <p className="text-center text-slate-500 mt-12">
        Enter a search term to find products, categories, brands, and articles.
      </p>
    );
  }

  if (results.length === 0) {
    return (
      <p className="text-center text-slate-500 mt-12">
        No results found for &ldquo;{query}&rdquo;. Try a different search term.
      </p>
    );
  }

  return (
    <div className="mt-10 space-y-4">
      <p className="text-sm text-slate-500">
        {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
      </p>
      {results.map((result) => (
        <Link
          key={`${result.type}-${result.id}`}
          href={result.href}
          className="block rounded-xl border border-slate-100 p-5 transition-colors hover:border-sky-200 hover:bg-sky-50/50"
        >
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
              {typeLabels[result.type]}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{result.title}</h3>
          <p className="mt-1 text-sm text-slate-500 line-clamp-2">{result.description}</p>
        </Link>
      ))}
    </div>
  );
}
