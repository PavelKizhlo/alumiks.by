import Image from 'next/image';
import React from 'react';

import { Button } from '@material-tailwind/react';

import bgImg from '@/public/imgs/heading-block-bg.png';

function HeadingBlock() {
  return (
    <section className="relative flex h-fit flex-col items-center bg-headingBlockBG bg-contain bg-no-repeat">
      <Image src={bgImg} alt="background" className="h-auto w-full" />
      <div className="container absolute top-0 mx-auto flex h-full w-full flex-col items-center justify-between  pb-12 pt-32">
        <h1 className="heading-h1">
          наша компания является производителем металлоизделий из тонколистовой
          оцинкованной стали
        </h1>
        <Button className="font-inherit bg-header-color uppercase hover:shadow-indigo-300">
          заказать звонок
        </Button>
      </div>
    </section>
  );
}

export default HeadingBlock;
