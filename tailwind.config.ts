import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/fondo-bella.webp')",
        fondo: "url('/fondo.webp')",
      },
      fontFamily: {
        cookie: ['var(--font-cookie)'],
        open: ['var(--font-open-sans)'],
      },
    },
  },
  plugins: [],
}
export default config
