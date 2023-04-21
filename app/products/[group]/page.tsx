'use client';

import React, { use } from 'react';

import Link from 'next/link';
import { Breadcrumbs, Card } from '@material-tailwind/react';

import PRODUCTS from '@/data/products';
import { ProductGroup } from '@/types/product';

async function loadCategoryData(params: { group: string }) {
  const groupName = params.group;
  return PRODUCTS.find((currentGroup) => currentGroup.slug === groupName) as ProductGroup;
}

// TODO: в строке 23 из-за плагина неправильно перестанавливаются классы

export default function ProductCategoryPage({ params }: { params: { group: string } }) {
  const group = use(loadCategoryData(params));

  return (
    <section className="min-h-full bg-light-shades">
      <div className="page-wrapper">
        <Breadcrumbs>
          <Link
            href="/"
            className="text-dark-accent opacity-60 transition-colors duration-300 hover:text-dark-shades"
          >
            Главная
          </Link>
          <Link
            href="/products"
            className="text-dark-accent opacity-60 transition-colors duration-300 hover:text-dark-shades"
          >
            Каталог
          </Link>
          <Link
            href={`/products/${group.slug}`}
            className="text-dark-accent transition-colors duration-300 hover:text-dark-shades"
          >
            {group.title}
          </Link>
        </Breadcrumbs>
        <h1 className="heading-h1">{group.title}</h1>
        <div className="h-[250px] w-full bg-gray-700 text-center">Изображение</div>
        <p className="text-lg">{group.description}</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4 xs:grid-cols-2">
          {group.items.map((item) => (
            <Link href={`/products/${group.slug}/${item.slug}`} key={item.id}>
              <Card className="relative h-[230px] w-[230px] cursor-pointer bg-gray-600">
                <div className="bg-blured absolute bottom-0 flex w-full items-center justify-center rounded-b-xl py-4 text-center text-white">
                  <h4 className="heading-h4">{item.title}</h4>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return PRODUCTS.map((group) => ({
    group: group.slug,
  }));
}

export const dynamicParams = true;
