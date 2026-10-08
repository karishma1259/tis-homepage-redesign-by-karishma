"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Pill switch. The knob position and icon colours come from Tailwind `dark:` variants,
 * so the markup is identical on server and client (no hydration mismatch).
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Switch between light and dark theme"
      className="relative flex h-10 w-[4.5rem] shrink-0 items-center rounded-full border border-line bg-surface p-1 transition-colors duration-300"
    >
      <Sun aria-hidden="true" className="absolute left-2.5 h-4 w-4 text-brand dark:text-muted" />
      <Moon aria-hidden="true" className="absolute right-2.5 h-4 w-4 text-muted dark:text-accent" />
      <span
        aria-hidden="true"
        className="relative z-10 h-8 w-8 rounded-full bg-accent shadow-md transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] dark:translate-x-8"
      />
    </button>
  );
}
