import Analytics from '@/components/Analytics';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import GoogleTagManager from '@magicul/next-google-tag-manager';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Erik V. Fernandes',
  description:
    'Conhecimento multidisciplinar para aplicação em inteligência de negócios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <GoogleTagManager />

        {children}
      </body>
    </html>
  );
}
