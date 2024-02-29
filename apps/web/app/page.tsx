import React, { Suspense } from 'react';

import {
  MainLoading,
  VerticalLine,
  Spotify,
  MainCard,
  TopicCard,
  TopicComponentProps,
  ArtsCard,
} from '@the-heights/components';
import './global.css';

export default function Index() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full flex-col">
        <Suspense fallback={<MainLoading />}>
          <MainCard />
        </Suspense>
        <div className="my-4 w-[calc(90%-64px)] self-center border-t px-8" />
        <div className="mb-0 mt-4 flex w-[90%] flex-row flex-wrap items-start self-center">
          <TopicCard
            className="sticky top-0 w-1/4 px-8"
            category={{ name: 'Magazine', slug: 'features', url: 'magazine' }}
            topicComponents={Array<TopicComponentProps>(2).fill({
              type: 'big',
              imgSize: 'large',
              showExcerpt: false,
              showCategory: false,
            })}
          ></TopicCard>
          <VerticalLine />
          <div className="w-[74%]">
            <div className="flex flex-row">
              <TopicCard
                className="w-[50%] px-8"
                category={{ name: 'News', slug: 'news', url: 'news' }}
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
              <VerticalLine />
              <TopicCard
                className="w-[50%] px-8"
                category={{name: 'Sports', slug: 'sports', url: 'sports' }}
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
            <div className="mx-8 my-4 w-[calc(100%-64px)] border-t" />
            <Spotify />
            <div className="mx-8 my-4 w-[calc(100%-64px)] border-t" />
            <div className="w-full px-8">
              <ArtsCard category="Arts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
