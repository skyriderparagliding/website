import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-up";
import { getFeaturedBlogPosts } from "@/data/blog";

export function BlogPreview() {
  const posts = getFeaturedBlogPosts();

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeUp className="flex flex-col items-start justify-between gap-4 mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
              Blog
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Latest Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm font-semibold text-sky-500 hover:text-sky-600 transition-colors"
          >
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeUp>

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.id}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="mt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-500">
                    {post.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="h-3 w-3" />
                    {post.readTime} read
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
