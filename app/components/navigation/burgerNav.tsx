'use client';

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Dialog,
} from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '@/data/navigation';
import PRODUCTS from '@/data/products';

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? 'rotate-180 ' : ''} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function BurgerNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openSubNav, setOpenSubNav] = useState(0);
  const [openSubNav2, setOpenSubNav2] = useState(0);

  const handleOpen = () => {
    setOpen((cur) => !cur);
    setOpenSubNav(0);
    setOpenSubNav2(0);
  };

  const handleOpenSubNav = (value: number) => {
    setOpenSubNav(openSubNav === value ? 0 : value);
    setOpenSubNav2(0);
  };

  const handleOpenSubNav2 = (value: number) => {
    setOpenSubNav2(openSubNav2 === value ? 0 : value);
  };

  const hiddenMenu = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hiddenMenu.current) {
      (hiddenMenu.current.parentElement as HTMLElement).style.display = 'flex';
      (hiddenMenu.current.parentElement as HTMLElement).style.justifyContent = 'flex-end';
    }
  }, [open]);

  return (
    <>
      <Button
        onClick={handleOpen}
        className="font-inherit border-none bg-transparent p-0 uppercase shadow-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-12 w-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>
      <Dialog
        ref={hiddenMenu}
        open={open}
        handler={handleOpen}
        className="m-0 flex w-[300px] min-w-[300px] bg-transparent text-xl font-bold shadow-none 2xs:w-[400px]"
        animate={{
          mount: { scale: 1, x: 0 },
          unmount: { scale: 1, x: 100 },
        }}
      >
        <div className="flex h-[100vh] w-full flex-col gap-12 bg-main-color p-8">
          <Button
            onClick={handleOpen}
            className="font-inherit self-end border-none bg-transparent p-0 uppercase shadow-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
          <nav className="flex flex-col items-center gap-6 text-light-shades">
            {NAVIGATION.map((item) =>
              item.path === '/products' ? (
                <Accordion
                  key={item.id}
                  open={openSubNav === item.id}
                  icon={<Icon id={item.id} open={openSubNav} key={item.id} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpenSubNav(item.id)}
                    className="flex justify-center border-none text-xl font-bold text-inherit"
                  >
                    <Link
                      href={item.path}
                      className="border-r-solid w-full border-r-2 border-r-light-accent pr-5 text-xl uppercase"
                      onClick={handleOpen}
                    >
                      {item.title}
                    </Link>
                  </AccordionHeader>
                  <AccordionBody className="text-xl font-bold text-inherit ">
                    {PRODUCTS.map((el) => (
                      <Accordion
                        key={el.id}
                        open={openSubNav2 === el.id}
                        icon={<Icon id={el.id} open={openSubNav2} key={el.id} />}
                      >
                        <AccordionHeader
                          onClick={() => handleOpenSubNav2(el.id)}
                          className="border-none text-xl font-bold text-inherit"
                        >
                          <Link
                            href={`/products/${el.slug}`}
                            className="border-r-solid w-full border-r-2 border-r-light-accent pr-5 text-left text-xl"
                            onClick={handleOpen}
                          >
                            {el.shortTitle}
                          </Link>
                        </AccordionHeader>
                        <AccordionBody className="border-none text-xl font-bold text-inherit">
                          <div className="flex flex-col gap-2">
                            {el.items.map((itemEl) => (
                              <Link
                                key={itemEl.id}
                                href={`/products/${el.slug}/${itemEl.slug}`}
                                className="link-underlined w-fit pl-4 text-left text-xl"
                                onClick={handleOpen}
                              >
                                {itemEl.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionBody>
                      </Accordion>
                    ))}
                  </AccordionBody>
                </Accordion>
              ) : (
                <Link
                  key={item.id}
                  className={`uppercase ${pathname === item.path && 'text-info'}`}
                  href={item.path}
                  onClick={handleOpen}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>
        </div>
      </Dialog>
    </>
  );
}

export default BurgerNav;
