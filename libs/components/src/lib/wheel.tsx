'use client';

import { useRef, useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {NextArrow, PrevArrow} from './carousel-arrow';


export interface WheelProps {
  children: React.ReactNode;
  settings: Settings;
}



export default function Wheel({ children, settings }: WheelProps) {
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


  return (
    <div className="slider-container relative">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      <PrevArrow action={previous} />
      <NextArrow action={next} />
    </div>
  );
}
