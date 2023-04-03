import React from 'react';

import { openSans } from '@/utils/fonts';
import { Advantage } from '@/types/advantage';
import { Material } from '@/types/material';

interface AdvantagesBlockProps {
  advantages: Advantage[];
  materials: Material[];
}

function AdvantagesBlock({ advantages, materials }: AdvantagesBlockProps) {
  return (
    <section
      className={`container mx-auto flex flex-col gap-12 px-32 py-12 ${openSans.className}`}
    >
      <div className="flex flex-col items-center gap-8">
        <h2 className="border-b-2 border-header-color px-2 text-4xl font-bold">
          Преимущества нашей компании
        </h2>
        <div className="flex justify-between gap-10">
          {advantages.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-between gap-4"
            >
              <h3 className="text-center text-xl font-medium">
                {item.title.toUpperCase()}
              </h3>
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h2 className="border-b-2 border-header-color px-2 text-4xl font-bold">
          Наш материал
        </h2>
        <div className="grid grid-cols-3 justify-between gap-x-10 gap-y-4">
          {materials.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="rounded-full bg-orange-500 px-2">{item.icon}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesBlock;
