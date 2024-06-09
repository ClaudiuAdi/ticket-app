import { Header } from '@components';
import Footer from '@components/Footer';

const sos = () => {
  return (
    <main className="relative min-h-screen bg-indigo-900/70 flex flex-col items-center justify-center font-universe">
      <Header />
      <div className="flex flex-col my-12 md:gap-12 gap-8 bg-white/5 mx-8 rounded-xl backdrop-blur-md md:p-10 px-4 py-8">
        <div className="flex flex-col text-center gap-2">
          <div className="flex justify-center items-center gap-3">
            <img className="w-4 h-4" src="/images/star.png" alt="star" />
            <h1 className="lg:text-2xl text-lg text-primary font-title">Universe's Guidance</h1>
            <img className="w-4 h-4" src="/images/star.png" alt="star" />
          </div>
          <p className="md:text-4xl text-3xl font-semibold text-gray-200 font-title">SOS</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 text-gray-300 text-lg">
            <p>
              Orice om știe cum să trateze un disconfort apărut la nivelul corpului său fizic,
              plecând de la un simplu pansament sau un remediu antiinflamator până la mersul la un
              specialist capabil să prescrie un tratament adecvat.
            </p>

            <p>
              Este important să procedezi în același mod și în cazul unui disconfort emoțional.
              Încetează să neglijezi acele stări sau să le ascunzi de tine sau de cei din jur.
            </p>

            <p>
              Iți recomand cu încredere câteva remedii simple și la îndemână pentru stările tale
              emoționale neplăcute:
            </p>

            <ul>
              <li>
                Ieși din mediul care te copleșește, ieși din casă, mergi la plimbare oriunde simți
                că-ți face plăcere: poți să colinzi pe străzi, în parc, în natură sau prin magazine.
                Observă tot ceea ce întâlnești în cale ca și cum ai vedea pentru prima dată ceea ce
                vezi. Important este să schimbi puțin energia, să-ți schimbi punctul de atenție
                pentru că acolo unde se îndreaptă atenția, se îndreaptă și energia ta.
              </li>
              <li>
                Ascultă muzică, lasă-te purtat de note, observa ce simți, unde simți, cum începe și
                cum se termină o piesă muzicală.
              </li>
              <li>
                Citește câteva rânduri sau câteva pagini dintr-o carte chiar dacă știi că ai mai
                citit-o cândva. Vei observa că, de fiecare dată, vei descoperi ceva nou printre
                rânduri.
              </li>
              <li>
                Îmbrățișează pe cineva, partenerul, copilul, animalul de companie, un copac ... și
                dacă nu ai pe nimeni lângă tine, îmbrățișează-te pe tine. Dacă tu nu te iubești, cum
                să te iubească lumea?
              </li>
              <li>
                Vizionează un film amuzant, o comedie, citește glume și râzi, râzi în fiecare zi.
                Râsul relaxează întregul corp, contribuie la reducerea hormonilor de stres și la
                creșterea imunității organismului, reglează circulația sângelui, elimină furia și
                durerea și consumă calorii.
              </li>
              <li>
                Ocupă-te cu ceva creativ, orice îți face plăcere să faci cu mâinile tale: scrie,
                desenează, pictează, gătește ceva de plăcere. Mișcă-te, dansează, fă sport, coase
                sau orice altceva îți vine în minte creativ. Meditează, contemplă o imagine, un
                tablou sau o fotografie. Vei vedea cum se așază liniștea și ceea ce părea să fie o
                catastrofă devine o provocare.
              </li>
              <li>
                Creează-ți un panou sau un jurnal al dorințelor, nelimitat, scrie, privește și
                postează acolo toate dorințele tale, oricât de stupide sau de imposibil de realizat
                ți-ar părea. Observă cu atenție persoanele care au ceea dorești să ai tu, stai cât
                de mult se poate în preajma lor, fizic sau mental. Imaginează-ți că ești cu ei,
                simte ca ei, trăiește ca ei, fă ce fac ei. Ascultă-le poveștile, vorbește cu ei în
                gând, creează conexiuni energetice benefice ție.
              </li>
              <li>
                Pune-ți emoțiile la lucru, căutând în fiecare zi să-ți arăți iubirea, bucuria sau
                recunoștința pentru un aspect al vieții tale sau al tău.{' '}
              </li>
            </ul>

            <p>
              Oricare dintre remediile de mai sus este capabil să schimbe ceva în tine, în mintea ta
              și în corpul tău iar energia ta se va schimba. Pe măsură ce vei observa schimbările de
              stare, oricât de mici ar fi la început, vei dori să faci mai multe schimbări în viața
              ta. Vei schimba obiceiuri, trasee și preocupări zilnice. Vei începe să fii mai atent
              cu tine și cu adevăratele tale nevoi, vei deveni mai liber și mai creativ, mai
              mulțumit și mai împlinit și atunci vor începe să apară noi oportunități prin care se
              vor împlini scopurile și obiectivele tale.
            </p>

            <p>
              Amintește-ți că tot ce ai învățat, ai învățat prin repetiție pentru că așa învață
              mintea și mai apoi corpul. Repetă ceea ce-ți place, de multe ori, în gândurile tale și
              în imaginația ta, așa cum repetai o poezie în copilărie, până când vei observa că a te
              simți bine devine un obicei, un program nou și sănătos pentru mintea ta și pentru
              corpul tău.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default sos;
