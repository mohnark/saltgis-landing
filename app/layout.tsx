import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Software for Advanced Location Technologies in Geographic Information Systems',
  description: 'Transforming complex spatial data into clear, actionable intelligence for smarter land, infrastructure, and resource management.',
  keywords: ['GIS', 'geospatial', 'mapping', 'location intelligence', 'software', 'spatial analysis', 'infrastructure management'],
  authors: [{ name: 'SaltGIS' }],
  creator: 'SaltGIS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saltgis.eu',
    title: 'Software for Advanced Location Technologies in Geographic Information Systems',
    description: 'Transforming complex spatial data into clear, actionable intelligence for smarter land, infrastructure, and resource management.',
    siteName: 'SaltGIS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software for Advanced Location Technologies in Geographic Information Systems',
    description: 'Transforming complex spatial data into clear, actionable intelligence for smarter land, infrastructure, and resource management.',
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