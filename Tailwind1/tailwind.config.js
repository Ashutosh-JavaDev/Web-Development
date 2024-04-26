/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "josefin-sans": ['"Josefin Sans"', "sans-serif"],
        "lexend": ['Lexend', "sans-serif"],
        "gorditas":['Gorditas', "serif"],
       "lugrasimo": ['Lugrasimo', "cursive"],
       "jost":['Jost',"sans-serif"]
      },
    },
  },
  plugins: [],
}

