'use client';

import { useState } from 'react';
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from '@material-tailwind/react';
import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline';

export default function CallbackForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button
        onClick={handleOpen}
        size="lg"
        className="flex items-center gap-3 bg-warning hover:scale-105 hover:shadow-none"
      >
        Связаться с нами
        <PhoneArrowDownLeftIcon strokeWidth={2} className="h-6 w-6" />
      </Button>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="w-[85%] max-w-[85%] bg-transparent shadow-none sm:w-3/4 sm:max-w-[60%]"
      >
        <Card className="mx-auto w-full max-w-full sm:max-w-[30rem]">
          <CardHeader className="mb-4 flex h-28 place-items-center items-center justify-center bg-main-color p-4">
            <h4 className="heading-h4 text-center text-light-shades">
              Оставьте данные и мы свяжемся с вами в коротчайшие сроки
            </h4>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <form className="flex flex-col gap-4">
              <Input label="Ваше имя" size="lg" required />
              <Input label="Номер телефона" size="lg" required type="phone" />
              <Input
                type="emil"
                label="Email"
                size="lg"
                className="border-main-color outline-main-color"
              />
              <Input label="Сообщение" size="lg" required className="h-[400px]" />
            </form>
          </CardBody>
          <CardFooter className="flex justify-center pt-0">
            <Button
              onClick={handleOpen}
              className="w-2/4 bg-main-color hover:shadow-main-color"
            >
              Отправить
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
