import React from 'react';

import Slider from '@/app/components/homepage/slider/slider';
import PRODUCTS from '@/data/products';
import Link from 'next/link';

async function loadProducts() {
  return PRODUCTS;
}

export default async function ProductsBlock() {
  const products = await loadProducts();

  return (
    <section className="bg-light-shades pb-10 pt-10 md:pb-20">
      <div className="container flex flex-col items-center gap-6 md:gap-10">
        <h2 className="heading-h2 text-dark-shades">Производим</h2>
        {products
          .sort((a, b) => b.items.length - a.items.length)
          .map((group) => (
            <React.Fragment key={group.id}>
              <Link className="" href={`/products/${group.slug}`}>
                <h3 className="heading-h3 text-center text-dark-shades">{group.title}</h3>
              </Link>

              <Slider group={group} key={group.id} />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}
