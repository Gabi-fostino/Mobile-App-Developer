/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        teal: '#0E7779',
        tealDark: '#074B4E',
        orange: '#F49A2F',
        cream: '#FFFDF8',
        ink: '#263238',
        mist: '#DFF3F4'
      }
    }
  },
  plugins: []
};
