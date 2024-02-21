'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { PostFragment } from '@the-heights/graphql';
import BigCard from './big-card';

export interface WheelProps {
  posts: PostFragment[];
}

export default function Wheel({ posts }: WheelProps) {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
      partialVisibilityGutter: 25,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 25,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
      partialVisibilityGutter: 25,
    },
  };

  return (
    <div className="pb-[30px] relative">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={1000}
        centerMode
        className=""
        containerClass="container"
        dotListClass=""
        draggable={false}
        swipeable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside
        renderDotsOutside
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
      >
        {posts?.map((post, index) => {
          return (
            <div className="px-5">
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
      </Carousel>
    </div>
  );
}
