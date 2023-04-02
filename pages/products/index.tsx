import { Card } from '@material-tailwind/react';

import Link from 'next/link';

import { openSans } from '../../utils/fonts';

interface ProductsModel {
  id: number;
  group_title: string;
  items: {
    id: number;
    img: string;
    title: string;
  }[];
}

interface Props {
  products: ProductsModel[];
}

export default function Products({ products }: Props) {
  return (
    <article
      className={`container mx-auto flex flex-col items-center gap-12 px-32 py-12 ${openSans.className}`}
    >
      <h1 className="w-fit border-b-2 border-header-color px-2 text-4xl font-bold">
        Каталог
      </h1>
      {products.map((group) => (
        <section key={group.id} className="flex flex-col items-center gap-6">
          <h3 className="text-xl font-medium">
            <Link href="/products/category">{group.group_title.toUpperCase()}</Link>
          </h3>
          <div className="flex flex-row gap-10">
            {group.items.map((item) => (
              <Link href="/products/category/product" key={item.id}>
                <Card className="relative h-[230px] w-[230px] cursor-pointer bg-gray-600">
                  <div className="absolute bottom-0 flex w-full items-center justify-center rounded-b-xl bg-blured py-4 text-center text-white">
                    <h4 className="w-fit border-b-2 border-white">{item.title}</h4>
                  </div>
                </Card>
              </Link>
            ))}
            <Link href="/products/category">
              <Card className="relative flex h-[230px] w-[230px] cursor-pointer items-center  justify-center bg-gray-600">
                <span className="w-fit text-white">Больше &#10141;</span>
              </Card>
            </Link>
          </div>
        </section>
      ))}
    </article>
  );
}

export function getStaticProps() {
  const PRODUCTS = [
    {
      id: 1,
      group_title: 'Крыша',
      items: [
        {
          id: 1.1,
          img: '',
          title: 'Доборные элементы кровли',
        },
        {
          id: 1.2,
          img: '',
          title: 'Отливы и откосы',
        },
        {
          id: 1.3,
          img: '',
          title: 'Дымники',
        },
      ],
    },
    {
      id: 2,
      group_title: 'Заборы',
      items: [
        {
          id: 2.1,
          img: '',
          title: 'Евроштакетник',
        },
        {
          id: 2.2,
          img: '',
          title: 'Еще заборы',
        },
        {
          id: 2.3,
          img: '',
          title: 'Еще заборы',
        },
      ],
    },
    {
      id: 3,
      group_title: 'Окна',
      items: [
        {
          id: 3.1,
          img: '',
          title: 'Пластиковые подоконники',
        },
        {
          id: 3.2,
          img: '',
          title: 'Алюминиевые рамы',
        },
        {
          id: 3.3,
          img: '',
          title: 'Еще что-то оконное',
        },
      ],
    },
  ];
  return {
    props: {
      products: PRODUCTS,
    },
  };
}
