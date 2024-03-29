import type { Metadata } from 'next'
import { Cookie, Open_Sans } from 'next/font/google'
import './globals.css'

export const cookie = Cookie({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-cookie',
})

export const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Delfina quince',
  description: 'Invitación para fiesta de quince años de Delfina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body
        className={`${cookie.variable} ${open_sans.variable} overflow-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
