/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        eras: ["ErasITC", "sans-serif"],
      },
      colors: {
        "accent-1": "var(--color-accent-1)",
        "accent-2": "var(--color-accent-2)",
        "accent-3": "var(--color-accent-3)",
        "variation-1": "var(--color-variation-1)",
        "variation-2": "var(--color-variation-2)",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
