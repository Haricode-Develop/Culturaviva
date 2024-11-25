/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Asegúrate de incluir archivos JSX
  theme: {
    extend: {
      colors: {
        naranjaSuave: '#FBBF24',
        marronOscuro: '#4B2C20',
        beigeClaro: '#F5E9DC',
        grisClaro: '#E5E5E5',
        negroSuave: '#1F1F1F',
      },
      fontFamily: {
        sans: ['Open Sans', 'Roboto', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
