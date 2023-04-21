'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ProductGroup } from '@/types/product';
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import SliderControlSVG from '@/app/components/homepage/slider/sliderControlSVG';
import SliderCard from '@/app/components/homepage/slider/sliderCard';

interface SliderProps {
  group: ProductGroup;
}

export default function Slider({ group }: SliderProps) {
  const [slidesEnd, setSlidesEnd] = useState(false);
  const [slidesStart, setSlidesStart] = useState(false);

  const sliderOptions: KeenSliderOptions = {
    mode: 'free-snap',
    drag: true,
    loop: true,
    slides: {
      perView: 1,
    },
    created(slider) {
      // disables loop if number of slides equals to slides per view
      const slidesNumber = slider.slides.length;
      const slidesPerView = (slider.options.slides as { perView: number }).perView;
      if (slidesNumber === slidesPerView) {
        slider.update({ ...sliderOptions, loop: false });
      }
    },
    slideChanged(slider) {
      const { abs, maxIdx, minIdx } = slider.track.details;
      setSlidesEnd(abs !== maxIdx);
      setSlidesStart(abs !== minIdx);
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 2,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 2,
        },
      },
      '(min-width: 1280px)': {
        mode: 'snap',
        loop: false,
        drag: false,
        slides: {
          perView: 3,
        },
      },
      '(min-width: 1536px)': {
        mode: 'snap',
        loop: false,
        drag: false,
        slides: {
          perView: 3,
        },
      },
      '(min-width: 1690px)': {
        mode: 'snap',
        loop: false,
        drag: false,
        slides: {
          perView: 4,
        },
      },
    },
  };

  const [sliderRef, instanceRef] = useKeenSlider(sliderOptions);

  useEffect(() => {
    setSlidesEnd(
      instanceRef.current?.track.details.abs !== instanceRef.current?.track.details.maxIdx
    );
    setSlidesStart(
      instanceRef.current?.track.details.abs !== instanceRef.current?.track.details.minIdx
    );
  }, [instanceRef]);

  return (
    <div className="relative w-full">
      {slidesStart && (
        <button
          type="button"
          aria-label="предыдующая карточка"
          className="slider-control -left-3 sm:-left-8 md:-left-10 xl:-left-16 2xl:-left-20"
          onClick={() => {
            instanceRef.current?.prev();
          }}
        >
          <SliderControlSVG direction="left" />
        </button>
      )}

      <div ref={sliderRef} className="keen-slider">
        {group.items.map((item) => (
          <Link
            key={item.id}
            href={`/products/${group.slug}/${item.slug}`}
            className="keen-slider__slide flex justify-center p-1 sm:p-3"
          >
            <SliderCard item={item} />
          </Link>
        ))}
      </div>

      {slidesEnd && (
        <button
          type="button"
          aria-label="следующая карточка"
          className="slider-control -right-3 sm:-right-8 md:-right-10 xl:-right-16 2xl:-right-20"
          onClick={() => {
            instanceRef.current?.next();
          }}
        >
          <SliderControlSVG direction="right" />
        </button>
      )}
    </div>
  );
}
