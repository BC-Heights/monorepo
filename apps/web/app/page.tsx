import styles from './page.module.scss';
import React from 'react';
import { Suspense } from 'react';

import Loading from './loading';
import { MainCard } from '@the-heights/main-card';
import { TopicCard } from '@the-heights/topic-card';


export default async function Index() {
  const cats = ['News' , 'Sports', 'Newton', 'Arts', 'Opinions', 'Multimedia']
  return (
    <div className={styles.page}>
      <Suspense fallback={<Loading />}>
        <MainCard></MainCard>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div className={styles['topics-container']}>
          {cats.map((category, index) => (
            <TopicCard
              key={index}
              category={category}
              numMedium={2}
              numSmall={3}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
