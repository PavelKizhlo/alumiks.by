import AdvantagesBlock from '@/components/homepage/AdvantagesBlock';
import HeadingBlock from '@/components/homepage/HeadingBlock';
import ProductsBlock from '@/components/homepage/ProductsBlock';
import PRODUCTS from '@/data/products';
import MATERIALS from '@/data/materials';
import ADVANTAGES from '@/data/advantages';
import { ProductGroup } from '@/types/product';
import { Material } from '@/types/material';
import { Advantage } from '@/types/advantage';

interface HomeProps {
  products: ProductGroup[];
  materials: Material[];
  advantages: Advantage[];
}

export default function Home({ products, advantages, materials }: HomeProps) {
  return (
    <>
      <HeadingBlock />
      <AdvantagesBlock advantages={advantages} materials={materials} />
      <ProductsBlock products={products} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: PRODUCTS,
      materials: MATERIALS,
      advantages: ADVANTAGES,
    },
  };
}
