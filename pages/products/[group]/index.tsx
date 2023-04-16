import React from 'react';

import Link from 'next/link';
import { Breadcrumbs, Card } from '@material-tailwind/react';

import PRODUCTS from '@/data/products';
import { ProductGroup } from '@/types/product';
import { GetStaticPropsContext } from 'next';

interface ProductCategoryPageProps {
  group: ProductGroup;
}

// TODO: в строке 23 из-за плагина неправильно перестанавливаются классы

function ProductCategoryPage({ group }: ProductCategoryPageProps) {
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

export async function getStaticPaths() {
  const paths = PRODUCTS.map((group) => ({
    params: { group: group.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const groupName = context.params?.group;
  const group = PRODUCTS.find((currentGroup) => currentGroup.slug === groupName);

  return {
    props: { group },
  };
}

export default ProductCategoryPage;
