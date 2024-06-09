import React from 'react';

const StepTwo = ({ children }) => {
  return (
    <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
      <div className="flex flex-col text-center gap-2">
        <div className="flex justify-center items-center gap-3">
          <img className="w-4 h-4" src="/images/star.png" alt="star" />
          <h1 className="lg:text-2xl text-lg text-primary font-title">Universe's Guidance</h1>
          <img className="w-4 h-4" src="/images/star.png" alt="star" />
        </div>
        <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">
          Dragul meu suflet călăuzit de dorințe,
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5 text-gray-300 text-lg">
          <p>
            Universul, cu tot misterul și frumusețea sa, este un loc al schimburilor subtile și al
            legăturilor nevăzute. Cerința ta este ca o notă scrisă pe paginile infinite ale acestui
            Univers cosmic, iar plata în acest context nu este despre bani sau sume materiale.
          </p>
          <p>
            Atunci când alegi să "plătești" această cerință, nu e vorba despre valoarea monetară, ci
            despre valoarea intenției tale. Fiecare plata este ca o picătură de energie cu care tu
            contribui în acest schimb cosmic. Acest act simbolic arată Universului că ești dedicat
            si că investești în ceea ce îți dorești cu adevărat.
          </p>
          <p>
            Aceasta plata de 17 RON devine un semn al angajamentului tău, al faptului că ești
            pregătit să te implici cu inima deschisă în manifestarea dorințelor tale. Plata aceasta
            nu se măsoară în bani, ci în energie și devotament. În schimb, Universul iti va răspunde
            printr-o mantra care te va ajuta sa iti ușurezi calea catre dorinta ta, iti va fi
            alaturi cu semnale subtile, cu coincidențe minunate și cu oportunități neașteptate,
            toate pregătite să te îndrume către ceea ce îți dorești cu atâta pasiune.
          </p>
          <p>
            Astel, nu privi la acest lucru ca la o cheltuială, ci ca la o investiție în tine și în
            visurile tale. Cu fiecare gând, cu fiecare intenție, plătești cu încredere în procesul
            magic al Universului, știind că tot ce dăruiești cu inima deschisă se va întoarce către
            tine multiplicat cu bucurie și împlinire.
          </p>
          <div className="flex flex-col">
            <p>Cu bucurie în suflet și încredere în călătoria ta,</p>
            <p>The server of the Universe</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default StepTwo;
