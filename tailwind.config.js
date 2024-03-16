/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'tema':{
          '100': '#26434b'
        },
        'verde': {
          '100': '#4cda50'
        }
      }
    },
  },
  plugins: [],
}

