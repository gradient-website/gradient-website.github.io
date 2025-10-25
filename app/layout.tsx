import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import './globals.css';

import { Footer } from '@/components/Footer';
import { NavigationWithRouter } from '@/components/NavigationWithRouter';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Gradient',
  description: 'Fostering Academic Excellence Through Innovation',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <header>
          <NavigationWithRouter />
        </header>
        <main className="flex-1 bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
