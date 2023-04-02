import React from 'react';

import Link from 'next/link';
import { Card } from '@material-tailwind/react';

import { openSans } from '../../../utils/fonts';

interface CategoryModel {
  title: string;
  headingImg: string;
  description: string;
  products: { id: number; img: string; title: string }[];
}

interface Props {
  category: CategoryModel;
}

function ProductCategoryPage({ category }: Props) {
  return (
    <article
      className={`container mx-auto flex flex-col items-center gap-12 px-32 py-12 ${openSans.className}`}
    >
      <h1 className="w-fit border-b-2 border-header-color px-2 text-4xl font-bold">
        {category.title}
      </h1>
      <div className="h-[250px] w-full bg-gray-700 text-center">Изображение</div>
      <p className="text-lg font-medium">{category.description}</p>
      <section className="grid grid-cols-4 gap-4">
        {category.products.map((item) => (
          <Link href="/products/category/product" key={item.id}>
            <Card className="relative h-[230px] w-[230px] cursor-pointer bg-gray-600">
              <div className="absolute bottom-0 flex w-full items-center justify-center rounded-b-xl bg-blured py-4 text-center text-white">
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
  return {
    paths: [{ params: { category: 'category' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  const CATEGORY = {
    title: 'Доборные элементы кровли',
    headingImg: '',
    description: `Доборные элементы – необходимые изделия при монтаже кровли, профнастила и фасадов. 
      Такие элементы служат для состыковки всех сложных материалов в одну конструктивную составляющую, 
      способствующую защите от попадания влаги и воды внутрь зазоров между строительными материалами. 
      Так же такие элементы служат для эстетической отделки и законченного внешнего вида зданий и сооружений.`,
    products: [
      { id: 1, img: '', title: 'Конек крыши' },
      { id: 1, img: '', title: 'Ветровая планка' },
      { id: 1, img: '', title: 'Планки примыкания' },
      { id: 1, img: '', title: 'Ендова кровля' },
      { id: 1, img: '', title: 'Капельник' },
    ],
  };
  return {
    props: { category: CATEGORY },
  };
}

export default ProductCategoryPage;
