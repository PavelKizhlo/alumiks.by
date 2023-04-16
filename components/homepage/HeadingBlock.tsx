import Image from 'next/image';
import React from 'react';

import bgImg from '@/public/imgs/new-heading.webp';
import CallbackForm from './CallbackForm';

function HeadingBlock() {
  return (
    <section className="bg-headingBlockBG relative flex h-fit flex-col items-center bg-contain bg-no-repeat">
      <Image src={bgImg} alt="background" className="h-[60vh] w-full object-cover" />
      <div className="container absolute top-0 flex h-full w-full flex-col items-center justify-between  pb-12 pt-32">
        <h1 className="heading-h1 text-light-shades">
          ALUMIKS - Производим алюминиевые рамы, изделия из жести, заборы,
          противомоскитные сетки с 2008 года.
        </h1>
        <CallbackForm />
      </div>
    </section>
  );
}

export default HeadingBlock;
