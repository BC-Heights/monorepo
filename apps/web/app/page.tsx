import styles from './page.module.scss';
import React from 'react';
import Loading from './loading'
import { Posts } from '@the-heights/posts';
import { Suspense } from 'react';


export default async function Index() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<Loading /> }>
        <Posts></Posts>
      </Suspense>
      </div>
  );
}
