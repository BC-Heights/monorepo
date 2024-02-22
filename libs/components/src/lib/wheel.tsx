'use client';

import React, { useRef, useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { PostFragment } from '@the-heights/graphql';
import BigCard from './big-card';

export interface WheelProps {
  posts: PostFragment[];
}

export default function Wheel({ posts }: WheelProps) {
  return (
    <div>
      <SliderCarousel posts={posts} />
    </div>
  );
}

export function SliderCarousel({ posts }: { posts: PostFragment[] }) {
  const threshold = 80;

  const sliderRef = useRef<Slider>(null);
  const [deltaX, setDeltaX] = useState(0);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      setDeltaX((prevDeltaX) => prevDeltaX + event.deltaX);

      if (Math.abs(deltaX) >= threshold) {
        if (deltaX > 0) {
          next();
        } else {
          previous();
        }
        setDeltaX(0); // Reset deltaX
      }
    };
    const sliderElement = sliderRef.current?.innerSlider?.list;

    if (sliderElement) {
      sliderElement.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [deltaX]);

  const settings: Settings = {
    arrows: false,
    infinite: true,
    speed: 750,
    className: 'center',
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 1,
    dots: true,
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {posts?.map((post, index) => {
          return (
            <div className="px-8">
              <BigCard
                post={post}
                key={index}
                imgSize="large"
                imgW={800}
                imgH={440}
                showCategory={true}
                showExcerpt={true}
              />
            </div>
          );
        })}
      </Slider>
      <div className="flex justify-between w-[calc(90%-64px)] absolute top-[50%] text-white px-6">
        <Arrow action={previous} />
        <Arrow action={next} />
      </div>
    </div>
  );
}

export function Arrow({ action }: { action: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="fill-slate-500 size-6 cursor-pointer opacity-35 hover:opacity-80 focus:opacity-80"
      viewBox="0 0 24 24"
      onClick={() => {
        action();
      }}
      transform={`${action.name === 'previous' ? 'rotate(180)' : ''} scale(${
        5 / 3
      })`}
    >
      <circle cx="12" cy="12" r="12" fill="#cbdfe1" />

      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
    </svg>
  );
}
