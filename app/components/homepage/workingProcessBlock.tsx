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
        <h2 className="heading-h2">Схема работы</h2>
        <div className="grid grid-cols-6 ">
          {stages.map((stage) => (
            <div key={stage.id} className="group grid grid-rows-2">
              <div className="flex justify-center items-center group-even:order-1 group-even:border-t-2 border-warning">
                <div className="flex items-center justify-center w-1/2 aspect-square border-2 border-warning rounded-full">
                  <Image width={68} height={68} src={stage.icon} alt="иконка" />
                </div>
              </div>
              <div className="text-center flex flex-col justify-center group-odd:border-t-2 border-warning group-odd:pt-6 group-even:pb-6">
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
