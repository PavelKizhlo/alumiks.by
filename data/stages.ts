import { Stage } from '@/types/stage';

const STAGES: Stage[] = [
  {
    id: 1,
    icon: '/icons/workScheme/scheme1.svg',
    title: 'Заявка на сайте или звонок в офис',
    description: 'Анализ требований заказчика и их уточнение.',
  },
  {
    id: 2,
    icon: '/icons/workScheme/scheme2.svg',
    title: 'Консультация и уточнение деталей',
    description:
      'Рассчёт стоимости и минимальных сроков выполнения проекта. Вывод о реализуемости проекта в указаннные сроки',
  },
  {
    id: 3,
    icon: '/icons/workScheme/scheme3.svg',
    title: 'Расчет стоимости заказа',
    description: 'Предварительная вёрстка, конвертация в редактируемый формат',
  },
  {
    id: 4,
    icon: '/icons/workScheme/scheme4.svg',
    title: 'Оплата выбранным способом',
    description:
      'Определение тематики переводных файлов и требуемой квалификации исполнителей',
  },
  {
    id: 5,
    icon: '/icons/workScheme/scheme5.svg',
    title: 'Изготовление заказа',
    description:
      'Обобщение и формализация данных о проекте(память переводов, график работы, требования заказчика, глоссарий, что-то ещё).',
  },
  {
    id: 6,
    icon: '/icons/workScheme/scheme6.svg',
    title: 'Отгрузка либо доставка товара',
    description:
      'Назначение конкретных исполнителей(переводчиков, редактора) с учётом их специализации',
  },
];

export default STAGES;
