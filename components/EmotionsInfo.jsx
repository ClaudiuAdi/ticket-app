import React from 'react';

const EmotionsInfo = () => {
  return (
    <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
      <div className="flex flex-col text-center gap-2">
        <div className="flex justify-center items-center gap-3">
          <img className="w-4 h-4" src="/images/star.png" alt="star" />
          <h1 className="lg:text-2xl text-lg text-primary font-title">Universe's Guidance</h1>
          <img className="w-4 h-4" src="/images/star.png" alt="star" />
        </div>
        <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">EMOȚII</p>
      </div>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-5 text-gray-300 text-lg">
          <p>
            În timp ce mintea operează prin gânduri, corpul operează prin trăiri și senzații.
            Întrucât nu există separare între minte, corp și emoții, fiecare emoție este în sine o
            experiență care generează un tipar energetic specific. Ca urmare, se poate spune că
            emoția este o energie în mișcare. Astfel, emoția poate fi văzută mai mult ca o punte de
            legătură între minte și corp, ca un liant între gânduri și senzații, ca un tot din care
            fac parte atât gândurile și ideile din minte, cât și senzațiile și trăirile din corpul
            fizic.
          </p>
          <p>
            Orice emoție implică în egală măsură atât mintea cât și corpul, definind o stare de fapt
            în care se află o persoană, în raport cu sine (lumea interioară) și cu ceilalți (lumea
            exterioară). Plecând de la ideea că emoția este doar o experiență, este important să îi
            vezi caracterul neutru. Energia este neutră, pur și simplu ea este. Devine pozitivă sau
            negativă în funcție de scopul în care o folosești. Mintea gândește, deci mintea judecă
            și clasifică experiențele ca bune sau rele și emoțiile ca pozitive sau negative, în loc
            să rămână la stadiul neutru de pur observator al experienței.
          </p>
          <p>
            Datorită conexiunii dintre minte și corp, ceea ce mintea gândește, corpul exprimă si
            ceea ce corpul exprimă, mintea gândește, se poate crea și perpetua o stare de fapt care
            te ține captiv în programe și tipare energetice neplăcute, nebenefice, unde nu se
            schimbă nimic in lumea ta exterioara, indiferent ce ai face. Acela este momentul în care
            este nevoie de o schimbare în viața ta. Și dacă nu ai găsit o soluție în lumea
            exterioară, în mod cert o vei găsi în lumea ta interioară. Este momentul în care îți vei
            îndrepta atenția către mintea subconștientă, unde vei căuta tiparele vechi, nebenefice
            ție și emoțiile care le-au generat, le vei înțelege si le vei elibera aducându-le în
            conștient, în prezent, unde este ușor și simplu să vezi că nu-ți mai folosesc. În locul
            lor, vei construi tipare noi si benefice ție care să servească atingerii scopurilor și
            obiectivelor tale. Vei construi gânduri și idei noi, pe care le vei simți în corp,
            generând noi emoții purtătoare de energie, de frecvențe și informații care vor atrage
            către tine tot ceea ce ai creat conștient de puterea prezentului.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmotionsInfo;
