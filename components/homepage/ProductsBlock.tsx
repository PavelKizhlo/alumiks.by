import React from 'react';

import { Card } from '@material-tailwind/react';
import { openSans } from '@/utils/fonts';
import { ProductGroup } from '@/types/product';

interface ProductsBlockProps {
  products: ProductGroup[];
}

function ProductsBlock({ products }: ProductsBlockProps) {
  return (
    <section
      className={`container mx-auto flex flex-col items-center gap-10 px-32 pb-12 ${openSans.className}`}
    >
      <h2 className="border-b-2 border-header-color px-2 text-4xl font-bold">
        Производим
      </h2>
      {products.map((group) => (
        <section key={group.id} className="flex flex-col items-center gap-6">
          <h3 className="text-xl font-medium">{group.title.toUpperCase()}</h3>
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {group.items.map((item) => (
              <Card
                key={item.id}
                className="relative h-[320px] w-[320px] cursor-pointer bg-gray-600"
              >
                <div className="absolute bottom-0 flex w-full items-center justify-center rounded-b-xl bg-blured py-4 text-center text-white">
                  <h4 className="w-fit border-b-2 border-white">{item.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

export default ProductsBlock;
