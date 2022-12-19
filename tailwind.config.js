/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      "white-1": "#F0F6FD",
      "white-2": "#E5F0FA",
      "gray": "#AEC1D3",
      "gray-1":"#DBE7F4",
      "gray-2":"#8A9CB2",
      "gray-3":" #8A9CB3",
      "gray-4":"#B2C6D8",
      "blue-1": "#007FFF",
      "blue-2": "#000000",
      "blue-3": "#56B4EA",
      "blue-4": "#0789C5",
      "blue-5": "#BEEFFF",
      "blue-6": "#4DA5FF",

      "black": "#181920"
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    
  ]
};
