import { Card } from '@material-tailwind/react';

import Link from 'next/link';

import PRODUCTS from '@/data/products';
import { ProductGroup } from '@/types/product';

interface Props {
  products: ProductGroup[];
}

export default function Products({ products }: Props) {
  return (
    <div className="container mx-auto flex flex-col items-center gap-12  py-12 font-heading">
      <h1 className="heading-h1">Каталог</h1>
      {products.map((group) => (
        <section key={group.id} className="flex flex-col items-center gap-6">
          <h3 className="heading-h3">
            <Link className="uppercase" href={`/products/${group.slug}`}>
              {group.title}
            </Link>
          </h3>
          <div className="flex flex-row gap-10">
            {group.items.slice(0, 3).map((item) => (
              <Link href={`/products/${group.slug}/${item.slug}`} key={item.id}>
                <Card className="relative h-[230px] w-[230px] cursor-pointer bg-gray-600">
                  <div className="bg-blured absolute bottom-0 flex w-full items-center justify-center rounded-b-xl py-4 text-center text-white">
                    <h4 className="heading-h4">{item.title}</h4>
                  </div>
                </Card>
              </Link>
            ))}
            <Link href={`/products/${group.slug}`}>
              <Card className="relative flex h-[230px] w-[230px] cursor-pointer items-center  justify-center bg-gray-600">
                <span className="w-fit text-white">Больше &#10141;</span>
              </Card>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      products: PRODUCTS,
    },
  };
}
