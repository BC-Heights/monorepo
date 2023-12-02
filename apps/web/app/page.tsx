"use client"

import styles from './page.module.scss';
import React, { Suspense } from 'react';

import { MainCard } from '@the-heights/main-card';
import { TopicCard } from '@the-heights/topic-card';

import { TopicLoading, MainLoading } from './loading';


export const dynamic = 'force-dynamic';

export default async function Index() {
  const cats = ['Sports', 'News', 'Features' /*Magazine*/, 'Newton', 'Arts', 'Opinions', 'Multimedia'];
  return (
    <div className={styles.page}>
      <Suspense fallback={<MainLoading />}>
        <MainCard/>
      </Suspense>
        <Suspense fallback={<TopicLoading cardPerRow={[2, 2, 3]} cardConfig={Array(7).fill([2,3])} />}>
        
          <div className={styles['dom-topics-container']}>
              <div className={styles['topics-container']}>
                {cats.slice(0, 2).map((category, index) => (
                    <TopicCard
                      key={index}
                      category={category}
                      numBig={2}
                      numSmall={3}
                    />
                ))}
                <div className={styles['filler']}></div>
              </div>
              <div className={styles['topics-container']}>
                {cats.slice(2, 4).map((category, index) => (
                  <TopicCard
                    key={index}
                    category={category}
                    numBig={2}
                    numSmall={3}
                  />
                ))}
                <div className={styles['filler']}></div>
              </div>
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
          </div>
      </Suspense>
    </div>
  );
}
