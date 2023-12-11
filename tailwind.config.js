/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#dc8be5",

          "secondary": "#d32c96",

          "accent": "#7dba0d",

          "neutral": "#1f1820",

          "base-100": "#2c363f",

          "info": "#869eee",

          "success": "#156f42",

          "warning": "#f7c36e",

          "error": "#f75077",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

