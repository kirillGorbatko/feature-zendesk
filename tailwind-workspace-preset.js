const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1366px',
      'desktop-max': '1365px',
      'desktop-xl': '1920px',
      'fm-desktop': '1024px',
      'fm-tablet': '1023px',
      'fm-mobile-min': '768px',
      'fm-mobile-max': '767px',
    },
    colors: {
      primary1: '#9B62FF',
      primary2: '#FF5262',
      primary3: '#58ECCA',
      muted: '#737373',
      disabled: '#BFBFBF',
      line1: '#E7E7E7',
      line2: '#CFCFCF',
      foreground: '#000000',
      background: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
        supergt: ['GT-Super-Display-Super', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'slide-up': {
          '100%': { opacity: 1, top: 0 },
        },
        'slide-in-right': {
          '100%': { left: 'calc((100vw - 1200px) / 2)' },
        },
        'slide-in-right-xl': {
          '100%': { left: 'calc((100vw - 1300px) / 2)' },
        },
        'opacity-in-testimonial': {
          '100%': { opacity: '1' },
        },
        'opacity-out-testimonial': {
          '100%': { opacity: '1' },
        },
        'slide-down-testimonial-quoter': {
          '100%': { bottom: '-130px' },
        },
        'slide-up-testimonial-quoter': {
          '100%': { bottom: 0 },
        },
        'slide-down-testimonial': {
          '100%': { bottom: '-520px' },
        },
        'slide-up-testimonial': {
          '100%': { bottom: 0 },
        },
        'slide-in-right-mobile': {
          '100%': { left: '30px' },
        },
        'slide-out-right-overlay': {
          '0%': { left: '-300px', width: 'calc(100vw + 300px)' },
          '100%': { left: 'calc(100vw + 100px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-220px * 6))' },
        },
        'scroll-mobile': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-180px * 6))' },
        },
        'slide-out-up': {
          '0%': { height: '100%' },
          '100%': { bottom: 'calc(100% * 2)' },
        },
        'slide-out-right': {
          '0%': { left: '-300px', width: '0px' },
          '50%': { left: '0px', width: 'calc(100vw / 2)' },
          '100%': { width: '0px', left: 'calc(100vw + 100px)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animation-delay'),
    require('tailwind-scrollbar-hide'),
  ],
};
