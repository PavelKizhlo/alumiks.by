import { Open_Sans, Raleway } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['600', '500', '400', '300'],
});

export const raleway = Raleway({
  subsets: ['cyrillic'],
  weight: ['400'],
});
