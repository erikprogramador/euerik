import Analytics from '@/components/Analytics';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import GoogleTagManager from '@magicul/next-google-tag-manager';
import Script from 'next/script';

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

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-348548627" />

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TMQLFLW7')`,
          }}
        ></script> */}
      </head>
      <body className={inter.className}>
        {/* <GoogleTagManager /> */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMQLFLW7"
            height="0"
            width="0"
          ></iframe>
        </noscript> */}

        {children}
      </body>
    </html>
  );
}
