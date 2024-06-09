import { Header } from '@components';
import Footer from '@components/Footer';

const Page = () => {
  return (
    <main className="relative min-h-screen bg-indigo-900/70 flex flex-col items-center justify-between font-universe">
      <Header />
      <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
        <div className="flex flex-col text-center gap-2">
          <div className="flex justify-center items-center gap-3">
            <img className="w-4 h-4" src="/images/star.png" alt="star" />
            <h1 className="lg:text-2xl text-lg text-primary font-title">Universe's Guidance</h1>
            <img className="w-4 h-4" src="/images/star.png" alt="star" />
          </div>
          <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">
            DANSUL COSMIC
          </p>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Într-un labirint aparent infinit de experiențe și trăiri, viața ta curge într-o
              armonie complexă între minte și corp. Acest dialog constant între gânduri și senzații
              creează ceea ce numim viață. În acest context, fiecare emoție pe care o trăiești este
              ca un val de energie în mișcare, care străbate puntea subtilă între lumea minții și
              lumea trupului tău.
            </p>
            <p>
              Nu există nimic negativ sau pozitiv în natura unei emoții în sine; ele sunt pur și
              simplu experiențe. Cu toate acestea, mintea ta, cu abilitatea ei de a judeca și
              clasifica, etichetează aceste experiențe drept bune sau rele, pozitive sau negative.
              Acest lucru creează un cadru în care trăiești, un cadru care te poate limita sau
              elibera.
            </p>
            <p>
              Cu conștiența că mintea și corpul tău sunt strâns interconectate, ceea ce gândești se
              reflectă în ceea ce simți, și viceversa. Așadar, dacă dorești să schimbi ceva în viața
              ta, trebuie să începi prin a explora lumea ta interioară a subconștientului tău. Aici,
              vei căuta tiparele vechi și nebenefice care au condus la emoțiile care te-au limitat
              în trecut.
            </p>
            <p>
              Prin înțelegerea și eliberarea acestor tipare, poți aduce aceste emoții în lumina
              conștienței tale, în prezent. Cu empatie și înțelegere pentru experiențele tale
              trecute, îți poți construi tipare noi și benefice. Acest lucru presupune crearea de
              gânduri și idei noi, care se resimt în corp sub forma unor emoții vibrante, pline de
              energie.
            </p>
            <p>
              Aceste emoții, încărcate de puterea prezentului, acționează ca magnet pentru atragerea
              în viața ta a ceea ce îți dorești cu adevărat. Astfel, schimbarea în viața ta începe
              cu o călătorie în lumea ta interioară, pentru a crea un teren fertil pentru
              transformarea și evoluția ta personală.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
