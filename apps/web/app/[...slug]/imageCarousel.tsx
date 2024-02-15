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
      >
        {images?.map((image, index) => (
          <div key={index} className='w-[800px]'>
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
      </Carousel>
    </div>
  );
}
