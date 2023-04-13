/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFBB22",
          "secondary": "#FF77BB",
          "base-100": "#212527",
          "info": "#66AAFF",
          "error": "#FF7777",
          "base-content": "#FFFFFF",
          "warning": "#fcd34d",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      quasimoda: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
}
