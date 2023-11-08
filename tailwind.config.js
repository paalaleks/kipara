/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-2": "var(--color-accent-2)",
        "accent-1": "var(--color-accent-1)",
        "variation-1": "var(--color-variation-1)",
        "variation-2": "var(--color-variation-2)",
        "variation-3": "var(--color-variation-3)",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
