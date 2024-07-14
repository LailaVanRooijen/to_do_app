/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#CB2A50',
        secondary: '#D56F85',
        tertiary: '#2E294E',
        base: '#FFFFFF',
      },
      fontFamily: {
        arsenal: ['Arsenal SC', 'sans-serif'],
        playwrite: ['Playwrite AR', 'cursive'],
      },
    },
  },
  plugins: [],
};
