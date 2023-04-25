import AdvantagesBlock from '@/app/components/homepage/advantagesBlock';
import HeadingBlock from '@/app/components/homepage/headingBlock';
import ProductsBlock from '@/app/components/homepage/productsBlock';
import WorkingProcessBlock from '@/app/components/homepage/workingProcessBlock';

export default async function Home() {
  return (
    <>
      <HeadingBlock />
      {/* @ts-expect-error Server Component */}
      <AdvantagesBlock />
      {/* @ts-expect-error Server Component */}
      <WorkingProcessBlock />
      {/* @ts-expect-error Server Component */}
      <ProductsBlock />
    </>
  );
}
