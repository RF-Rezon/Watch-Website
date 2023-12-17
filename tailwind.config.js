/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0f1c55",
        customBlack: "#010001",
        customGray: "#aaaaaa",
        customGold: "#cca471",
      },
    },
  },
plugins: [],
}
