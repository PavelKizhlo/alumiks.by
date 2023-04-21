'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Menu, MenuHandler, MenuList } from '@material-tailwind/react';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import PRODUCTS from '@/data/products';
import { NAVIGATION } from '@/data/navigation';

function FullSizeNav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  return (
    <nav className="flex flex-row items-center divide-x-2 divide-solid divide-light-accent text-light-shades">
      {NAVIGATION.map((item) =>
        item.path === '/products' ? (
          <Menu open={openMenu} handler={setOpenMenu} key={item.id}>
            <MenuHandler>
              <div
                className={`flex items-center gap-2 px-6 ${
                  pathname === item.path && 'text-info'
                }`}
                {...triggers}
              >
                <Link className="uppercase" href={item.path}>
                  {item.title}
                </Link>
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
              className="flex  w-fit flex-col gap-4 overflow-visible border-dark-accent bg-dark-accent font-light text-inherit lg:flex-row"
            >
              {PRODUCTS.map((el) => (
                <div
                  key={el.id}
                  className="flex w-fit max-w-[200px] flex-col gap-2 divide-y-2 divide-solid divide-dark-shades text-light-shades"
                >
                  <Link
                    href={`/products/${el.slug}`}
                    className="flex h-[40px] items-center justify-center text-center text-lg transition-colors duration-300 hover:text-dark-shades "
                  >
                    {el.shortTitle}
                  </Link>
                  <div className="flex flex-col gap-1 pt-2 ">
                    {el.items.map((itemEl) => (
                      <Link
                        key={itemEl.id}
                        href={`/products/${el.slug}/${itemEl.slug}`}
                        className="link-underlined w-fit text-base"
                      >
                        {itemEl.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </MenuList>
          </Menu>
        ) : (
          <div key={item.id} className={`px-6 ${pathname === item.path && 'text-info'}`}>
            <Link className="link-underlined uppercase" href={item.path}>
              {item.title}
            </Link>
          </div>
        )
      )}
    </nav>
  );
}

export default FullSizeNav;
