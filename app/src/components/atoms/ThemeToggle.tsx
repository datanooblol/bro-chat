// app/src/components/atoms/ThemeToggle.tsx
"use client";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-background-primary text-text-primary border border-border-primary p-2 rounded"
      suppressHydrationWarning
    >
      {resolvedTheme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export const Card = () => {
  return (
    <div className="bg-background-secondary text-text-primary border border-border-primary p-4 rounded">
      <h2 className="text-text-primary">Card Title</h2>
      <p className="text-text-secondary">Card content</p>
    </div>
  );
};
