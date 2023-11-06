/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#102f41",
        secondary: colors.amber['500'],
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
