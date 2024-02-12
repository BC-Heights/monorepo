import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ApolloWrapper } from '@the-heights/apollo-wrapper';

import { Header } from '@the-heights/components';
import { Footer } from '@the-heights/components';
import './global.css';
import { Metadata } from 'next';
import { AxiomWebVitals } from 'next-axiom';

export const metadata: Metadata = {
  title: 'Home \u2014 The Heights',
  description: 'Home \u2014 The Heights',
  verification: { google: process.env.GOOGLE_SEARCH_CONSOLE },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AxiomWebVitals />
      <body>
        <Header />
        <ApolloWrapper>{children}</ApolloWrapper>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
