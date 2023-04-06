import React from 'react';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
