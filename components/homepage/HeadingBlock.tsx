import Image from 'next/image';
import React from 'react';

import bgImg from '../../public/imgs/heading-block-bg.png';

function HeadingBlock() {
  return (
    <article className="relative  flex h-fit flex-col items-center bg-headingBlockBG bg-contain bg-no-repeat">
      <Image src={bgImg} alt="background" className="h-auto w-full" />
      <div className="container absolute top-0 mx-auto flex h-full w-full flex-col items-center justify-between px-32 pb-12 pt-32">
        <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-md">
          {'наша компания является производителем металлоизделий из тонколистовой оцинкованной стали'.toUpperCase()}
        </h1>
        <button
          type="button"
          className="rounded-lg border-solid bg-header-color px-4 py-2 text-white drop-shadow-md"
        >
          {'заказать звонок'.toUpperCase()}
        </button>
      </div>
    </article>
  );
}

export default HeadingBlock;
