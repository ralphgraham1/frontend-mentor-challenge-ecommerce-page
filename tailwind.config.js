/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      "3xl": "1800px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        Orange: "#FF7D1A",
        PaleOrange: "#FFEDE0",
        DarkBlue: "#1D2025",
        DarkGrayishBlue: "#68707D",
        GrayishBlue: "#B6BCC8",
        LightGrayishBlue: "#F7F8FD",
        White: "#FFFFFF",
        Black: "#000000",
      },
    },

    plugins: [],
  },
};
