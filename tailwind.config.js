/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#181818',
      },
      transparent: {
        DEFAULT: 'transparent',
      },
      green: {
        500: '#136C46',
        400: ' #07a04f',
        300: ' #13A159',
      },
      red: {
        500: '#C00D0D',
      },
      blue: {
        500: '#4AA2E2',
        400: '#6DB8F2',
        300: '#0085FF',
        200: '#95E4FF',
      },
      gray: {
        200: '#F3F3F3',
        300: '#E3E3E3',
        400: '#DADADA',
        500: '#DDDDDD',
      },
    },
    fontFamily: {
      inter: ['var(--font-inter)', ...fontFamily.sans],
      poppins: ['var(--font-poppins)', ...fontFamily.sans],
      istok: ['var(--font-istok)', ...fontFamily.sans],
      nuito: ['var(--font-nuito)', ...fontFamily.sans],
      lato: ['var(--font-lato)', ...fontFamily.sans],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '24px',
    },
    extend: {
      borderRadius: {
        DEFAULT: '36px',
        semi: '43px',
        max: '83px',
        10: '10px',
      },
    },
  },
  plugins: [],
}
