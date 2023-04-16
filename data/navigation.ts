export interface NavigationItemModel {
  id: number;
  title: string;
  path: string;
}

export const NAVIGATION: NavigationItemModel[] = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Каталог', path: '/products' },
  { id: 3, title: 'Доставка и оплата', path: '/delivery' },
  { id: 4, title: 'О нас', path: '/about' },
  { id: 5, title: 'Галерея', path: '/gallery' },
  { id: 6, title: 'Контакты', path: '/contacts' },
];
