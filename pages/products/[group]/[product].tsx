import React from 'react';

import { Card } from '@material-tailwind/react';
import { openSans } from '@/utils/fonts';
import { ProductItem } from '@/types/product';
import PRODUCTS from '@/data/products';
import { GetStaticPropsContext } from 'next';

interface ProductPageProps {
  product: ProductItem;
}

function ProductPage({ product }: ProductPageProps) {
  return (
    <div
      className={`container mx-auto flex flex-col items-center gap-12  py-12 ${openSans.className}`}
    >
      <h1 className="w-fit border-b-2 border-header-color px-2 text-4xl font-bold">
        {product.title}
      </h1>
      <div className="flex w-full justify-between gap-12">
        <section className="h-[700px] w-[400px] bg-gray-600">
          {product.images.map((img) => (
            <div key={img.id}>{img.src}</div>
          ))}
        </section>
        <div className="flex w-full flex-col justify-between gap-12">
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-medium">{'Конфигурация'.toUpperCase()}</h2>
            {product.configurations && (
              <div className="grid grid-cols-3 items-center gap-8">
                {product.configurations.map((item) => (
                  <Card
                    key={item.id}
                    className="flex flex-col items-center gap-2 p-4 text-sm text-black"
                  >
                    <div className="h-[200px] w-full bg-gray-600">{item.img}</div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-center">{item.description}</p>
                  </Card>
                ))}
              </div>
            )}
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-medium">{'Цветовые решения'.toUpperCase()}</h2>
            {product.colors && (
              <div className="grid grid-cols-4 items-center gap-8">
                {product.colors.map((item) => (
                  <Card
                    key={item.id}
                    className="flex flex-col items-center gap-2 p-4 text-sm text-black"
                  >
                    <div
                      className=" h-[100px] w-full "
                      style={{ backgroundColor: item.colorCode }}
                    />
                    <h3 className="font-bold">{item.title}</h3>
                  </Card>
                ))}
              </div>
            )}
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-medium">{'Стоимость'.toUpperCase()}</h2>
            <div className="h-[200px] w-full bg-gray-600">{product.price}</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths: { params: unknown }[] = [];
  PRODUCTS.forEach((group) => {
    group.items.forEach((product) => {
      paths.push({ params: { group: group.slug, product: product.slug } });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const groupName = context.params?.group;
  const group = PRODUCTS.find((currentGroup) => currentGroup.slug === groupName);
  const productName = context.params?.product;
  const product = group?.items.find(
    (currentProduct) => currentProduct.slug === productName
  );

  return {
    props: { product },
  };
}

export default ProductPage;
