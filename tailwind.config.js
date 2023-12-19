/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0f1c55",
        customBlack: "#010001",
        customGray: "#aaaaaa",
        customGold: "#cca471",
        customDarkBlue: "#020c1d",
        buttonBg: "#353535",
        custonBlackBg: "#000101",
      },
      animation: {
        fade_in: "opacity 0.2s ease-in-out 0s",
      },
      backgroundImage: {
        'watch-bg': "url('./../public/Bg1full.jpg')"
      },
      fontFamily: {
        playfair: ['Playfair Display'],
        // Add more font families as needed
      },
    },
  },
plugins: [require("tw-elements/dist/plugin.cjs")],
}
