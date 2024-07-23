/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#AA6666',
        secondary: '#DCCCBC'
      },
      boxShadow: {
        logo: '0px 0px 6px rgba(0, 0, 0, 0.25)'
      },
      screens: {
        '2xl': '1440px',
        'logo-1380': '1380px'
      },
      borderWidth: {
        5: '5px',
        6: '6px'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'slide-in': {
          '0%': { flexBasis: '0' },
          '100%': { flexBasis: '1/4' }
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'slide-in': 'slide-in 0.5s ease-in-out'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.writing-vertical-lr': {
          writingMode: 'vertical-lr'
        },
        '.bird': {
          width: '49.2%',
          height: '45.1%',
          // width: '48px',
          // height: '44px',
          position: 'relative'
        },
        '.bird-body': {
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          borderTop: '9px solid black',
          borderBottom: '8px solid black',
          borderRadius: '73% 33% 40% 70% / 67% 32% 48% 0% '
        },
        '.bird-eye': {
          width: '20%',
          height: '20%',
          backgroundColor: '#000',
          borderRadius: '50%',
          position: 'absolute',
          top: '40%',
          right: '20%'
        },
        ' .bird-beak': {
          width: ' 27.5%',
          height: ' 15.5%',
          backgroundColor: '#000',
          position: 'absolute',
          top: '28%',
          left: '96%',
          borderRadius: '0% 77% 90% 10% / 0% 100% 2% 0%',
          rotate: '-9deg'
        },
        '.link-animation': {
          backgroundImage: 'linear-gradient(to right, #AA6666, #AA6666 50%, #000 50%)',
          backgroundSize: '200% 100%',
          backgroundPosition: '-100%',
          display: 'inline-block',
          position: 'relative',
          transition: 'all 0.3s ease-in-out',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          '&::before': {
            content: '""',
            background: '#AA6666',
            display: 'block',
            position: 'absolute',
            bottom: '-3px',
            left: 0,
            width: 0,
            height: '3px',
            transition: 'all 0.3s ease-in-out'
          },
          '&:hover': {
            backgroundPosition: 0
          },
          '&:hover::before': {
            width: '100%'
          }
        },
        '.link-animation-none': {
          backgroundImage: 'none',
          '-webkit-background-clip': 'unset',
          '-webkit-text-fill-color': 'unset'
        },
        'nav.open': {
          height: '286.43px'
        },
        'nav.close': {
          height: '87.74px'
        },
        '.menu-icon.open': {
          with: '24px',
          height: '21px',

          '.middle-menu-line': {
            transform: 'scaleX(0)'
          },
          '.top-menu-line': {
            transform: 'rotate(45deg)'
          },
          '.bottom-menu-line': {
            transform: 'rotate(-45deg)'
          }
        },
        '.link-wrapper.open': {
          // transform: 'scaleY(1)'
        }
      })
    })
  ]
}
