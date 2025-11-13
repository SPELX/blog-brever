import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { PostGrid } from "@/components/blog/PostGrid";
import { categories, posts, type Category } from "@/data/posts";
import { slugify } from "@/lib/slug";

const categoryMap = categories.reduce<Record<string, { id: Category; label: string; icon: string }>>(
  (acc, category) => {
    acc[slugify(category.id)] = category;
    return acc;
  },
  {},
);

export const dynamicParams = true;

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export default function BlogCategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryMap[params.slug];

  if (!category) {
    notFound();
  }

  const filteredPosts = posts.filter((post) => post.category === category.id);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80"
      >
        ← Voltar para home
      </Link>

      <header className="mt-8 rounded-[32px] border border-border bg-card p-8 shadow-card-soft">
        <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
          <span className="text-lg" aria-hidden>
            {category.icon}
          </span>
          <span>Categoria</span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-tight">{category.label}</h1>
        <p className="mt-3 text-lg text-text-muted">
          Reunimos artigos que ajudam a tomar decisões estratégicas sobre {category.label.toLowerCase()}.
        </p>
        <div className="mt-6">
          <CategoryFilter categories={categories} activeCategory={category.id} />
        </div>
      </header>

      <section className="mt-10">
        {filteredPosts.length > 0 ? (
          <PostGrid posts={filteredPosts} />
        ) : (
          <div className="rounded-3xl border border-border bg-bg-muted px-6 py-10 text-center text-text-muted">
            Ainda não temos artigos para esta categoria. Volte em breve!
          </div>
        )}
      </section>
    </div>
  );
}
