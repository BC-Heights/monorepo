import React, { Suspense } from 'react';
import Image from 'next/image';

import { MainCard } from '@the-heights/main-card';
import { TopicCard } from '@the-heights/topic-card';
import { SearchBar } from '@the-heights/search-bar';

import { TopicLoading, MainLoading } from './loadImport';
import { Twitter } from '@the-heights/twitter';


export default function Index() {
  const cats = ['Sports', 'News', 'Features' /*Magazine*/, 'Metro' /*Newton*/, 'Arts', 'Opinions', 'Multimedia'];

  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <Suspense fallback={<MainLoading />}>
          <MainCard/>
        </Suspense>
        <Suspense fallback={<TopicLoading cardPerRow={[3, 3, 3]} cardConfig={Array(9).fill([2,3])} />}>
          <div className="flex flex-col items-center">
              <div className="flex flex-row flex-wrap justify-start gap-[25px] w-fit">
                {cats.slice(0, 2).map((category, index) => (
                    <TopicCard
                      key={index}
                      category={category}
                      numBig={2}
                      numSmall={3}
                    />
                ))}
                <div className="w-[370px]">
                  <div className="flex flex-row justify-around items-center gap-4">
                    <span></span>
                    <span className="w-full border-t-4 border-t-[#eee] border-solid" />
                    <h1 className="text-2xl font-semibold">E-Edition</h1>
                    <span className="w-full border-t-4 border-t-[#eee] border-solid" />
                  </div>
                  <div className="relative p-t-[max(60%, 326px)] size-[370px]">
                    <iframe
                      className="absolute border-none size-full inset-0"
                      allow="clipboard-write allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
                      allowFullScreen={true}
                      src="https://e.issuu.com/embed.html?backgroundColor=%23232323&backgroundColorFullscreen=%23232323&d=the_heights_dec_4_2023&hideIssuuLogo=true&u=bcheights"
                    />
                  </div>
                  <h2 className="text-center my-4 text-2xl">
                    <strong>
                      <span >
                        Click Above To Access The Most Recent{' '}
                        <a href="https://www.bcheights.com/e-edition-2/">
                          E-Edition Of <em>The Heights</em>
                        </a>
                      </span>
                    </strong>
                  </h2>
                  <Image
                    src={'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2023/02/27003123/Newsletter-372x195.png'}
                    width={372}
                    height={195}
                    alt={'Subscribe to the Newsletter'}
                    />
                  <SearchBar first={4}/>
                </div>
              </div>
              <div className="flex flex-row flex-wrap justify-start w-fit gap-6">
                {cats.slice(2, 4).map((category, index) => (
                  <TopicCard
                    key={index}
                    category={category}
                    numBig={2}
                    numSmall={3}
                  />
                ))}
                <div className="w-[370px]">
                  <div className="flex flex-row justify-around items-center gap-4">
                    <span />
                    <span className="w-full border-t-4 border-t-[#eee] border-solid" />
                    <h1 className="text-2xl font-semibold whitespace-nowrap">Podcast</h1>
                    <span className="w-full border-t-4 border-t-[#eee] border-solid" />
                    <span />
                  </div>
                  <iframe
                    className="rounded-xl"
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
              <div className="flex flex-row flex-wrap justify-start w-fit gap-6">
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
    </div>
  );
}
