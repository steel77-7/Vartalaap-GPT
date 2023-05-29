/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chatblack: "rgb(52, 53, 65)",
        sideBlock:"rgb(32, 33, 35)"
      }
    },
  },
  plugins: [],
}

