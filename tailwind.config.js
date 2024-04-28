/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: 'var(--teal)',
        },
        
      },
    },
  

  daisyui: {
    themes: ["light","dark"],
  },
    container: {
      center: true,
    },
  },
  
};
/*
theme: {
    extend: {
      colors: {
        // 'teal': '#114455',
        'teal': 'rgb(var(--teal))',
      },
    },
  

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "--teal": "17, 68, 85",
        },
      },
      // dark theme
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "--teal": "255, 255, 255",
        },
      }
    ],

    
  },
*/