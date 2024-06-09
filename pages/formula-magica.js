import { Header } from '@components';
import Footer from '@components/Footer';
import React from 'react';

const Page = () => {
  return (
    <main className="relative min-h-screen bg-indigo-900/70 flex flex-col items-center justify-center font-universe">
      <Header />
      <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
        <div className="flex flex-col text-center gap-2">
          <div className="flex justify-center items-center gap-3">
            <img className="w-4 h-4" src="/images/star.png" alt="star" />
            <h1 className="lg:text-2xl text-lg text-primary font-title">Universe's Guidance</h1>
            <img className="w-4 h-4" src="/images/star.png" alt="star" />
          </div>
          <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">
            MANTRA PERSONALĂ
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              În general, Mantra este o frază sau un cuvânt sacru, repetat în mod deliberat și
              concentrat, în timpul meditației sau al unei practici spirituale. Poate fi un sunet, o
              silabă sau o expresie care are putere sau semnificație simbolică. Mantra are rolul de
              a ajuta la concentrarea minții, de a induce o stare de liniște, precum și de a crea o
              legătură între individ și aspectul spiritual sau divin al existenței.
            </p>

            <p>
              Importanța unei mantre poate varia de la persoană la persoană, dar există anumite
              beneficii și roluri pe care le poate îndeplini pentru oricine: concentrare și liniște
              mentală, elevarea stării de conștiință, crearea unei rezonanțe energetice, reducerea
              stresului și a anxietății, îmbunătățirea stării emoționale în viața de zi cu zi,
              legătura cu aspectul divin sau spiritual al existenței.
            </p>

            <p>
              Server of the Universe trece de aspectul general, mergând în profunzime, elaborând o
              Mantra personală și personalizată în funcție de o anume provocare, problemă, situație
              sau dorință a fiecărei persoane care scrie.
            </p>

            <p>
              Astfel, noi ne adresăm fiecăruia în particular, în mod direct, pentru că în lipsa unor
              informații generale sau a unor cunoștințe privind diverse practici și concepte
              spirituale, o mantra general valabilă ar putea sau nu crea rezonanța energetica și
              rezultatul dorit. Acesta este motivul pentru care se cere o descriere a problemei,
              provocării, situației sau dorinței personale. Deși, două sau mai multe persoane pot
              întâlni situații neplăcute similare, cauzele și motivele pentru care fiecare se
              confruntă cu respectiva problemă pot să fie diferite. Este important cum privește
              fiecare situația lui, convingerea care stă în spate, cum se simte în această situație
              și cum crede că i s-ar schimba viața în lipsa acestei probleme.
            </p>

            <p>
              O Mantra personală este menită să identifice cauza reală și să o elimine, acționând
              precum o resetare, atât pe plan mental cât și emoțional, pentru ca mai apoi, să apară
              rezultatele în planul fizic, material.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
