import React, { Suspense } from 'react';

import {
  MainLoading,
  VerticalLine,
  Spotify,
  MainCard,
  TopicCard,
} from '@the-heights/components';
import './global.css';

export default function Index() {
  return (
    <div className="flex justify-center">
      <div className="w-full flex flex-col">
        <Suspense fallback={<MainLoading />}>
          <MainCard />
        </Suspense>
        <div className="w-[calc(90%-64px)] border-t my-4 px-8 self-center" />
        <div className="flex items-start self-center flex-wrap flex-row mt-4 mb-0 w-[90%]">
          <div className="w-1/4 px-8 sticky top-0">
            <TopicCard
              category="Features"
              topicComponents={Array(2).fill({
                type: 'styled',
                imgSize: 'large',
              })}
            ></TopicCard>
          </div>
          <VerticalLine />
          <div className="w-[74%]">
            <div className=" flex flex-row">
              <div className="w-[50%] px-8">
                <TopicCard
                  category="News"
                  topicComponents={[
                    { type: 'big', imgSize: 'large', category: false },
                    { type: 'styled', imgSize: 'large', category: false },
                    { type: 'styled', imgSize: 'large', category: false },
                  ]}
                />
              </div>
              <VerticalLine />
              <div className="w-[50%] px-8">
                <TopicCard
                  category="Sports"
                  topicComponents={[
                    { type: 'big', imgSize: 'large', category: false },
                    { type: 'styled', imgSize: 'large', category: false },
                    { type: 'styled', imgSize: 'large', category: false },
                  ]}
                />
              </div>
            </div>
            <div className="w-[calc(100%-64px)] border-t my-4 mx-8" />
            <Spotify />
            <div className="w-[calc(100%-64px)] border-t my-4 mx-8" />
            <div className="w-full px-8">
              <TopicCard
                category="Opinions"
                topicComponents={[
                  {
                    type: 'big',
                    imgSize: 'large',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
