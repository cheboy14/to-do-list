/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dodgerblue': 'dodgerblue',
        'dodgerblue-light': 'light-dodgerblue-color',
        'green': 'green', // Define your desired lighter color here
      },
    },
  },
  plugins: [require("daisyui")],
}

