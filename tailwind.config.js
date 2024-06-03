/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ["var(--font-russo)"],
        monda: ["var(--font-monda)"],
        start: ["var(--font-start)"],
      },
      colors: {
        game: {
          black: "#2E2E2E",
          "blue-100": "#92CDDF",
          "blue-200": "#49D0F2",
          "blue-300": "#008EBA",
          "blue-400": "#00BDEC",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
