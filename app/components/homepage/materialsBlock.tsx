import React from 'react';
import { Material } from '@/types/material';

interface MaterialsBlockProps {
  materials: Material[];
}

export default function MaterialsBlock({ materials }: MaterialsBlockProps) {
  return (
    <section className="bg-dark-shades py-10">
      <div className="container flex flex-col items-center gap-8 text-light-shades">
        <h2 className="heading-h2">Наш материал</h2>
        <div className="grid grid-cols-1 justify-between gap-x-10 gap-y-4 md:grid-cols-3 sm1:grid-cols-2">
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
