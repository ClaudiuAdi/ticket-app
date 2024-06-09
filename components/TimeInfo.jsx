import React from 'react';

const TimeInfo = () => {
  return (
    <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
      <div className="flex flex-col text-center gap-2">
        <div className="flex justify-center items-center gap-3">
          <img className="w-4 h-4" src="/images/star.png" alt="star" />
          <h1 className="lg:text-2xl text-lg text-primary font-title">Universe's Guidance</h1>
          <img className="w-4 h-4" src="/images/star.png" alt="star" />
        </div>
        <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">
          PREZENT - TRECUT - VIITOR
        </p>
      </div>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-5 text-gray-300 text-lg">
          <p>
            Secretul este unul singur: deși percepem timpul în mai multe ipostaze, trecutul și
            viitorul nostru anulează prezentul.
          </p>
          <p>
            De ce îți spun asta? Pentru că e important să înțelegi că atâta vreme cât continui să
            rămâi captiv într-o stare emoțională dobândita în urma unui eveniment petrecut înainte
            cu câteva zile sau chiar cu câțiva ani, tu trăiești și astăzi în trecut. Așadar, nu
            putem vorbi despre prezent, despre aici și acum, pentru că nu exista cu adevărat pentru
            mintea ta. De ce? Pentru că acum te gândești la ce a fost, fără să vezi ca a trecut deja
            și lași ca ceea ce a fost să influențeze ceea ce va fi.
          </p>
          <p>
            Darul Universului pentru tine este fix momentul prezent, un prezent continuu în care tu
            realizezi că ești în siguranță deplină, ești puternic și capabil să schimbi modul în
            care percepi trecutul, experimentezi prezentul și îți creezi viitorul.
          </p>
          <p>
            Oprește-te un moment, citește încă o data, repeta cu voce tare, dă-ți voie să simți ceea
            ce spui, scrie pe hârtie, dacă ai nevoie, de mai multe ori, până când înțelegi că acum
            și aici trecutul a trecut iar viitorul nu există încă, pentru că ieri a trecut iar mâine
            nu a sosit. Așadar, astăzi, începând chiar de acum, tu poți crea ce va fi mâine. Tu poți
            să aduci schimbarea în viața ta.
          </p>
          <p>
            Alege să fii tu Creatorul, preia puterea trecutului, asumă-ți responsabilitatea totală
            și deplină asupra vieții tale, dorințelor și obiectivelor tale! Poți să faci acest
            lucru! Meriți o viată mai bună! Ai dreptul la fericire, la iubire, abundență și succes!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeInfo;
