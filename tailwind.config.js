/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#000000', // Asume el color principal de Nolen
        brandAccent: '#2563eb', // Ajusta al azul de los botones y enlaces
      }
    },
  },
  plugins: [],
}