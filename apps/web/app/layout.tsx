import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ApolloWrapper } from '@the-heights/apollo-wrapper';

import Header from './header';
import Footer from './footer';
import './global.css';


export const metadata = {
  title: 'Home \u2014 The Heights',
  description: 'Home \u2014 The Heights',
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
        <Footer />
      </body>
    </html>
  );
}
