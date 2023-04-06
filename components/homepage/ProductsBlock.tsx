import React from 'react';

import { ProductGroup } from '@/types/product';
import Slider from '@/components/homepage/Slider';

interface ProductsBlockProps {
  products: ProductGroup[];
}

function ProductsBlock({ products }: ProductsBlockProps) {
  return (
    <section className="container mx-auto flex flex-col items-center gap-10 pb-20 font-heading">
      <h2 className="heading-h2">Производим</h2>
      {products
        .sort((a, b) => b.items.length - a.items.length)
        .map((group) => (
          <Slider group={group} key={group.id} />
        ))}
    </section>
  );
}

export default ProductsBlock;
