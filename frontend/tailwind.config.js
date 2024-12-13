/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('https://images.unsplash.com/photo-1623674645848-161cf1c1179b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fFRyYWZmaWMlMjBsaWdodHN8ZW58MHx8MHx8fDA%3D')",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

