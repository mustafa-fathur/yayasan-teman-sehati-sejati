import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js"
  ],
  theme: {
    extend: {
      fontFamily: {   
        sans: ['Roboto', 'Poppins', 'Figtree', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}

