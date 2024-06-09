import { Header } from '@components';
import Footer from '@components/Footer';

const Page = () => {
  return (
    <main className="overflow-hidden min-h-screen font-universe bg-indigo-900/50 flex flex-col items-center justify-center">
      <Header />
      <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
        <div className="flex flex-col text-center gap-2">
          <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">
            Politica de Cookie-uri
          </p>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              BEO STORE SRL utilizează cookie-uri. Informațiile prezentate în continuare au scopul
              de a vă aduce la cunoștință mai multe detalii despre plasarea, utilizarea și
              administrarea cookie-urilor utilizate de site-ul serverofuniverse.ro. De asemenea,
              sunt prezente și câteva linkuri utile legate de acest subiect. În cazul în care aveți
              nevoie de mai multe informații ce nu se regăsesc mai jos, ne puteți contacta la:
              contact@serverofuniverse.ro
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Acest website folosește cookie-uri, pentru a furniza vizitatorilor o experiență mult
              mai bună de navigare și servicii adaptate nevoilor și interesului fiecăruia.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">Ce este un cookie?</h2>
            <p>
              Un Internet Cookie (termen cunoscut și ca „browser cookie” sau „HTTP cookie” sau pur
              și simplu cookie) este un fișier de mici dimensiuni, format din litere și numere, care
              va fi stocat pe computerul, terminalul mobil sau alte echipamente ale unui utilizator
              de pe care se accesează Internetul.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">Care sunt avantajele cookie-urilor?</h2>
            <p>
              Un cookie conține informații care fac legătura intre un web-browser (utilizatorul) și
              un web-server anume (website-ul). Daca un browser accesează acel web-server din nou,
              acesta poate citi informația deja stocata și reacționa în consecința. Cookie-urile
              asigura utilizatorilor o experiență plăcută de navigare și susțin eforturile multor
              website-uri pentru a oferi servicii confortabile utilizatorilor: ex - preferințele în
              materie de confidențialitate online, opțiunile privind limba site-ului, coșuri de
              cumpărături sau publicitate relevanta.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">Care este durata de viată a unui cookie?</h2>
            <p>
              Cookie-urile sunt administrate de servere web. Durata de viată a unui cookie poate
              varia semnificativ, depinzând de scopul pentru care este plasat. Unele cookie-uri sunt
              folosite exclusiv pentru o singura sesiune (session cookies) și nu mai sunt reținute
              odată ce utilizatorul a părăsit website-ul și unele cookie-uri sunt reținute și
              refolosite de fiecare data când utilizatorul revine pe acel website (cookie-uri
              permanente). Cu toate acestea, cookie-urile pot fi șterse de un utilizator în orice
              moment prin intermediul setărilor browser-ului.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">
              De ce sunt cookie-urile importante pentru Internet?
            </h2>
            <p>
              Cookie-urile reprezintă punctul central al funcționarii eficiente a Internetului,
              ajutând la generarea unei experiențe de navigare prietenoase și adaptata preferințelor
              și intereselor fiecărui utilizator. Refuzarea sau dezactivarea cookie-urilor poate
              face unele site-uri imposibil de folosit.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <h2 className="text-2xl font-bold">Cum pot opri cookie-urile?</h2>
            <p>
              Dezactivarea și refuzul de a primi cookie-uri pot face anumite site-uri impracticabile
              sau dificil de vizitat și folosit. De asemenea, refuzul de a accepta cookie-uri nu
              înseamnă ca nu veți mai primi/vedea publicitate online.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
