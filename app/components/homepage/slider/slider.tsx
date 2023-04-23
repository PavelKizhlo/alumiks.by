'use client';

import { ProductGroup } from '@/types/product';
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import SliderCard from '@/app/components/homepage/slider/sliderCard';
import useWidth from '@/utils/useWidth';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import 'keen-slider/keen-slider.min.css';

interface SliderProps {
  group: ProductGroup;
}

export default function Slider({ group }: SliderProps) {
  const [slidesEnd, setSlidesEnd] = useState(false);
  const [slidesStart, setSlidesStart] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const windowWidth = useWidth();

  const sliderOptions: KeenSliderOptions = {
    mode: 'free-snap',
    drag: true,
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 1,
    },
    created(slider) {
      setLoaded(true);
      // disables loop if number of slides equals to slides per view
      const slidesNumber = slider.slides.length;
      const slidesPerView = (slider.options.slides as { perView: number }).perView;
      if (slidesNumber === slidesPerView) {
        slider.update({ ...sliderOptions, loop: false });
      }
    },
    slideChanged(slider) {
      const { abs, maxIdx, minIdx } = slider.track.details;
      setCurrentSlide(slider.track.details.rel);
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
      {windowWidth && windowWidth > 640 && slidesStart && (
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
      )}

      <div ref={sliderRef} className="keen-slider mb-6 sm:mb-0">
        {group.items.map((item) => (
          <Link
            key={item.id}
            href={`/products/${group.slug}/${item.slug}`}
            className="keen-slider__slide flex justify-center p-2 sm:p-3 xl:p-7"
          >
            <SliderCard item={item} />
          </Link>
        ))}
      </div>

      {windowWidth && windowWidth > 640 && slidesEnd && (
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
      )}

      {windowWidth && windowWidth < 640 && loaded && instanceRef.current && (
        <div className="flex justify-center gap-2">
          {Array(instanceRef.current.track.details.slides.length)
            .fill(1)
            .map((_, idx) => (
              <button
                type="button"
                aria-label={`карточка ${idx}`}
                /* eslint-disable-next-line react/no-array-index-key */
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`dot${currentSlide === idx ? ' dot-active' : ''}`}
              />
            ))}
        </div>
      )}
    </div>
  );
}
