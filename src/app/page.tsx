import Link from "next/link";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { PostGrid } from "@/components/blog/PostGrid";
import { HeroNav } from "@/components/HeroNav";
import { SearchForm } from "@/components/SearchForm";
import {
  categories,
  highlightedCategories,
  posts,
} from "@/data/posts";

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : {};
  const rawSearch = params.search;
  const searchParam = Array.isArray(rawSearch) ? rawSearch[0] : rawSearch;
  const searchTerm = searchParam?.trim() ?? "";
  const normalizedTerm = searchTerm.toLowerCase();

  const featuredPost = posts.find((post) => post.isFeatured) ?? posts[0];
  const remainingPosts = featuredPost
    ? posts.filter((post) => post.id !== featuredPost.id)
    : posts;

  const searchActive = normalizedTerm.length > 0;
  const recentPosts = searchActive
    ? remainingPosts.filter((post) =>
        [post.title, post.excerpt, post.category]
          .join(" ")
          .toLowerCase()
          .includes(normalizedTerm),
      )
    : remainingPosts;

  return (
    <div className="min-h-screen bg-bg text-text">
      <div
        id="hero"
        className="relative isolate mb-12 w-full bg-[linear-gradient(135deg,rgba(5,5,5,0.5),rgba(5,5,5,0.25)),url('/assets/bg-hero.jpg')] bg-cover bg-center pb-16 sm:pb-20"
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.08)]" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 sm:px-8 lg:py-16">
          <HeroNav />
          <section className="relative w-full overflow-hidden rounded-[40px] border border-border bg-card px-6 py-10 shadow-card-soft sm:px-10">
            <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg-muted to-transparent opacity-70" />
            <div className="relative z-10 flex flex-col gap-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">
                  Blog Brever
                </p>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                  Insights que transformam o agro.
                </h1>
                <p className="max-w-2xl text-lg text-text-muted">
                  Notícias, dicas e aprendizados sobre gestão agrícola, produtividade e tecnologia no campo.
                </p>
              </div>
              <SearchForm initialQuery={searchTerm} />
            </div>
          </section>
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-10 pt-0 sm:px-8 lg:gap-14 lg:pb-16">
        <CategoryFilter
          categories={categories}
          activeCategory="Agronegócio"
          className="sticky top-4 z-30 -mt-16 sm:top-6 sm:-mt-20 lg:top-8 lg:-mt-24"
        />

        {featuredPost && <FeaturedPost post={featuredPost} />}

        <section id="recent-posts" className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary">
                Conteúdo fresco
              </p>
              <h2 className="text-3xl font-semibold">
                Artigos recentes
              </h2>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-semibold text-text transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Ativar alerta semanal <span aria-hidden>→</span>
            </button>
          </div>
          {searchActive && (
            <p className="text-sm text-text-muted">
              {recentPosts.length > 0 ? (
                <>
                  {recentPosts.length} resultados para{" "}
                  <strong>&ldquo;{searchTerm}&rdquo;</strong>
                </>
              ) : (
                <>
                  Nenhum artigo encontrado para{" "}
                  <strong>&ldquo;{searchTerm}&rdquo;</strong>
                </>
              )}
            </p>
          )}
          {recentPosts.length > 0 ? (
            <>
              <PostGrid
                posts={recentPosts}
                highlightTerm={searchActive ? searchTerm : undefined}
              />
              <div className="flex justify-center">
                <button
                  type="button"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Carregar mais artigos
                </button>
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-border bg-card p-6 text-center text-text-muted">
              Tente outra palavra-chave ou explore as categorias em destaque abaixo.
            </div>
          )}
        </section>

        <section className="grid gap-4 rounded-[32px] border border-border bg-bg-muted p-6 sm:grid-cols-3">
          {highlightedCategories.map((item) => (
            <Link
              key={item.slug}
              className="group flex flex-col gap-2 rounded-3xl border border-transparent bg-card p-5 text-text shadow-card-soft transition hover:-translate-y-1 hover:border-primary hover:shadow-2xl"
              href={`/blog/categoria/${item.slug}`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-text-muted">
                {item.description}
              </p>
              <span className="text-sm font-semibold text-primary transition group-hover:text-primary">
                Explorar categoria →
              </span>
            </Link>
          ))}
        </section>

        <NewsletterCTA />
      </main>

      <footer className="border-t border-border bg-[hsla(var(--card)/0.85)] py-6 text-sm text-text-muted">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex flex-wrap gap-4 font-medium text-text">
            <Link href="/blog">Blog</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
          </div>
          <p className="text-text-muted">© 2025 Brever — Gestão Inteligente para o Agro.</p>
        </div>
      </footer>
    </div>
  );
}
