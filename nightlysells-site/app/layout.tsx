import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nightly_sells',
  description: 'Wholesale • Retail • E‑Commerce',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
