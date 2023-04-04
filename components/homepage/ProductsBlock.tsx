import React from 'react';

import { Card } from '@material-tailwind/react';
import { openSans } from '@/utils/fonts';
import { ProductGroup } from '@/types/product';
import Link from 'next/link';

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
          <Link href={`/products/${group.slug}`}>
            <h3 className="text-xl font-medium">{group.title.toUpperCase()}</h3>
          </Link>

          <div className="flex flex-row flex-wrap justify-center gap-10">
            {group.items.map((item) => (
              <Link key={item.id} href={`/products/${group.slug}/${item.slug}`}>
                <Card className="relative h-[320px] w-[320px] bg-gray-600">
                  <div className="absolute bottom-0 flex w-full items-center justify-center rounded-b-xl bg-blured py-4 text-center text-white">
                    <h4 className="w-fit border-b-2 border-white">{item.title}</h4>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

export default ProductsBlock;
