import { ProductGroup } from '@/types/product';
import {
  izdeliyaIzAluminiyaColors,
  ocinkovannayaStalColors,
  podokonnikiDankeColors,
  zaboryColors,
} from '@/data/colors';

const PRODUCTS: ProductGroup[] = [
  {
    id: 1,
    slug: 'ocinkovannaya-stal',
    title: 'Фасонные изделия из оцинкованной стали с полимерным покрытием',
    headingImg: '',
    description: '',
    items: [
      {
        id: 1.1,
        slug: 'doborniye-elementy',
        images: [{ id: 1, src: '/products/roof-ridge.jpeg' }],
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
        images: [{ id: 1, src: '' }],
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
        slug: 'nashсelniki',
        images: [{ id: 1, src: '' }],
        title: 'Нащельники и декоративные элементы для сэндвичпанелей',
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
        images: [{ id: 1, src: '' }],
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
    id: 2,
    slug: 'izdeliya-iz-aluminiya',
    title: 'Изделия из алюминия',
    headingImg: '',
    description: '',
    items: [
      {
        id: 2.1,
        slug: 'balkonniye-ramy',
        images: [{ id: 1, src: '' }],
        title: 'Балконные рамы',
        colors: izdeliyaIzAluminiyaColors,
        configurations: [],
        price: '',
      },
      {
        id: 2.2,
        slug: 'besedki-verandy',
        images: [{ id: 1, src: '' }],
        title: 'Беседки и веранды',
        colors: izdeliyaIzAluminiyaColors,
        configurations: [],
        price: '',
      },
      {
        id: 2.3,
        slug: 'ofisniye-peregorodki',
        images: [{ id: 1, src: '' }],
        title: 'Офисные перегородки',
        colors: izdeliyaIzAluminiyaColors,
        configurations: [],
        price: '',
      },
      {
        id: 2.4,
        slug: 'dveri',
        images: [{ id: 1, src: '' }],
        title: 'Двери',
        colors: izdeliyaIzAluminiyaColors,
        configurations: [],
        price: '',
      },
      {
        id: 2.5,
        slug: 'moskitniye-setki',
        images: [{ id: 1, src: '' }],
        title: 'Противомоскитные сетки',
        colors: izdeliyaIzAluminiyaColors,
        configurations: [],
        price: '',
      },
    ],
  },
  {
    id: 3,
    slug: 'podokonniki',
    title: 'Пластиковые подоконники',
    headingImg: '',
    description: '',
    items: [
      {
        id: 3.1,
        slug: 'podokonniki-beliye-pvh',
        images: [{ id: 1, src: '' }],
        title: 'Подоконники ПВХ белые',
        configurations: [],
        price: '',
      },
      {
        id: 3.2,
        slug: 'podokonniki-danke',
        images: [{ id: 1, src: '' }],
        title: 'Подоконники Данке',
        colors: podokonnikiDankeColors,
        configurations: [],
        price: '',
      },
    ],
  },
  {
    id: 4,
    slug: 'zabory',
    title: 'Заборы',
    headingImg: '',
    description: '',
    items: [
      {
        id: 4.1,
        slug: 'shtaketnik',
        images: [{ id: 1, src: '' }],
        title: 'Штакетник',
        colors: zaboryColors,
        configurations: [],
        price: '',
      },
      {
        id: 4.2,
        slug: 'zabor-zhaluzy',
        images: [{ id: 1, src: '' }],
        title: 'Забор-жалюзи',
        colors: zaboryColors,
        configurations: [],
        price: '',
      },
      {
        id: 4.3,
        slug: 'proflist',
        images: [{ id: 1, src: '' }],
        title: 'Профлист',
        colors: zaboryColors,
        configurations: [],
        price: '',
      },
      {
        id: 4.4,
        slug: 'kolpaki',
        images: [{ id: 1, src: '' }],
        title: 'Колпаки на заборные столбы',
        colors: zaboryColors,
        configurations: [],
        price: '',
      },
      {
        id: 4.5,
        slug: 'parapetniye-kryshky',
        images: [{ id: 1, src: '' }],
        title: 'Парапетные крышки и П-планки',
        colors: zaboryColors,
        configurations: [],
        price: '',
      },
    ],
  },
];

export default PRODUCTS;
