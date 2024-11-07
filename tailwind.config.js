/* eslint-disable */
/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", ..._fontFamily.sans],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "4-5xl": "2.625rem",
      "5xl": "3rem",
      "5-5xl": "3.875rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        //bg-gray-50
        "light-theme-purple": "#E3D3FD",
        "theme-purple": "#AB47BC",
        // "theme-purple": "#280137",
        // "theme-purple": "#3c0061",
        // "theme-purple": "#9C27B0", original
        // "theme-purple": "#800080",
        "dark-theme-purple": "#520dc2",
        "theme-blue": "#152C5B",
        "dark-bg": "#191C27",
        // "dark-bg": "#212529",
        // "dark-bg": "#151922",
        // "dark-bg": "#0B0B0B",
      },
      margin: {
        "-112": "-28rem",
        "-120": "-30rem",
        "-128": "-32rem",
        "-144": "-36rem",
      },
      animation: {
        "bounce-x": "bouncex 1s infinite",
      },
      keyframes: {
        bouncex: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      spacing: {
        71: "17.75rem",
        95: "23.5rem",
        192: "48rem",
        192.5: "49.5rem",
        193: "51rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
