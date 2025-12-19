"use client";

import { useEffect, useMemo, useState } from "react";
import {
  THEME_STORAGE_KEY,
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  type Theme,
} from "@/lib/theme";

const getInitialTheme = (): Theme => {
  if (typeof document === "undefined") {
    return "light";
  }

  const stored =
    typeof window !== "undefined" ? window.localStorage.getItem(THEME_STORAGE_KEY) : null;

  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      if (getStoredTheme()) {
        return;
      }
      const next: Theme = event.matches ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    };
    mq.addEventListener("change", onChange);

    const onStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY) {
        return;
      }

      const value = event.newValue === "dark" ? "dark" : event.newValue === "light" ? "light" : null;
      if (!value) {
        if (!getStoredTheme()) {
          const sys = getSystemTheme();
          applyTheme(sys);
          setTheme(sys);
        }
        return;
      }

      applyTheme(value);
      setTheme(value);
    };
    window.addEventListener("storage", onStorage);

    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const handleToggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
    setTheme(next);
  };

  const { label, icon } = useMemo(
    () => ({
      label: theme === "dark" ? "Modo claro" : "Modo escuro",
      icon: theme === "dark" ? "☀️" : "🌙",
    }),
    [theme],
  );

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={`Ativar ${label}`}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-base text-text backdrop-blur-md transition hover:bg-bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className ?? ""}`}
    >
      <span className="sr-only">{label}</span>
      <span aria-hidden>{icon}</span>
    </button>
  );
}
