export default function About() {
  return (
    <section className="page-wrapper">
      <h1 className="heading-h1">О нас</h1>
      <h2 className="heading-h2">Общество с ограниченной ответственностью «Алюмикс»</h2>
      <div className="flex flex-col gap-6">
        <p>ООО «Алюмикс» - динамично развивающееся предприятие. Работаем с 2008 года.</p>
        <div className="flex flex-col gap-4">
          <h3 className="heading-h3">Наши преимущества:</h3>
          <ul className="flex flex-col gap-2">
            <li>- современное технологическое оборудование;</li>
            <li>- квалифицированный персонал;</li>
            <li>- высокое качество изделий (100- процентный контроль);</li>
            <li>- краткие сроки изготовления;</li>
            <li>- разумные цены;</li>
            <li>- индивидуальный подход к заказчику;</li>
            <li>- удобное месторасположение.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="heading-h3">Основная специализация:</h3>
          <ul className="flex flex-col gap-2">
            <li>
              - производство раздвижных алюминиевых балконных рам системы «Provedal»;
            </li>
            <li>
              - изготовление оконных отливов из оцинкованной стали с полимерным покрытием
              и без;
            </li>
            <li>- производство евроштакетника и заборов-жалюзи;</li>
            <li>
              - производство других изделий из жести как стандартных (доборные элементы
              для кровли и т.д.), так и по эскизам заказчика в пределах технических
              характеристик нашего оборудования.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="heading-h3">Дополнительно:</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <div className="flex flex-col gap-2">
                <h4 className="heading-h4">- производим:</h4>
                <ul className="flex flex-col gap-2">
                  <li>- противомоскитные сетки на окна ПВХ;</li>
                  <li>- противомоскитные сетки на алюминиевые балконные рамы;</li>
                  <li>- противомоскитные сетки на балконные и входные двери;</li>
                  <li>- парочные и трапециевидные сетки.</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-2">
                <h4 className="heading-h4">- реализуем:</h4>
                <ul className="flex flex-col gap-2">
                  <li>- подоконники ПВХ бюджетные и премиум-класса;</li>
                  <li>- сэндвич-панели для откосов и комплектующие к ним.</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
