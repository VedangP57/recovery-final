import React from 'react';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ColorBar from '@/components/ColorBar';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Recovery.com - Your Path to Healing and Wellness',
  description:
    'Find trusted rehabilitation centers across the United States. Recovery.com helps you discover the right treatment program for your journey to wellness.',
  metadataBase: new URL('https://recovery.com'),
  openGraph: {
    title: 'Recovery.com - Your Path to Healing and Wellness',
    description:
      'Find trusted rehabilitation centers across the United States.',
    url: 'https://recovery.com',
    siteName: 'Recovery.com',
    images: [
      {
        url: 'https://recovery.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Recovery.com - Your Path to Healing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery.com - Your Path to Healing and Wellness',
    description:
      'Find trusted rehabilitation centers across the United States.',
    images: ['https://recovery.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <ColorBar />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
