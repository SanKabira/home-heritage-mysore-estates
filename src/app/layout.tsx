import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import { Playfair_Display, Lato } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'] , variable: '--font-playfair' })
const lato = Lato({ subsets: ['latin'], weight: ['400','700'], variable: '--font-lato' })

export const metadata = {
  title: 'HOME – Heritage of Mysore Estates',
  description: 'Discover heritage estates, market insights, and featured listings in Mysuru.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-white text-[#4B2E2E] font-sans">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}