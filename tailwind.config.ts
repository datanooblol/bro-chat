// tailwind.config.ts
import type { Config } from "tailwindcss";
import { colors, typography, spacing } from "./app/src/tokens";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class", // Add this line
  theme: {
    extend: {
      colors,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      spacing,
    },
  },
} satisfies Config;
