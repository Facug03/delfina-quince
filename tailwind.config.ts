import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ['var(--font-cookie)'],
        open: ['var(--font-open-sans)'],
      },
      colors: {
        primary: '#C79711',
        secondary: '#95710C',
      },
    },
  },
  plugins: [],
}
export default config
