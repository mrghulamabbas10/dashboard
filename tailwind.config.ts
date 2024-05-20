import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Quicksand"', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: '#808080',
        bgGray: '#5F5F5F',
        primary: '#696969',
        textPrimary: '#181818',
      },
    },
  },
  plugins: [],
}
export default config
