import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand palette
        navy: {
          50: "#f2f4f8",
          100: "#dde3ee",
          200: "#bcc8dd",
          300: "#90a3c5",
          400: "#6379a8",
          500: "#455c8d",
          600: "#374a74",
          700: "#2e3c5e",
          800: "#1c2740",
          900: "#111a2e",
          950: "#0a1120",
        },
        gold: {
          50: "#faf7f0",
          100: "#f3ecd9",
          200: "#e6d6b0",
          300: "#d7bd83",
          400: "#c9a96a",
          500: "#bd9450",
          600: "#a67c42",
          700: "#896138",
          800: "#704f33",
          900: "#5d422d",
        },
        cream: {
          DEFAULT: "#f7f5f0",
          50: "#fdfcfa",
          100: "#f7f5f0",
          200: "#efe9df",
        },
        emerald: {
          deep: "#0f3d33",
          soft: "#1b5647",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
      boxShadow: {
        soft: "0 2px 20px -8px rgba(10, 17, 32, 0.12)",
        elegant:
          "0 24px 60px -32px rgba(10, 17, 32, 0.28), 0 8px 24px -16px rgba(10, 17, 32, 0.14)",
        "gold-glow": "0 0 0 1px rgba(201, 169, 106, 0.4), 0 20px 50px -20px rgba(201, 169, 106, 0.35)",
        lift: "0 40px 80px -40px rgba(10, 17, 32, 0.4)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-soft": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
