"use client"

import styles from './page.module.scss';

import React from 'react';
import { Posts } from '@the-heights/posts';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '@the-heights/apollo-client';


export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
      <div className={styles.page}>
      hey lol
      hi
      <ApolloProvider client={createApolloClient()}>
        <Posts></Posts>

      </ApolloProvider>

      </div>
      
  );
}
