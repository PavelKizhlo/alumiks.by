import AdvantagesBlock from '@/app/components/homepage/advantagesBlock';
import HeadingBlock from '@/app/components/homepage/headingBlock';
import ProductsBlock from '@/app/components/homepage/productsBlock';
import WorkingProcessBlock from '@/app/components/homepage/workingProcessBlock';
import MainPageDataModel from '../types/mainPageDataModel';
import { BASE_URL, MAIN_PAGE_URL } from '../utils/url';

async function loadData(): Promise<{ data: MainPageDataModel }> {
  return (await fetch(BASE_URL + MAIN_PAGE_URL)).json();
}

export default async function Home() {
  const mainPageData = await loadData();

  return (
    <>
      <HeadingBlock headingText={mainPageData.data.headingText} />
      {/* @ts-expect-error Server Component */}
      <AdvantagesBlock advantages={mainPageData.data.advantages} />
      {/* @ts-expect-error Server Component */}
      <WorkingProcessBlock stages={mainPageData.data.stages} />
      {/* @ts-expect-error Server Component */}
      <ProductsBlock />
    </>
  );
}
