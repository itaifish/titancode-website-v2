import "assets/scss/nextjs-material-kit.scss?v=1.1.0";
import { AppProps } from 'next/app';
import * as React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}