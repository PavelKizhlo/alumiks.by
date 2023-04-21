import { ProductGroup } from '@/types/product';
import {
  izdeliyaIzAluminiyaColors,
  ocinkovannayaStalColors,
  podokonnikiDankeColors,
  zaboryColors,
} from '@/data/colors';

const PRODUCTS: ProductGroup[] = [
  {
    id: 1 * Math.random(),
    slug: 'ocinkovannaya-stal',
    title: 'Фасонные изделия из оцинкованной стали с полимерным покрытием',
    shortTitle: 'Фасонные изделия из оцинкованной стали',
    headingImg: '',
    description: '',
    items: [
      {
        id: 1.1,
        slug: 'doborniye-elementy',
        images: [{ id: 1, src: '/products/roof-ridge.jpg' }],
        title: 'Доборные элементы кровли',
        colors: ocinkovannayaStalColors,
        configurations: [
          {
            id: 1,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 2,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 3,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
        ],
        price: '',
      },
      {
        id: 1.2,
        slug: 'otlivy-otkosy',
        images: [{ id: 1, src: '/products/otlivy.jpeg' }],
        title: 'Отливы и откосы',
        colors: ocinkovannayaStalColors,
        configurations: [
          {
            id: 1,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 2,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 3,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 4,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
        ],
        price: '',
      },
      {
        id: 1.3,
        slug: 'zonty-dymniki',
        images: [{ id: 1, src: '/products/zonty.jpeg' }],
        title: 'Зонты для вентшахт и дымники',
        colors: ocinkovannayaStalColors,
        configurations: [
          {
            id: 1,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 2,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
        ],
        price: '',
      },
      {
        id: 1.4,
        slug: 'nashelnik',
        images: [{ id: 1, src: '/products/nashhelnik.jpeg' }],
        title: 'Нащельники и декоративные элементы',
        colors: ocinkovannayaStalColors,
        configurations: [
          {
            id: 1,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 2,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 3,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 4,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
        ],
        price: '',
      },
      {
        id: 1.5,
        slug: 'parapety-kostyli',
        images: [{ id: 1, src: '/products/parapet.jpeg' }],
        title: 'Парапеты и костыли',
        colors: ocinkovannayaStalColors,
        configurations: [
          {
            id: 1,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 2,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 3,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
          {
            id: 4,
            title: 'Конек кровли плоский',
            img: '',
            description:
              'Такой элемент предназначен для накрывания треугольной стропильной части кровли, в единую целостную конструкцию',
          },
        ],
        price: '',
      },
    ],
  },
  {
    id: 2 * Math.random(),
    slug: 'izdeliya-iz-aluminiya',
    title: 'Изделия из алюминия',
    shortTitle: 'Изделия из алюминия',
    headingImg: '',
    description: '',
    items: [
      {
        id: 2.1,
        slug: 'balkonniye-ramy',
        images: [{ id: 1, src: '/products/ramy.jpeg' }],
        title: 'Балконные рамы',
        colors: izdeliyaIzAluminiyaColors,
        configurations: [],
        price: '',
      },
      {
        id: 2.2,
        slug: 'besedki-verandy',
        images: [{ id: 1, src: '/products/verandy.jpeg' }],
        title: 'Беседки и веранды',
        colors: izdeliyaIzAluminiyaColors,
        configurations: [],
        price: '',
      },
      {
        id: 2.3,
        slug: 'ofisniye-peregorodki',
        images: [{ id: 1, src: '/products/peregorodki.jpeg' }],
        title: 'Офисные перегородки',
        colors: izdeliyaIzAluminiyaColors,
        configurations: [],
        price: '',
      },
      {
        id: 2.4,
        slug: 'dveri',
        images: [{ id: 1, src: '/products/dveri.jpeg' }],
        title: 'Двери',
        colors: izdeliyaIzAluminiyaColors,
        configurations: [],
        price: '',
      },
      {
        id: 2.5,
        slug: 'moskitniye-setki',
        images: [{ id: 1, src: '/products/insect.jpeg' }],
        title: 'Противомоскитные сетки',
        colors: izdeliyaIzAluminiyaColors,
        configurations: [],
        price: '',
      },
    ],
  },
  {
    id: 3 * Math.random(),
    slug: 'podokonniki',
    title: 'Пластиковые подоконники',
    shortTitle: 'Пластиковые подоконники',
    headingImg: '',
    description: '',
    items: [
      {
        id: 3.1,
        slug: 'podokonniki-beliye-pvh',
        images: [{ id: 1, src: '/products/podokonnik.jpeg' }],
        title: 'Подоконники ПВХ белые',
        configurations: [],
        price: '',
      },
      {
        id: 3.2,
        slug: 'podokonniki-danke',
        images: [{ id: 1, src: '/products/danke.jpeg' }],
        title: 'Подоконники Данке',
        colors: podokonnikiDankeColors,
        configurations: [],
        price: '',
      },
    ],
  },
  {
    id: 4 * Math.random(),
    slug: 'zabory',
    title: 'Заборы',
    shortTitle: 'Заборы',
    headingImg: '',
    description: '',
    items: [
      {
        id: 4.1,
        slug: 'shtaketnik',
        images: [{ id: 1, src: '/products/shtaketnik.jpeg' }],
        title: 'Штакетник',
        colors: zaboryColors,
        configurations: [],
        price: '',
      },
      {
        id: 4.2,
        slug: 'zabor-zhaluzy',
        images: [{ id: 1, src: '/products/zabor-zhaluzi.jpeg' }],
        title: 'Забор-жалюзи',
        colors: zaboryColors,
        configurations: [],
        price: '',
      },
      {
        id: 4.3,
        slug: 'proflist',
        images: [{ id: 1, src: '/products/proflist.jpeg' }],
        title: 'Профлист',
        colors: zaboryColors,
        configurations: [],
        price: '',
      },
      {
        id: 4.4,
        slug: 'kolpaki',
        images: [{ id: 1, src: '/products/kolpaki.jpeg' }],
        title: 'Колпаки на заборные столбы',
        colors: zaboryColors,
        configurations: [],
        price: '',
      },
      {
        id: 4.5,
        slug: 'parapetniye-kryshky',
        images: [{ id: 1, src: '/products/kryshki.png' }],
        title: 'Парапетные крышки и П-планки',
        colors: zaboryColors,
        configurations: [],
        price: '',
      },
    ],
  },
];

export default PRODUCTS;
