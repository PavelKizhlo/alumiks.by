import AdvantagesBlock from '@/components/homepage/AdvantagesBlock';
import HeadingBlock from '@/components/homepage/HeadingBlock';
import ProductsBlock from '@/components/homepage/ProductsBlock';

export default function Home() {
  return (
    <>
      <HeadingBlock />
      <AdvantagesBlock />
      <ProductsBlock />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      id: 1,
    },
  };
}
