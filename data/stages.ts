import { Stage } from '@/types/stage';

const STAGES: Stage[] = [
  {
    id: 1,
    icon: '/icons/workSheme/sheme1.svg',
    title: 'Уточнение требований',
    description: 'Анализ требований заказчика и их уточнение.',
  },
  {
    id: 2,
    icon: '/icons/workSheme/sheme2.svg',
    title: 'Расчёт стоимости',
    description:
      'Рассчёт стоимости и минимальных сроков выполнения проекта. Вывод о реализуемости проекта в указаннные сроки',
  },
  {
    id: 3,
    icon: '/icons/workSheme/sheme3.svg',
    title: 'Предварительная вёрстка',
    description: 'Предварительная вёрстка, конвертация в редактируемый формат',
  },
  {
    id: 4,
    icon: '/icons/workSheme/sheme4.svg',
    title: 'Определение тематики',
    description:
      'Определение тематики переводных файлов и требуемой квалификации исполнителей',
  },
  {
    id: 5,
    icon: '/icons/workSheme/sheme5.svg',
    title: 'Обобщение данных',
    description:
      'Обобщение и формализация данных о проекте(память переводов, график работы, требования заказчика, глоссарий, что-то ещё).',
  },
  {
    id: 6,
    icon: '/icons/workSheme/sheme6.svg',
    title: 'Назначение исполнителей',
    description:
      'Назначение конкретных исполнителей(переводчиков, редактора) с учётом их специализации',
  },
];

export default STAGES;
