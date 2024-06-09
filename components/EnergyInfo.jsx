import React from 'react';

const EnergyInfo = () => {
  return (
    <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
      <div className="flex flex-col text-center gap-2">
        <div className="flex justify-center items-center gap-3">
          <img className="w-4 h-4" src="/images/star.png" alt="star" />
          <h1 className="lg:text-2xl text-lg text-primary font-title">Universe's Guidance</h1>
          <img className="w-4 h-4" src="/images/star.png" alt="star" />
        </div>
        <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">ENERGIE</p>
      </div>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-5 text-gray-300 text-lg">
          <p>
            Orice ființă, plantă sau obiect din Universul nostru material emite continuu lumină și
            informație, formând un câmp energetic invizibil, iar știința a confirmat acest lucru,
            prin dezvoltarea de echipamente capabile să măsoare nivelul de energie al unui loc,
            persoane sau grup de persoane și chiar să fotografieze câmpul luminos care le
            înconjoară.
          </p>
          <p>
            Măsurând emisia de fotoni (particule de lumină) se poate determina dacă o persoană își
            mărește sau își diminuează câmpul său de lumină. Cu cât se emite mai multă lumină, cu
            atât crește energia și forța vitală proprie. S-a dovedit că acest câmp invizibil de
            lumină și informație te influențează atât pe tine cât și pe ceilalți. Cercetări avansate
            au demonstrat că celulele sunt capabile să comunice și la nivel energetic pe lângă
            procesele chimice cunoscute. Energia este o frecvență iar frecvența poartă informație,
            sub formă de gând sau intenție.
          </p>
          <p>
            Corpul tău este înzestrat cu mai mulți centri energetici, fiecare dintre aceștia
            caracterizat de o frecvență proprie, o intenție proprie, glande și hormoni care emit
            procese chimice proprii. Cu cât centrii energetici sunt mai echilibrați și mai
            armonizați, cu atât ești mai liniștit, mai mulțumit și mai împlinit, la un nivel care
            depășește materia și simțurile fizice, la un nivel diferit de percepție a realității și
            a lumii înconjurătoare.
          </p>
          <p>
            Poți învăța să-ți canalizezi energia către ceea ce te interesează, către ceea ce este
            important pentru tine, știind că acolo unde iți îndrepți atenția, acolo se duce și
            energia ta. Îndreaptă-ți atenția către ceea ce vrei să fii, fără a te gândi cum ajungi
            acolo; gândește-te la acest aspect cât de mult poți, pentru a crea ce-ți dorești!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnergyInfo;
