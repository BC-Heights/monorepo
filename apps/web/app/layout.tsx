import { ApolloWrapper } from './apolloWrapper';
import { Analytics } from '@vercel/analytics/react'
import Link from 'next/link';
import './global.css';


export const metadata = {
  title: 'Home - The Heights',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/">Header</Link>
        </div>
        <ApolloWrapper>{children}</ApolloWrapper>
        <Analytics />
        <div>Footer</div>
      </body>
    </html>
  );
}
