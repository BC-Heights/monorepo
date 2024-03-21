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
  HorizontalLine,
  Wheel,
  // getPhotos
} from '@the-heights/components';
import { Settings } from 'react-slick';
import './global.css';

export default function Index() {

  const wheelSettings: Settings = {
    arrows: false,
    infinite: true,
    speed: 750,
    className: 'center',
    centerMode: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: true,
    cssEase: 'ease-in-out',
  };
  function defaultTopicSettings(type: 'big' | 'styled') {
    switch (type) {
      case 'big':
        return {
          type: 'big' as const,
          imgSize: 'large' as const,
          showExcerpt: true,
          showCategory: false,
        };
      case 'styled':
        return {
          type: 'styled' as const,
          imgSize: 'large' as const,
          showCategory: false,
          options: { reverse: false, textWrap: true },
        };
    }
  }

  const defaultTopicCard = [
    defaultTopicSettings('big'),
    defaultTopicSettings('styled'),
    defaultTopicSettings('styled'),
  ];

  function DefaultTopicSpread({ cats }: { cats: string[] }) {
    return (
      <div className="flex flex-row">
        {cats.map((cat, index) => (
          <>
            <TopicCard
              key={index}
              className="w-1/2"
              category={{
                name: cat,
                slug: cat.toLowerCase(),
                url: cat.toLowerCase(),
              }}
              topicComponents={defaultTopicCard}
            />
            {index + 1 !== cats.length && <VerticalLine className="mx-8" />}
          </>
        ))}
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[90%] flex-col px-8 py-0">
        <Suspense fallback={<MainLoading />}>
          <MainCard />
        </Suspense>
        <HorizontalLine className="my-8 px-8" />
        <div className="mb-0 flex w-full flex-row items-start self-center">
          <TopicCard
            className="sticky top-0 w-1/4"
            category={{ name: 'Magazine', slug: 'features', url: 'magazine' }}
            topicComponents={Array<TopicComponentProps>(2).fill({
              ...defaultTopicSettings('big'),
            })}
          ></TopicCard>
          <VerticalLine className="mx-8" />
          <div className="w-3/4 overflow-hidden">
            <div className="flex flex-row">
              <DefaultTopicSpread cats={['News', 'Sports']} />
            </div>
            <HorizontalLine className="my-4" />
            <Spotify />
            <HorizontalLine className="my-4" />
            <div className="w-full">
              <ArtsCard category="Arts" />
            </div>
          </div>
        </div>
        <HorizontalLine className="my-8 px-8" />
        <div className="mb-0 flex w-full flex-row items-start self-center">
          <div className="w-3/4">
            <DefaultTopicSpread cats={['Newton', 'Opinions']} />
          </div>
          <VerticalLine className="mx-8" />
          <Twitter className="hidden w-1/4 md:block" />
        </div>
        <HorizontalLine className="my-8 px-8" />
      </div>
      <Wheel settings={wheelSettings}>
        <div>
          hi mom
        </div>
        <div>
          look i'm a carousel
        </div>

          {/* [{getPhotos({ cat: 'sports', numPhotos: 5 })}] */}
      </Wheel>
    </div>
  );
}
