'use client';

import { useRef } from 'react';

import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

// eslint-disable-next-line @nx/enforce-module-boundaries
import {NextArrow, PrevArrow} from 'libs/components/src/lib/carousel-arrow';

export interface ImageCarouselProps {
  images:
    | {
        __typename?: 'MediaItem' | undefined;
        databaseId: number;
        sourceUrl?: string | null | undefined;
        caption?: string | null | undefined;
      }[]
    | undefined;
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef<Slider>(null);
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

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {images?.map((image, index) => (
          <div key={index} className="w-[800px] h-[440px] overflow-hidden">
            <Image
              width={800}
              height={440}
              src={image?.sourceUrl || ''}
              alt={image?.caption || 'No Image Found'}
              className="w-full h-full object-cover"
              priority={index === 0 ? true : false}
            />
          </div>
        ))}
      </Slider>
      <PrevArrow action={previous} />
      <NextArrow action={next} />
    </div>
  );
}
