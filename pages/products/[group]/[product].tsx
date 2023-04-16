import React from 'react';

import { Breadcrumbs, Card } from '@material-tailwind/react';

import { ProductItem } from '@/types/product';
import PRODUCTS from '@/data/products';
import { GetStaticPropsContext } from 'next';
import Link from 'next/link';

interface ProductPageProps {
  product: ProductItem;
  groupTitle: string;
  groupSlug: string;
}

function ProductPage({ product, groupTitle, groupSlug }: ProductPageProps) {
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
    props: { product, groupTitle: group?.title, groupSlug: group?.slug },
  };
}

export default ProductPage;
