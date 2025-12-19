import Image from "next/image";
import Link from "next/link";
import { LazyLoad } from "@/components/LazyLoad";
import type { Post } from "@/data/posts";

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <LazyLoad animation="scale">
    <article className="group relative overflow-hidden rounded-[32px] border border-border bg-card text-text shadow-card-soft">
      <div className="relative h-[360px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 origin-center bg-gradient-to-t from-black/80 via-black/30 to-transparent transition duration-700 group-hover:scale-105 dark:from-black/90 dark:via-black/60" />
        <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primaryFg shadow-card-soft">
          <span>Artigo em destaque</span>
          <span aria-hidden>🔥</span>
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-4 px-6 pb-8 pt-6 sm:px-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-[hsla(var(--card)/0.9)] px-3 py-1">
            <span aria-hidden>📚</span>
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime} de leitura</span>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {post.title}
          </h2>
          <p className="text-lg text-text-muted sm:max-w-3xl">{post.excerpt}</p>
        </div>
        <div className="flex items-center justify-between gap-4 pt-2">
          <div className="text-sm text-text-muted">Por {post.author}</div>
          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-5 py-2 text-sm font-semibold uppercase tracking-wide text-text transition hover:bg-bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Ler artigo completo <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
    </LazyLoad>
  );
}
