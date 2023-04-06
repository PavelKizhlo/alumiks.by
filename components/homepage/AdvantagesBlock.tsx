import React from 'react';

import { Advantage } from '@/types/advantage';
import { Material } from '@/types/material';

interface AdvantagesBlockProps {
  advantages: Advantage[];
  materials: Material[];
}

function AdvantagesBlock({ advantages, materials }: AdvantagesBlockProps) {
  return (
    <section className="container mx-auto mb-20 flex flex-col gap-12  pt-20 font-heading">
      <div className="flex flex-col items-center gap-8">
        <h2 className="heading-h2">Преимущества нашей компании</h2>
        <div className="flex justify-between gap-10">
          {advantages.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-between gap-4"
            >
              <h3 className="heading-h3">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h2 className="heading-h2">Наш материал</h2>
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
