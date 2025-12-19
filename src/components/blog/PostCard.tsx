import Image from "next/image";
import Link from "next/link";
import { LazyLoad } from "@/components/LazyLoad";
import type { Post } from "@/data/posts";

interface PostCardProps {
  post: Post;
  delay?: number;
  highlightTerm?: string;
}

const highlightContent = (text: string, term?: string) => {
  const normalized = term?.trim().toLowerCase();
  if (!normalized) {
    return text;
  }

  const escapedTerm = normalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedTerm})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === normalized ? (
      <mark key={`${part}-${index}`} className="rounded bg-primary/20 px-1">
        {part}
      </mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
};

export function PostCard({ post, delay = 0, highlightTerm }: PostCardProps) {
  return (
    <LazyLoad delay={delay} animation="fade-up">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-text">
            {post.category}
          </span>
          {post.isPopular && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primaryFg shadow-card-soft">
              Mais lido
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-text">
            {highlightContent(post.title, highlightTerm)}
          </h3>
          <p className="text-sm text-text-muted [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden">
            {highlightContent(post.excerpt, highlightTerm)}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm text-text-muted">
          <span>
            {post.date} · {post.readTime}
          </span>
          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-primary transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Saiba mais <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
    </LazyLoad>
  );
}
