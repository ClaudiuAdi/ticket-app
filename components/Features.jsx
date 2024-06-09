import React from 'react';
import Link from './Link';

const Features = () => {
  return (
    <section
      className="max-w-5xl section flex flex-col items-center gap-8 pb-12 md:mt-24"
      id="features"
    >
      <div className="flex flex-col gap-2 items-center">
        <img className="w-12" src="/images/furnish.webp" alt="star" />
        <p className="md:text-4xl text-3xl text-white font-title">
          Ai tot ce-ți trebuie, să faci tot ce vrei!
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4 border hover:bg-white/5 hover:shadow-2xl ease-in duration-200 border-white/10  p-9 backdrop-blur-lg">
          <div className="flex items-center sm:w-16 sm:h-24 w-12 h-20">
            <img src="/icons/feature-1.png" alt="feature" />
          </div>
          <p className="font-bold text-xl text-white font-title">Energie</p>
          <p className="font-universe text-gray-400">
            Orice ființă, plantă sau obiect din Universul nostru material emite continuu lumină și
            informație, formând un câmp energetic invizibil, iar știința a confirmat acest lucru.
            <Link href="/energie" className="text-white ml-2 hover:text-primary">
              Află mai mult...
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4 border hover:bg-white/5 hover:shadow-2xl ease-in duration-200 border-white/10  p-9 backdrop-blur-lg">
          <div className="flex items-center sm:w-16 sm:h-24 w-12 h-20">
            <img src="/icons/feature-2.png" alt="feature" />
          </div>
          <p className="font-bold text-xl text-white font-title">Timp</p>
          <p className="font-universe text-gray-400">
            Secretul este unul singur: deși percepem timpul în mai multe ipostaze, trecutul și
            viitorul nostru anulează prezentul.
            <Link href="/timpul" className="text-white ml-2 hover:text-primary">
              Află mai mult...
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4 border hover:bg-white/5 hover:shadow-2xl ease-in duration-200 border-white/10  p-9 backdrop-blur-lg">
          <div className="flex items-center sm:w-16 sm:h-24 w-12 h-20">
            <img src="/icons/feature-3.png" alt="feature" />
          </div>
          <p className="font-bold text-xl text-white font-title">Intenție </p>
          <p className="font-universe text-gray-400">
            Stabilirea intentiei reprezinta singura actiune pe care o intreprinzi atunci cand ceri
            ceva Universului. Intentia este insasi vointa ta - Vreau ...!
            <Link href="/intentie" className="text-white ml-2 hover:text-primary">
              Află mai mult...
            </Link>
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-4 border hover:bg-white/5 hover:shadow-2xl ease-in duration-200 border-white/10  p-9 backdrop-blur-lg">
          <div className="flex items-center sm:w-16 sm:h-24 w-12 h-20">
            <img src="/icons/feature-4.png" alt="feature" />
          </div>
          <p className="font-bold text-xl text-white font-title">Gânduri</p>
          <p className="font-universe text-gray-400">
            Gandirea este limbajul mintii. Mintea constienta este nelinistita, are in permanenta
            ceva de facut, gandurile uimitoare, vin, pleaca si revin in orice moment al zilei.
            <Link href="/ganduri" className="text-white ml-2 hover:text-primary">
              Află mai mult...
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4 border hover:bg-white/5 hover:shadow-2xl ease-in duration-200 border-white/10  p-9 backdrop-blur-lg">
          <div className="flex items-center sm:w-16 sm:h-24 w-12 h-20">
            <img src="/icons/feature-5.png" alt="feature" />
          </div>
          <p className="font-bold text-xl text-white font-title">Emoții</p>
          <p className="font-universe text-gray-400">
            În timp ce mintea opereaza prin ganduri, corpul opereaza prin trairi si senzatii.
            Intrucat nu exista separare intre minte, corp si emotii, fiecare emotie este in sine o
            experienta care genereaza un tipar energetic specific.
            <Link href="/emotii" className="text-white ml-2 hover:text-primary">
              Află mai mult...
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4 border hover:bg-white/5 hover:shadow-2xl ease-in duration-200 border-white/10  p-9 backdrop-blur-lg">
          <div className="flex items-center sm:w-16 sm:h-24 w-12 h-20">
            <img src="/icons/feature-6.png" alt="feature" />
          </div>
          <p className="font-bold text-xl text-white font-title">SOS</p>
          <p className="font-universe text-gray-400">
            Orice om știe cum să trateze un disconfort apărut la nivelul corpului său fizic, plecând
            de la un simplu pansament sau un remediu antiinflamator până la mersul la un specialist
            capabil să prescrie un tratament adecvat.
            <Link href="/sos" className="text-white ml-2 hover:text-primary">
              Află mai mult...
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
