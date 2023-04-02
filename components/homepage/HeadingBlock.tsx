import Image from 'next/image';
import React from 'react';

import { Button } from '@material-tailwind/react';

import bgImg from '../../public/imgs/heading-block-bg.png';

function HeadingBlock() {
  return (
    <article className="bg-headingBlockBG bg-contain bg-no-repeat h-fit relative flex flex-col items-center">
      <Image src={bgImg} alt="background" className="w-full h-auto" />
      <div className="container mx-auto absolute h-full w-full top-0 flex flex-col justify-between items-center px-32 pt-32 pb-12">
        <h1 className="text-white font-bold text-4xl leading-tight drop-shadow-md">
          {'наша компания является производителем металлоизделий из тонколистовой оцинкованной стали'.toUpperCase()}
        </h1>
        <Button className="bg-header-color font-inherit hover:shadow-indigo-300">
          {'заказать звонок'.toUpperCase()}
        </Button>
      </div>
    </article>
  );
}

export default HeadingBlock;
