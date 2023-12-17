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
        buttonBg: "#353535",
      },
      animation: {
        fade_in: "opacity 0.2s ease-in-out 0s",
      },
    },
  },
plugins: [require("tw-elements/dist/plugin.cjs")],
}
