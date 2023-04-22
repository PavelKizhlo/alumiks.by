'use client';

import { KeenSliderOptions } from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { ItemImage } from '@/types/product';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface Props {
  options: KeenSliderOptions<unknown, unknown>;
  imgs: ItemImage[];
}

function GallerySlider({ options, imgs }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider(options);

  return (
    <div className="relative  w-full">
      <button
        type="button"
        aria-label="предыдующая карточка"
        className="slider-control -left-3 sm:-left-8 md:-left-10 xl:-left-16 2xl:-left-20"
        onClick={() => {
          instanceRef.current?.prev();
        }}
      >
        <ChevronLeftIcon
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-12 w-12 stroke-warning lg:h-14 lg:w-14"
        />
      </button>

      <div ref={sliderRef} className="keen-slider">
        {imgs.map((img) => (
          <Image
            src={img.src}
            key={img.id * Math.random()}
            className="keen-slider__slide h-auto w-full min-w-fit object-contain"
            alt="test image"
            width="0"
            height="0"
            sizes="100%"
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="следующая карточка"
        className="slider-control -right-3 sm:-right-8 md:-right-10 xl:-right-16 2xl:-right-20"
        onClick={() => {
          instanceRef.current?.next();
        }}
      >
        <ChevronRightIcon
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-12 w-12 stroke-warning lg:h-14 lg:w-14"
        />
      </button>
    </div>
  );
}

export default GallerySlider;
