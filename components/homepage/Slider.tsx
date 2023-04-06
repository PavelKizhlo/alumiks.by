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
    mode: 'snap',
    drag: true,
    slides: {
      perView: 3,
    },
  };

  const [sliderRef] = useKeenSlider(sliderOptions);

  return (
    <>
      <Link className="" href={`/products/${group.slug}`}>
        <h3 className="heading-h3">{group.title}</h3>
      </Link>

      <div ref={sliderRef} className="keen-slider">
        {group.items.map((item) => (
          <Link
            key={item.id}
            href={`/products/${group.slug}/${item.slug}`}
            className="keen-slider__slide flex justify-center p-3"
          >
            <Card className="relative h-[480px] w-[360px] justify-center rounded-none drop-shadow-lg transition duration-300 hover:scale-105 hover:[&>img]:grayscale-0">
              <Image
                width={320}
                height={480}
                src={item.images[0].src}
                alt={item.title}
                className="h-full w-full object-cover grayscale transition duration-300"
              />
              <div className="bg-blured absolute bottom-0 flex h-[90px] w-full items-center px-4 pr-6">
                <h4 className="heading-h4 text-white">{item.title}</h4>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
