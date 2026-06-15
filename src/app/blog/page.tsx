import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { blogPosts, blogCategories } from "@/data/blog";
import { FadeUp } from "@/components/motion/fade-up";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Paragliding tips, equipment reviews, safety guides, and Pokhara travel advice from the SkyRiders team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <FadeUp>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Blog</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Flying tips, equipment reviews, safety guides, and everything you need to know
              about paragliding in Pokhara.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="border-b border-slate-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-600"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <FadeUp key={post.id}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <div className="mt-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-500">
                      {post.category}
                    </span>
                    <h2 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
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
