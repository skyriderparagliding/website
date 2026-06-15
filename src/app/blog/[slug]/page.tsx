import Image from "next/image";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { BlogPostSchema } from "@/components/seo/schemas";
import { FadeUp } from "@/components/motion/fade-up";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.image,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={BlogPostSchema({
          title: post.title,
          excerpt: post.excerpt,
          image: post.image,
          slug: post.slug,
          author: post.author,
          publishedAt: post.publishedAt,
        })}
      />

      <article>
        <section className="relative h-[50vh] min-h-[400px] flex items-end">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
          <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-12 sm:px-6">
            <FadeUp>
              <span className="text-sm font-semibold uppercase tracking-widest text-sky-300">
                {post.category}
              </span>
              <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-white/70">
                <span>{post.author}</span>
                <span>·</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readTime} read</span>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <FadeUp>
              <div
                className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-sky-500"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .trim()
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
                      if (line.startsWith("### ")) return `<h3>${line.slice(4)}</h3>`;
                      if (line.startsWith("- ")) return `<li>${line.slice(2)}</li>`;
                      if (line.match(/^\d+\./)) return `<li>${line.replace(/^\d+\.\s*/, "")}</li>`;
                      if (line.trim() === "") return "";
                      return `<p>${line}</p>`;
                    })
                    .join(""),
                }}
              />
            </FadeUp>
          </div>
        </section>
      </article>
    </>
  );
}
