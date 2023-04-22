'use client';

import Image from 'next/image';
import Link from 'next/link';

import phoneIcon from '@/public/icons/phone-icon.svg';
import mailIcon from '@/public/icons/mail-icon.svg';
import locationIcon from '@/public/icons/location-icon.svg';
import clockIcon from '@/public/icons/clock-icon.svg';

import footerLogo from '@/public/logos/new-logo-invert.svg';
import useWidth from '../utils/useWidth';

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

  const windowWidth = useWidth();

  return (
    <footer className="text-l bg-dark-shades py-10 text-light-shades">
      <div className="items-stetch container grid grid-flow-row gap-10 sm:grid-flow-col sm:gap-0 sm:divide-x-2 sm:divide-solid sm:divide-white">
        {windowWidth && windowWidth > 1280 && (
          <section className="footer-text flex h-full flex-col gap-6 pr-12">
            <Link href="/products">
              <h3 className="heading-h3">Каталог</h3>
            </Link>
            <ul className="flex flex-col gap-2">
              {CATALOG_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link className="link-underlined" href="/">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="footer-text flex h-full flex-col items-center gap-6 sm:items-start sm:pr-6 md:pr-12 xl:px-12">
          <Link href="/contacts">
            <h3 className="heading-h3">Контакты</h3>
          </Link>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-row gap-4">
              <Image src={phoneIcon} alt="icon" height={27} width={27} />
              <div className="flex h-full flex-col gap-2">
                <Link className="link-underlined" href="tel:+375296544795">
                  +375 (29) 654-47-95
                </Link>
                <Link className="link-underlined" href="tel:80222634197">
                  8 (0222) 63-41-97 (тел/факс)
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image src={locationIcon} alt="icon" height={27} width={27} />
              <Link
                className="link-underlined"
                href="https://goo.gl/maps/b8ua8Ahgx6opAxSD8"
                target="_blank"
              >
                212040 г.Могилев, пер.1-й Южный, 16-а, оф.4
              </Link>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image src={mailIcon} alt="icon" height={27} width={27} />
              <Link
                className="link-underlined"
                href="mailto: alumiks@tut.by"
                target="_blank"
              >
                alumiks@tut.by
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row items-center gap-4">
                <Image src={clockIcon} alt="icon" height={27} width={27} />
                <div className="flex h-full flex-col gap-2">
                  <div>Пн–пт 9:00 – 18:00</div>
                  <div>Сб–вс 9:00 – 16:00</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-text flex h-full flex-col gap-6 sm:pl-6 md:pl-12">
          {windowWidth && windowWidth > 640 && (
            <h3 className="heading-h3">Правовая информация</h3>
          )}
          <div className="flex h-full flex-col justify-between gap-4">
            {windowWidth && windowWidth > 640 && (
              <p>
                Все права на материалы сайта принадлежат правообладателю OOO “АЛЮМИКС”.
                Использование данных материалов в любой форме может производится только с
                письменного разрешения правообладателя Сайта.
              </p>
            )}
            <div className="flex w-full flex-col-reverse items-center justify-center gap-4 lg:flex-row lg:justify-between lg:gap-0">
              <p className="self-center text-center lg:self-end">
                2016–2023 Все права защищены
              </p>
              <Image
                className="w-[110px] md:w-[170px] lg:self-end"
                width={170}
                height={100}
                sizes="(min-width: 768px) 110px, 170px"
                src={footerLogo}
                alt="Логотип алюмикс"
              />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
