import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Trip Resources - Ressources de Voyage',
    template: '%s | Trip Resources'
  },
  description: 'Découvrez nos meilleures ressources de voyage : circuits, séjours et aventures dans le monde entier. Réservez vos prochaines vacances avec Trip Resources.',
  keywords: [
    'voyage',
    'tourisme',
    'circuit',
    'séjour',
    'aventure',
    'ressources voyage',
    'trip resources',
    'réservation voyage',
    'vacances',
    'découverte'
  ],
  authors: [{ name: 'Trip Resources' }],
  creator: 'Trip Resources',
  publisher: 'Trip Resources',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'Trip Resources',
    title: 'Trip Resources - Ressources de Voyage',
    description: 'Découvrez nos meilleures ressources de voyage : circuits, séjours et aventures dans le monde entier.',
    images: [
      {
        url: '/images/logo-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trip Resources - Ressources de Voyage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trip Resources - Ressources de Voyage',
    description: 'Découvrez nos meilleures ressources de voyage : circuits, séjours et aventures dans le monde entier.',
    images: ['/images/logo-og.jpg'],
    creator: '@tripresources',
    site: '@tripresources',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
