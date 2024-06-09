import { Header, Link } from '@components';
import Footer from '@components/Footer';

const Page = () => {
  return (
    <main className="overflow-hidden min-h-screen font-universe bg-indigo-900/50 flex flex-col items-center justify-center">
      <Header />
      <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
        <div className="flex flex-col text-center gap-2">
          <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">
            Politica de Confidenţialitate
          </p>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Conform Legii 677/2001 privind protectia persoanelor cu referire la prelucrarea
              datelor cu caracter personal si libera circulatie a acestor
              date,actualizata,societatea noastra va administra aceste date personale in conditii de
              siguranta si numai in scopurile specificate.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Colectarea acestor date se face cu scopul de a informa clientii despre starea
              comenzilor, evaluarea produselor, a serviciilor si a activitatilor comerciale, de
              marketing, de publicitate, administrare, dezvoltare, de statistica, de urmarire a
              vanzarilor si monitorizare a comportamentului consumatorului.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Completand formularul de creare de cont sau pe cel de comanda cu datele dumneavoastra
              personale, confirmati neconditionat ca aceste date sa fie incluse in baza de date a
              BEO STORE S.R.L. si reprezinta acordul expres al dumneavoastra ca toate aceste data
              personale sa fie utilizate si prelucrate limitat pe teritoriul Romaniei si/sau
              temporar de catre BEO STORE S.R.L., pentru desfasuararea si derularea de activitati
              comerciale, de promovare a serviciilor, de marketing, de publicitate,administrare, de
              dezvoltare, de cercetare de piata, de statistica, de urmarire si monitorizare a
              vanzarilor si comportamentului cumparatorului.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Prin citirea prezentelor Termene si Conditii, ati luat la cunostiinta faptul ca
              drepturile va sunt garantate, respective dreptul la informare, dreptul de acces la
              date, dreptul de interventie, dreptul de opozitie, dreptul de a fi supus unei decizii
              individuale, dreptul de a va adresa justitiei in caz de incalcare a drepturilor
              garantate de Legea 677/2001. Totodata aveti dreptul de a va opune prelucrarii datelor
              d-voastra personale si de a solicita stergerea totala sau partiala a acestora.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Pe baza unei cereri scrise, datate si semnate, expediate pe adresa Federatie Romana de
              Sah, Str. Vasile Conta nr. 16, Sect. 2, Bucureşti {'-'} 020954, va puteti exercita
              urmatoarele drepturi:
            </p>
            <ul>
              <li>Sa interveniti asupra datelor transmise;</li>
              <li>
                Sa va opuneti prelucrarii datelor pentru motive intemeiate si legitime legate de
                ele;
              </li>
              <li>Sa solicitati stergerea datelor, cu exceptia situatiilor prevazute de lege;</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              BEO STORE S.R.L. poate notifica clientii privind ofertele curente prin newsletterurile
              bilunare, felicitari, cupoane cadou sau alte mesaje special.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              BEO STORE S.R.L. nu utilizeaza si nu promoveaza Spam-ul. Orice client care a furnizat
              explicit adresa sa de email pe site-ul{' '}
              <Link href="/" className="font-semibold">
                www.serverofuniverse.ro
              </Link>
              , poate solicita stergerea acesteia din baza noastra de date.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Informatiile solicitate si communicate vor fi utilizate pentru a administra, a
              sprijini si evalua serviciile noastre si a preintampina incalcarea securitatii si a
              legislatiei in domeniu si in vigoare.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Informatiile dumneavoastra cu caracter personal pot fi furnizate catre institutiile
              statului in baza si in limitele prevederilor legale si in baza unor cereri expres
              formulate de catre institutiile statului
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
