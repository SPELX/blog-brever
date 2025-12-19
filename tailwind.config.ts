import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        bgMuted: "hsl(var(--bg-muted))",
        card: "hsl(var(--card))",
        popover: "hsl(var(--popover))",
        text: "hsl(var(--text))",
        textMuted: "hsl(var(--text-muted))",
        textInvert: "hsl(var(--text-invert))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        primary: "hsl(var(--primary))",
        primaryFg: "hsl(var(--primary-foreground))",
        accent: "hsl(var(--accent))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
      },
      borderRadius: {
        xl: "var(--radius)",
      },
      boxShadow: {
        "card-soft": "0 25px 70px -40px rgba(15, 23, 42, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
