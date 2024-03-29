const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './utils/**/*.js'],
  darkMode: 'class', // or 'media' or 'class',
  important: true,
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-50': '-50',
      },
      height: {
        unset: 'unset',
      },
      dropShadow: {
        nav: '0rem 0rem 4px rgba(71, 71, 71,1)',
      },
      width: {
        '3xl': '48rem',
        '5xl': '60rem',
        '7xl': '80rem',
      },
      transitionProperty: {
        height: 'height',
        padding: 'padding',
      },
      inset: {
        '1/5': '20%',
      },
      fontFamily: {
        sans: ['Merriweather', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      outline: {
        primary: ['2px dotted var(--color-outline-primary)', '2px'],
      },
      padding: {
        '1/2': '50%',
        '1/4': '25%',
        full: '100%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      animation: {
        'blob-spin': 'blobbing 24s linear infinite',
      },
      screens: {
        '2md': '900px',
        '1.5xl': '1340px',
        '3xl': '1600px',
        '4xl': '1800px',
      },
      keyframes: {
        blobbing: {
          '0%': {
            transform: 'rotate(0deg) scaleY(1) scaleX(1)',
          },
          '50%': {
            transform: 'rotate(180deg) scaleY(0.95) scaleX(1.01)',
          },
          '100%': {
            transform: 'rotate(360deg) scaleY(1) scaleX(1)',
          },
        },
      },
      margin: {
        '1/2': '50%',
        '-1/2': '-50%',
        '1/3': '33%',
        '2/3': '66%',
        '-3/4': '-75%',
        '3/4': '75%',
        '4/5': '80%',
        '1/4': '25%',
        '-1/4': '-25%',
        '1/5': '20%',
        '-1/5': '-20%',
        full: '100%',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1.5xl': '38rem',
        '2.5xl': '44rem',
      },
      boxShadow: {
        nav: 'rgba(0, 0, 0, 0.15) 0px 1px 4px 0px',
      },
      colors: {
        primary: colors.teal,
        pinkk: '#F21170',
        'primary-light': '#F7F7F7',
        'primary-grayish': '#fcfcf7',
        gray: colors.slate,
        'gray-150': '#ededed',
        violet: colors.violet,
        yellow: colors.yellow,
        pink: colors.pink,
        green: colors.teal,
        orange: colors.orange,
        turq: {
          light: '#00F5C4',
          DEFAULT: '#003334',
          dark: '#009eeb',
        },
        code: {
          green: '#4ec9b0',
          yellow: '#ffe484',
          purple: '#569CD6',
          red: '#ff8383',
          blue: '#569CD6',
          white: '#fff',
        },
      },
      letterSpacing: {
        title: '0.2em',
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.400'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
