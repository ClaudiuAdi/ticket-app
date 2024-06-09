import React from 'react';

const Testiomonials = () => {
  return (
    <section className="flex section flex-col gap-8 sm:px-8 pb-24" id="testimonials">
      <div className="flex flex-col gap-2 items-center pb-4">
        <img className="w-12" src="/images/furnish.webp" alt="star" />
        <p className="md:text-4xl text-3xl text-white font-title">Testimoniale</p>
      </div>
      <div className="lg:grid lg:grid-cols-3 flex flex-col gap-10 text-center w-full">
        <div className="relative flex flex-col">
          <div className="flex flex-col items-center gap-4 border border-stone-500 bg-black/20 md:px-20 md:py-12 p-10 backdrop-blur-lg">
            <i className="fa-solid fa-quote-left text-primary text-3xl"></i>
            <p className="text-gray-300">
              Am fost deosebit de mulțumită de rezultatele obținute. Am primit un răspuns clar și
              complet la întrebările mele și am primit ghidare pentru a rezolva problema cu care mă
              confruntam. Rezultatele pozitive pe care le-am obținut m-au făcut să înțeleg cu
              adevărat valoarea și eficiența platformei.
            </p>
            <div className="-mb-20 w-16 h-16 bottom-16 left-48 rounded-full overflow-hidden">
              <img className="object-cover" src="/images/testimonial.png" alt="star" />
            </div>
          </div>
          <div className="flex flex-col font-universe pt-12">
            <p className="text-primary text-lg">Maria Andronie</p>
            <p className="text-gray-300">București</p>
          </div>
        </div>
        <div className="relative flex flex-col">
          <div className="flex flex-col items-center gap-4 border border-stone-500 bg-black/20 md:px-20 md:py-12 p-10 backdrop-blur-lg">
            <i className="fa-solid fa-quote-left text-primary text-3xl"></i>
            <p className="text-gray-300">
              Recomand cu încredere această platformă tuturor celor care caută ajutor de la
              specialiști online. Experții disponibili aici sunt cu adevărat bine pregătiți și
              dedicati, iar serviciile oferite sunt de cea mai înaltă calitate. Pentru mine, această
              platformă a fost o soluție excelentă și o sursă de sprijin.
            </p>
            <div className="-mb-20 w-16 h-16 rounded-full overflow-hidden">
              <img className="object-cover" src="/images/testimonial2.jpeg" alt="star" />
            </div>
          </div>
          <div className="flex flex-col font-universe pt-12">
            <p className="text-primary text-lg">Andrei Badea</p>
            <p className="text-gray-300">Arad</p>
          </div>
        </div>
        <div className="relative flex flex-col">
          <div className="flex flex-col items-center gap-4 border border-stone-500 bg-black/20 md:px-20 md:py-12 p-10 backdrop-blur-lg">
            <i className="fa-solid fa-quote-left text-primary text-3xl"></i>
            <p className="text-gray-300">
              Vă mulțumesc echipei din spatele acestui site pentru serviciul extraordinar pe care îl
              oferiți. Cu siguranță voi reveni aici în viitor pentru alte nevoi și voi recomanda cu
              entuziasm și altora să profite de resursele valoroase pe care le puneți la dispoziție.
              Procesul de contact a fost ușor și eficient"
            </p>
            <div className="-mb-20 w-16 h-16 rounded-full overflow-hidden">
              <img className="w-16 h-16" src="/images/testimonial3.jpg" alt="star" />
            </div>
          </div>
          <div className="flex flex-col font-universe pt-12">
            <p className="text-primary text-lg">Lorena Bucur</p>
            <p className="text-gray-300">București</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testiomonials;
