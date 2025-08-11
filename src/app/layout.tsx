import './globals.css'
import type { ReactNode } from 'react'

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
    <html lang="en">
      <body className="bg-white text-[#4B2E2E]">
        {children}
      </body>
    </html>
  )
}