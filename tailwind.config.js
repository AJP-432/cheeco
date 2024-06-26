/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Regular", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "poppins-italic": ["Poppins-Italic", "sans-serif"],
        "poppins-bold-italic": ["Poppins-BoldItalic", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      lightGray: "#F4F3F2",
      darkGray: "#909A9D",
      pink: "#FF85C0",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
