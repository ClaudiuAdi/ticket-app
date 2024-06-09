import { Header, Link } from '@components';
import Footer from '@components/Footer';

const Page = () => {
  return (
    <main className="overflow-hidden min-h-screen font-universe bg-indigo-900/50 flex flex-col items-center justify-center">
      <Header />
      <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
        <div className="flex flex-col text-center gap-2">
          <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">
            Termeni şi Condiţii
          </p>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Accesarea și utilizarea site-ului{' '}
              <Link href="/" className="font-semibold">
                www.serverofuniverse.ro
              </Link>{' '}
              presupune acceptarea de către dumneavoastră a Termenilor și condițiilor menționate mai
              jos. Pentru evitarea oricăror neînțelegeri, vă recomandăm citirea acestora înainte de
              utilizarea site-ului și plasarea unei comenzi.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Server of the Universe este denumirea comerciala a S.C. BEO STORE S.R.L., persoana
              juridica de nationalitate romana, avand sediul social in Ilfov, Oras Voluntari, Str.
              Sportiv Cătălin Bercu 17, avand numar de ordine in Registrul Comertului J23/2517/2021,
              cod unic de inregistrare fiscala 35181260.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">1. Produse</h2>
            <p>
              Produsele comercializate pe site-ul{' '}
              <Link href="/" className="font-semibold">
                www.serverofuniverse.ro
              </Link>{' '}
              sunt realizate pe baza comenzilor plasate.
            </p>
            <p>
              Ulterior plasării comenzii, veți primi pe e-mail confirmarea rezervării pentru tipul
              de serviciu achiziționat.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">2. Autentificare</h2>
            <p>Pentru a putea plasa o comandă pe site nu este necesar să vă autentificați.</p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">3. Comenzi</h2>
            <p>
              Toate comenzile plasate în zilele lucrătoare (de luni până vineri) până la ora 8:00 AM
              vor fi procesate în aceași zi. Pentru comenzile plasate în weekend, contactarea se va
              face luni dimineață.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">4. Livrare</h2>
            <p>
              Întrucât produsele sunt virtuale, le veți recepționa pe e-mail în termen de două zile
              lucrătoare.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">5. RETURNARE, ANULARE ȘI SCHIMB PRODUSE</h2>
            <p>
              Anularea tranzacțiilor este posibilă în termen de 1 zi lucrătoare din momentul
              plasării comenzii. După scurgerea termenului de anulare, clientul nu va putea modifica
              detaliile unei rezervări.
            </p>
            <p>
              Ulterior anulării unei tranzacții, banca emitentă va debloca suma blocată în contul
              clientului în termen de 1-30 zile, în funcție de politică acesteia.
            </p>
            <p>
              Pentru anularea unei tranzacții, va rugăm să trimiteți un e-mail la adresa:
              contact@serverofuniverse.ro.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">6. CONFIDENȚIALITATE</h2>
            <p>
              Ne angajăm să utilizăm cu atenție datele dumneavoastră personale și să nu le furnizăm
              către terțe părți.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">7. FORȚA MAJORĂ</h2>
            <p>
              Forța majoră trebuie constatată de o autoritate competentă și exonerează Părțile de
              îndeplinirea obligațiilor asumate. Partea care invocă forța majoră are obligația de a
              notifica cealaltă Parte în termen de 5 zile de la producerea situației cu privire la
              acest eveniment și de a lua toate măsurile care îi stau la dispoziție în vederea
              limitării consecințelor.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">8. DISPOZIȚII FINALE</h2>
            <p>
              Ne rezervăm dreptul de a face orice modificări ale acestor Termeni și Condiții, precum
              și orice modificări asupra site-ului, fără a fi necesară vreo notificare prealabilă a
              utilizatorilor{' '}
              <Link href="/" className="font-semibold">
                www.serverofuniverse.ro
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
