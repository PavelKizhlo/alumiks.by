import React from 'react';
import { Open_Sans, Raleway } from 'next/font/google';

import Footer from './Footer';
import Header from './Header';

export const openSans = Open_Sans({
  subsets: ['cyrillic'],
  weight: ['600', '500', '400', '300'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const raleway = Raleway({
  subsets: ['cyrillic'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-raleway',
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`flex h-screen flex-col ${openSans.variable} ${raleway.variable}`}>
      <Header />
      <main className="grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
