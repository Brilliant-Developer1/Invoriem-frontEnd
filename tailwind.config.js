/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], 
    
  },
  theme: {
    extend: {
      colors: {
        'darkg': 'rgb(31, 31, 31)',
        'teal': 'rgb(17, 68, 85)',
        'white': 'rgb(255, 255, 255)',
      },
    },
    container: {
      center: true,
    },
    
  },
  
};
