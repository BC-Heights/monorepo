'use client';

import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';

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
  return (
    <div>
      <Carousel
        autoPlay={false}
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={true}
      >
        {images?.map((image, index) => (
          <Image
            key={index}
            width={1920}
            height={1080}
            src={image?.sourceUrl || ''}
            alt={image?.caption || 'No Image Found'}
            className="w-full h-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
}
