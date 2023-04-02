import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';

import { ThemeProvider } from '@material-tailwind/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}
