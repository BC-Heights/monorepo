"use client"

import styles from './page.module.scss';

import React from 'react';
import { Posts } from '@the-heights/posts';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '@the-heights/apollo-client';


export default async function Index() {
  return (
      <div className={styles.page}>
        <ApolloProvider client={createApolloClient()}>
          <Posts></Posts>
        </ApolloProvider>
      </div>
  );
}
