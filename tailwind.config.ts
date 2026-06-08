import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#0a0a0a",
          800: "#101010",
          700: "#171717",
          600: "#1f1f1f",
          500: "#2a2a2a",
        },
        gold: {
          50:  "#fbf2dc",
          100: "#f5e1b0",
          200: "#eccf85",
          300: "#dfb968",
          400: "#cfa14b",
          500: "#b9893a",
          600: "#9c702b",
          700: "#7a561f",
        },
        ivory: "#f5efe1",
        bone:  "#e8dfc8",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        "tightest": "-0.04em",
        "luxe": "0.18em",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float":   "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%":      { transform: "translateY(-12px) translateX(6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
