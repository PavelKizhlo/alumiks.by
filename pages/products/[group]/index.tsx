import React from 'react';

import Link from 'next/link';
import { Card } from '@material-tailwind/react';

import PRODUCTS from '@/data/products';
import { ProductGroup } from '@/types/product';
import { GetStaticPropsContext } from 'next';

interface ProductCategoryPageProps {
  group: ProductGroup;
}

function ProductCategoryPage({ group }: ProductCategoryPageProps) {
  return (
    <article className="container mx-auto flex flex-col items-center gap-12  py-12 font-heading">
      <h1 className="border-header-color w-fit border-b-2 px-2 text-4xl font-bold">
        {group.title}
      </h1>
      <div className="h-[250px] w-full bg-gray-700 text-center">Изображение</div>
      <p className="text-lg font-medium">{group.description}</p>
      <section className="grid grid-cols-4 gap-4">
        {group.items.map((item) => (
          <Link href={`/products/${group.slug}/${item.slug}`} key={item.id}>
            <Card className="relative h-[230px] w-[230px] cursor-pointer bg-gray-600">
              <div className="bg-blured absolute bottom-0 flex w-full items-center justify-center rounded-b-xl py-4 text-center text-white">
                <h4 className="w-fit border-b-2 border-white">{item.title}</h4>
              </div>
            </Card>
          </Link>
        ))}
      </section>
    </article>
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
