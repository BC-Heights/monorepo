import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"

import Header from './header';
import Footer from './footer';
import './global.css';

import { ApolloWrapper } from './apolloWrapper';


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
