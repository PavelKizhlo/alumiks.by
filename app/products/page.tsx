'use client';

import { Breadcrumbs, Card } from '@material-tailwind/react';

import Link from 'next/link';

import PRODUCTS from '@/data/products';
import { use } from 'react';

async function loadProducts() {
  return PRODUCTS;
}

export default function Products() {
  const products = use(loadProducts());

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
            className="text-dark-accent transition-colors duration-300 hover:text-dark-shades"
          >
            Каталог
          </Link>
        </Breadcrumbs>
        <h1 className="heading-h1">Каталог</h1>
        {products.map((group) => (
          <div key={group.id} className="flex flex-col items-center gap-6">
            <h3 className="heading-h3 flex justify-center">
              <Link className="text-center uppercase" href={`/products/${group.slug}`}>
                {group.title}
              </Link>
            </h3>
            <div className="flex flex-col gap-10 sm:flex-row">
              {group.items.map((item) => (
                <Link href={`/products/${group.slug}/${item.slug}`} key={item.id}>
                  <Card className="relative h-[230px] w-[230px] cursor-pointer bg-gray-600">
                    <div className="bg-blured absolute bottom-0 flex w-full items-center justify-center rounded-b-xl py-4 text-center text-white">
                      <h4 className="heading-h4">{item.title}</h4>
                    </div>
                  </Card>
                </Link>
              ))}
              <Link href={`/products/${group.slug}`}>
                <Card className="relative flex h-[230px] w-[230px] cursor-pointer items-center  justify-center bg-gray-600">
                  <span className="w-fit text-white">Больше &#10141;</span>
                </Card>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
