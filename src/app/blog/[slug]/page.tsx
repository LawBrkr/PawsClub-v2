import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE } from "@/lib/constants";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import type { Metadata } from "next";

// Blog oculto temporalmente — pendiente generar imágenes hero con Gemini.
// Para reactivar: poner BLOG_HIDDEN = false.
const BLOG_HIDDEN = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (BLOG_HIDDEN) return [];
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (BLOG_HIDDEN) return { robots: { index: false, follow: false } };
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog Paws Club`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  if (BLOG_HIDDEN) notFound();
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost =
    postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-20">
          <Link
            href="/blog"
            className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>
          <span className="mb-3 inline-block rounded-full bg-brand/90 px-3 py-1 text-xs font-bold text-white">
            {post.category}
          </span>
          <h1 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Equipo Paws Club — Especialistas en bienestar canino
            </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("es-MX", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-gray max-w-none prose-headings:font-extrabold prose-h2:text-2xl prose-p:text-gray-600 prose-p:leading-relaxed">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="mt-10 mb-4 text-2xl font-extrabold text-gray-900">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="mb-4 text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-brand/5 p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900">
              ¿Necesitas ayuda profesional?
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              En Paws Club ofrecemos servicios de hotel, guardería,
              adiestramiento y paseos caninos.
            </p>
            <a
              href={SITE.whatsappUrl(
                `¡Hola! 👋 Leí su artículo sobre "${post.title}" y me gustaría saber más de sus servicios.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-all hover:bg-brand-hover"
            >
              Contáctanos por WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Author Box — E-E-A-T */}
          <div className="mt-12 flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-2xl">
              🐾
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Equipo Paws Club
              </p>
              <p className="text-xs text-gray-500">
                Especialistas en bienestar canino · Guardería, Hotel,
                Adiestramiento y Paseos en CDMX
              </p>
            </div>
          </div>

          {/* Nav */}
          <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-2 text-sm text-gray-500 hover:text-brand"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="max-w-[200px] truncate">{prevPost.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-2 text-sm text-gray-500 hover:text-brand"
              >
                <span className="max-w-[200px] truncate">{nextPost.title}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>
    </>
  );
}
