import Breadcrumbs from '@/app/components/materialUI/breadcrumbs';
import Card from '@/app/components/materialUI/card';
import Link from 'next/link';

import PRODUCTS from '@/data/products';
import { ProductGroup } from '@/types/product';

async function loadCategoryData(params: { group: string }) {
  const groupName = params.group;
  return PRODUCTS.find((currentGroup) => currentGroup.slug === groupName) as ProductGroup;
}

export default async function ProductCategoryPage({
  params,
}: {
  params: { group: string };
}) {
  const group = await loadCategoryData(params);

  return (
    <section className="min-h-full bg-light-shades">
      <div className="page-wrapper">
        <Breadcrumbs>
          <Link
            href="/"
            className="text-dark-accent opacity-60 transition-colors duration-300 hover:text-dark-shades"
          >
            Главная
          </Link>
          <Link
            href="/products"
            className="text-dark-accent opacity-60 transition-colors duration-300 hover:text-dark-shades"
          >
            Каталог
          </Link>
          <Link
            href={`/products/${group.slug}`}
            className="text-dark-accent transition-colors duration-300 hover:text-dark-shades"
          >
            {group.title}
          </Link>
        </Breadcrumbs>
        <h1 className="heading-h1">{group.title}</h1>
        <div className="h-[250px] w-full bg-gray-700 text-center">Изображение</div>
        <p className="text-lg">{group.description}</p>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {group.items.map((item) => (
            <Link href={`/products/${group.slug}/${item.slug}`} key={item.id}>
              <Card className="h-fit w-[270px] justify-center gap-2 overflow-hidden p-4 drop-shadow-md transition duration-300 sm:h-[336px] sm:w-[252px] md:h-[420px] md:w-[315px] lg:h-[480px] lg:w-[360px] xl:h-[432px] xl:w-[324px] xl:hover:scale-105 2xl:h-[480px] 2xl:w-[360px] sm1:h-[420px] sm1:w-[315px] 3xl:h-[424px] 3xl:w-[318px]">
                <h4 className="heading-h4 text-center">{item.title}</h4>
                <div className="h-[300px] w-full bg-blue-gray-700">
                  {item.images[0].src}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora
                  dolores eaque animi, porro, perspiciatis exercitationem vitae cum
                  similique omnis vero mollitia nemo dicta consequatur, quod impedit.
                  Tenetur, voluptatibus nihil!
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return PRODUCTS.map((group) => ({
    group: group.slug,
  }));
}

export const dynamicParams = true;
