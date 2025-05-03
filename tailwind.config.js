/** @type {import('tailwindcss').Config} */
const textShadow = require('tailwindcss-textshadow');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inria: ['"Inria Sans"'],
        greatvibes: ['"Great Vibes"'],
      },
      textShadow: {
        custom: '19px 14px 6px rgba(0, 0, 0, 0.30)',
        offer: '23px 19px 7px rgba(163, 163, 163, 0.30)',
      },
      colors: {
        main: '#45351DFF',
        footer: '#322715'
      },
      boxShadow: {
        'custom': '2px 9px 26.2px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'vibrate': 'vibrate 3s ease-in-out 1s 1 both',
        'revers': 'revers 3s ease-in-out 0s infinite both',
      },
      keyframes: {
        vibrate: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(20px)',
            opacity: '1',
          },
          '75%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          }
        },
        revers:{
          '0%': {
            flexDirection: 'column-reverse'
          },
          '100%': {
            flexDirection: 'column'
          },
        }
      }
    },
  },
  plugins: [textShadow],
}

