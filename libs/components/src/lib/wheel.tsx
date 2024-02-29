'use client';

import { useRef, useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {NextArrow, PrevArrow} from './carousel-arrow';

import { PostFragment } from '@the-heights/graphql';
import BigCard from './big-card';

export interface WheelProps {
  posts: PostFragment[];
  dynamicHeight?: boolean;
}



export default function Wheel({ posts, dynamicHeight }: WheelProps) {
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
    adaptiveHeight: dynamicHeight,
    dots: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '100px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '50px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '0px'
        }
      }
    ]
  };

  return (
    <div className="slider-container relative">
      <Slider ref={sliderRef} {...settings}>
        {posts?.map((post, index) => {
          return (
            <div className="px-0 md:px-8">
              <BigCard
                post={post}
                key={index}
                imgSize="large"
                imgW={800}
                imgH={440}
                showCategory={false}
                showExcerpt={true}
              />
            </div>
          );
        })}
      </Slider>
      <PrevArrow action={previous} />
      <NextArrow action={next} />
    </div>
  );
}
