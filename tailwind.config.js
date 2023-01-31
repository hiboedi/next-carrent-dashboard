/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006AFF",
        secondary: "#FF2727",
        black: "#1A1919",
        gray: {
          "01": "#525256",
          "02": "#656575",
          "03": "#A3A3A3",
          "04": "#F8F7F1",
          "05": "#DEDEDE",
        },

        green: "#52C93F",
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
      },
      dropShadow: {
        card: "0px 8px 24px rgba(69, 69, 80, 0.3)",
      },
    },
  },
  plugins: [],
};
