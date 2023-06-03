import STAGES from '@/data/stages';
import Image from 'next/image';

async function loadStages() {
  return STAGES;
}

export default async function WorkingProcessBlock() {
  const stages = await loadStages();

  return (
    <section className="bg-dark-shades py-10">
      <div className="container flex flex-col items-center gap-8 text-light-shades">
        <h2 className="heading-h2">Как мы работаем</h2>
        <div className="w-full md:w-3/4 lg:w-auto block lg:grid relative grid-cols-6 after:hidden lg:after:block after:absolute after:w-8 after:h-8 md:after:text-[30px] lg:after:text-[42px] after:content-['>'] after:text-warning text-[45px] leading-10 font-light lg:after:top-[163px] xl:after:top-[177px] 2xl:after:top-[189px] 3xl:after:top-[175px] lg:after:-right-[15px]">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="group mb-16 last:mb-0 lg:mb-0 items-center lg:items-stretch justify-between flex lg:grid grid-rows-2"
            >
              <div className="flex lg:justify-center items-center group-even:order-2 lg:group-even:border-t-2 border-warning">
                <div className="flex relative items-center justify-center w-[80px] sm1:w-[110px] sm:w-[140px] lg:w-1/2 aspect-square border-2 border-warning after:hidden rounded-full lg:after:block after:absolute after:w-0.5 after:h-36 after:bg-warning group-odd:after:top-full group-even:after:bottom-full">
                  <Image
                    width={68}
                    height={68}
                    src={stage.icon}
                    className="w-2/3 lg:w-[54px] w-[68px]"
                    alt="иконка"
                  />
                </div>
              </div>
              <span className="hidden sm1:block lg:hidden w-[40px] xs:w-[80px] md:w-[50px] group-even:order-1 h-[2px] bg-warning" />
              <div className="lg:w-auto w-[260px] group-even:text-start group-odd:text-end lg:text-center justify-start lg:group-odd:border-t-2 border-warning lg:group-odd:pt-24 lg:group-even:pb-24 xl:group-odd:pt-28 xl:group-even:pb-28 3xl:group-odd:pt-32 3xl:group-even:pb-32">
                <p className="heading-h4 text-lg sm1:text-xl lg:text-lg xl:text-xl 2xl:text-2xl">
                  {stage.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
