import React from 'react';
import { Roboto_Slab, Roboto } from 'next/font/google';

import Footer from '../footer';
import Header from '../header';

export const headingFont = Roboto_Slab({
  subsets: ['cyrillic'],
  weight: ['700', '600', '500', '400', '300', '200', '100'],
  display: 'swap',
  variable: '--font-heading-custom',
});

export const typoFont = Roboto({
  subsets: ['cyrillic'],
  weight: ['500', '400', '300', '100'],
  display: 'swap',
  variable: '--font-typo-custom',
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`flex h-screen flex-col ${headingFont.variable} ${typoFont.variable}`}
    >
      <Header />
      <main className="grow pt-20 font-typo">{children}</main>
      <Footer />
    </div>
  );
}
