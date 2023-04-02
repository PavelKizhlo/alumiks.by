import Image from 'next/image';
import Link from 'next/link';
import phoneIcon from '@/public/icons/phone-icon.svg';
import mailIcon from '@/public/icons/mail-icon.svg';
import locationIcon from '@/public/icons/location-icon.svg';
import { openSans } from '@/utils/fonts';

export default function Footer() {
  const CATALOG_ITEMS = [
    { id: 1, title: 'Водосточные системы' },
    { id: 2, title: 'Евроштакетник' },
    { id: 3, title: 'Доборные элементы кровли' },
    { id: 4, title: 'Пластиковые подоконники' },
    { id: 5, title: 'Отливы и откосы' },
    { id: 6, title: 'Алюминиевые рамы' },
    { id: 7, title: 'Дымники' },
    { id: 8, title: 'Элементы кровли' },
  ];

  return (
    <footer
      className={`text-l bg-black px-32 py-10 font-semibold text-white ${openSans.className}`}
    >
      <div className="items-stetch container mx-auto grid grid-cols-3 divide-x-2 divide-solid divide-white">
        <section className="flex h-full flex-col items-center gap-4 pr-12">
          <h3 className="text-xl">
            <Link href="/products">Коталог</Link>
          </h3>
          <ul className="flex flex-col gap-2">
            {CATALOG_ITEMS.map((item) => (
              <li key={item.id}>
                <Link href="/">{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex h-full flex-col items-start gap-4 px-12">
          <h3 className="self-center text-xl">
            <Link href="/contacts">Контакты</Link>
          </h3>
          <div className="flex flex-row gap-4">
            <Image src={phoneIcon} alt="icon" height={27} width={27} />
            <div className="flex h-full flex-col gap-2">
              <Link href="tel:+375294543969">+375 29 454 39 69</Link>
              <Link href="tel:+375294543969">+375 29 454 39 69</Link>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <Image src={locationIcon} alt="icon" height={27} width={27} />
            <Link href="https://goo.gl/maps/XHTaWd377GW9mweQ7" target="_blank">
              г. Могилев, б–р Непокоренных, д.77 пв. 11
            </Link>
          </div>
          <div className="flex flex-row gap-4">
            <Image src={mailIcon} alt="icon" height={27} width={27} />
            <Link href="mailto: MAIL(заполнить)" target="_blank">
              MAIL(заполнить)
            </Link>
          </div>
        </section>
        <section className="flex h-full flex-col items-center gap-4 pl-12">
          <h3 className="text-xl">Правовая информация</h3>
          <div className="flex h-full flex-col justify-between">
            <p>
              Все права на материалы сайта принадлежат правообладателю компании “АЛЮМИКС”.
              Использование данных материалов в любой форме может производится только с
              письменного разрешения правообладателя Сайта
            </p>
            <p>2016–2023 Все права защищены</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
