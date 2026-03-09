import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#0EA5E9",
          50: "#E0F4FD",
          100: "#BAE6FC",
          200: "#7DD3FC",
          300: "#38BDF8",
          400: "#0EA5E9",
          500: "#0284C7",
          600: "#0369A1",
          700: "#075985",
          800: "#0C4A6E",
          900: "#082F49",
        },
        surface: {
          DEFAULT: "#0A0F1C",
          50: "#1A2035",
          100: "#141929",
          200: "#0F1322",
          300: "#0A0F1C",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "grid-pulse": "gridPulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-mid": "float 7.5s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "status-pulse": "statusPulse 2s ease-in-out infinite",
        "cursor-blink": "cursorBlink 1.1s step-end infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gridPulse: {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.07" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(14, 165, 233, 0)" },
          "50%": { boxShadow: "0 0 40px rgba(14, 165, 233, 0.15)" },
        },
        statusPulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.75)" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
