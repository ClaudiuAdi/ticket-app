import React from 'react';

const GdrpInfo = () => {
  return (
    <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
      <div className="flex flex-col text-center gap-2">
        <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">
          Prelucrare a Datelor cu Caracter Personal
        </p>
      </div>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-5 text-gray-300 text-lg">
          <p>
            Începând cu data de 25 mai 2018, devine aplicabil Regulamentul general privind protecția
            datelor cu caracter personal UE 679/2016 (RGPD). Prin intermediul acestuia se dorește
            crearea unui cadru legislativ unitar și uniform pe teritoriul Uniunii Europene, care să
            nu mai necesite măsuri naționale de implementare.
          </p>
          <p>
            Cine este responsabil pentru datele dumneavoastră cu caracter personal și cum îl puteți
            contacta:
          </p>
          <p>
            The server of the universe SRL este operator al datelor dumneavoastră cu caracter
            personal;
          </p>
          <p>
            Pentru mai multe detalii puteți contacta persoanele desemnate cu protecția datelor la
            adresa de email: contact@theserveroftheunvierse.ro
          </p>
        </div>

        <div className="flex flex-col gap-5 text-gray-300 text-lg">
          <h2 className="text-2xl font-bold">Protecția datelor personale</h2>
          <p>
            Conform cerințelor Regulamentului UE 679/2016 pentru protecția persoanelor cu privire la
            prelucrarea datelor cu caracter personal și libera circulație a acestor date, The server
            of the universe SRL administrează în condiții de siguranță și numai pentru scopurile
            prevăzute de lege, datele furnizate de dumneavoastră.
          </p>
          <p>
            Unul dintre principiile cheie în cadrul GDPR este principiul transparenței. Acesta
            impune instituției să furnizeze cetățenilor informații cu privire la modul în care
            utilizează sau procesează datele personale.
          </p>
          <p>
            Pentru a ne alinia obligațiilor de transparență rezultate din GDPR, vă informăm că
            instituția noastră, conform prevederilor legale în vigoare, prelucrează datele
            dumneavoastră cu caracter personal.
          </p>
        </div>

        <div className="flex flex-col gap-5 text-gray-300 text-lg">
          <h2 className="text-2xl font-bold">Scopul în care sunt prelucrate datele personale</h2>
          <p>
            Scopul prelucrării îl constituie realizarea datelor de facturare conform legislației.
          </p>
        </div>

        <div className="flex flex-col gap-5 text-gray-300 text-lg">
          <h2 className="text-2xl font-bold">Date cu caracter personal prelucrate:</h2>
          <ul className="list-disc flex flex-col gap-3 pl-7">
            <li>Nume, prenume</li>
            <li>Telefon</li>
            <li>E-mail</li>
            <li>Adresa completă</li>
            <li>Țară</li>
            <li>Județ, Localitate</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 text-gray-300 text-lg">
          <h2 className="text-2xl font-bold pb-2">
            Care sunt drepturile dumneavoastră în legătură cu datele cu caracter personal:
          </h2>
          <ul className="list-disc flex flex-col gap-3 pl-7">
            <li>
              aveți dreptul de a solicita rectificarea datelor dumneavoastră cu caracter personal,
              în situația în care acestea sunt incorecte sau au intervenit modificări;
            </li>
            <li>
              aveți dreptul de a solicita o copie a înscrisurilor deținute de către The server of
              the universe SRL conțin datele dumneavoastră cu caracter personal;
            </li>
            <li>
              ștergerea datelor cu caracter personal, după expirarea perioadei legale de acordare a
              drepturilor solicitate și acordate;
            </li>
            <li>
              restricționarea utilizării datelor cu caracter personal, în condițiile prevăzute GDPR.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GdrpInfo;
