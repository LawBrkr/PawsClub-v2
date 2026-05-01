import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Tips y Consejos de Cuidado Canino | Paws Club",
  description:
    "Artículos sobre cuidado canino, entrenamiento, socialización, nutrición y más. Consejos prácticos del equipo Paws Club para papás perrunos.",
  openGraph: {
    title: "Blog | Paws Club CDMX",
    description: "Tips y consejos de cuidado canino de los expertos de Paws Club.",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-white/90">
            Tips, consejos y todo lo que un papá perruno necesita saber.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand/90 px-3 py-1 text-xs font-bold text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("es-MX", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-brand">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Leer más
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
