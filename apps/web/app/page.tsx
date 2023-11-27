import styles from './page.module.scss';
import React from 'react';
import { Suspense } from 'react';

import Loading from './loading';
import { MainCard } from '@the-heights/main-card';
import { TopicCard } from '@the-heights/topic-card';


export default async function Index() {
  const cats = ['Sports' , 'News', 'Features' /*Magazine*/, 'Newton', 'Arts', 'Opinions', 'Multimedia']
  return (
    <div className={styles.page}>
      <MainCard></MainCard>
      <Suspense fallback={<Loading />}>
        <div className={styles['topics-container']}>
          {cats.slice(0, 2).map((category, index) => (
            <TopicCard
              key={index}
              category={category}
              numBig={2}
              numSmall={3}
            />
          ))}
        </div>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div className={styles['topics-container']}>
          {cats.slice(2, 4).map((category, index) => (
            <TopicCard
              key={index}
              category={category}
              numBig={2}
              numSmall={3}
            />
          ))}
        </div>
      </Suspense>
      <Suspense fallback={<Loading />}>
        <div className={styles['topics-container']}>
          {cats.slice(4).map((category, index) => (
            <TopicCard
              key={index}
              category={category}
              numBig={2}
              numSmall={3}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
