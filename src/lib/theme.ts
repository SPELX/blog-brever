export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "brever-theme";

export const getSystemTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const getStoredTheme = (): Theme | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(THEME_STORAGE_KEY);
  return value === "light" || value === "dark" ? value : null;
};

export const applyTheme = (theme: Theme) => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
};

export const persistTheme = (theme: Theme) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
};

export const toggleTheme = () => {
  const current =
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  const next: Theme = current === "dark" ? "light" : "dark";
  applyTheme(next);
  persistTheme(next);
  return next;
};

export const themeInitScript = `
(function () {
  try {
    var storageKey = "${THEME_STORAGE_KEY}";
    var stored = localStorage.getItem(storageKey);
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    console.warn("Theme init failed:", error);
  }
})();
`;
