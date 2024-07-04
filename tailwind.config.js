/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        primary: '#B5A1E5',
        primaryOn: '#100E17',
        background: '#131214',
        backgroundOn: '#EAE6F2',
        surface: '#1D1C1F',
        surfaceOn: '#DDDAE5',
        surfaceVariantOn: '#7B7980',
        'surfaceVariantOn-2': '#B9B6BF',
        outline: '#3E3D40',
        'aqi-1': '#89E589',
        'on-aqi-1': '#1F331F',
        'aqi-2': '#E5DD89',
        'on-aqi-2': '#33311F',
        'aqi-3': '#E5C089',
        'on-aqi-3': '#332B1F',
        'aqi-4': '#E58989',
        'on-aqi-4': '#331F1F',
        'aqi-5': '#E589B7',
        'on-aqi-5': '#331F29',
        'white': 'hsl(0, 0%, 100%)',
        'white-alpha-4': 'hsla(0, 0%, 100%, 0.04)',
        'white-alpha-8': 'hsla(0, 0%, 100%, 0.08)',
        'black-alpha-10': 'hsla(0, 0%, 0%, 0.1)',
      },
      fontWeight: {
        regular: 400,
        semiBold: 600,
      },
      fontSize: {
        heading: '5.6rem',
        'title-1': '2rem',
        'title-2': '1.8rem',
        'title-3': '1.6rem',
        'body-1': '2.2rem',
        'body-2': '2rem',
        'body-3': '1.6rem',
        'label-1': '1.4rem',
        'label-2': '1.2rem',

      },
      borderRadius: {
        '28': '1.75rem',
        '16': '1rem',
        'pill': '31.25rem',
        'circle': '50%',

      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(180deg, hsla(270, 5%, 7%, 0) 0%, hsla(270, 5%, 7%, 0.8) 65%, hsl(270, 5%, 7%) 100%)',
        'gradient-2': 'linear-gradient(180deg, hsla(260, 5%, 12%, 0) 0%, hsla(260, 5%, 12%, 0.8) 65%, hsl(260, 5%, 12%) 100%)',

      },
      boxShadow: {
        'shadow-1': '0px 1px 3px hsla(0, 0%, 0%, 0.5)',
        'shadow-2': '0px 3px 6px hsla(0, 0%, 0%, 0.4)'
      },
      keyframes: {
        ripple: {
          '0%': {
            'clip-path': 'circle(0% at 50% 50%)',
          },
          '100%': {
            'clip-path': 'circle(100% at 50% 50%)',
          }
        },
        loading: {
          '0%': {
            'transform': 'translateY(-50%) rotate(0)',
          },
          '100%': { 'transform': 'translateY(-50%) rotate(360deg)', }
        }
      },
      animation: {
        ripple: 'ripple 250ms ease forwards',
        loading: 'loading 500ms linear infinite'
      },
    },
  },
  plugins: [],
}