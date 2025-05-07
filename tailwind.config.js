/* eslint-disable */
/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
        "light-theme-purple": "#E3D3FD",
        "theme-purple": "#AB47BC",
        "dark-theme-purple": "#520dc2",
        "theme-blue": "#152C5B",
        "light-theme-blue": "#2B4690",
        "dark-bg": "#191C27",
        "primary-white": "#d4dae6",
        "secondry-white": "#e1e7f0",
      },
      margin: {
        "-112": "-28rem",
        "-120": "-30rem",
        "-128": "-32rem",
        "-144": "-36rem",
      },
      animation: {
        "bounce-x": "bouncex 1s infinite",
        "ping": "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin": "spin 1s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "slide-in": "slideIn 0.5s ease-out",
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
        ping: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideIn: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      spacing: {
        71: "17.75rem",
        95: "23.5rem",
        192: "48rem",
        192.5: "49.5rem",
        193: "51rem",
      },
      textColor: {
        "gradient-heading": "transparent",
        "gradient-heading-purple": "transparent", // New text color for purple gradient
      },
      backgroundImage: {
        "gradient-heading": "linear-gradient(to right, #1D4ED8, #3B82F6)", // Existing blue gradient
        "gradient-heading-purple":
          "linear-gradient(to right, #AB47BC, #6A1B9A)", // New purplish gradient
      },
      backgroundClip: {
        text: "text",
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
