import React from 'react';

import { openSans } from '@/utils/fonts';

function AdvantagesBlock() {
  const ADVANTAGES = [
    {
      id: 1,
      title: 'Доставка по всей Беларуси',
      description:
        'Доставляем заказы в самые отдаленные регионы и области. Бесплатная доставка от 800 рублей. Cамовывоз - г.Минск, ул. Тимирязева 125/4',
    },
    {
      id: 2,
      title: 'Гарантия 20 лет',
      description:
        'Доставляем заказы в самые отдаленные регионы и области. Бесплатная доставка от 800 рублей. Cамовывоз - г.Минск, ул. Тимирязева 125/4',
    },
    {
      id: 3,
      title: 'Широкая палитра цветов',
      description:
        'Доставляем заказы в самые отдаленные регионы и области. Бесплатная доставка от 800 рублей. Cамовывоз - г.Минск, ул. Тимирязева 125/4',
    },
    {
      id: 4,
      title: '100% качество',
      description:
        'Доставляем заказы в самые отдаленные регионы и области. Бесплатная доставка от 800 рублей. Cамовывоз - г.Минск, ул. Тимирязева 125/4',
    },
  ];

  const MATERIALS = [
    { id: 1, icon: '+', description: 'Устойчив к осадкам и перепадам температуры' },
    { id: 2, icon: '+', description: 'Устойчив к осадкам и перепадам температуры' },
    { id: 3, icon: '+', description: 'Устойчив к осадкам и перепадам температуры' },
    { id: 4, icon: '+', description: 'Металические системы не  выгорают на солнце' },
    { id: 5, icon: '+', description: 'Металические системы не  выгорают на солнце' },
    { id: 6, icon: '+', description: 'Металические системы не  выгорают на солнце' },
    {
      id: 7,
      icon: '+',
      description:
        'Угловые желоба, отливы и колени разрабатываются с любым желаемым градусом',
    },
    {
      id: 8,
      icon: '+',
      description:
        'Угловые желоба, отливы и колени разрабатываются с любым желаемым градусом',
    },
    {
      id: 9,
      icon: '+',
      description:
        'Угловые желоба, отливы и колени разрабатываются с любым желаемым градусом',
    },
  ];

  return (
    <article
      className={`container mx-auto flex flex-col gap-12 px-32 py-12 ${openSans.className}`}
    >
      <section className="flex flex-col items-center gap-8">
        <h2 className="border-b-2 border-header-color px-2 text-4xl font-bold">
          Преимущества нашей компании
        </h2>
        <div className="flex justify-between gap-10">
          {ADVANTAGES.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-between gap-4"
            >
              <h3 className="text-xl font-medium">{item.title.toUpperCase()}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center gap-8">
        <h2 className="border-b-2 border-header-color px-2 text-4xl font-bold">
          Наш материал
        </h2>
        <div className="grid grid-cols-3 justify-between gap-x-10 gap-y-4">
          {MATERIALS.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="rounded-full bg-orange-500 px-2">{item.icon}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default AdvantagesBlock;
