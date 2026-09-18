import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
        fa: ["'Vazirmatn'", "sans-serif"],
      },
      colors: {
        bg: "var(--bg)",
        "bg-elev": "var(--bg-elev)",
        "bg-elev-2": "var(--bg-elev-2)",
        border: "var(--border)",
        text: "var(--text)",
        "text-dim": "var(--text-dim)",
        "text-dimmer": "var(--text-dimmer)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        orange: "var(--orange)",
        purple: "var(--purple)",
        red: "var(--red)",
        blue: "var(--blue)",
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        pulse2: "pulse2 2s infinite",
        blink: "blink 1s step-end infinite",
        fadeIn: "fadeIn 0.25s ease forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
