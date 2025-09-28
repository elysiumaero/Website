import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className="ml-2 inline-flex items-center rounded-md ring-1 ring-white/10 px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
    >
      {theme === "dark" ? (
        <span className="inline-flex items-center gap-1">🌙 Dark</span>
      ) : (
        <span className="inline-flex items-center gap-1">☀️ Light</span>
      )}
    </button>
  );
}
