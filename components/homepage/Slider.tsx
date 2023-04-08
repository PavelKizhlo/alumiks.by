import Link from 'next/link';
import { Card } from '@material-tailwind/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ProductGroup } from '@/types/product';
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12 stroke-warning lg:h-14 lg:w-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </button>
      )}

      <div ref={sliderRef} className="keen-slider">
        {group.items.map((item) => (
          <Link
            key={item.id}
            href={`/products/${group.slug}/${item.slug}`}
            className="keen-slider__slide flex justify-center p-1 sm:p-3"
          >
            <Card className="absative h-[420px] w-[315px] justify-center overflow-hidden rounded drop-shadow-lg transition duration-300 sm:h-[336px] sm:w-[252px] md:h-[420px] md:w-[315px] lg:h-[480px] lg:w-[360px] lg:hover:scale-105 lg:hover:[&>img]:grayscale-0">
              <Image
                width={320}
                height={480}
                // TODO Write sizes for all tailwind breakpoints
                src={item.images[0].src}
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 lg:grayscale"
              />
              <div className="absolute bottom-0 flex h-[90px] w-full items-center bg-dark-accent-blur px-4 pr-6">
                <h4 className="heading-h4 text-white">{item.title}</h4>
              </div>
            </Card>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12 stroke-warning lg:h-14 lg:w-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
