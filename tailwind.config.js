/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        secondary: '#1D1D1F',
        accent: '#06C167',
        light: '#F5F5F7',
        dark: '#1D1D1F',
        gray: {
          50: '#F5F5F7',
          100: '#E8E8ED',
          200: '#D2D2D7',
          300: '#AEAEB2',
          400: '#8E8E93',
          500: '#6E6E73',
          600: '#3F3F41',
          700: '#2D2D2F',
          800: '#1D1D1F',
          900: '#0D0D0F',
        }
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Roboto', 'sans-serif'],
        heading: ['SF Pro Display', 'Poppins', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}