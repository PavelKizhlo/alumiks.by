import React from 'react';

import { openSans } from '../../../utils/fonts';

interface ProductModel {
  title: string;
  imgs: { id: string; src: string }[];
  colors: { id: string; title: string; colorCode: string }[];
  configuration: { id: string; img: string; title: string; description: string }[];
  price: string;
}

interface Props {
  product: ProductModel;
}

function ProductPage({ product }: Props) {
  return (
    <article
      className={`container mx-auto flex flex-col items-center gap-12 px-32 py-12 ${openSans.className}`}
    >
      <h1 className="w-fit border-b-2 border-header-color px-2 text-4xl font-bold">
        {product.title}
      </h1>
      <div className="flex w-full justify-between gap-12">
        <section className="h-[700px] w-[400px] bg-gray-600">
          {product.imgs.map((img) => (
            <div key={img.id}>{img.src}</div>
          ))}
        </section>
        <div className="flex w-full flex-col justify-between gap-12">
          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-medium">{'Конфигурация'.toUpperCase()}</h2>
            <div className="grid grid-cols-3 items-center gap-8">
              {product.configuration.map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-2">
                  <div className="h-[220px] w-[220px] bg-gray-600">{item.img}</div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-medium">{'Цветовые решения'.toUpperCase()}</h2>
            <div>
              {product.colors.map((item) => (
                <div key={item.id}>
                  <div className={`bg-${item.colorCode}`} />
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-medium">{'Стоимость'.toUpperCase()}</h2>
            <div className="h-[200px] w-full bg-gray-600">{product.price}</div>
          </section>
        </div>
      </div>
    </article>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { category: 'category', product: 'product' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  const PRODUCT = {
    title: 'Конек крыши',
    imgs: [
      { id: '1', src: '' },
      { id: '2', src: '' },
    ],
    colors: [{ id: '1', title: '', colorCode: '' }],
    configuration: [
      {
        id: '1',
        title: 'Конек кровли плоский',
        img: '',
        description:
          'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
      },
      {
        id: '2',
        title: 'Конек кровли плоский',
        img: '',
        description:
          'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
      },
      {
        id: '3',
        title: 'Конек кровли плоский',
        img: '',
        description:
          'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
      },
      {
        id: '4',
        title: 'Конек кровли плоский',
        img: '',
        description:
          'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
      },
      {
        id: '5',
        title: 'Конек кровли плоский',
        img: '',
        description:
          'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
      },
      {
        id: '6',
        title: 'Конек кровли плоский',
        img: '',
        description:
          'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
      },
    ],
    price: '',
  };
  return {
    props: { product: PRODUCT },
  };
}

export default ProductPage;
