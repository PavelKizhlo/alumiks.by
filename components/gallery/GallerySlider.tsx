/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { KeenSliderOptions } from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { ItemImage } from '../../types/product';
import SliderControlSVG from '../homepage/Slider/SliderControlSVG';

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
        <SliderControlSVG direction="left" />
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
        <SliderControlSVG direction="right" />
      </button>
    </div>
  );
}

export default GallerySlider;
