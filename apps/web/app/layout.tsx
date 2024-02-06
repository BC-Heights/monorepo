import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ApolloWrapper } from "@the-heights/apollo-wrapper";


import { Header } from '@the-heights/components';
import { Footer } from '@the-heights/components';
import './global.css';
import { Metadata } from 'next';
import { AxiomWebVitals } from 'next-axiom';


export const metadata: Metadata = {
  title: 'Home \u2014 The Heights',
  description: 'Home \u2014 The Heights',
  verification: {google: "mGF3ZxEBZ4zCWO1p9A_k9nzhiYRckmUnfsRS1PGc83s"}
  };



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
        <Analytics />
        <SpeedInsights />
        <AxiomWebVitals />
        <Footer />
      </body>
    </html>
  );
}
