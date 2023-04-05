import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/logos/logo.svg';

import { useRouter } from 'next/router';
import useScrollDirection from '@/utils/useScrollDirection';
import { useState } from 'react';
import { Menu, MenuHandler, MenuList } from '@material-tailwind/react';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import PRODUCTS from '../data/products';

export default function Header() {
  const NAVIGATION = [
    { id: 1, title: 'Главная', path: '/' },
    { id: 2, title: 'Каталог', path: '/products' },
    { id: 3, title: 'Доставка и оплата', path: '/delivery' },
    { id: 4, title: 'О нас', path: '/about' },
    { id: 5, title: 'Контакты', path: '/contacts' },
  ];

  const { pathname } = useRouter();
  const scrollDirection = useScrollDirection();

  const [openMenu, setOpenMenu] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  return (
    <header
      className={`fixed z-10 flex  h-20 w-screen justify-center bg-header-color  text-xl font-normal ${
        scrollDirection === 'down' ? '-top-20' : 'top-0'
      } transition-[top] duration-150 ease-linear`}
    >
      <div className="mx-auto flex w-full items-center justify-between px-32">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <nav className="flex flex-row items-center divide-x-2 divide-solid divide-white text-white">
          {NAVIGATION.map((item) =>
            item.path === '/products' ? (
              <Menu open={openMenu} handler={setOpenMenu} key={item.id}>
                <MenuHandler>
                  <div
                    className={`flex items-center gap-2 px-6 ${
                      pathname === item.path && 'text-black'
                    }`}
                    {...triggers}
                  >
                    <Link href={item.path}>{item.title.toUpperCase()}</Link>
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform ${
                        openMenu ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </MenuHandler>
                <MenuList
                  {...triggers}
                  className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible text-inherit lg:grid"
                >
                  {PRODUCTS.map((el) => (
                    <div key={el.id}>
                      <Link href="/">{el.title}</Link>
                    </div>
                  ))}
                </MenuList>
              </Menu>
            ) : (
              <div
                key={item.id}
                className={`px-6 ${pathname === item.path && 'text-black'}`}
              >
                <Link href={item.path}>{item.title.toUpperCase()}</Link>
              </div>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
