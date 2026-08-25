/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maroon: "#4A1414",
        maroon2: "#6B1F1F",
        gold: "#C9A227",
        goldSoft: "#E4C158",
        cream: "#FAF3E6",
        cream2: "#F3E6CC",
        ink: "#2A1810",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
