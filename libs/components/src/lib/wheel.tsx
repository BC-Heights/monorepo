'use client';

import React, { useRef, useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  StyledButtonWrapper,
  StyledIconButton,
} from 'react-material-ui-carousel/dist/components/Styled';
import { sanitizeProps } from 'react-material-ui-carousel/dist/components/util';

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
    <div className="slider-container relative">
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
        <Arrow action={previous} />
        <Arrow action={next} />
    </div>
  );
}

export interface ArrowProps {
  action: () => void;
}

export function Arrow({ action }: ArrowProps) {
  const {
    NavButton,
    PrevIcon,
    NextIcon,
    navButtonsWrapperProps,
    navButtonsProps,
  } = sanitizeProps({});
  return (
    <StyledButtonWrapper
      $next={action.name === 'next'}
      $prev={action.name === 'previous'}
      $fullHeightHover={true}
      {...navButtonsWrapperProps}
    >
      {NavButton !== undefined ? (
        NavButton({
          onClick: action,
          next: action.name === 'next',
          prev: action.name === 'previous',
          ...navButtonsProps,
        })
      ) : (
        <StyledIconButton
          $alwaysVisible={false}
          $fullHeightHover={true}
          onClick={action}
          aria-label={action.name}
        >
          {action.name === 'next' ? NextIcon : PrevIcon}
        </StyledIconButton>
      )}
    </StyledButtonWrapper>
  );
}
