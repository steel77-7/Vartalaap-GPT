/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chatblack: "rgb(52, 53, 65)",
        sideBlock: "rgb(32, 33, 35)",
        btnColor: "rgb(16, 163, 127)",
        hoverbtnColor: "rgb(26, 127, 100)",
        textColor: "rgb(45, 51, 58)",
        bgColor: "rgb(255, 255, 255)"
      }
    },
  },
  plugins: [],
}

