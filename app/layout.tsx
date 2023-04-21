'use client';

import React from 'react';
import { Roboto_Slab, Roboto } from 'next/font/google';

import { ThemeProvider } from '@material-tailwind/react';

import '@/styles/globals.scss';

import Footer from './footer';
import Header from './header';

const headingFont = Roboto_Slab({
  subsets: ['cyrillic'],
  weight: ['700', '600', '500', '400', '300', '200', '100'],
  display: 'swap',
  variable: '--font-heading-custom',
});

const typoFont = Roboto({
  subsets: ['cyrillic'],
  weight: ['500', '400', '300', '100'],
  display: 'swap',
  variable: '--font-typo-custom',
});
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <ThemeProvider>
        <body
          className={`flex h-screen flex-col ${headingFont.variable} ${typoFont.variable}`}
        >
          <Header />
          <main className="grow pt-20 font-typo">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
