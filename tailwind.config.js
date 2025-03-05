module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0faf0',
          100: '#dbf5db',
          200: '#b8eab8',
          300: '#8dd88d',
          400: '#5ac25a',
          500: '#38a938',
          600: '#2c8a2c', // Primary green from your logo
          700: '#236923',
          800: '#1d531d',
          900: '#184518',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}