import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pt-serif': [ '"PT Serif"', 'serif'],
        'pt-sans': [ '"PT Sans"', 'sans-serif'],
      },
      colors: {
        text : {
          primary : '#333333',
          secondary : '#4f4f4f',
        },
        surface : {
          brand : '#FFDD2D'
        },
        border: {
          dark: '#414141',
        },
        state: {
          success: '#5DC021',
          info: '#0084BD',
          warning: '#EE8B16'
        }
      }
    },
  },
  plugins: [],
};
export default config;
