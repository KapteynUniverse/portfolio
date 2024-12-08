/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        scrollbarTrack: "var(--color-scrollbar-track)",
        scrollbarThumb: "var(--color-scrollbar-thumb)",
        bgMain: "var(--color-bg-main)",
        bgHeader: "var(--color-bg-header)",
        bgFooter: "var(--color-bg-footer)",
        bgArticle: "var(--color-bg-article)",
        textWhite: "var(--color-text-white)",
        textBlack: "var(--color-text-black)",
        bgHighlight: "var(--color-bg-article)",
        textHighlight: "var(--color-text-black)",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      screens: {
        xs: "480px",
        nav: "700px",
      },
      animation: {
        "pulse-once": "pulse 1.5s ease-out forwards",
      },
      keyframes: {
        pulse: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      boxShadow: {
        "custom-shadow": "0 2px 16px var(--color-shadow)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".shape-outside-circle": {
          shapeOutside: "circle()",
          WebkitShapeOutside: "circle()",
        },
      });

      // Add custom scrollbar styles
      addUtilities({
        "::-webkit-scrollbar": {
          width: "0.25rem",
        },
        "::-webkit-scrollbar-track": {
          background: "#1e1e24",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#6649b8",
        },
      });
    },
  ],
};
