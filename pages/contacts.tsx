import Image from 'next/image';
import Link from 'next/link';

import phoneIcon from '@/public/icons/phone-icon-2.svg';
import mailIcon from '@/public/icons/mail-icon-2.svg';
import locationIcon from '@/public/icons/location-icon-2.svg';
import clockIcon from '@/public/icons/clock-icon-2.svg';

import { openSans } from '@/utils/fonts';

export default function Contacts() {
  return (
    <article
      className={`container mx-auto flex flex-col items-center gap-12  py-12 ${openSans.className}`}
    >
      <h2 className="w-fit border-b-2 border-header-color px-2 text-4xl font-bold">
        Контакты
      </h2>
      <div className="flex items-center gap-28">
        <div className="flex flex-col gap-6">
          <section className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Наши телефоны</h3>
            <div className="flex flex-row gap-4">
              <Image src={phoneIcon} alt="icon" height={27} width={27} />
              <div className="flex h-full flex-col gap-2">
                <Link href="tel:+375294543969">+375 29 454 39 69</Link>
                <Link href="tel:+375294543969">+375 29 454 39 69</Link>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Пишите нам на e-mail</h3>
            <div className="flex flex-row gap-4">
              <Image src={mailIcon} alt="icon" height={27} width={27} />
              <Link href="mailto: ALUmix@gmail.com" target="_blank">
                ALUmix@gmail.com
              </Link>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Адрес нашего офиса</h3>
            <div className="flex flex-row gap-4">
              <Image src={locationIcon} alt="icon" height={27} width={27} />
              <Link href="https://goo.gl/maps/XHTaWd377GW9mweQ7" target="_blank">
                г. Могилев, б–р Непокоренных, д.77 пв. 11
              </Link>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Время работы</h3>
            <div className="flex flex-row gap-4">
              <Image src={clockIcon} alt="icon" height={27} width={27} />
              <div className="flex h-full flex-col gap-2">
                <div>Пн–пт 9:00 – 18:00</div>
                <div>Сб–вс 9:00 – 16:00</div>
              </div>
            </div>
          </section>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.61107679869!2d30.336802515731055!3d53.86756348009156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d0522c19c636b7%3A0x8eb7a1122fd3508e!2z0LHRg9C7LiDQndC10L_QvtC60L7RgNGR0L3QvdGL0YUgNzcsINCc0L7Qs9C40LvRkdCyIDIxMjAyOQ!5e0!3m2!1sru!2sby!4v1680435152222!5m2!1sru!2sby"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </article>
  );
}
