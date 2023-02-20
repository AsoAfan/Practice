/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        xsm: "0.8125rem",
        14: "0.875rem",
        8: "2rem",
        slg: "1.1rem",
      },

      padding: {
        21: "5.375rem",
      },
      colors: {
        main: {
          100: "#f5dadb",
          200: "#ebb5b7",
          300: "#e09194",
          400: "#d66c70",
          500: "#cc474c",
          600: "#a3393d",
          700: "#7a2b2e",
          800: "#521c1e",
          900: "#290e0f",
        },

        accent: {
          100: "#dde4ec",
          200: "#bbc8d9",
          300: "#99adc5",
          400: "#7791b2",
          500: "#55769f",
          600: "#445e7f",
          700: "#33475f",
          800: "#222f40",
          900: "#111820",
        },

        text: "#343a40",
        sp: "#333",
        bg: "#e9ecef",
        bgDark: "rgba(26,26,26,0.7)",
        secondary: "#2f2e41",
        bgs: "#eee",
      },

      fontFamily: {
        main: ["Rubik", "sans-serif"],
      },

      borderRadius: {
        9: "9px",
      },

      transitionDuration: {
        400: "400ms",
      },

      transitionTimingFunction: {
        none: "none",
      },

      boxShadow: {
        innerDark: "0 0 0 2px rgba(26,26,26,0.7)",
        custom: "0.2rem 1.2rem 30rem rgba(47, 46, 65 , 0.15)",
        info: "0 0 1.25rem rgba(0,0,0,0.3)",
        box: "0.2rem 1.2rem 30rem rgba(47, 46, 65 , 0.15);",
        shape: "0 2.4rem 4.8rem rgba(26, 26, 26, 0.075)",
        input: "0 0 8px 2px rgba(85, 118, 159,0.6)",
        input2: "0 0 8px 4px rgba(85, 118, 159,0.6)",
      },

      width: {
        18: "4.5rem",
      },

      height: {
        18: "4.5rem",
      },
    }, // extend
  },
  plugins: [],
};
