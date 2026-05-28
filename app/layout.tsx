import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Shreyas P Lokhande | Portfolio',
  description:
    'Turning ideas into impactful reality - Personal portfolio of Shreyas P Lokhande, an engineering student passionate about AI, programming, and problem solving.',
  keywords: [
    'Shreyas Lokhande',
    'Portfolio',
    'AI',
    'Engineering',
    'Developer',
    'Student',
  ],
  authors: [{ name: 'Shreyas P Lokhande' }],
  creator: 'Shreyas P Lokhande',
  openGraph: {
    title: 'Shreyas P Lokhande | Portfolio',
    description: 'Turning ideas into impactful reality',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f9f5' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1d1a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}