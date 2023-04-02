import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/logos/logo.svg';

import { useRouter } from 'next/router';
import useScrollDirection from '../utils/useScrollDirection';

export default function Header() {
  const NAVIGATION = [
    { id: 1, title: 'Главная', path: '/' },
    { id: 2, title: 'Каталог', path: '/catalog' },
    { id: 3, title: 'О нас', path: '/about' },
    { id: 4, title: 'Контакты', path: '/contacts' },
  ];

  const { pathname } = useRouter();
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`fixed w-screen bg-header-color h-20 px-32 z-10 font-normal text-xl flex justify-center ${
        scrollDirection === 'down' ? '-top-20' : 'top-0'
      } transition-[top] duration-150 ease-linear`}
    >
      <div className="container mx-auto w-full flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <nav className="flex items-center flex-row divide-x-2 divide-solid divide-white text-white">
          {NAVIGATION.map((item) => (
            <div
              key={item.id}
              className={`px-6 ${pathname === item.path && 'text-black'}`}
            >
              <Link href={item.path}>{item.title.toUpperCase()}</Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
