import Image from 'next/image';
import { Card, Dialog } from '@material-tailwind/react';
import { useState } from 'react';
import { KeenSliderOptions } from 'keen-slider';
import PRODUCTS from '../data/products';
import { ItemImage } from '../types/product';
import GallerySlider from '../components/gallery/GallerySlider';

interface Props {
  imgs: ItemImage[];
}

function Gallery({ imgs }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const handleOpen = (index: number) => {
    setOpen((cur) => !cur);
    setSelectedImg(index);
  };

  const sliderOptions: KeenSliderOptions<unknown, unknown> = {
    initial: selectedImg,
    renderMode: 'performance',
    loop: true,
    slides: { origin: 'center', perView: 1, spacing: 500 },
    defaultAnimation: { duration: 500, easing: (t: number) => t },
  };

  return (
    <section className="min-h-full bg-light-shades">
      <div className="page-wrapper">
        {' '}
        <h1 className="heading-h1">Галерея</h1>
        <div className="columns-1 gap-8 sm:columns-2 xl:columns-3">
          {imgs.map((img, i) => (
            <Card
              key={img.id * Math.random()}
              className="mb-8 h-auto w-full cursor-pointer transition duration-300 hover:shadow-main-color"
              onClick={() => handleOpen(i)}
            >
              <Image
                src={img.src}
                alt="alt"
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
              />
            </Card>
          ))}
          <Dialog open={open} handler={handleOpen} className="bg-transparent shadow-none">
            <div className="flex h-full w-full justify-center">
              <GallerySlider options={sliderOptions} imgs={imgs} />
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

export function getStaticProps() {
  const imgs = PRODUCTS.map((el) => el.items.map((item) => item.images[0])).flat();

  return { props: { imgs } };
}

export default Gallery;
