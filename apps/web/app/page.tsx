'use client';

import styles from './page.module.scss';
import React, { Suspense } from 'react';

import { MainCard } from '@the-heights/main-card';
import { TopicCard } from '@the-heights/topic-card';
import Twitter from './twitter';

import { TopicLoading, MainLoading } from './loadImport';
import Image from 'next/image';


export default function Index() {
  const cats = ['Sports', 'News', 'Features' /*Magazine*/, 'Newton', 'Arts', 'Opinions', 'Multimedia'];
 
  return (
    <div className={styles.page}>
      <Suspense fallback={<MainLoading />}>
        <MainCard/>
      </Suspense>
      {/* put the data fetching in each topic card, that way they can load in when they're ready
      Or have it be per row so it looks better */}
      <Suspense fallback={<TopicLoading cardPerRow={[3, 3, 3]} cardConfig={Array(9).fill([2,3])} />}>
        {/* make this more dynamic so each topic card has a similar height */}
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
              <div className={styles['filler']}>
                <div className={styles['title-container']}>
                  <span></span>
                  <span className={styles['line']} />
                  <h1 className={styles['title']}>E-Edition</h1>
                  <span className={styles['line']} />
                </div>
                <div style={{ position: 'relative', paddingTop: 'max(60%,326px)', height: 0, width: '100%' }}>
                  <iframe
                    allow="clipboard-write allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
                    allowFullScreen={true}
                    style={{
                      position: 'absolute',
                      border: 'none',
                      width: '100%',
                      height: '100%',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    }}
                    src="https://e.issuu.com/embed.html?backgroundColor=%23232323&backgroundColorFullscreen=%23232323&d=the_heights_dec_4_2023&hideIssuuLogo=true&u=bcheights"
                  />
                  <span>
                  <p style={{ textAlign: 'center', fontFamily: 'arbutus slab', margin: '16px 0' }}>
                    <strong>
                      <span style={{ fontSize: '14pt' }}>
                        Click Above To Access The Most Recent{' '}
                        <a href="https://www.bcheights.com/e-edition-2/">
                          E-Edition Of <em>The Heights</em>
                        </a>
                      </span>
                    </strong>
                  </p>
                </span>
                  <Image 
                    src={'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2023/02/27003123/Newsletter-372x195.png'}
                    width={372}
                    height={195}
                    alt={'Subscribe to the Newsletter'}
                    />
                </div>
              </div>
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
              <div className={styles['filler']}>
                <div className={styles['title-container']}>
                  <span></span>
                  <span className={styles['line']} />
                  <h1 className={styles['title']}>Podcast</h1>
                  <span className={styles['line']} />
                  <span></span>
                </div>
                <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/playlist/70TWXEAOC74nM9bzQpCwGl?utm_source=generator"
                  width="100%"
                  height="352"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
                <Suspense fallback={<div>Loading Twitter...</div>}>
                  <Twitter/>
                </Suspense>
              </div>
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
