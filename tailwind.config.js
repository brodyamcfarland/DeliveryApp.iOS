/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./App.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./screens/**/*.{js,jsx,ts,tsx}",
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      color: {
        gray_darker: '#121212',
        gray_dark: '#181818',
        gray_normal: '#404040',
        gray_secondary: '',
        gray_light: '',
        gray_lighter: '',
      },
      extend: {},
    },
    plugins: [],
  }