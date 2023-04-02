import React from 'react';

import { Card } from '@material-tailwind/react';
import { openSans } from '@/utils/fonts';

function ProductsBlock() {
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

  return (
    <article
      className={`container mx-auto flex flex-col items-center gap-10 px-32 pb-12 ${openSans.className}`}
    >
      <h2 className="border-b-2 border-header-color px-2 text-4xl font-bold">
        Производим
      </h2>
      {PRODUCTS.map((group) => (
        <section key={group.id} className="flex flex-col items-center gap-6">
          <h3 className="text-xl font-medium">{group.group_title.toUpperCase()}</h3>
          <div className="flex flex-row gap-10">
            {group.items.map((item) => (
              <Card
                key={item.id}
                className="relative h-[320px] w-[320px] bg-gray-600 cursor-pointer"
              >
                <div className="absolute bottom-0 flex w-full items-center justify-center rounded-b-xl bg-blured py-4 text-center text-white">
                  <h4 className="w-fit border-b-2 border-white">{item.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}

export default ProductsBlock;
