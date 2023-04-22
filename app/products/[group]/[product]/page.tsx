'use client';

import React, { use, useEffect, useRef } from 'react';

import { Breadcrumbs, Card } from '@material-tailwind/react';

import PRODUCTS from '@/data/products';
import Link from 'next/link';
import { ProductGroup, ProductItem } from '@/types/product';

async function loadProductPageData(params: { group: string; product: string }) {
  const groupName = params.group;
  const group = PRODUCTS.find(
    (currentGroup) => currentGroup.slug === groupName
  ) as ProductGroup;
  const productName = params.product;
  const product = group.items.find(
    (currentProduct) => currentProduct.slug === productName
  ) as ProductItem;

  return { product, groupTitle: group.title, groupSlug: group.slug };
}

export default function ProductPage({
  params,
}: {
  params: { group: string; product: string };
}) {
  const { product, groupTitle, groupSlug } = use(loadProductPageData(params));

  const breadcrumbsWrapper = useRef<null | HTMLOListElement>(null);

  useEffect(() => {
    if (breadcrumbsWrapper.current) {
      (breadcrumbsWrapper.current.parentElement as HTMLElement).style.width =
        'fit-content';
    }
  });

  return (
    <section className="min-h-full bg-light-shades">
      <div className="page-wrapper">
        <Breadcrumbs ref={breadcrumbsWrapper}>
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
            href={`/products/${groupSlug}`}
            className="text-dark-accent opacity-60 transition-colors duration-300 hover:text-dark-shades"
          >
            {groupTitle}
          </Link>
          <Link
            href={`/products/${groupSlug}/${product.slug}`}
            className="text-dark-accent transition-colors duration-300 hover:text-dark-shades"
          >
            {product.title}
          </Link>
        </Breadcrumbs>
        <h1 className="heading-h1">{product.title}</h1>
        <div className="flex w-full justify-between gap-12">
          <div className="h-[700px] w-[400px] bg-gray-600">
            {product.images.map((img) => (
              <div key={img.id}>{img.src}</div>
            ))}
          </div>
          <div className="flex w-full flex-col justify-between gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="heading-h2">Конфигурация</h2>
              {product.configurations && (
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  {product.configurations.map((item) => (
                    <Card
                      key={item.id}
                      className="flex flex-col items-center gap-2 p-4 text-sm text-black"
                    >
                      <div className="h-[200px] w-full bg-gray-600">{item.img}</div>
                      <h3 className="heading-h3">{item.title}</h3>
                      <p className="text-center">{item.description}</p>
                    </Card>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="heading-h2">Цветовые решения</h2>
              {product.colors && (
                <div className="grid grid-cols-2 items-start gap-8 lg:grid-cols-3 xl:grid-cols-4">
                  {product.colors.map((item) => (
                    <Card
                      key={item.id}
                      className="flex h-full flex-col items-center gap-2 p-4 text-sm text-black"
                    >
                      <div
                        className=" h-[100px] w-full "
                        style={{ backgroundColor: item.colorCode }}
                      />
                      <h3 className="heading-h3 hyphens-auto">{item.title}</h3>
                    </Card>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="heading-h2">Стоимость</h2>
              <div className="h-[200px] w-full bg-gray-600">{product.price}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const paths: { group: string; product: string }[] = [];
  PRODUCTS.forEach((group) => {
    group.items.forEach((product) => {
      paths.push({ group: group.slug, product: product.slug });
    });
  });

  return paths;
}

export const dynamicParams = true;
