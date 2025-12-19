"use client";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/blog/categorias", label: "Categorias" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

const useIsDarkTheme = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const htmlEl = document.documentElement;
    const updateThemeState = () => {
      setIsDark(htmlEl.classList.contains("dark"));
    };

    updateThemeState();

    const observer = new MutationObserver(updateThemeState);
    observer.observe(htmlEl, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return isDark;
};

export function HeroNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isDarkTheme = useIsDarkTheme();
  const logoSrc = isDarkTheme ? "/assets/brever-logomarca_v2.svg" : "/assets/brever-logomarca.svg";

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="relative mb-8 flex flex-wrap items-center gap-4 rounded-3xl border border-border bg-[hsla(var(--card)/0.9)] px-6 py-3 text-text shadow-card-soft backdrop-blur-xl sm:rounded-full">
      <Link href="/" className="order-1 flex items-center">
        <Image
          src={logoSrc}
          alt="Brever"
          width={120}
          height={34}
          priority
          className="h-auto w-[120px]"
        />
        <span className="sr-only">Brever</span>
      </Link>

      <div className="order-4 hidden flex-1 flex-wrap items-center justify-center gap-4 text-sm font-semibold text-text-muted sm:order-2 sm:flex">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-primary">
            {link.label}
          </Link>
        ))}
      </div>

      <ThemeToggle className="order-2 ml-auto shrink-0 sm:order-3 sm:ml-0" />

      <button
        type="button"
        className="order-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:hidden"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <span className="relative block h-5 w-5">
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-full rounded bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-full rounded bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100 translate-y-0"}`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-full rounded bg-current transition-all duration-300 ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="order-5 w-full border-t border-border/60 pt-3 text-sm font-semibold text-text sm:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-transparent px-3 py-2 transition hover:border-primary hover:text-primary"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
