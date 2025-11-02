// app/src/tokens/colors.ts
export const colors = {
  primary: {
    50: "#f0f9ff",
    500: "#3b82f6",
    900: "#1e3a8a",
  },
  // Theme-aware colors using CSS variables
  background: {
    primary: "rgb(var(--color-bg-primary) / <alpha-value>)",
    secondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
  },
  text: {
    primary: "rgb(var(--color-text-primary) / <alpha-value>)",
    secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
  },
  border: {
    primary: "rgb(var(--color-border-primary) / <alpha-value>)",
  },
  semantic: {
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
  },
} as const;
