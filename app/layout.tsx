import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaltGIS — Advanced GIS Software & Location Intelligence',
  description: 'We build modern geospatial software that turns location data into decisions.',
  keywords: ['GIS', 'geospatial', 'mapping', 'location intelligence', 'software'],
  authors: [{ name: 'SaltGIS' }],
  creator: 'SaltGIS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saltgis.eu',
    title: 'SaltGIS — Advanced GIS Software & Location Intelligence',
    description: 'We build modern geospatial software that turns location data into decisions.',
    siteName: 'SaltGIS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaltGIS — Advanced GIS Software & Location Intelligence',
    description: 'We build modern geospatial software that turns location data into decisions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 