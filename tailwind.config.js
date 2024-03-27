/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
      container: {
        center: true,
        padding: "8px",
      },
      extend: {
        colors: {
          primary: "#FB6D48",
          secondary: "#FFAF45"
        }, 
        screens: {
          "2xl": "1320px",
        },
      },
    },
    plugins: [require('@tailwindcss/aspect-ratio'),],
  }