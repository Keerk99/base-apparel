/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background-desktop': "url('./assets/img/hero-desktop.jpg')",
        'background-pattern': ["url('./assets/img/bg-pattern-desktop.svg'), linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))"],
        'button': "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        'button2': "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 80%, 86%))",
      },
      colors: {
        'desaturated-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 68%)'
      },
      fontFamily: {
        'josefin': ["'Josefin Sans', sans-serif"]
      },
      boxShadow: {
        's-button': "0 10px 15px 6px hsla(0, 40%, 70%, 0.4)",
        's-button-hover': "0 10px 15px 6px hsla(0, 40%, 70%, 0.8)"
      },
      screens: {
        'xm': '425px'
      }
    },
  },
  plugins: [],
}

