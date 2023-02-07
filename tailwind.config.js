/* eslint-env node */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        kamloops:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(32, 96, 128, 0.4)), url(/img/kamloops.jpg)",
        sunset:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(32, 96, 128, 0.4)), url(/img/sunset.png)",
      },
      fontFamily: {
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        cursive: ["Allura", "Tangerine"],
      },
      fontSize: {
        hero: "10rem",
      },
      screens: {
        xs: "440px",
        ...defaultTheme.screens,
      },
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
