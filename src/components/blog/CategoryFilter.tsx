"use client";

import Link from "next/link";
import { slugify } from "@/lib/slug";
import type { Category } from "@/data/posts";

interface CategoryFilterProps {
  categories: { id: Category; label: string; icon: string }[];
  activeCategory?: Category | "Todos";
  onSelect?: (category: Category | "Todos") => void;
  className?: string;
}

export function CategoryFilter({
  categories,
  activeCategory = "Todos",
  onSelect,
  className,
}: CategoryFilterProps) {
  const options: (Category | "Todos")[] = ["Todos", ...categories.map((item) => item.id)];
  const baseClassName =
    "-mx-4 flex flex-wrap gap-3 rounded-3xl border border-border bg-card p-4 text-text shadow-lg backdrop-blur-xl";

  const containerClassName = [baseClassName, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName}>
      {options.map((option) => {
        const current = option === "Todos" ? null : categories.find((cat) => cat.id === option);
        const isActive = activeCategory === option;
        const href = option === "Todos" ? "/" : `/blog/categoria/${slugify(option)}`;

        const buttonClassName = `flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium transition-all sm:text-base ${
          isActive
            ? "border-primary bg-primary text-primaryFg shadow-md"
            : "border-transparent bg-bg-muted text-text hover:border-primary hover:text-primary"
        }`;

        // Se tiver onSelect, usa botão com callback
        if (onSelect) {
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              aria-pressed={isActive}
              className={buttonClassName}
            >
              <span className="text-lg" aria-hidden>
                {current?.icon ?? "✨"}
              </span>
              {current?.label ?? "Todos"}
            </button>
          );
        }

        // Senão, usa Link para navegação
        return (
          <Link
            key={option}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={buttonClassName}
          >
            <span className="text-lg" aria-hidden>
              {current?.icon ?? "✨"}
            </span>
            {current?.label ?? "Todos"}
          </Link>
        );
      })}
    </div>
  );
}
