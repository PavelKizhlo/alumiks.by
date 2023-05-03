import { Stage } from '@/types/stage';
import Image from 'next/image';

interface Props {
  stages: Stage[];
}

export default async function WorkingProcessBlock({ stages }: Props) {
  return (
    <section className="bg-dark-shades py-10">
      <div className="container flex flex-col items-center gap-8 text-light-shades">
        <h2 className="heading-h2">Как мы работаем</h2>
        <div className="grid relative grid-cols-6 after:block after:absolute after:w-8 after:h-8 after:content-['>'] after:text-warning text-[45px] leading-10 font-light after:top-[253px] after:-right-[15px]">
          {stages.map((stage) => (
            <div key={stage.id} className="group grid grid-rows-2">
              <div className="flex justify-center items-center group-even:order-1 group-even:border-t-2 border-warning">
                <div className="flex relative items-center justify-center w-1/2 aspect-square border-2 border-warning rounded-full after:block after:absolute after:w-0.5 after:h-36 after:bg-warning group-odd:after:top-full group-even:after:bottom-full">
                  <Image width={68} height={68} src={stage.icon} alt="иконка" />
                </div>
              </div>
              <div className="text-center flex flex-col justify-start group-odd:border-t-2 border-warning group-odd:pt-20 group-even:pb-20">
                <p className="heading-h4 mb-4">{stage.title}</p>
                <p className="text-lg font-light">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
