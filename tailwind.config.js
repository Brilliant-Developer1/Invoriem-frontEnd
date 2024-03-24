/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/keep-react/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('keep-react/preset')],
  theme: {
    extend: {
      colors: {
        'darkg': 'rgb(31, 31, 31)',
        'teal': 'rgb(17, 68, 85)',
        'white': 'rgb(255, 255, 255)',
      },
    },
  },
  plugins: [],
};
