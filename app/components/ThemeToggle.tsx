"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = localStorage.getItem("theme");
    const systemTheme: Theme = media.matches ? "dark" : "light";
    const resolvedTheme: Theme =
      stored === "light" || stored === "dark" ? stored : systemTheme;

    setTheme(resolvedTheme);
    document.documentElement.dataset.theme = resolvedTheme;

    const handleChange = () => {
      if (localStorage.getItem("theme")) {
        return;
      }
      const nextTheme: Theme = media.matches ? "dark" : "light";
      setTheme(nextTheme);
      document.documentElement.dataset.theme = nextTheme;
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const label = nextTheme === "light" ? "ライト" : "ダーク";
  const title =
    nextTheme === "light" ? "ライトテーマに切り替える" : "ダークテーマに切り替える";

  const handleToggle = () => {
    const updatedTheme = nextTheme;
    setTheme(updatedTheme);
    document.documentElement.dataset.theme = updatedTheme;
    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-300 transition-colors hover:border-lime-200/60 hover:text-lime-200"
      aria-label={title}
      title={title}
    >
      {label}
    </button>
  );
}
