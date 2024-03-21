import React, { Suspense } from 'react';

import {
  MainLoading,
  VerticalLine,
  Spotify,
  MainCard,
  TopicCard,
  TopicComponentProps,
  ArtsCard,
  Twitter,
} from '@the-heights/components';
import './global.css';

export default function Index() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[90%] flex-col px-8 py-0">
        <Suspense fallback={<MainLoading />}>
          <MainCard />
        </Suspense>
        <div className="my-4 w-full self-center border-t px-8" />
        <div className="mb-0 mt-4 flex w-full flex-row items-start self-center">
          <TopicCard
            className="sticky top-0 w-1/4 pr-8"
            category={{ name: 'Magazine', slug: 'features', url: 'magazine' }}
            topicComponents={Array<TopicComponentProps>(2).fill({
              type: 'big',
              imgSize: 'large',
              showExcerpt: false,
              showCategory: false,
            })}
          ></TopicCard>
          <VerticalLine />
          <div className="w-3/4 overflow-hidden">
            <div className="flex flex-row">
              <TopicCard
                className="w-1/2 px-8"
                category={{ name: 'News', slug: 'news', url: 'news' }}
                topicComponents={[
                  {
                    type: 'big',
                    imgSize: 'large',
                    showExcerpt: true,
                  },
                  {
                    type: 'styled',
                    imgSize: 'large',
                    options: { reverse: false, textWrap: true },
                  },
                  {
                    type: 'styled',
                    imgSize: 'large',
                  },
                ]}
              />
              <VerticalLine />
              <TopicCard
                className="w-1/2 pl-8"
                category={{ name: 'Sports', slug: 'sports', url: 'sports' }}
                topicComponents={[
                  {
                    type: 'big',
                    imgSize: 'large',
                    showCategory: false,
                    showExcerpt: true,
                  },
                  {
                    type: 'styled',
                    imgSize: 'large',
                    showCategory: false,
                    showExcerpt: false,
                  },
                  {
                    type: 'styled',
                    imgSize: 'large',
                    showCategory: false,
                    showExcerpt: false,
                  },
                ]}
              />
            </div>
            <div className="ml-8 my-4 w-full border-t" />
            <Spotify className='pl-8'/>
            <div className="ml-8 my-4 w-full border-t" />
            <div className="w-full pl-8">
              <ArtsCard category="Arts" />
            </div>
          </div>
        </div>
        <div className="my-4 w-full self-center border-t px-8" />
        <div className="mb-0 mt-4 flex w-full flex-row items-start self-center">
          <div className="w-3/4">
            <div className="flex flex-row">
              <TopicCard
                className="w-1/2 px-8"
                category={{ name: 'Newton', slug: 'newton', url: 'newton' }}
                topicComponents={[
                  {
                    type: 'big',
                    imgSize: 'large',
                    showCategory: false,
                    showExcerpt: true,
                  },
                  {
                    type: 'styled',
                    imgSize: 'large',
                    showCategory: false,
                    showExcerpt: false,
                  },
                  {
                    type: 'styled',
                    imgSize: 'large',
                    showCategory: false,
                    showExcerpt: false,
                    options: { reverse: true, textWrap: true },
                  },
                ]}
              />
              <VerticalLine />
              <TopicCard
                className="w-1/2 px-8"
                category={{
                  name: 'Opinions',
                  slug: 'opinions',
                  url: 'opinions',
                }}
                topicComponents={[
                  {
                    type: 'big',
                    imgSize: 'large',
                    showExcerpt: true,
                  },
                  {
                    type: 'styled',
                    imgSize: 'large',
                    showCategory: false,
                    options: { reverse: false, textWrap: true },
                  },
                  {
                    type: 'styled',
                    imgSize: 'large',
                    showCategory: false,
                  },
                ]}
              />
            </div>
            <div className="mx-8 my-4 w-[calc(100%-64px)] border-t" />
          </div>
          <Twitter className="hidden w-1/4 px-8 md:block" />
        </div>
      </div>
    </div>
  );
}
