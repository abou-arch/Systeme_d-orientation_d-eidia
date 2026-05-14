/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ============================================================
        // Variables shadcn/ui (alimentées par index.css)
        // ============================================================
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
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        // ============================================================
        // Palette UEMF — bleu #0B4F8A + vert #5BB146
        // Utilisable via bg-uemf-blue-600, text-uemf-green-500, etc.
        // ============================================================
        uemf: {
          // Bleu institutionnel UEMF
          blue: {
            50:  "#EAF2FA",
            100: "#CFE0F2",
            200: "#9FC1E5",
            300: "#6FA1D8",
            400: "#3F82CB",
            500: "#1F66B0",
            600: "#0B4F8A",  // ← bleu UEMF officiel
            700: "#093F70",
            800: "#072F55",
            900: "#04203A",
            950: "#021321",
            DEFAULT: "#0B4F8A",
          },
          // Vert UEMF (feuille du logo)
          green: {
            50:  "#EEF8EA",
            100: "#D6EFCC",
            200: "#AEDF9B",
            300: "#86CF6A",
            400: "#5BB146",  // ← vert UEMF officiel
            500: "#4A9A38",
            600: "#3B7B2D",
            700: "#2D5E22",
            800: "#1F4118",
            900: "#11240D",
            DEFAULT: "#5BB146",
          },
          gray: {
            50:  "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
          },
          white: "#FFFFFF",
        },

        // ============================================================
        // Override violet / indigo / purple → bleu UEMF
        // (Pour que tes anciennes classes bg-violet-600, from-indigo-500,
        //  text-purple-700... basculent automatiquement sans toucher au JSX)
        // ============================================================
        violet: {
          50:  "#EAF2FA",
          100: "#CFE0F2",
          200: "#9FC1E5",
          300: "#6FA1D8",
          400: "#3F82CB",
          500: "#1F66B0",
          600: "#0B4F8A",  // bleu UEMF
          700: "#093F70",
          800: "#072F55",
          900: "#04203A",
          950: "#021321",
        },
        indigo: {
          50:  "#EAF2FA",
          100: "#CFE0F2",
          200: "#9FC1E5",
          300: "#6FA1D8",
          400: "#3F82CB",
          500: "#1F66B0",
          600: "#0B4F8A",
          700: "#093F70",
          800: "#072F55",
          900: "#04203A",
          950: "#021321",
        },
        purple: {
          50:  "#EAF2FA",
          100: "#CFE0F2",
          200: "#9FC1E5",
          300: "#6FA1D8",
          400: "#3F82CB",
          500: "#1F66B0",
          600: "#0B4F8A",
          700: "#093F70",
          800: "#072F55",
          900: "#04203A",
          950: "#021321",
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Poppins"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        uemf: "0 8px 24px -8px rgba(11, 79, 138, 0.35)",
        "uemf-green": "0 8px 24px -8px rgba(91, 177, 70, 0.35)",
      },
      backgroundImage: {
        "uemf-gradient":
          "linear-gradient(135deg, #072F55 0%, #0B4F8A 100%)",
        "uemf-hero":
          "linear-gradient(120deg, #072F55 0%, #0B4F8A 65%, #5BB146 130%)",
        "uemf-blue-green":
          "linear-gradient(90deg, #0B4F8A 0%, #5BB146 100%)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}