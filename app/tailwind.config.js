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
        'dusty-blue-800': '#264697',
        // 'warm-gray-200': 'hsl(40, 15%, 92%)',
        // 'warm-gray-400': 'hsl(40, 15%, 67%)'
        'warm-grey-50': 'hsl(40, 23%, 97%)',
        'warm-grey-100': 'hsl(43, 13%, 90%)',
        'warm-grey-200': 'hsl(40, 15%, 80%)',
        'warm-grey-300': 'hsl(39, 11%, 69%)',
        'warm-grey-400': 'hsl(41, 8%, 61%)',
        'warm-grey-500': 'hsl(41, 8%, 48%)',
        'warm-grey-600': 'hsl(41, 9%, 35%)',
        'warm-grey-700': 'hsl(37, 11%, 28%)',
        'warm-grey-800': 'hsl(40, 13%, 23%)',
        'warm-grey-900': 'hsl(42, 15%, 13%)',
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
