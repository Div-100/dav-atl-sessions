/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "785px" },
      tablet: { max: "1023px" },
      laptop: { min: "1024px" },
      mobtab: { max: "1023px", min: "426px" },
    },
    extend: {},
  },
  plugins: [],
};
