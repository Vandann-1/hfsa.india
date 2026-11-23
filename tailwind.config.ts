import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#00182e", // Ultra Deep Navy
          900: "#002b4e", // Deep Navy
          850: "#003a68",
          800: "#004B87", // User Requested Primary Navy
          750: "#00569c",
          700: "#0064b5",
          600: "#0b77cf",
          500: "#1a8ae5",
          DEFAULT: "#004B87",
        },
        corporate: {
          DEFAULT: "#004B87", // Matches Primary Navy
          dark: "#00335e",
          light: "#0064b5",
          subtle: "#eef5fc",
        },
        forest: {
          900: "#1b5e20",
          800: "#2e7d32",
          DEFAULT: "#2e7d32",
          700: "#388e3c",
          light: "#4CAF50",
          subtle: "#e8f5e9",
        },
        fresh: {
          DEFAULT: "#4CAF50", // User Requested Primary Green
          light: "#81C784",   // User Requested Light Accent Green
          dark: "#388e3c",
          subtle: "#e8f5e9",
          50: "#f1f8f3",
          100: "#e8f5e9",
          200: "#c8e6c9",
          300: "#a5d6a7",
          400: "#81C784",
          500: "#4CAF50",
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
        },
        surface: {
          white: "#FFFFFF",
          offwhite: "#F8FAF8", // Clean Off White with slight fresh tint
          light: "#EEF4EF",    // Subtle light green-gray surface
          border: "#D8E6DB",
          card: "#FFFFFF",
          elevated: "#FFFFFF",
        },
        text: {
          primary: "#1A2530",   // Deep Charcoal
          secondary: "#546575", // Balanced Muted Text
          muted: "#7E90A0",
          onDark: "#F8FAF8",
        },
        gold: {
          DEFAULT: "#C59B27",
          subtle: "#FAF5E8",
        }
      },
      fontFamily: {
        sans: ["'Inter'", "var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["'Plus Jakarta Sans'", "'Manrope'", "var(--font-geist-sans)", "sans-serif"],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(0, 75, 135, 0.06), 0 1px 4px -1px rgba(76, 175, 80, 0.04)',
        'soft-md': '0 6px 20px -4px rgba(0, 75, 135, 0.08), 0 2px 8px -2px rgba(76, 175, 80, 0.06)',
        'soft-lg': '0 12px 32px -6px rgba(0, 75, 135, 0.10), 0 4px 12px -3px rgba(76, 175, 80, 0.08)',
        'soft-xl': '0 20px 48px -10px rgba(0, 75, 135, 0.14), 0 8px 24px -6px rgba(76, 175, 80, 0.10)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      }
    },
  },
  plugins: [],
};
export default config;
