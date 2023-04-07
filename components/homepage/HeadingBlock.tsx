import Image from 'next/image';
import React from 'react';

import { Button } from '@material-tailwind/react';

import bgImg from '@/public/imgs/new-heading.webp';

function HeadingBlock() {
  return (
    <section className="relative flex h-fit flex-col items-center bg-headingBlockBG bg-contain bg-no-repeat">
      <Image src={bgImg} alt="background" className="h-[60vh] w-full object-cover" />
      <div className="container absolute top-0 flex h-full w-full flex-col items-center justify-between  pb-12 pt-32">
        <h1 className="heading-h1 text-light-shades">
          ALUMIKS - Производим алюминиевые рамы, изделия из жести, заборы,
          противомоскитные сетки с 2008 года.
        </h1>
        <Button className="font-inherit bg-header-color uppercase hover:shadow-indigo-300">
          заказать звонок
        </Button>
      </div>
    </section>
  );
}

export default HeadingBlock;
