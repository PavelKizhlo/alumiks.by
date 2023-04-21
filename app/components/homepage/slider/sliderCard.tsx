'use client';

import { Card } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';
import { ProductItem } from '@/types/product';

interface SliderCardProps {
  item: ProductItem;
}

export default function SliderCard({ item }: SliderCardProps) {
  return (
    <Card className="absative h-[420px] w-[315px] justify-center overflow-hidden rounded drop-shadow-lg transition duration-300 sm:h-[336px] sm:w-[252px] md:h-[420px] md:w-[315px] lg:h-[480px] lg:w-[360px] lg:hover:scale-105 lg:hover:[&>img]:grayscale-0">
      <Image
        width={320}
        height={480}
        // TODO Write sizes for all tailwind breakpoints
        src={item.images[0].src}
        alt={item.title}
        className="h-full w-full object-cover transition duration-300 lg:grayscale"
      />
      <div className="absolute bottom-0 flex h-[90px] w-full items-center bg-dark-accent-blur px-4 pr-6">
        <h4 className="heading-h4 text-white">{item.title}</h4>
      </div>
    </Card>
  );
}
