import { useRef } from 'react';
import { Button, Testiomonials } from '@components';

const StepOne = ({ children }) => {
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 35,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-primary/5 w-full">
      <div className="relative z-10 flex flex-col items-center gap-28 flex-1 w-full text-gray-700 ">
        <section
          ref={sectionOne}
          className="lg:h-screen pb-24 lg:py-0 sm:grid flex flex-col items-center lg:grid-cols-2 gap-16 sm:gap-8 bg-white sm:px-44 px-10 pt-10"
        >
          <div className="flex relative flex-col justify-center gap-6 bg-[url('/images/shape_leaf_left_bottom.svg')] bg-auto">
            <div className="flex flex-col gap-4 font-title">
              <p className="sm:text-6xl text-3xl font-bold">
                Sprijin confidențial asupra sănătății mintale din partea profesioniștilor
              </p>
            </div>
            <p className="z-10 font-universe max-w-xl sm:text-2xl text-lg">
              Indiferent dacă aveți de -a face cu stres, anxietate sau orice altă provocare de
              sănătate mintală, profesioniștii noștri cu experiență sunt aici pentru a vă ajuta să
              navigați prin aceasta. Ajungeți astăzi și faceți primul pas către o sănătate mentală
              mai bună.
            </p>

            <Button
              onClick={() => scrollToSection(sectionTwo)}
              className="button full primary lg:w-fit px-6 sm:whitespace-nowrap whitespace-none font-universe bg-primary hover:bg-white hover:text-primary"
            >
              Primeste consultatia
            </Button>
          </div>
          <div className="relative self-center -mt-96 sm:block hidden">
            <div className="absolute bg-secondary/20 -top-32 -left-10">
              <img
                className="w-[500px] sm:mx-0 mx-auto invisible"
                src="/images/hero_image.jpg"
                alt="star"
              />
            </div>
            <div className="absolute bg-primary/20 top-10 left-32">
              <img
                className="w-[500px] sm:mx-0 mx-auto invisible"
                src="/images/hero_image.jpg"
                alt="star"
              />
            </div>
            <div className="absolute z-99 -top-20">
              <img
                className="w-3/4 sm:mx-0 mx-auto rounded-br-[100px] rounded-tl-[100px]"
                src="/images/hero_image.jpg"
                alt="star"
              />
            </div>
          </div>
          <div className="z-99 -top-20 block sm:hidden -mt-10">
            <img
              className="w-3/4 sm:mx-0 mx-auto rounded-br-[100px] rounded-tl-[100px]"
              src="/images/hero_image.jpg"
              alt="star"
            />
          </div>
        </section>
        <section
          ref={sectionOne}
          className=" sm:pb-24 lg:py-0 flex flex-col items-center gap-4 sm:gap-8"
        >
          <div className="text-5xl font-bold">Ceea ce oferim</div>
          <div className="text-lg">Sfaturi psihologice experte la îndemână</div>
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="bg-white w-96 rounded-xl p-10 shadow flex flex-col gap-10">
              <div>
                <img
                  className="w-24 h-32 sm:mx-0 mx-auto "
                  src="/images/icon_brain.svg"
                  alt="star"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Terapia depresiei</h2>
                <div>
                  Terapia eficientă de depresie concepută pentru a -ți restabili fericirea și
                  sănătatea mintală. Suport personalizat pentru a vă ajuta să depășiți provocările
                  și să recâștigați echilibrul.
                </div>
              </div>
            </div>
            <div className="bg-white w-96 rounded-xl p-10 shadow flex flex-col gap-10">
              <div>
                <img
                  className="w-24 h-32 sm:mx-0 mx-auto"
                  src="/images/icon_head_double.svg"
                  alt="star"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Consiliere</h2>
                <div>
                  Consiliere profesională pentru a vă ghida prin provocările și tranzițiile vieții.
                  Sprijin compătimitor pentru un mai sănătos, mai fericit.
                </div>
              </div>
            </div>
            <div className="bg-white w-96 rounded-xl p-10 shadow flex flex-col gap-10">
              <div>
                <img className="w-24 h-32 sm:mx-0 mx-auto" src="/images/icon_head.svg" alt="star" />
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Relații</h2>
                <div>
                  Consiliere în relații de experți pentru a vă consolida legăturile și a îmbunătăți
                  comunicarea. Descoperiți modalități mai sănătoase de a vă conecta și de a crește
                  împreună.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={sectionTwo} className=" flex items-center justify-center bg-white w-full">
          <div className="flex flex-col gap-12 backdrop-filter sm:p-8 px-4 py-8 bg-primary/5 relative my-20 sm:w-2/3 w-full rounded-br-[100px] rounded-tl-[100px]">
            <h2 className="text-center text-4xl font-semibold">
              Scrie-ne si primeste consultatia mult dorita
            </h2>
            {children}
          </div>
        </section>
        <Testiomonials />
      </div>
    </section>
  );
};

export default StepOne;
