import React from 'react';

function Delivery() {
  return (
    <article className="container mx-auto flex flex-col items-center gap-12 px-32 py-12 font-heading">
      <h1 className="border-header-color w-fit border-b-2 px-2 text-4xl font-bold">
        Оплата и доставка
      </h1>
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-medium uppercase">Оплата</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Юридические лица:</h3>
          <p>Безналичный расчет путем перечисления денежных средств на р/с Поставщика.</p>
          <p className="text-xs">
            *Запуск заказа в работу производится при условии 100% предоплаты
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Физические лица:</h3>
          <ul className="flex flex-col gap-2">
            Оплатить заказ можно любым удобным для вас способом:
            <li>- наличными или банковской картой в нашем офисе; (адрес=?)</li>
            <li> - через кассу банка РБ по нашим реквизитам;</li>
            <li> - оплата с помощью интернет-банкинга.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Возврат денежных средств</h3>
          <div className="flex flex-col gap-2">
            <p>
              Продавец изготавливает товар по индивидуальному заказу Покупателя
              (количество, размер, цвет и т.д.), в связи с чем указанный товар возврату и
              обмену не подлежит согласно Перечню непродовольственных товаров надлежащего
              качества, не подлежащих возврату, утвержденному Постановлением Совета
              Министров Республики Беларусь от 14.06.2002 N 778 «О мерах по реализации
              Закона Республики Беларусь «О защите прав потребителей» .
            </p>
            <p>
              Возврат денежных средств за товар ненадлежащего качества осуществляется
              только при предъявлении покупателем кассового чека.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">
            Образец документа, подтверждающего факт оплаты (кассовый чек):
          </h3>
          <div>Фото чека</div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-medium uppercase">Отгрузка</h2>
        <div className="flex flex-col gap-2">
          <p>Выписка документов и отгрузка товара производятся в одном месте.</p>
          <p>
            По готовности заказа Вы можете забрать продукцию со склада по адресу:
            г.Могилев, пер.1-й Южный, д.16-а в рабочие дни с 9-00 до 17-00.
          </p>
        </div>
      </section>
      <section className="flex w-full flex-col gap-6">
        <h2 className="text-xl font-medium uppercase">Доставка</h2>
        <ul className="flex flex-col gap-2">
          <li> - Самовывоз;</li>
          <li>
            - Доставка на объект Заказчика транспортной компанией (оплата согласно тарифам
            ТК);
          </li>
          <li>- Возможна бесплатная доставка в зависимости от суммы заказа.</li>
        </ul>
      </section>
    </article>
  );
}

export default Delivery;
