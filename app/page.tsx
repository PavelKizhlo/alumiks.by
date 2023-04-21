import AdvantagesBlock from '@/app/components/homepage/advantagesBlock';
import HeadingBlock from '@/app/components/homepage/headingBlock';
import ProductsBlock from '@/app/components/homepage/productsBlock';
import PRODUCTS from '@/data/products';
import MATERIALS from '@/data/materials';
import ADVANTAGES from '@/data/advantages';
import MaterialsBlock from '@/app/components/homepage/materialsBlock';

async function loadHomeData() {
  return {
    products: PRODUCTS,
    materials: MATERIALS,
    advantages: ADVANTAGES,
  };
}

export default async function Home() {
  const homeData = await loadHomeData();

  return (
    <>
      <HeadingBlock />
      <AdvantagesBlock advantages={homeData.advantages} />
      <MaterialsBlock materials={homeData.materials} />
      <ProductsBlock products={homeData.products} />
    </>
  );
}
