module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    minWidth: {
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '1/8': '12.5%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    fontFamily: {
      sans: [
        'Lato',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ]
    },
    extend: {
      maxWidth: {
        '96': '24rem',
      },
      spacing: {
        '96': '24rem',
      },
      colors: {
        'warm-gray-200': 'hsl(40, 15%, 92%)',
        'warm-gray-400': 'hsl(40, 15%, 67%)'
      },
      opacity: {
        '90': '.9',
      },
      backgroundImage: theme => ({
        'texture': "url('/images/background.png')",
      })
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
