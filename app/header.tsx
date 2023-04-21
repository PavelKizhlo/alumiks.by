'use client';

import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/logos/new-logo.svg';

import useScrollDirection from '@/utils/useScrollDirection';

import useWidth from '../utils/useWidth';
import FullSizeNav from './components/navigation/fullSizeNav';
import BurgerNav from './components/navigation/burgerNav';

export default function Header() {
  const scrollDirection = useScrollDirection();

  const windowWidth = useWidth();

  return (
    <header
      className={`fixed z-10 flex h-32 w-screen justify-center bg-main-color font-typo text-xl font-normal ${
        scrollDirection === 'down' ? '-top-32' : 'top-0'
      } transition-[top] duration-150 ease-linear`}
    >
      <div className="mx-auto flex w-full items-center justify-between px-8 md:px-32">
        <Link href="/">
          <Image width={170} height={100} src={logo} alt="logo" />
        </Link>
        {windowWidth > 1280 ? <FullSizeNav /> : <BurgerNav />}
      </div>
    </header>
  );
}
