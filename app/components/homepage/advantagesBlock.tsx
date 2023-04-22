import React from 'react';

import { Advantage } from '@/types/advantage';
import Image from 'next/image';

interface AdvantagesBlockProps {
  advantages: Advantage[];
}

function AdvantagesBlock({ advantages }: AdvantagesBlockProps) {
  return (
    <section className="bg-light-shades py-10">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col items-center gap-8 text-dark-shades">
          <h2 className="heading-h2 text-center">Преимущества нашей компании</h2>
          <div className="grid  grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-2 lg:gap-10 xl:grid-cols-4 xl:grid-rows-1">
            {advantages.map((item) => (
              <div key={item.id} className="rounded bg-dark-accent p-4 md:p-6">
                <h3 className="heading-h3 mb-4 text-center text-light-shades">
                  {item.title}
                </h3>
                <Image
                  width={55}
                  height={55}
                  src={item.icon}
                  alt={`Иконка "${item.title}"`}
                  className="mx-auto mb-4"
                />
                <p className="text-center text-lg text-light-shades">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvantagesBlock;
