import Image from 'next/image';
import Link from 'next/link';

import phoneIcon from '@/public/icons/phone-icon-2.svg';
import mailIcon from '@/public/icons/mail-icon-2.svg';
import locationIcon from '@/public/icons/location-icon-2.svg';
import clockIcon from '@/public/icons/clock-icon-2.svg';

export default function Contacts() {
  return (
    <section className="container flex flex-col items-center gap-12 py-12">
      <h1 className="heading-h1">Контакты</h1>
      <div className="flex items-center gap-28">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="heading-h2">Наши телефоны</h2>
            <div className="flex flex-row gap-4">
              <Image src={phoneIcon} alt="icon" height={27} width={27} />
              <div className="flex h-full flex-col gap-2">
                <Link href="tel:80222634197">(80222) 63-41-97 (тел/факс)</Link>
                <Link href="tel:+375296544795">(8029) 654-47-95</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="heading-h2">Пишите нам на e-mail</h2>
            <div className="flex flex-row gap-4">
              <Image src={mailIcon} alt="icon" height={27} width={27} />
              <Link href="mailto: alumiks@tut.by" target="_blank">
                alumiks@tut.by
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="heading-h2">Адрес нашего офиса</h2>
            <div className="flex flex-row gap-4">
              <Image src={locationIcon} alt="icon" height={27} width={27} />
              <Link href="https://goo.gl/maps/b8ua8Ahgx6opAxSD8" target="_blank">
                212040 г.Могилев, пер.1-й Южный, 16-а, оф.4
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="heading-h2">Время работы</h2>
            <div className="flex flex-row gap-4">
              <Image src={clockIcon} alt="icon" height={27} width={27} />
              <div className="flex h-full flex-col gap-2">
                <div>Пн–пт 9:00 – 18:00</div>
                <div>Сб–вс 9:00 – 16:00</div>
              </div>
            </div>
          </div>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592.942179843965!2d30.37401331606319!3d53.869558817896774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d0524753ec9c8b%3A0x83d8f746a5d4f2f7!2zMS3QuSDQrtC20L3Ri9C5INC_0LXRgNC10YPQu9C-0LogMTYsINCc0L7Qs9C40LvRkdCy!5e0!3m2!1sru!2sby!4v1680636702574!5m2!1sru!2sby"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
