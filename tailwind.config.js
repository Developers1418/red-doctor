/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      colors: {
        grayBg: "#F3EDF4",
        darkBg: "#252525",
        darkBgCon: "#303030",
        grayBorder: "#2E2E2E",
        gradientPurple: "#AD37E0",
        gradientRed: "#EE2B3B",
        darkModebg: "#303030",
        darkModeTextSecondary: "#737373",
      },
    },
  },
  plugins: [],
};
