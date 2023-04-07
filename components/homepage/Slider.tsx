import Link from 'next/link';
import { Card } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';
import { ProductGroup } from '@/types/product';
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

interface SliderProps {
  group: ProductGroup;
}

export default function Slider({ group }: SliderProps) {
  const sliderOptions: KeenSliderOptions = {
    mode: 'free-snap',
    drag: true,
    loop: true,
    slides: {
      perView: 1,
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
      '(min-width: 1680px)': {
        mode: 'snap',
        loop: false,
        drag: false,
        slides: {
          perView: 4,
        },
      },
    },
  };

  const [sliderRef] = useKeenSlider(sliderOptions);

  return (
    <>
      <Link className="" href={`/products/${group.slug}`}>
        <h3 className="heading-h3 text-center text-dark-shades">{group.title}</h3>
      </Link>

      <div ref={sliderRef} className="keen-slider">
        {group.items.map((item) => (
          <Link
            key={item.id}
            href={`/products/${group.slug}/${item.slug}`}
            className="keen-slider__slide flex justify-center p-1 sm:p-3"
          >
            <Card className="relative h-[420px] w-[315px] justify-center overflow-hidden rounded drop-shadow-lg transition duration-300 sm:h-[336px] sm:w-[252px] md:h-[420px] md:w-[315px] lg:h-[480px] lg:w-[360px] lg:hover:scale-105 lg:hover:[&>img]:grayscale-0">
              <Image
                width={320}
                height={480}
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
    </>
  );
}
