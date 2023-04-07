import React from 'react';

import { Advantage } from '@/types/advantage';
import Image from 'next/image';

interface AdvantagesBlockProps {
  advantages: Advantage[];
}

function AdvantagesBlock({ advantages }: AdvantagesBlockProps) {
  return (
    <section className="bg-light-shades py-10">
      <div className="container container flex flex-col gap-12">
        <div className="flex flex-col items-center gap-8 text-dark-shades">
          <h2 className="heading-h2">Преимущества нашей компании</h2>
          <div className="flex justify-between gap-10">
            {advantages.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-between gap-4 rounded bg-dark-accent p-6"
              >
                <h3 className="heading-h3 text-center text-light-shades">{item.title}</h3>
                <Image
                  width={55}
                  height={55}
                  src={item.icon}
                  alt={`Иконка "${item.title}"`}
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
