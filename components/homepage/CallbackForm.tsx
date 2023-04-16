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

export default function CallbackForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button
        onClick={handleOpen}
        className="font-inherit bg-header-color uppercase hover:shadow-indigo-300"
      >
        заказать звонок
      </Button>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[30rem]">
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
