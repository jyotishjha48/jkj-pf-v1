"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "jkj-theme";

export function ThemeToggle() {
  const [isNight, setIsNight] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const savedTheme = window.localStorage.getItem(STORAGE_KEY);
      const night = savedTheme !== "light";
      setIsNight(night);
      document.documentElement.dataset.theme = night ? "night" : "light";
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  function toggleTheme() {
    const nextIsNight = !isNight;
    setIsNight(nextIsNight);
    document.documentElement.dataset.theme = nextIsNight ? "night" : "light";
    window.localStorage.setItem(STORAGE_KEY, nextIsNight ? "night" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded border border-surface-2 px-2.5 py-1.5 font-mono text-xs tracking-widest text-text-secondary hover:border-accent/60 hover:text-accent"
      aria-label={isNight ? "Switch to light mode" : "Switch to night mode"}
      aria-pressed={isNight}
      title={isNight ? "Switch to light mode" : "Switch to night mode"}
    >
      <span aria-hidden="true">{isNight ? "☼" : "☾"}</span>
      <span className="sr-only">{isNight ? "Light mode" : "Night mode"}</span>
    </button>
  );
}
