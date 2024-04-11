/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A5ACD",
        secondary: "#f3f3f3",
        
      }
    },
  },
  plugins: [],
}

