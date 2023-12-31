import './globals.css'
import type { Metadata } from 'next'
import { Inter, Istok_Web, Lato, Nunito_Sans, Poppins } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: '700',
  variable: '--font-poppins',
  subsets: ['latin'],
})

const istok = Istok_Web({
  weight: ['400', '700'],
  variable: '--font-istok',
  subsets: ['latin'],
})
const nuito = Nunito_Sans({
  variable: '--font-nuito',
  subsets: ['latin'],
  weight: ['600', '700'],
})
const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${poppins.variable} ${istok.variable}${nuito.variable} ${lato.variable} bg-gray-200 font-lato antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
