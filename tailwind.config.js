/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          DEFAULT: "#D9D6D4",
        },
        harta: {
          DEFAULT: "#EABB83",
          400: "#BA8A50",
          900: "#54371C",
        },
        item: {
          DEFAULT: "#3A3A3A",
        },
      },
      fontFamily: {
        alex: ['"Alex Brush", Cursive'],
        dmSans: ['"DM Sans", sans-serif'],
      },
    },
  },
  plugins: [],
};
