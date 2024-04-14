/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        herobg_1: "url('./assets/hero/hero-1.png')",
      },
    },
    screens: {
      xs: "380px",
      ss: "480px",
      sm: "620px",
      md: "768px",
      lg: "1060px",
      xl: "1280px",
      xxl: "1700px",
    },
  },
  plugins: [],
};
