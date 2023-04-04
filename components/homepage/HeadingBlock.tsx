import Image from 'next/image';
import React from 'react';

import { Button } from '@material-tailwind/react';

import bgImg from '@/public/imgs/heading-block-bg.png';
import { raleway } from '@/utils/fonts';

function HeadingBlock() {
  return (
    <section className="relative flex h-fit flex-col items-center bg-headingBlockBG bg-contain bg-no-repeat">
      <Image src={bgImg} alt="background" className="h-auto w-full" />
      <div className="container absolute top-0 mx-auto flex h-full w-full flex-col items-center justify-between px-32 pb-12 pt-32">
        <h1
          className={`text-5xl font-bold leading-tight text-white drop-shadow-md ${raleway.className}`}
        >
          {'наша компания является производителем металлоизделий из тонколистовой оцинкованной стали'.toUpperCase()}
        </h1>
        <Button className="font-inherit bg-header-color hover:shadow-indigo-300">
          {'заказать звонок'.toUpperCase()}
        </Button>
      </div>
    </section>
  );
}

export default HeadingBlock;
