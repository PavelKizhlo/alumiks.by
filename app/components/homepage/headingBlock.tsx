import Image from 'next/image';
import React from 'react';

import bgImg from '@/public/imgs/new-heading.webp';
import CallbackForm from './callbackForm';

export default function HeadingBlock() {
  return (
    <section className="bg-headingBlockBG relative flex h-fit flex-col items-center bg-contain bg-no-repeat">
      <Image
        src={bgImg}
        alt="background"
        className="h-[calc(100vh-5rem)] w-full object-cover sm:m-0 sm:h-[60vh]"
      />
      <div className="container absolute top-0 flex h-full w-full flex-col items-center justify-between  pb-12 pt-20 sm:pt-32">
        <h1 className="heading-h1 rounded-xl p-2 text-center text-2xl text-light-shades backdrop-blur-md sm:text-4xl lg:text-start">
          ALUMIKS - Производим алюминиевые рамы, изделия из жести, заборы,
          противомоскитные сетки с 2008 года.
        </h1>
        <CallbackForm />
      </div>
    </section>
  );
}
