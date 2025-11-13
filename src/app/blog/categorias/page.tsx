import Link from "next/link";
import { categories } from "@/data/posts";
import { slugify } from "@/lib/slug";

export default function BlogCategoriesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80"
      >
        ← Voltar para home
      </Link>

      <header className="max-w-3xl mt-8">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">Categorias do blog</p>
        <h1 className="mt-4 text-4xl font-semibold">Navegue pelos temas do agro.</h1>
        <p className="mt-3 text-lg text-text-muted">
          Explore conteúdos focados em gestão de frotas, combustível, tecnologia e agronegócio.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/blog/categoria/${slugify(category.id)}`}
            className="group flex flex-col gap-2 rounded-3xl border border-border bg-card p-6 shadow-card-soft transition hover:-translate-y-1 hover:border-primary"
          >
            <span className="text-2xl" aria-hidden>
              {category.icon}
            </span>
            <h2 className="text-2xl font-semibold">{category.label}</h2>
            <p className="text-text-muted">
              Atualizações curadas para quem vive {category.label.toLowerCase()} no dia a dia.
            </p>
            <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition">
              Acessar categoria →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
