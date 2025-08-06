import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Trip Resources - Découvrez nos meilleures ressources de voyage',
    template: '%s | Trip Resources'
  },
  description: 'Découvrez nos meilleures ressources de voyage avec des itinéraires détaillés, des prix transparents et des expériences uniques.',
  keywords: ['voyage', 'ressources', 'itinéraires', 'tourisme', 'découverte'],
  authors: [{ name: 'Trip Resources Team' }],
  creator: 'Trip Resources',
  publisher: 'Trip Resources',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'Trip Resources',
    title: 'Trip Resources - Découvrez nos meilleures ressources de voyage',
    description: 'Découvrez nos meilleures ressources de voyage avec des itinéraires détaillés, des prix transparents et des expériences uniques.',
    images: [
      {
        url: '/api/og?title=Trip%20Resources&description=Découvrez%20nos%20meilleures%20ressources%20de%20voyage',
        width: 1200,
        height: 630,
        alt: 'Trip Resources - Découvrez nos meilleures ressources de voyage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trip Resources - Découvrez nos meilleures ressources de voyage',
    description: 'Découvrez nos meilleures ressources de voyage avec des itinéraires détaillés, des prix transparents et des expériences uniques.',
    images: ['/api/og?title=Trip%20Resources&description=Découvrez%20nos%20meilleures%20ressources%20de%20voyage'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
} 