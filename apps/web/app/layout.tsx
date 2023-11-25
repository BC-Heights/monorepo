"use client"

import './global.css';

import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';


const httpLink = createHttpLink({
  uri: 'https://www.bcheights.com/graphql/',
  fetchOptions: {
    mode: 'cors',
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  credentials: 'include',
  headers: {
    'Content-Type': 'application/graphql/',
  },
});

export const metadata = {
  title: 'Welcome to web',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
