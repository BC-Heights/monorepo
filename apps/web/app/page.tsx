import React, { Suspense } from 'react';
import { MainCard, TopicCard } from '@the-heights/cards';

import { MainLoading, VerticalLine } from '@the-heights/components';
import './global.css';

export default function Index() {
  return (
    <div className="flex justify-center">
      <div className="w-[1400px] flex flex-col">
        <Suspense fallback={<MainLoading />}>
          <MainCard />
        </Suspense>
        <div className="w-[calc(100%-64px)] border-t my-4 px-8 self-center" />
        <div className="flex items-start flex-wrap flex-row mt-4 mb-0 ">
          <div className="w-1/4 px-8">
            <TopicCard category="Features" numBig={1} numSmall={3} />
          </div>
          <VerticalLine />
          <div className="w-[74%]">
            <div className=" flex flex-row">
              <div className="w-[50%] px-8">
                <TopicCard category="News" numBig={1} numSmall={3} />
              </div>
              <VerticalLine />
              <div className="w-[50%] px-8">
                <TopicCard category="Sports" numBig={1} numSmall={3} />
              </div>
            </div>
            <div className="w-[calc(100%-64px)] border-t my-4 mx-8" />
            <div className="flex flex-col w-full px-8">
              <iframe
                className=""
                src="https://open.spotify.com/embed/show/4W543Ppe5xxB6HF1t7eDTs?utm_source=generator"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className="w-[calc(100%-64px)] border-t my-4 mx-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
