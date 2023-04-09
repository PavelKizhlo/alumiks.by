import React from 'react';

import { Card } from '@material-tailwind/react';

import { ProductItem } from '@/types/product';
import PRODUCTS from '@/data/products';
import { GetStaticPropsContext } from 'next';

interface ProductPageProps {
  product: ProductItem;
}

function ProductPage({ product }: ProductPageProps) {
  return (
    <section className="min-h-full bg-light-shades">
      <div className="page-wrapper">
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
                <div className="grid grid-cols-3 items-center gap-8">
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
                      <h3 className="heading-h3">{item.title}</h3>
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
