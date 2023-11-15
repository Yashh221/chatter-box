/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:"#182f39",
        secondary:"#153847",
      },
      boxShadow:{
        '3xl':'8px 3px 15px 13px rgba(255, 255, 255, 0.29) inset'
      }
    },
  },
  plugins: [],
}

